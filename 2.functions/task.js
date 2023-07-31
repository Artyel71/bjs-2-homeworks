" use strict"

function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	const initialValue = 0;
	const sumArray = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue);

	let avg = parseFloat((sumArray / arr.length).toFixed(2));

	return {
		min,
		max,
		avg
	};
}



function summElementsWorker(...arr) {
	if (arr.length) {

		const initialValue = 0;
		const sumElements = arr.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			initialValue);
		return sumElements;
	} else {
		return 0;
	}
}


function differenceMaxMinWorker(...arr) {
	if (arr.length) {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		return max - min;
	} else {
		return 0
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length) {
		let sumEvenElements = 0;
		let sumOddElements = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElements = sumEvenElements + arr[i]
			} else {
				sumOddElements = sumOddElements + arr[i]
			}
		}
		let differ = sumEvenElements - sumOddElements;
		return differ;
	} else {
		return 0
	}
}


function averageEvenElementsWorker(...arr) {
	if (arr.length) {
		let sumEvenElements = 0;
		let countEvenElements = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElements = sumEvenElements + arr[i]
				countEvenElements++

			}
		}
		let avg = sumEvenElements / countEvenElements++
		return avg
	} else {
		return 0
	}
}



const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}