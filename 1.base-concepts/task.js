"use strict"
function solveEquation(a, b, c) {
  const result = [];

  const discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant == 0) {
    const X = -b / (2 * a);
    result.push(X)
  } else if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result.push(x1, x2)
  }
  return result
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;
  const payMonth = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  let totalPayment = (payMonth * countMonths).toFixed(2);
  
 if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
  return false;
 } else {
  totalPayment = Number(totalPayment);
  return totalPayment;
 }
}

