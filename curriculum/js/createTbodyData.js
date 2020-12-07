/* 主体数据 */
function createTbodyData(){
    let trHtml=``;
    for(let i=0;i<tableTbodyData.length;i++){
        const data=tableTbodyData[i];
        //开始tr
        trHtml+=`<tr>`;
        //头像
        trHtml+=createFace(data);
        //姓名
        trHtml+=createname(data);
        //性别
        trHtml+=creategender(data);
        //年龄
        trHtml+=age(data);
        //手机号
        trHtml+=phone(data);
        //国籍
        trHtml+=country(data);
        //爱好
      
        trHtml+=likes(data);
        //头衔
        trHtml+=ranke(data);
        //操作
        trHtml+=operation();
         //开始tr
        trHtml+=`</tr>`;
    
    }
    return trHtml;
};
/* 生成头像 */
function createFace(data){
    let faceHtml=`<td>
    <div class='face'>
        <span class='gender icon-${data.face.gender}'></span>
        <img src="${data.face.img}" alt=''>
    </div>
</td>`
return faceHtml;
};
/* 姓名 */
function createname(data){
    let nameHtml=`<td>
    <div class="people-name">
        <h4 class="name">${data.name.trueName}</h4>
        <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
    </div>
</td>`
return nameHtml;
}
/* 年龄 */
function age(data){
    let age=`<td>
                <div class="age text-center">
                    <p>${data.age.number}</p>
                    <span class="option-05 fs-12">（单身狗）</span>
                </div>
            </td>`
    return age;
};
function creategender(data){
    let genderHtml=`<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data.face.gender=='girl' ? '' : 'option-05'}"></span>
                        <span class="gender icon-boy ${data.face.gender=='boy' ? '' : 'option-05'}"></span>
                    </div>
                </td>`
    return genderHtml;
}
/* 手机号 */
function phone(data){
    let phone=`<td>
                <div class="phone">
                ${data.phone.code}<span class="option-05">（中国）</span><br />
                ${data.phone.number}
                </div>
            </td>`
    return phone;
}
/*国籍 */
function country(data){
    let cty=`<td>
                <div>
                    <img src="${data.country.National_flag}" alt="${data.country.name}">
                    <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                </div>
            </td>`
    return cty;
}
/* 爱好 */
function likes(data){
    let like=``;
    let likeHtml=``;
    data.like.forEach(item=>{
        like+=`<span style="background-color: ${item.color};">${item.tag}</span>`
    });
    likeHtml=`<td>
    <div class="likes">
        ${like}
    </div>
</td>`
        return likeHtml;
}
/* 头衔 */
function ranke(data){
    const NUMBER=16.666666
    let ranke=`<td>
                <div class="grade">
                    <span class="role-name">${data.rank.name}</span>
                    <div class="grade-wrap icon-grade">
                        <div class="grade-high icon-grade" style="width:${data.rank.level*NUMBER}%;"></div>
                    </div>
                </div>
               </td>`
               return ranke;
}
/* 操作 */
function operation(){
    let opt=` <td>
                <div class="operation">
                    <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                        <a href="javascript: void(0);">编辑</a>
                        <a href="javascript: void(0);">删除</a>
                        <a href="javascript: void(0);">锁定</a>
                        <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
            </td>`
        return opt;
}