/*--permite darle funcionalidad al menu,crear scrip en index,crear la clase mostrar en el diseño del menu css*/

let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar')
});