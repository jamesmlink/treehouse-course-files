//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times


var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide Hints
$("form span").hide();

function passwordEvent (){
  //find out if pw is valid
  if($password.val("length") > 8){
    //hide hint if valid
    $password.next().hide();
  } else {
    //else show it
    $password.next().show();
  }
};

function confirmPasswordEvent (){
  //find out if match
  if($password.val() === $confirmPassword.val()) {
  //hide hint if matched
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  //else show hint
  }
};

//when event happens on pw input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
