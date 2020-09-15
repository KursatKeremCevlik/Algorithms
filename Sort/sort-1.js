/* İSTENİLEN VERİYİ BULMA */

// Birini hangi verileri ile ariyacaksınız ?
const toSearch = [
  [
    'name', ['Oğuz']
  ]
]
// Hangi kısımlarını bulmak istiyorsunuz ?
const toFind = [
  'name',
  'surname',
  'year',
  'no'
]

// Datas
let myArr = [
  {
    name: 'Kürşat Kerem',
    surname: 'Çevlik',
    year: 16,
    no: 332,
  }, {
    name: 'Ayça',
    surname: 'Çevlik',
    year: 11,
    no: 843,
  }, {
    name: 'Oğuz',
    surname: 'Çevlik',
    year: 47,
    no: 561,
  }, {
    name: 'Hürü',
    surname: 'Çevlik',
    year: 42,
    no: 513,
  }, {
    name: 'Ali Serdar',
    surname: 'Çevlik',
    year: 20,
    no: 430,
  }
];

let name_value;
let surname_value;
let year_value;
let no_value;

for (var i = 0; i < toSearch.length; i++) {
  if (toSearch[i][0] == 'name') {
    // Control name
    for (var j = 0; j < toFind.length; j++) {
      if (toFind[j] == 'name') {
        // Find name
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].name == toSearch[i][1]) {
            name_value = myArr[k].name;
          }
        }
      }
      if (toFind[j] == 'surname') {
        // Find surname
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].name == toSearch[i][1]) {
            surname_value = myArr[k].surname;
          }
        }
      }
      if (toFind[j] == 'year') {
        // Find year
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].name == toSearch[i][1]) {
            year_value = myArr[k].year;
          }
        }
      }
      if (toFind[j] == 'no') {
        // Find no
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].name == toSearch[i][1]) {
            no_value = myArr[k].no;
          }
        }
      }
    }
  }
  if (toSearch[i][0] == 'surname') {
    // Control surname
    for (var j = 0; j < toFind.length; j++) {
      if (toFind[j] == 'name') {
        // Find name
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].surname == toSearch[i][1]) {
            name_value = myArr[k].name;
          }
        }
      }
      if (toFind[j] == 'surname') {
        // Find surname
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].surname == toSearch[i][1]) {
            surname_value = myArr[k].surname;
          }
        }
      }
      if (toFind[j] == 'year') {
        // Find year
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].surname == toSearch[i][1]) {
            year_value = myArr[k].year;
          }
        }
      }
      if (toFind[j] == 'no') {
        // Find no
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].surname == toSearch[i][1]) {
            no_value = myArr[k].no;
          }
        }
      }
    }
  }
  if (toSearch[i][0] == 'year') {
    // Control year
    for (var j = 0; j < toFind.length; j++) {
      if (toFind[j] == 'name') {
        // Find name
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].year == toSearch[i][1]) {
            name_value = myArr[k].name;
          }
        }
      }
      if (toFind[j] == 'surname') {
        // Find surname
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].year == toSearch[i][1]) {
            surname_value = myArr[k].surname;
          }
        }
      }
      if (toFind[j] == 'year') {
        // Find year
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].year == toSearch[i][1]) {
            year_value = myArr[k].year;
          }
        }
      }
      if (toFind[j] == 'no') {
        // Find no
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].year == toSearch[i][1]) {
            no_value = myArr[k].no;
          }
        }
      }
    }
  }
  if (toSearch[i][0] == 'no') {
    // Control no
    for (var j = 0; j < toFind.length; j++) {
      if (toFind[j] == 'name') {
        // Find name
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].no == toSearch[i][1]) {
            name_value = myArr[k].name;
          }
        }
      }
      if (toFind[j] == 'surname') {
        // Find surname
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].no == toSearch[i][1]) {
            surname_value = myArr[k].surname;
          }
        }
      }
      if (toFind[j] == 'year') {
        // Find year
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].no == toSearch[i][1]) {
            year_value = myArr[k].year;
          }
        }
      }
      if (toFind[j] == 'no') {
        // Find no
        for (var k = 0; k < myArr.length; k++) {
          if (myArr[k].no == toSearch[i][1]) {
            no_value = myArr[k].no;
          }
        }
      }
    }
  }
}

console.log(name_value, surname_value, year_value, no_value);