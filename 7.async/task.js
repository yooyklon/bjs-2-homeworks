class AlarmClock {
 constructor() {
  this.alarmCollection = [];
  this.timerId = null;
 }

 addClock(time, callback, id) {

  if (!id) {
      throw new Error('error text');
  }
  if (this.alarmCollection.find((item) => item.id == id)) {
    console.error('Ошибка! звонок с таким id уже существует');
    return;
  }
  this.alarmCollection.push({id, time, callback});
 }

 removeClock(id) {
   if (this.alarmCollection.find((item) => item.id == id)) {
     this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id == id), 1);
     return true;
   } else {
     return false;
   }
 }

 getCurrentFormattedTime() {
   let date = new Date();
   let result = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getHours() : date.getMinutes());
   return result;
 }

 start() {
  if (!this.timerId) {
      this.timerId = setInterval(() => {
        for(let i = 0; i < this.alarmCollection.length; i++) {
          this.checkClock(this.alarmCollection[i]);
        }
    }, 1000);
  }
 }

 stop() {
  if (this.timerId) {
    clearInterval(this.timerId);
    this.timerId = null;
  }
 }

 printAlarms() {
   this.alarmCollection.forEach(item => console.log(`${item.id} ${item.time}`));
 }
 clearAlarms() {
   this.stop();
   this.alarmCollection.length = 0;
 }

 checkClock(obj) {
  if (this.getCurrentFormattedTime() == obj.time) {
    obj.callback();
   }
 }
}



function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock('01:19', () => console.log('Пора вставать!'), 1);
  alarm.addClock('01:20', () => console.log('Пора вставать!'), 2);
  alarm.removeClock(2);
  alarm.addClock('01:21', () => console.log('Пора вставать!'), 3);
  alarm.clearAlarms();
  alarm.printAlarms();
  alarm.addClock('01:21', () => console.log('Вставай а то проспишь!'), 1);
  alarm.printAlarms();
  alarm.start();
}

testCase();
