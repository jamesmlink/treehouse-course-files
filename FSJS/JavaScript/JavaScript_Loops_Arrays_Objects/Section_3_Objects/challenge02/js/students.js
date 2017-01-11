var students = [
  {name:"James", track:"JavaScript", achievements:1, points:20},
  {name:"Abby", track:"iOS", achievements:2, points:20},
  {name:"Noa", track:"Python", achievements:3, points:20},
  {name:"Lottie", track:"Ruby", achievements:4, points:20},
  {name:"Bob", track:".NET", achievements:5, points:20},
  {name:"Charlotte", track:"Git", achievements:6, points:20}
];

var html = "";

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

  for (i = 0; i < students.length; i += 1) {
    html += "<h2> Student: " + students[i].name + "</h2>";
    html += "<p> Track: " + students[i].track + "</p>";
    html += "<p> Points: " + students[i].points + "</p>";
    html += "<p> Achievements: " + students[i].achievements + "</p>";
  }

  print(html);
