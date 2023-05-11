"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    arr.push()
  } else if (D == 0) {
    let X = -b / (2 * a);
    arr.push(X)
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2)
  }
  return arr
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let payMonth = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  let totalPayment = (payMonth * countMonths).toFixed(2);
  return Number(totalPayment);
}

