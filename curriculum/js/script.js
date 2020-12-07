"use strict"

const divDom=window.Azong.$('table-data-wrap');
const tableDom = window.Azong.createEl("table");
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
const addInfoButton=window.Azong.getClassName('add-info-button')[0];
const infoDiaLog=window.Azong.$('info-dialog');
const closeDiaLog=document.querySelector('.close-dialog');
window.Azong.addEvent(addInfoButton,'click',function(){
    infoDiaLog.classList.add('dialog-show')
})
window.Azong.addEvent(closeDiaLog,'click',function(){
    infoDiaLog.classList.remove('dialog-show')
})