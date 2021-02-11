

class Layout{
    constructor(item, figure){
        this.item = item;
        this.figure= figure;
    }
    
    getfigureTag(){
        var figureTag = document.createElement('figure');
            figureTag.setAttribute('style', 'border : thin solid black; overflow-wrap: break-word; max-width:70%;');
        var itemTag = document.createElement('pre');
            itemTag.innerText = this.item;
            itemTag.setAttribute('style', 'border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
        var figcaptionTag = document.createElement('pre');
            figcaptionTag.innerText = this.figure;
            figcaptionTag.setAttribute('style', 'border-bottom : thin solid black; white-space: break-spaces;margin: 0px;padding: 2%;');
          
            figureTag.appendChild(itemTag);
            figureTag.appendChild(figcaptionTag);
        
        return figureTag;
    }
}


export { Layout }