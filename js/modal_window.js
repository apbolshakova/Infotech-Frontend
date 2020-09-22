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
    }
    else
    {
      elem.style.display = "block";
      timer = setTimeout(function(){elem.style.opacity = "1"}, TIMER_VALUE);
    };    
  };
  
  var openModalWindowButtonList = document.getElementsByClassName("open_modal_window");
  let modalWindowButtonArr = Array.from(openModalWindowButtonList);
  var closeModalWindowButton = document.getElementById("closeModalWindowButton");
  modalWindowButtonArr.push(closeModalWindowButton);
  modalWindowButtonArr.forEach(function(openButton, i)
  {
    var modalWindow = document.getElementById("modalWindow");
    modalWindowButtonArr[i].onclick = function()
    {
      switchDisplaying(modalWindow);
    };                           
  });
}
document.addEventListener("DOMContentLoaded", ready);