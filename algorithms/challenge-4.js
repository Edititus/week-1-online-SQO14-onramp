/* calculateGrade([80, 80, 70]) to return 'A'
calculateGrade([19, 5, 42, 2, 77]) to return 'F'
calculateGrade([59, 80, 40, 2, 77]) to return 'E'
calculateGrade([89, 50, 40, 90, 77]) to return 'D' */



function calculateGrade(arr) {
	var totall = 0;
  var lenOfArray = arr.length;
  for (var i in arr) {
    totall += arr[i];
  }
  var score = totall/lenOfArray
  
  if(score > 89) {
   	return 'A'
  } else if (score > 79) {
  	return 'B'
  } else if (score > 69) {
   	return 'C'
  } else if (score > 59) {
   	return 'D'
  } else if (score > 49) {
   	return 'E'
  } else {
  	return 'F'
  }
}

calculateGrade([80, 80, 70])
