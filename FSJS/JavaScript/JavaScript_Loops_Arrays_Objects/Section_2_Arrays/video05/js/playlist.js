var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList (list) {
  var listHTLM = '<ol>';
  for (i = 0; i < playList.length ; i+=1) {
    listHTLM += '<li>' + list[i] + "</li>";
  }
  listHTLM += "</ol>";
  print(listHTLM);
}

printList(playList);
