// Problem: User goes to dead end when clicking image (poor experience)
// Solution: Create an overlay with large image - called a LIGHTBOX


// PLAN

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image
$overlay.append($image);

//Add caption
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

//Capture click event on link to gallery image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href")
  // Update overlay with image in link
  $image.attr("src", imageLocation);

  // Show overlay
  $overlay.show();

  // Add caption under image from alt attribute
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});


// When overlay is clicked, hide it
$overlay.click(function(){
  $overlay.hide();
});
