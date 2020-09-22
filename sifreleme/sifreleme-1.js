const rules = [
  {name: ' ', value: 0},
  {name: 'A', value: 1},
  {name: 'a', value: 2},
  {name: 'B', value: 3},
  {name: 'b', value: 4},
  {name: 'C', value: 5},
  {name: 'c', value: 6}
]
const str = 'A a B b C c'

const newArray = []

const chars = str.split('');

for(var i = 0; i < chars.length; i++){
  for(var k = 0; k < rules.length; k++){
    if(chars[i] == rules[k].name){
      newArray.push(rules[k].value);
    }
  }
}

console.log(newArray);