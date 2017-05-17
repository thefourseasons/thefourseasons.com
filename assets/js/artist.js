$(function() {
  console.log('test');
  $('#artist_type').on('change', function (e) {
      console.log('change');
      var optionSelected = $("option:selected", this);
      var valueSelected = this.value;
      if(valueSelected != '-1') {
        $('#artist_type option[value="-1"]').remove();
      }
      if(valueSelected === 'other'){
        $("#specify_other").css('display', 'block');
      }
  });
  $('#specify_other').on('input',function(e){
      $('#artist_type').value = $('#specify_other').value;
     });
 });
var submitForm = function(){
  
  $.ajax({
    url: 'http://fourseasons.pythonanywhere.com/workwithus/artist',
    type: 'POST',
    crossDomain: true,
    data: new FormData($("form")[0]),
    cache: false,
    contentType: false,
    processData: false,
    dataType: 'json',
    success: function(json) {
        showMessage("You have successfully registered as an Artist");
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
