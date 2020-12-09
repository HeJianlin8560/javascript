"use strict"

const divDom=window.Azong.$('table-data-wrap');
const tableDom = window.Azong.createEl("table");
//获取添加信息按钮对象
const addInfoButton=window.Azong.getClassName('add-info-button')[0];
//获取form弹窗对象
const infoDiaLog=window.Azong.$('info-dialog');
//获取form弹窗关闭按钮对象
const closeDiaLog=document.querySelector('.close-dialog');
//获取头像区域
const faceView=window.Azong.getClassName('face-view')[0];
//获取头像列表区域
const faceViewList=document.querySelector('.face-view-list')
window.Azong.setAttr(tableDom,{
    'width':'100%',
    'border':'0',
    'cellpadding':'0',
    'cellspacing':'0',
    'id':'table-data-wrap'
});
//array
// const tableTheadData=[
//     { lable:'头像' },
//     { lable:'姓名' },
//     { lable:'性别' },
//     { lable:'年龄' },
//     { lable:'手机号' },
//     { lable:'国籍' },
//     {
//         lable:'爱好',
//         width:200,
//         id:''
//     },
//     {lable:'头衔'},
//     {lable:'操作'}
// ];
//es6 forEach
let thead=`<thead>
                    <tr>`;
tableTheadData.forEach((item,) => {
            //检测是否有width
            let width=item.width?`width=${item.width}`:''
            //检测是否有id
            let id=item.id?`id=${item.id}`:''
            thead+=`<th ${width}>${item.label}</th>`
});
thead+=`</tr>
                       
</thead>`;

//tbody

// console.log(thead);
tableDom.innerHTML=thead+createTbodyData();
divDom.appendChild(tableDom);
/* 
******* 
*/
window.Azong.addEvent(addInfoButton,'click',function(){
    infoDiaLog.classList.add('dialog-show')
});
window.Azong.addEvent(closeDiaLog,'click',function(){
    infoDiaLog.classList.remove('dialog-show')
});
/* 头像事件处理 */
window.Azong.addEvent(faceView,'click',function(){
    // handlerFaceList(); 接口停了
});
window.Azong.addEvent(faceViewList,'click',function(){
    
});
//点击更换头像
window.Azong.addEvent(faceViewList, 'click', function(e){
    // 获取标签
    let nodeName = e.target.nodeName.toLowerCase();
    // 获取img对象
    const getImg = window.Azong.getTagName(faceView, 'img');  // 数组
    // 创建img对象
    const createImg = window.Azong.createEl('img');
    // 点击获取src
    let getSrc = ``;
    // 更新src
    if(nodeName === 'li') {
        const img = window.Azong.getChildren(e.target)[0];
        getSrc = img.src;
    }
    if(nodeName === 'img') { 
        getSrc = e.target.src;
    }
    // 头像存在，则修改头像的src
    if(getImg.length !== 0) {
        getImg[0].src = getSrc;
    }else{
        // img写入src
        createImg.src = getSrc;
        window.Azong.addChild(faceView, createImg);
    }
});
function handlerFaceListCallback(data){
  //for of
  let liHtml=``;
  for(let key of requestData){
    liHtml+=`<li><img src="${key}" alt=""></li>`
  }
  faceView.innerHTML=liHtml;
}
