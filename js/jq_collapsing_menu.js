function ready()
{
  var ANIMATION_TIME = 200;
  var MAX_DISPLAYING_WIDTH = 1120;
  
  function switchDisplaying(elem, speed) 
  {
    if (elem.css("display") == "block")
    {
      $(".menu_icon").removeClass("open");
      elem.hide(speed);   
    }
    else
    {
      $(".menu_icon").addClass("open");
      elem.show(speed); 
    }
  };

  $(".menu_icon").click(function()
  {
    switchDisplaying($(".navbar_menu"), ANIMATION_TIME)
  });
  
  $(window).resize(function() 
  {
    if($(window).width() > MAX_DISPLAYING_WIDTH)
    {
      $(".navbar_menu").css("opacity", "1").css("display", "inline-block");
    }
    else
    {
      $(".menu_icon").removeClass("open");
      $(".navbar_menu").hide(1);
    }
  });
}
document.addEventListener("DOMContentLoaded", ready);