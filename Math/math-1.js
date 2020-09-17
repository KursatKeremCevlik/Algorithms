/* ÖĞRENCİNİN YAZILI ORTALAMASINI BULMA */

let counter = 0;
const myStudents = [
  {
    name: 'Kürşat Kerem',
    surname: 'Çevlik',
    year: 16,
    exams: [
      mat = 90,
      science = 85,
      turkish = 92,
      music = 100,
      history = 80
    ],
    exam_result: []
  },
  {
    name: 'Ayça',
    surname: 'Çevlik',
    year: 11,
    exams: [
      mat = 85,
      science = 85,
      turkish = 90,
      music = 100,
      history = 70
    ],
    exam_result: []
  }
]

for (var i = 0; i < myStudents.length; i++) {
  let veri = myStudents[i];
  let result = 0;
  for (var j = 0; j < veri.exams.length; j++) {
    let exam_data = veri.exams[j];
    result += exam_data;
  }
  veri.exam_result.push(result);
}

console.log(myStudents);