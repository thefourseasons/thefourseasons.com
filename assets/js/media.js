$(document).ready(function(){
  if(getUrlParameter('gallery') === undefined){
    $.ajax({
      url: 'https://fourseasons.pythonanywhere.com/media/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json){
        $("#title").append("Gallery") ;
        $(json).each(function(index){
          console.log(this);
          console.log(this.thumbnail);          
            var pClass = "imgDesc";
            if($(window).width() < 739){
                pClass = "imgDesc mobile";
            }
          var html = "<div class=\"4u  6u(xsmall)\" onclick=\"openGallery('"+this.name+"')\"><span class=\"image fit\"><img src=\""+ this.thumbnail+"\" alt=\""+ this.name+"\" /><p class=\""+pClass+"\">"+this.name+"</p></span></div>";
        
          
            $("#horizontal").append(html);
        });
      }
    });
  }
  else{
    $.ajax({
      url: 'https://fourseasons.pythonanywhere.com/media/?format=json&event='+getUrlParameter('gallery'),
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json){
        console.log(json);
         $("#title").append(getUrlParameter('gallery'));
        $(json).each(function(index, object){ 
          html = "<div class=\"4u  6u(xsmall)\"><a href=\""+object.url+"\" data-lightbox=\""+getUrlParameter('gallery')+"\"><span class=\"image fit\"><img src=\""+ object.thumbnail+"\" alt=\""+ object.name+"\" style=\"border-radius: 8px;display: block; margin: auto;\"/></span></a></div>";
          if(object.width > object.height){
            $("#horizontal").append(html);
          }
          else{
            $("#vertical").append(html);
          }
        });
      }
    });
  }

});

$(window).resize(function() {
  if($(window).width() > 739){
    $.each($(".imgDesc"), function(i, field){
      $(field).removeClass("mobile");
    });
  }
  else{
    $.each($(".imgDesc"), function(i, field){
      $(field).addClass("mobile");
    });  }
    
    $("#photos img").css('width', '100% !important');
});

var openGallery = function openGallery(gallery){
window.location.href = "?gallery="+gallery;
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
