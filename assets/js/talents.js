jQuery(document).ready(function($) {
  $.ajax({
    url: 'https://fourseasons.pythonanywhere.com/talents/?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json) {
      $(json).each(function(index) {
        $("#talents_container").append('<section class="3u 6u(medium) 12u$(xsmall)"><span class="avatar"><img src="https://fourseasons.pythonanywhere.com' + this.profile_photo+'" alt="" /></span><h3>'+ this.name+'</h3><p>'+this.talent+'</p></section>');

      });
    }
  });
});
