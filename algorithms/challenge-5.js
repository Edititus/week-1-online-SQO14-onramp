
  /* filterList([1, 2, 'a', 'b']) to return [1, 2]
  filterList([1, 'a', 'b', 0, 15]) to return [1, 0, 15]
  filterList([1, 2, 'aasf', '1', '123', 123]) to return [1, 2, 123]*/

  function filterList(arr) {
    var numberArray = arr.filter(x => typeof(x) === 'number');
    console.log(numberArray)
    // the array.filter returns any item in the array that is
    // greater a number
  }

  filterList([1, 2, 'aasf', '1', '123', 123])
