'use strict';
const log = console.log;

// only navigate own html
const NavBtnUrl = new Map([
    ['Category1',
        [
        'test$nav1_1.html',
        'LINK$nav1_2.html',
        ]
    ],
    ['Script',
        [
        'MS/Batch$nav2_1.html',
        'UNIX/Bash$nav2_2.html',
        ]
    ],
    ['Category3',
        [    
        'nav3_1$nav3_1.html',
        'nav3_2$nav3_2.html',
        ]
    ],
])

const Index = {
    init(){
        log('DOMContentLoaded :: ', 'app.js invoked');
        //window.Index = Index;

        // Parse From otherSites
        {
            var uri =''
            //+'https://cors-anywhere.herokuapp.com/' //TEST
            +'https://developer.mozilla.org/en-US/docs/Web/API/Headers';
            var h = new Headers()
            h.append('Access-Control-Allow-Origin','*')
            
            var req=new Request(uri,{
                headers:h,
                method:'get',
                mode:'cors'
                
            })
            fetch(req)
            .then((response)=>{
                return (response.text())
            })
            .then((res)=>{
                //log(res)
                var s = new DOMParser().parseFromString(res,'text/html')
                log(s)
            })

        }

        var navArea = document.getElementById('navArea');
        //navArea.appendChild();
        var NavBtnUrls=[];
        NavBtnUrl.forEach((v,i,a)=>{
            NavBtnUrls.push(...v)
           // console.log(NavBtnUrls)
            var div = document.createElement('div');
            div.setAttribute('class','category');
            var span = document.createElement('span');
            span.setAttribute('class','title');
            span.innerText=i;
           // console.log(i)

            div.appendChild(span);

            v.forEach((vArray,i,a)=>{
                var divInner = document.createElement('div');
                divInner.setAttribute('class','nav-btn');
                var spanInner = document.createElement('span');
                spanInner.innerText=vArray.split('$')[0];
                //console.log(vArray.split('$')[0])
                divInner.appendChild(spanInner)
                div.appendChild(divInner);
            })
            navArea.appendChild(div);
        })


        // link nav-btn with onclick
        var arrNavBtn = document.getElementsByClassName('nav-btn')
        Array.from(arrNavBtn).forEach((navBtn,i)=>{
            navBtn.addEventListener('click',function (event){
                let url = `${NavBtnUrls[i].split('$')[1]}`;
                console.log(url)
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

        //open initial page
      //  arrNavBtn[0].click();
        arrNavBtn[2].click();
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
