(function(){
    "use strict"
    //命名空间
    if (!window.Azong) {window.Azong={};}
    /**
     * 获取ID的DOM元素封装成函数
     * @param {string} id 
     */
    function $(id) {
        if (typeof id!="string") { throw new Error('id必须是字符串') }
        const dom=document.getElementById(id);
        if (!dom) { throw new Error('dom对象没找到')}
          return dom;
    } window.Azong.$=$;
    function getClassName(ClassName){
       return document.getElementsByClassName(ClassName);
    }
        window.Azong.getClassName=getClassName;
     /**
      * 创建DOM元素
      * @param {string} node
      */
     function createEl(node){
            return document.createElement(node);
        }
        window.Azong.createEl=createEl;
          /**
     * 获取 标签 对象（第一层）
     * @param {strong} node 
     */
    function getChildren(parentNode){
        return parentNode.children;  // 数组
    }
    window.Azong.getChildren = getChildren;
    /* 获取标签对象 */
    function getTagName(parentNode,target){
        return parentNode.getElementsByTagName(target)
    }
    window.Azong.getTagName=getTagName;
    /**
     * 设置节点属性
     */
    function setAttr(node,styles) {
        // console.log(styles)
       for(let key in styles){
           node.setAttribute(key,styles[key])
                            }
       } 
      window.Azong.setAttr=setAttr;
      /**
         * 获取节点属性
         * @param {string} node 
         * @param {string} attr 
         */
        function getAttr(node,attr){
            return node.getAttribute(attr)

}
window.Azong.getAttr=getAttr;
/* addEventListener */
           function addEvent(domNode,eventType,handlerFunction){
               if (window.addEventListener) {
                domNode.addEventListener(eventType,handlerFunction)
               }else{
                   domNode.attachEvent(`on${eventType}`,handlerFunction)
               }
           }
window.Azong.addEvent=addEvent;
/* removeEventListener */
function removeEvent(domNode,eventType,handlerFunction){
    if (window.removeEventListener) {
     domNode.removeEventListener(eventType,handlerFunction)
    }else{
        domNode.detachEvent(`on${eventType}`,handlerFunction)
    }
}
window.Azong.removeEvent=removeEvent;
/* 添加子节点到父级的末尾 */
function addChild(parentNode,node){
    parentNode.appendChild(node)
}
window.Azong.addChild=addChild;
})()