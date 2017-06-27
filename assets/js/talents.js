jQuery(document).ready(function($) {
  $.ajax({
    url: 'https://fourseasons.pythonanywhere.com/talents/?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json) {
      console.log(json);
      $(json).each(function(index) {
        $container = $('<section class="3u 6u(medium) 12u$(xsmall)"><span class="avatar"><img src="https://fourseasons.pythonanywhere.com' + this.profile_photo+'" alt="" /></span><h3>'+ this.name+'</h3><p>'+this.talent+'</p></section>');
        $social_list= $('<ul class="social list-inline"></ul>');
        $(this.social).each(function(index) {
          $social_list.append('<li><a href="'+this.url+'"><i class="fa '+getIcon(this.url)+'"></i></a></li>');
        });
        $container.append($social_list);
        $("#talents_container").append($container);

      });
    }
  });
});

function getIcon(url){
  if(url.includes("facebook")){
    return "fa-facebook";
  }
  if(url.includes("instagram")){
    return "fa-instagram";  
  }
  if(url.includes("twitter")){
    return "fa-twitter";
  }
  if(url.includes("500px")){
    return "fa-500px";
  }
  if(url.includes("deviantart")){
    return "fa-deviantart";
  }
  if(url.includes("github")){
    return "fa-github";
  }
  
  else{
    return "fa-globe";
  }
  
}
