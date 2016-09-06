// Problem - menu looks bad in smaller browser widths and devices
// Solution - hide text links and swap them out with differnt nav

// Create a select and append-to menu

var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);

  // Create options
  var $option = $("<option></option>");

  //deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected",true);
  }

  //with value href= link
  $option.val($anchor.attr("href"));

  //text = link text
  $option.text($anchor.text());

  //append to select box
  $select.append($option);
});

//bind change listener to select


//on click go to select button
$select.change(function(){
  window.location = $select.val();
});
