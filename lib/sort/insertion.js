module.exports = insertionsort;

/**
 * Pseudocode: An informal high-level description a computer program or algorithm.
 * (This won't compile! Implement the below functions using JavaScript)
 * for i ← 1 to length(A) - 1
 *     j ← i
 *     while j > 0 and A[j-1] > A[j]
 *         swap A[j] and A[j-1]
 *         j ← j - 1
 */

/**
 * Modifies the array to be in ascending order (smallest to largest).
 * This is an in-place sorting implmentation, that means it modifies the array.
 * Rather than returning a sorted copy of the array.
 * @param  {[Number]} array An array of numbers.
 */
function insertionsort (array) {
  for(var j = 1; j < array.length; j++) {
    var key = array[j];
    var i = j - 1; 
    while(i >= 0 && key < array[i]) { 
      array[i+1] = array[i]; //sets new index
      i = i - 1;
    }
  }
  return array;
}

/**
 * Swap the elements at index i and j in an array.
 * @param  {Number} i     First index
 * @param  {Number} j     Second index
 * @param  {[Number]} array An array of numbers
 */
function swap(i, j, array) {

}
