$(document).ready(function() {
loadDetails();
});

function loadDetails(){
  $.ajax({
    url: 'https://fourseasons.pythonanywhere.com/events/?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json) {
      $(json).each(function(index) {
        $("#dropdown").append('<option value="1">'+this.name+'</option>');

      });
    }
  });
}


function sendRegistration(form){
  var inst = $('[data-remodal-id=modal]').remodal();
  form = $("form")[0];
  regData = {};
  regData.registrant_first_name = form.first_name.value;
  regData.registrant_last_name = form.last_name.value;
  regData.registrant_mail = form.email.value;
  regData.registrant_phone = form.phone.value;
  regData.event_name = form.dropdown.selectedOptions[0].label;
  regData.event_id = 'JES';
  regData.registrar_name = 'The Four Seasons';
  regData.registrar_id = 'TFS';
  regData.payment_done = false;

  regData = JSON.stringify(regData);
  console.log(regData);
  $.ajax({
    url: 'https://fourseasons.pythonanywhere.com/tickets',
    type: 'POST',
    crossDomain: true,
    data: regData,
    dataType: 'json',
    success: function(json) {
          $("#popupTitle").html("Registeration Successful");
          $("#popupDesc").html('<a href="'+json.ticket_url+'" target=_blank>Download Ticket</a>');
          inst.open();
          console.log(json);
      },
    error: function(json){
      console.log(json);
    }

  });
}
