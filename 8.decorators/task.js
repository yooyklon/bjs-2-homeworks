let add = (a, b, c) => a + b + c;

function cachingDecoratorNew(func) {
  let cache = {};
  
    function wrapper(...args) {
      let hashe = args.join(',');
  
      if (cache[hashe]) {
        console.log('Из кэша: ' + cache[hashe]);
        return 'Из кэша: ' + cache[hashe];
      }
        let result = func(...args);
        cache[hashe] = result;
        console.log('Вычисляем: ' + result);
        let keys = Object.keys(cache);
        if (keys.length == 6) {
         let key = keys[0];
         delete cache[key];
         keys.splice(0, 1);
        }
        return 'Вычисляем: ' + result;
    }
  
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

function debounceDecorator2(func, ms) {
  let timer;

  function wrapper(...args) {

   func.count = func.count + 1;
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
  func.count = 0;
  return wrapper;
}

