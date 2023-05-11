function getArrayParams(...arr) {

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i += 1) {
    func(...arrOfArr[i])
  }

  const resultFunc = func;

  if (resultFunc > maxWorkerResult) {
    maxWorkerResult = resultFunc;
  }
  return makeWork;
}
