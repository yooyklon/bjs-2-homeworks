'use strict';

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
    if ('marks' in this) {
      this.marks.push(mark);
    } else {
      this.marks = [];
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...marks) {
  if ('marks' in this) {
    for(let i = 0; i < marks.length; i++) {
      this.marks.push(marks[i]);
    }
  } else {
    this.marks = [];
    for(let i = 0; i < marks.length; i++) {
      this.marks.push(marks[i]);
    }
  }
}

Student.prototype.getAverage = function() {
  let result = this.marks.reduce(function(sum, element) {
    return sum + element;
  }, 0);
  return result / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}