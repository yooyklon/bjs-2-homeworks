function parseCount(num) {
 num = parseInt(num);
 if (isNaN(num)) {
  throw new Error('Невалидное значение');
 }
 return num;
}

function validateCount(num) {
 try {
   return parseCount(num);
 } catch(e) {
  return e;
 }
}

class Triangle {
 constructor (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
    if ((a + b < c || (a + c) < b || (c + a) < b || (c + b) < a)) {
     throw new Error('Треугольник с такими сторонами не существует');
    }
 }

 getPerimeter() {
   return this.a + this.b + this.c;
 }

 getArea() {
   let p = this.getPerimeter() / 2;
   return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
 }
}

function getTriangle(a, b, c) {
 try {
  return new Triangle(a, b, c);
 } catch {
  return {
   getArea() {
    return 'Ошибка! Треугольник не существует';
   },
   getPerimeter() {
    return 'Ошибка! Треугольник не существует';
   }
  }
 }
}