

class Layout{
    constructor(item, figure){
        this.item = item;
        this.figure= figure;
    }
    
    getfigureTag(){
        var figureTag = document.createElement('article');
            figureTag.setAttribute('style', 'border : thin solid black; overflow-wrap: break-word; width:400px;');
        var itemTag = document.createElement('pre');
            itemTag.innerHTML = this.item;
            itemTag.setAttribute('style', 'border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
        var figcaptionTag = document.createElement('pre');
            figcaptionTag.innerHTML = this.figure;
            figcaptionTag.setAttribute('style', 'border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
          
            figureTag.appendChild(itemTag);
            figureTag.appendChild(figcaptionTag);
        
        return figureTag;
    }
}

// 클컨펑뉴
class Title$Figure{
    constructor(title, figure){
        this.title = title;
        this.figure= figure;
    }
    
    getTitle$FigureTag(){
        var figureTag = document.createElement('article');
            figureTag.setAttribute('style', 'border : thin solid black;overflow-wrap: break-word; width:600px; ');
        var itemTag = document.createElement('pre');
            itemTag.innerHTML = this.title;
            itemTag.setAttribute('style', ' background-color:black; color:white; border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
        var figcaptionTag = document.createElement('pre');
            figcaptionTag.innerHTML = this.figure;
            figcaptionTag.setAttribute('style', 'border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
          
            figureTag.appendChild(itemTag);
            figureTag.appendChild(figcaptionTag);
        
        return figureTag;
    }
}

export { Layout, Title$Figure}