/* sumMix([9, 3, '7', '3']) to return 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) to return 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) to return 41*/

function sumMix(arr) {
	var totall = 0;
  for (var i in arr) {
    totall += parseInt(arr[i]);
  }
  return totall
}

sumMix([9, 3, '7', '3'])