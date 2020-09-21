/* HARITADA UYGUN ÇIKIŞA ULAŞMA */
// 0 => Boş alanlar
// 1 => Duvarlar
// 2 => Giriş
// 3 => Çıkış

// Gideceği yolu "5" ile işaretleyecektir

const map = [
  [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

let myDatas = [
  two = {
    col: 0,
    row: 0
  },
  three = {
    col: 0,
    row: 0
  }
]

let two_finish;
let three_finish;

for(var i = 0; i < map.length; i++){
  for(var j = 0; j < map[i].length; j++){
    if(map[i][j] == 2){
      myDatas[0].col = j;
      myDatas[0].row = i;
      two_finish = true;
    }
    if(map[i][j] == 3){
      myDatas[1].col = j;
      myDatas[1].row = i;
      three_finish = true;
    }
  }
}

// Functions
let finish = 0;
const lookRight = (finish) => {
  if(map[myDatas[0].row][myDatas[0].col + 1] == 0){
    myDatas[0].col += 1;
  }else{
    finish = 1;
  }
}
const lookLeft = (finish) => {
  if(map[myDatas[0].row][myDatas[0].col - 1] == 0){
    myDatas[0].col -= 1;
  }else{
    finish = 1;
  }
}
const lookUp = (finish) => {
  if(map[myDatas[0].row - 1][myDatas[0].col] == 0){
    myDatas[0].row -= 1;
  }else{
    finish = 1;
  }
}
const lookDown = (finish) => {
  if(map[myDatas[0].row + 1][myDatas[0].col] == 0){
    myDatas[0].row += 1;
  }else{
    finish = 1;
  }
}

if(two_finish && three_finish){
  let a = 0;
  while(a < 8){
    if(myDatas[0].col < myDatas[1].col){
      lookRight();
      if(finish){
        if(myDatas[0].row < myDatas[1].row){
          lookUp();
        }else{
          lookDown();
        }
      }
    }else{
      lookLeft();
      if(finish){
        if(myDatas[0].row < myDatas[1].row){
          lookUp();
        }else{
          lookDown();
        }
      }
    }
    a += 1;
  }
}

// [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
// [2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
console.log(myDatas[0]);