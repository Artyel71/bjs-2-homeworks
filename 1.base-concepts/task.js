"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  } else if (d === 0) {
    arr[0] = -b/2*a;
  }
    else {
    arr = []
  }
return arr;
}

"use strict"
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let S = amount - contribution;
  let P = percent/100/12;
  let n = countMonths;
  let oneMonthPayment = S * (P + (P / (((1 + P)**n) - 1)));
  let totalMortgage = (oneMonthPayment * countMonths).toFixed(2);
  return parseFloat(totalMortgage);
  
}
