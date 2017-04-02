$(document).ready(function(){
  if(getUrlParameter('gallery') == undefined){
    loadData('gallery.json')
  }
  else{
    loadData(getUrlParameter('gallery') + ".json")
  }

});

$(window).resize(function() {
  if($(window).width() > 739){
    $.each($(".imgDesc"), function(i, field){
      $(field).removeClass("mobile")
    })
  }
  else{
    $.each($(".imgDesc"), function(i, field){
      $(field).addClass("mobile")
    })  }

});

var loadData = function loadData(json){

  $.getJSON(json, function(result){
        $("#title").append(result.title);
        $.each(result.images, function(i, field){
          console.log(i, field);
          var html = "<div class=\"4u  6u(xsmall)\"><span class=\"image fit\"><img src=\""+ field.thumbnail+"\" alt=\""+ field.title+"\" /></span></div>";
          if(field.link){
            var pClass = "imgDesc";
            if($(window).width() < 739){
                pClass = "imgDesc mobile";
            }
          html = "<div class=\"4u  6u(xsmall)\" onclick=\"openGallery('"+field.link+"')\"><span class=\"image fit\"><img src=\""+ field.thumbnail+"\" alt=\""+ field.title+"\" /><p class=\""+pClass+"\">"+field.title+"</p></span></div>"
          }
          else if(field.image){
            html = "<div class=\"4u  6u(xsmall)\"><a href=\""+field.image+"\" data-lightbox=\""+getUrlParameter('gallery')+"\"><span><img src=\""+ field.thumbnail+"\" alt=\""+ field.title+"\" style=\"border-radius: 4px;display: block; margin: auto;\"/></span></a></div>"
          }
            $("#images").append(html)

        });
    });
};

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
