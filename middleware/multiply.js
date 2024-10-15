function arrayMultiplication(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error('Arrays must have the same length');
    }
  
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] * arr2[i]);
    }
    return result;
}


module.exports = arrayMultiplication