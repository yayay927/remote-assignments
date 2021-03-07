function max(numbers){
  // your code here, for-loop method preferred
  let maxNumber = numbers[0];
  for (i=0, i<this.length, i++){
    if (numbers[i] > maxNumber){
      maxNumber=numbers[i];
    }
  }
}
return maxNumber;

max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7
