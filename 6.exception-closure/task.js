function parseCount(num) {
 num = parseInt(num);
 if (isNaN(num)) {
  throw new Error('Невалидное значение');
 }
 return num;
}

function validateCount(num) {
 try {
   num = parseCount(num);
 } catch(e) {
  return e;
 }
 return num;
}

class Triangle {
 constructor (a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
    if ((this.a + this.b < c || (this.a + this.c) < this.b || (this.c + this.a) < this.b || (this.c + this.b) < this.a)) {
     throw new Error('Треугольник с такими сторонами не существует');
    }
 }

 getPerimeter() {
   this.P = this.a + this.b + this.c;
   return this.P;
 }

 getArea() {
   let p = this.P / 2;
   this.S = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
   return this.S;
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