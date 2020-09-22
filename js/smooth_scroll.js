function ready()
{
  var TIMER_VALUE = 5;
  var NUMBER_OF_WRAPPERS = 3;
  var STEP_TO_SCROLL = 20;
  
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

  var allMenuItemsList = document.getElementsByClassName("menu_item");
  let allMenuItemsArr = Array.from(allMenuItemsList);
  var menuItemsForScrollArr = allMenuItemsArr.slice(0, NUMBER_OF_WRAPPERS);
  menuItemsForScrollArr.forEach(function(menuItem, i)
  {
    menuItemsForScrollArr[i].onclick = function()
    {
      var wrappers = document.getElementsByClassName("wrapper");
      var wrapperOffset = wrappers[i].getBoundingClientRect().top;
      var curOffset = window.pageYOffset;
      scroll(STEP_TO_SCROLL, curOffset, wrapperOffset);
    };                                   
  });
}
document.addEventListener("DOMContentLoaded", ready);