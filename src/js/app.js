import './lib/domConf';
import menu from './lib/menu';

// async() => {
//   $('#app').append('<p>adaasdkajlsdjalkajlkdjasda</p>');
//   hello();
// };
document.addEventListener('DOMContentLoaded',() => {
  // get scrollbar width
  window.DOM.getScrollWidth();
  window.DOM.checkPassive();
  console.log(window.DOM.passiveSupported);
  menu();
  
});
