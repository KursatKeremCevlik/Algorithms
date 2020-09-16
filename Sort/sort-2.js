/* KÜÇÜKTEN BÜYÜĞE || BÜYÜKTEN KÜÇÜĞE SIRALAMA ALGORİTMASI */

// Sıralanacak sayılar
const Numbers = [3, 14, 5, 9, 4, 8, 15 ,6, 13, 7, 0, 1, 2, 12, 10, 11];

let counter = 0;

while(0 < 1){
  for(var i = 0; i < Numbers.length; i++){
    if(counter){
      if(Numbers[i] < Numbers[i-1]){
        moveArray(Numbers, i, i-1);
        console.log(Numbers);
      }
    }
    counter++;
  }
}

// Change array position function
function moveArray (arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while ((k--) + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
  return arr;
}