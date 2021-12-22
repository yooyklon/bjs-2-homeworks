class AlarmClock {
 constructor() {
  this.alarmCollection = [];
  this.timerId;
 }

 addClock(time, callback, id) {

    if (!id) {
      throw new Error('error text');
    }
  for (let i = 0; i < this.alarmCollection.length; i++) {
    if (this.alarmCollection[i].id == id) {
      console.error('Ошибка! звонок с таким id уже существует');
      return;
    }
  }
  this.alarmCollection.push({id: id, time: time, callback: callback});
 }

 removeClock(id) {
   for(let i = 0; i < this.alarmCollection.length; i++) {
     if (this.alarmCollection[i].id === id) {
       this.alarmCollection.splice(i, 1);
       return true;
     }
     return false;
   }
 }

 getCurrentFormattedTime() {
   let date = new Date();
   let result = date.getHours() + ':' + date.getMinutes();
   return result;
 }

 start() {
  if (!this.timerId) {
    for(let i = 0; i < this.alarmCollection.length; i++) {
      this.timerId = setInterval(() => {
        checkClock(this.alarmCollection[i]);
    }, 1000);
    }
  } else {
    clearInterval(this.timerId);
  }
 }

 stop() {
  if (this.timerId) {
    clearInterval(this.timerId);
  }
 }

 printAlarms() {
   this.alarmCollection.forEach(item => console.log(`${item.id} ${item.time}`));
 }
}

function checkClock(obj) {
  let date = new Date();
  let result = date.getHours() + ':' + date.getMinutes();
  if (result == obj.time) {
    obj.callback();
   }
}
