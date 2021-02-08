'use strict';
const log = console.log;

window.addEventListener('DOMContentLoaded',()=>{
    log('DOMContentLoaded :: ', 'index.js invoked')
    openPage("ifr1.html", document.getElementsByClassName('nav-btn')[0]);

   
});

function openPage(url, btnArea, event){
    event ?  event.preventDefault() : null ;
    Array.prototype.forEach.call(document.getElementsByClassName('nav-btn'),(v)=>{
        v.classList.remove('nav-btn-clicked');
    });
    btnArea.classList.add('nav-btn-clicked');
    var mainContent = document.getElementById('main-content');
    mainContent.innerText='';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src',url);
    mainContent.appendChild(iframe);
}