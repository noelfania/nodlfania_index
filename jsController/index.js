'use strict';
const log = console.log;

const NavBtnUrl =['ifr1','ifr2','ifr3','ifr4','ifr5','ifr6','ifr7','ifr7','ifr8','ifr9','ifr10',]

const Index = {
    init(){
        log('DOMContentLoaded :: ', 'app.js invoked');
        //window.Index = Index;
        var arrNavBtn = document.getElementsByClassName('nav-btn')
        Array.from(arrNavBtn).forEach((navBtn,i)=>{
            navBtn.addEventListener('click',function (event){
                let url = `${NavBtnUrl[i]}.html`;
                let btnArea = document.getElementsByClassName('nav-btn')[i];
                return Index.openPage.call(null, url, btnArea, event);
            })
        })

        Index.openPage("ifr1.html", document.getElementsByClassName('nav-btn')[0]);
    },
    openPage(url, btnArea, event){
        event ?  event.preventDefault() : null ;
        Array.prototype.forEach.call(document.getElementsByClassName('nav-btn'),(v)=>{
            v.classList.remove('nav-btn-clicked');
            v.parentNode.getElementsByClassName('title')[0].classList.remove('nav-btn-clickedForMobile');
        });
        btnArea.classList.add('nav-btn-clicked');
        btnArea.parentNode.getElementsByClassName('title')[0].classList.add('nav-btn-clickedForMobile');
        var mainContent = document.getElementById('main-content');
        mainContent.innerText='';
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src',url);
        mainContent.appendChild(iframe);
    }
};

document.addEventListener('DOMContentLoaded',Index.init);
