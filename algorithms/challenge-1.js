
/* countTruthy([6, 3, 0, 30, 7])
countTruthy(['', 3, 0, 30, 7])
countTruthy(['', 0, 0, undefined, 7]) */

function countTruthy(arr) {
    var Totcount = arr.filter(x => x > 0).length;
    return Totcount
    // the array.filter returns any item in the array that is
    // greater than 0
  }
  
  countTruthy([6, 3, 0, 30, 7])