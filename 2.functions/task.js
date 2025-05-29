function checkingForArrayElements(...arr) {
    if (arr.length === 0) {
        return 0;
    }
}

function getArrayParams(...arr) {
    checkingForArrayElements();
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
    let avg = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    avgBeforeFormatting = sum / arr.length;
    avg = Number(avgBeforeFormatting.toFixed(2));
    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    checkingForArrayElements();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    /* checkingForArrayElements(); */
    if (arr.length === 0) {
        return 0;
    }
    let maxWorker = Math.max(...arr);
    let minWorker = Math.min(...arr);
    return maxWorker - minWorker;
}

function differenceEvenOddWorker(...arr) {
    checkingForArrayElements();
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    /* checkingForArrayElements(); */
    if (arr.length === 0) {
        return 0;
    }
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        const WorkerResult = func(...arrOfArr[i]);
        if (WorkerResult > maxWorkerResult) {
            maxWorkerResult = WorkerResult;
        }
    }
    return maxWorkerResult;
}