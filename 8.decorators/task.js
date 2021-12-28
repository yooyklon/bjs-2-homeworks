let add = (a, b, c) => console.log(a + b + c);

function cachingDecoratorNew(func) {
  let cache = {};

  function wrapper(...args) {
    let hashe = args.join(',');

    if (cache[hashe]) {
      console.log('Из кэша: ' + cache[hashe]);
      return 'Из кэша: ' + cache[hashe];
    } else {
      let result = func(...args);
      cache[hashe] = result;
      console.log('Вычисляем: ' + result);
      wrapper.history.push(args);
      if (wrapper.history.length == 6) {
        let key = wrapper.history[0].join(',');
        delete cache[key];
        wrapper.history.splice(0, 1);
      }
      return 'Вычисляем: ' + result;
    }
  }
  wrapper.history = [];
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer;

 function wrapper(...args) {

  if (timer) {
   clearTimeout(timer);
   timer = setTimeout(() => {
    func.call(this, ...args);
   }, ms);
  } else {
   func(...args);
   timer = setTimeout(() => {
    func.call(this, ...args);
   }, ms);
  }
 }
 return wrapper;
}

function debounceDecorator2(func) {
  let timer;

  function wrapper(...args) {

   wrapper.count = wrapper.count + 1;
   if (timer) {
    clearTimeout(timer);
    timer = setTimeout(() => {
     func.call(this, ...args);
    }, ms);
   } else {
    func(...args);
    timer = setTimeout(() => {
     func.call(this, ...args);
    }, ms);
   }
  }
  wrapper.count = 0;
  return wrapper;
}