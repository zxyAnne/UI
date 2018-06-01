let centerdId = 'center-container';
class page{
    static set centerId(id){
        var centerDom = document.getElementById(centerdId)
        if(!centerDom) {
            console.error("不存在的元素")
            return;
        }
        centerdId = id;
    }
    static get centerId(){
        return centerdId;
    }
    static getScrollToPostion(index){
        var childDom = document.getElementById(page.centerId).children[index];
        if(!childDom) return -1;
        if(childDom.nodeName==='SECTION'){
           return childDom.offsetTop;
        }else{
           return -1;
        }
    }
    static scrollTo(index){
        var offsetTop = page.getScrollToPostion(index);
        if(offsetTop==-1) return;
        document.getElementById(page.centerId).scrollTop = offsetTop;
    }
}
export default page;