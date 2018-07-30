import './domConf';
export default function menu() {
  // simpliest menu example
  function toggleClassMenu() {
    if(!myMenu.classList.contains('menu--animatable')) {   
      myMenu.classList.add('menu--animatable'); 
      if(!myMenu.classList.contains('menu--visible')) { 
        window.DOM.hideScroll();  
        myMenu.classList.add('menu--visible');
        oppMenu.classList.add('active');
      } else {
        myMenu.classList.remove('menu--visible');
        oppMenu.classList.remove('active');
        window.DOM.showScroll();    
      }
    }
  }
  function preventClick(event) {
    event.stopPropagation();
  }
  function OnTransitionEnd() {
    myMenu.classList.remove('menu--animatable');
  }

  let myMenu = document.querySelector('.menu');
  let oppMenu = document.querySelector('.menu-icon');
  let menuContent = document.querySelector('.app-menu');
  myMenu.addEventListener('transitionend', OnTransitionEnd, false);
  // using passive events
  oppMenu.addEventListener('click', toggleClassMenu, window.DOM.passiveOrNot());
  myMenu.addEventListener('click', toggleClassMenu, window.DOM.passiveOrNot());
  menuContent.addEventListener('click', preventClick, false);
}
