
var submitForm = function(){

  $.ajax({
    url: 'http://fourseasons.pythonanywhere.com/workwithus/volunteer',
    type: 'POST',
    crossDomain: true,
    data: new FormData($("form")[0]),
    cache: false,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(json) {
        showMessage("You have successfully registered as a Volunteer");
      },
    error: function(json){
      showMessage("Registration Failed");
    }
  });
  showMessage('Registering...');
};

var showMessage = function(message){
  $message = $("#message");
  $message.css('display', 'block');
  $message.html(message);
};
