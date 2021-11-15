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
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);

  if (percent > 60 || percent < 1) {
    return 'Пожалуйста введите процентную ставку от 1 до 60';
  } else if (contribution < 0 || contribution > amount) {
    return 'Пожалуйчта введите корректный первоначальный взнос!';
  } else if (amount <= 0) {
    return 'Пожалуйчта введите корректную сумму кредита!';
  }

  amountBody = amount - contribution;
  totalDate = new Date(date);
  current = new Date();
  months = (totalDate.getFullYear() - current.getFullYear())*12 + (totalDate.getMonth() - current.getMonth());
  monthlyPay = amountBody * (percent/(100 * 12) + (percent/(100 * 12) / (((1 + percent/(100 * 12)) ** months) - 1)));
  totalAmount = (monthlyPay * months);

  return Number(totalAmount.toFixed(2));
}