function ready()
{
  var TIMER_VALUE = 5;
  var NUMBER_OF_WRAPPERS = 3;
  var STEP_TO_SCROLL = -20;
  
  function scroll(stepToScroll, currentOffset, endOffset) 
  {
    var timer;
    var yOffsetStart = window.pageYOffset;
    if ((stepToScroll > 0 && currentOffset < endOffset) || (stepToScroll < 0 && currentOffset > endOffset))
    {
      window.scrollTo(0, currentOffset);
      currentOffset = currentOffset + stepToScroll;
      timer = setTimeout(function(){scroll(stepToScroll, currentOffset, endOffset)}, TIMER_VALUE);
    }
    else
    {
      clearTimeout(timer);
      window.scrollTo(0, endOffset);
    };  
  };
  
  var upIcon = document.getElementById("upIcon");
  upIcon.onclick = function()
  {
    var timer;
    var curOffset = window.pageYOffset;
    scroll(STEP_TO_SCROLL, curOffset, 0);
  };
   
  window.onscroll = function() 
  {
    var labelElement = document.getElementById("labelToDisplayUpIcon");
    var labelElementOffset = labelElement.getBoundingClientRect();
    var minOffset = labelElementOffset.bottom + document.documentElement.clientHeight;   
    if (window.pageYOffset > minOffset)
    {
      upIcon.style.display = "block";
    }
    else
    {
      upIcon.style.display = "none";
    }
  };
}
document.addEventListener("DOMContentLoaded", ready);