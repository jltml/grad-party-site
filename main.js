import './style.css'
import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.us';
var cleave = new Cleave('.cleave-phone', {
    phone: true,
    phoneRegionCode: 'US',
});

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
