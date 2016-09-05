var message = '';
var student;
var searchName;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (searchName !== "end"){
  message = '';
  searchName = prompt("Type a student's name to see info, or type end to quit.");
  searchName = searchName.toLowerCase();
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if(student.name.toLowerCase() === searchName) {
      message += '<h2>Student: ' + student.name + '</h2>';
      message += '<p>Track: ' + student.track + '</p>';
      message += '<p>Points: ' + student.points + '</p>';
      message += '<p>Achievements: ' + student.achievements + '</p>';
      console.log(message);
      print(message);
    }
  }
}
