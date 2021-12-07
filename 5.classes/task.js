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
 }

 setSubject(subjectName) {
  this.subject = subjectName;
 }

 addMark(mark, subjectName) {
  if (mark < 1 || mark > 5) {
   console.log('Ошибка, оценка должна быть от 1 до 5');
   return;
  }
  if (subjectName in this) {
   this[subjectName].push(mark);
  } else {
   this[subjectName] = [];
   this[subjectName].push(mark);
  }
 }

 addMarks(subjectName, ...marks) {
  if (subjectName in this) {
   for(let i =0; i < marks.length; i++) {
    this[subjectName].push(marks[i]);
   }
  } else {
   this[subjectName] = [];
   for(let i = 0; i < marks.length; i++) {
    this[subjectName].push(marks[i]);
   }
  }
 }

 getAverage(...subject) {
  
 }

 getAverageBySubject(subject) {
  let result = this[subject].reduce(function(sum, element) {
   return sum + element;
  }, 0);
  return result / this[subject].length;
 }

 exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
 }
}