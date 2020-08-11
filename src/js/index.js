import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const save = document.querySelector('.text-editor__save--js');
const load = document.querySelector('.text-editor__load--js');
const text = document.querySelector('.text-editor__textarea');

save.addEventListener('click', () => { 
    localStorage.setItem('text', text.value);
});

load.addEventListener('click', () => {
    text.value = localStorage.getItem('text');
});