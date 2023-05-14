"use strict"
function solveEquation(a, b, c) {
  const result = [];

  const D = Math.pow(b, 2) - 4 * a * c;

  if (D == 0) {
    const X = -b / (2 * a);
    result.push(X)
  } else if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result.push(x1, x2)
  }
  return result
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;
  const payMonth = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  let totalPayment = (payMonth * countMonths).toFixed(2);
  
 if (Number.isNaN(totalPayment)) {
  return false;
 } else {
  totalPayment = Number(totalPayment);
  return totalPayment;
 }
}

