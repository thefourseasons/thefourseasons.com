
var submitForm = function(){
  if(validateForm())
  {
    $.ajax({
      url: 'http://fourseasons.pythonanywhere.com/workwithus/sponsor',
      type: 'POST',
      crossDomain: true,
      data: new FormData($("form")[0]),
      cache: false,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: function(json) {
        $("#register").addClass("animated bounceOutUp");
          $("#register").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            
            $("#register").css('display', 'none');
            showMessage("You have successfully registered as a Sponsor");
          });
          
        },
      error: function(json){
        if(json.responseJSON === "ALREADY REGISTERED"){
          showMessage("A registration with same details has already been done");          
        }
        else showMessage("Registration Failed");
      }
    });
    showMessage('Registering...');
  }
};
var validateForm = function(form){
  //Add validation params here:
  //Test 1: DOB format mathces dd-mm-yyyy
  $emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!($emailRegEx.test($("#sponsor_email")[0].value))){
    showError('Invalid Email Input');
    return false;
  }
  
    return true;
};
var showMessage = function(message){
  $message = $("#message");
  $message.css('display', 'block');
  $message.html(message);
};
var showError = function(message){
  $message = $("#message_error");
  $message.css('display', 'block');
  window.location.href = "#page-wrapper";
  $message.html(message);
};
var showPackageInfo =function(){
  $package = $("#package")[0].value;
  if($package === '-1') showError('Choose a package to view its info');
  else{
    var win = window.open('packages.html?package=' + $package, '_blank');
    win.focus();
  }
};
