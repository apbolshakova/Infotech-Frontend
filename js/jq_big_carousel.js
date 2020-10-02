function ready()
{
  var SIZE_CHANGE_TIMER_VALUE = 100;
  var AUTO_SWITCH_SLIDE_TIMER_VALUE = 2000;
  
  var slides = $(".carousel_container .carousel_items").children(".carousel_item");
  var indicators = $(".carousel_container .navigation_container").children(".indicator");
  var width = $(".carousel_container .carousel_item").width();
  var numberOfSlides = slides.length;
  var curSlide = 0;
  var autoSlideTimer;
  
  $(slides[curSlide]).addClass("showed");
  
  $(".carousel_container").mouseover(function()
  {
    $(".carousel_container .carousel_navigation").css("visibility", "visible");
  });
  
  
  $(".carousel_container").mouseout(function()
  {
    $(".carousel_container .carousel_navigation").css("visibility", "hidden");
  });
  
  function fixHeight()
  {
    var height = $(".carousel_container").height();
    $(".carousel_items").css("height", height);
  }

  
  fixHeight();
  $(indicators[curSlide]).addClass("selected");
  $(window).resize(function() 
  {
    setInterval(function()
    {
      fixHeight();
    }, SIZE_CHANGE_TIMER_VALUE)
  });
 
  
  function changeSlide(prevSlide, curSlide)
  {
    $(slides[prevSlide]).removeClass("showed").addClass("hidden");
    $(slides[curSlide]).addClass("showed").removeClass("hidden");
    $(".navigation_container .selected").removeClass("selected"); 
    $(indicators[curSlide]).addClass("selected");
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }
  
 
  $(".carousel_container .indicator").click(function()
  {
    var prevSlide = curSlide;
    curSlide = $(this).index();
    changeSlide(prevSlide, curSlide);
  });
    
  
  $(".right_icon_container").click(function()
  {    
    var prevSlide = curSlide;
    curSlide = (curSlide < numberOfSlides - 1) ? curSlide + 1 : 0;
    changeSlide(prevSlide, curSlide);
  });

  
  $(".left_icon_container").click(function()
  {    
    var prevSlide = curSlide;
    curSlide = (curSlide > 0) ? curSlide - 1 : numberOfSlides - 1;
    changeSlide(prevSlide, curSlide);
  });
  
  startAutoSlide();
  function startAutoSlide() 
  {
    autoSlideTimer = setInterval(function()
    {
      var prevSlide = curSlide;
      curSlide = (curSlide < numberOfSlides - 1) ? curSlide + 1 : 0;
      changeSlide(prevSlide, curSlide);
    }, AUTO_SWITCH_SLIDE_TIMER_VALUE)
  };
}

document.addEventListener("DOMContentLoaded", ready);