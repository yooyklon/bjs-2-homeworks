"use strict";

function solveEquation(a, b, c) {
  let x1;
  let x2;
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (a == 0) {
    console.log('Ошибка, a = 0 недопустимое значение!');
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  } else if (d == 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
    return arr;
  } else if (d < 0) {
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let amountBody;
  let monthlyPay;
  let totalDate;
  let current;
  let months;
  let interestRate;
  percent = parseInt(percent);
  interestRate = percent / (100 * 12);
  contribution = parseInt(contribution);
  amount = parseInt(amount);

  if (Number.isNaN(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "test"';
  } else if (Number.isNaN(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "test"';
  } else if (Number.isNaN(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "test"';
  }

  amountBody = amount - contribution;
  totalDate = new Date(date);
  current = new Date();
  months = (totalDate.getFullYear() - current.getFullYear())*12 + (totalDate.getMonth() - current.getMonth());
  monthlyPay = amountBody * (interestRate + (interestRate / (((1 + interestRate) ** months) - 1)));
  totalAmount = (monthlyPay * months);

  return Number(totalAmount.toFixed(2));
}
let x = calculateTotalMortgage('10', '0', '50000', '11.16.2022');
console.log(x);