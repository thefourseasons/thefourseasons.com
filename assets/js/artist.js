$(function() {
  $('#artist_type').on('change', function (e) {
      var optionSelected = $("option:selected", this);
      var valueSelected = this.value;
      $("#specify_other").css('display', 'none');
      $("#artist_type_other").prop('required', false);
      if(valueSelected != '-1') {
        $('#artist_type option[value="-1"]').remove();
      }
      if(valueSelected === 'Other'){
        $("#specify_other").css('display', 'block');
        $("#artist_type_other").prop('required', true);
      }
  });
  $('#specify_other').on('input',function(e){
      $('#artist_type').value = $('#specify_other').value;
     });
 });
var submitForm = function(){
  if(validateForm($("form")[0])){
        $.ajax({
          url: 'https://fourseasons.pythonanywhere.com/workwithus/artist',
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
                showMessage("You have successfully registered as an Artist");

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
  $dobRegEx = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  $emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!($dobRegEx.test($("#artist_dob")[0].value))){
    showError('Date of Birth should be of dd-mm-yyyy format');
    return false;
  }
  if(!($emailRegEx.test($("#artist_email")[0].value))){
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
  $message.html(message);
   window.location.href = "#page-wrapper";
};
