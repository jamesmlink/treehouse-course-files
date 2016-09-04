var html = '';
var rgbColor;

function randomColorNumber () {
  return Math.floor(Math.random() * 256 );
}

function randomRGB () {
  var color = 'rgb(';
  color += randomColorNumber() + ',';
  color += randomColorNumber() + ',';
  color += randomColorNumber() + ')';
  return color;
}

for (i=0; i<400; i += 1) {
  rgbColor = randomRGB();
  html += '<div style="background-color:' + rgbColor + '"></div>';
  console.log (html);
}

document.write(html);
