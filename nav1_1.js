import { Layout, Title$Figure } from "./jsController/layout.js";

document.addEventListener('DOMContentLoaded', () => {
    const mainArea = document.getElementById('main');


    // 1

    var test1 = new Layout(
        // item area
        `1.itemitemitemitemitemitemitemitemitemitemitemitemitemitemi`
        + `<br>`
        + `2.temitemitemitemitemitemitemitemitemitemitemitem`
        + `<br>`
        + `3.itemitemitemitemitemitemitemitemitemitemitemitemitemitemitem`
        ,
        // caption area 
        `1.figure : caption_caption_caption_caption_caption_caption`
        + `<br>`
        + `_caption_caption_caption`
        + `<br>`
        + `_caption_caption_caption_caption`
    )
    var testhtml1 = test1.getfigureTag();

    mainArea.appendChild(testhtml1);


    var title = 'title';
    var figure = '1.figure'
    mainArea.appendChild(new Title$Figure(title, figure).getTitle$FigureTag());

});