function ready()
{
  var TIMER_VALUE = 200;
  
  function switchDisplaying(elem) 
  {
    var timer;
    elem.style.transition = "all 0.2s linear";
    if (elem.style.display == "block")
    {
      elem.style.opacity = "0";
      timer = setTimeout(function(){elem.style.display = "none"}, TIMER_VALUE);
      collapseButton.innerHTML = "SHOW MORE";
    }
    else
    {
      elem.style.display = "block";
      timer = setTimeout(function(){elem.style.opacity = "1"}, TIMER_VALUE);
      collapseButton.innerHTML = "SHOW LESS";
    };    
  };

  var collapseButton = document.getElementById("showmoreButton"); 
  collapseButton.onclick = function() 
  {
    var collapsingContainer = document.getElementById("showmoreContainer");
    switchDisplaying(collapsingContainer);
  }
}

document.addEventListener("DOMContentLoaded", ready);