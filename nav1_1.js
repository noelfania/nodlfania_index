import {Layout} from "./jsController/layout.js";

document.addEventListener('DOMContentLoaded', ()=>{
    const mainArea = document.getElementById('main');


// 1

var test1 = new Layout(
    // item area
    `1.itemitemitemitemitemitemitemitemitemitemitemitemitemitemi`
   +`<br>`
   +`2.temitemitemitemitemitemitemitemitemitemitemitem`
   +`<br>`
   +`3.itemitemitemitemitemitemitemitemitemitemitemitemitemitemitem`
    ,
    // caption area 
    `1.figure : caption_caption_caption_caption_caption_caption`
    +`<br>`
    +`_caption_caption_caption`
    +`<br>`
    +`_caption_caption_caption_caption`
)
    var testhtml1 = test1.getfigureTag();

    mainArea.appendChild (testhtml1);




// 2
var test2 = new Layout(
// item area
`1.itemitemitemitemitemitemitemitemitemitemitemitemitemitemi
2.temitemitemitemitemitemitemitemitemitemitemitem
3.itemitemitemitemitemitemitemitemitemitemitemitemitemitemitem`
,
// caption area 
`2.figure : caption_caption_caption_caption_caption_caption_caption_caption_caption
_caption_caption_caption_caption`
)
        var testhtml2 = test2.getfigureTag();
    
        mainArea.appendChild (testhtml2);
    

// 3
var test3 = new Layout(
// item area
`1.itemitemitemitemitemitemitemitemitemitemitemitemitemitemi
2.temitemitemitemitemitemitemitemitemitemitemitem
3.itemitemitemitemitemitemitemitemitemitemitemitemitemitemitem`
,
// caption area 
`3.figure : caption_caption_caption_caption_caption_caption_caption_caption_caption
_caption_caption_caption_caption`
)
var testhtml3 = test3.getfigureTag();

mainArea.appendChild (testhtml3);







});