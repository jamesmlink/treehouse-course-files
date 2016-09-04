var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomColorNumber () {
  return Math.floor(Math.random() * 256 );
}

for (i=0; i<400; i += 1) {
  red = randomColorNumber();
  green = randomColorNumber();
  blue = randomColorNumber();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  console.log(html);
}

document.write(html);
