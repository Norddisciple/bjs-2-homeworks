function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((acc, curr) => acc + curr, 0);


  let avg = Number((sum/ arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {

  if (arr.length == 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {

  if (arr.length == 0) {
    return 0;
  }

  Math.min(...arr);
  Math.max(...arr);

  let difference = Math.max(...arr) - Math.min(...arr);;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  let difference = sumEvenElement - sumOddElement;

  return difference;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  let difference = sumEvenElement / countEvenElement;

  return difference;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    //func(...arrOfArr);
    
    const resultFunc = func(...arrOfArr[i]);

    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }

  return maxWorkerResult;
}
