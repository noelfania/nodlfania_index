'use strict';
const log = console.log;

const NavBtnUrl =['ifr1','ifr2','ifr3','ifr4','ifr5','ifr6','ifr7','ifr7','ifr8','ifr9','ifr10',]

const Index = {
    init(){
        log('DOMContentLoaded :: ', 'app.js invoked');
        //window.Index = Index;

        // link nav-btn with onclick
        var arrNavBtn = document.getElementsByClassName('nav-btn')
        Array.from(arrNavBtn).forEach((navBtn,i)=>{
            navBtn.addEventListener('click',function (event){
                let url = `${NavBtnUrl[i]}.html`;
                let btnArea = document.getElementsByClassName('nav-btn')[i];
                return Index.openPage.call(null, url, btnArea, event);
            })
        })

        //link title with onclick
        var arrTitle = document.getElementsByClassName('title');
        Array.from(arrTitle).forEach((title,i)=>{
            title.addEventListener('click',function (event){
                return Index.clickTitleForMobile.call(null, event);
            })
        })

        Index.openPage(`${NavBtnUrl[0]}.html`, document.getElementsByClassName('nav-btn')[0]);
    },
    clickTitleForMobile(event){
        //initiate all class
        var allNavBtn = document.getElementsByClassName("nav-btn");
        Array.from(allNavBtn).forEach((v)=>{
            v.classList.remove("title_clicked_and_nav-btn_visible")
        })

        var invisible = event.target.parentNode.getElementsByClassName("nav-btn");
        Array.from(invisible).forEach((v)=>{
            v.classList.toggle("title_clicked_and_nav-btn_visible")
        })
    }
    ,
    openPage(url, btnArea, event){
        event ?  event.preventDefault() : null ;

        Array.prototype.forEach.call(document.getElementsByClassName('nav-btn'),(v)=>{
            v.classList.remove('nav-btn-clicked');
            v.classList.remove("title_clicked_and_nav-btn_visible")
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
