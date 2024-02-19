//import Template from './templates/Template.js';
 //console.log('hola');
//import './styles/main.css'
//import './styles/var.styl'

// uso de alias
import Template from '@templates/Template.js';
import '@styles/main.css'
import '@styles/var.styl'



(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
