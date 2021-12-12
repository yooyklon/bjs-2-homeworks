class PrintEditionItem {
 constructor (name, releaseDate, pagesCount) {
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this._state = 100; 
  this.type = null;
 }

 set state(num) {
  if (num < 0) {
   this._state = 0;
  } else if (num > 100) {
   this._state = 100;
  } else {
   this._state = num;
  }
 }

 get state() {
  return this._state;
 }

 fix() {
  this.state = this.state * 1.5;
 }
}

class Magazine extends PrintEditionItem {
 constructor(name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.type = 'magazine';
 }
}

class Book extends PrintEditionItem {
 constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.author = author;
  this.type = 'book';
 }
}

class NovelBook extends Book {
 constructor(name, author, releaseDate, pagesCount) {
  super(name, author, releaseDate, pagesCount);
  this.type = 'novel';
 }
}

class FantasticBook extends Book {
 constructor(name, author, releaseDate, pagesCount) {
  super(name, author, releaseDate, pagesCount);
  this.type = 'fantastic';
 }
}

class DetectiveBook extends Book {
 constructor(name, author, releaseDate, pagesCount) {
  super(name, author, releaseDate, pagesCount);
  this.type = 'detective';
 }
}

class Library {
 constructor(name) {
  this.name = name;
  this.books = [];
 }

 addBook(book) {
  if (book.state > 30) {
   this.books.push(book);
  }
 }

 findBookBy(type, value) {
  for (let i = 0; i < this.books.length; i++) {
   if (this.books[i][type] == value) {
    return this.books[i];
   }
  }
  return null;
 }

 giveBookByName(bookName) {
  for (let i = 0; i < this.books.length; i++) {
   if (this.books[i].name == bookName) {
    let result = this.books[i];
    this.books.splice(i, 1);
    return result;
   }
  }
  return null;
 }
}

class Student {
 constructor(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
 }

 setSubject(subjectName) {
  this.subject = subjectName;
 }

 // addMark(mark, subjectName) {
 //  if (mark < 1 || mark > 5) {
 //   console.log('Ошибка, оценка должна быть от 1 до 5');
 //   return;
 //  }
 //  if (subjectName in this) {
 //   this[subjectName].push(mark);
 //  } else {
 //   this[subjectName] = [];
 //   this[subjectName].push(mark);
 //  }
 // }

 addMark(mark, subjectName) {
  let index;
  if (mark < 1 || mark > 5) {
   console.log('Ошибка, оценка должна быть от 1 до 5');
   return;
  }
  index = this.marks.findIndex(element => subjectName in element);
  if (index != -1 && !isNaN(index)) {
   this.marks[index][subjectName].push(mark);
  } else {
   this.marks.push({[subjectName]: [mark]});
  }
 }

 addMarks(subjectName, ...marks) {
  let index;
  index = this.marks.findIndex(element => subjectName in element);
  if (index != -1 && !isNaN(index)) {
   for (let i = 0; i < marks.length; i++) {
    this.marks[index][subjectName].push(marks[i]);
   }
  } else {
    this.marks.push({[subjectName]: [...marks]});
  }
 }

 getAverage() {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
   sum += this.getAverageBySubject(Object.keys(this.marks[i]).join(''));
  }
  return +(sum / this.marks.length).toFixed(3);
 }

 getAverageBySubject(subject) {
  let sum;
  let index;
  for (let i = 0; i < this.marks.length; i++) {
   if (subject in this.marks[i]) {
    index = i;
    sum = this.marks[i][subject].reduce(function(sum, element) {
     return sum + element;
    }, 0);
   }
  }
  return sum / this.marks[index][subject].length;
 }

 exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
 }
}