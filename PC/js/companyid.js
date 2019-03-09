// 装修公司详情页轮播图
function rotation(){
    var go = document.getElementsByClassName('go')[0],
        back = document.getElementsByClassName('back')[0],
        companyidBannarList = document.getElementsByClassName('bannar-list')[0].getElementsByTagName('li');   //缩略图列表
        showPic = document.getElementsByClassName('showpic')[0];     // 获取大图图片父元素
        i = 0;
        picNub = companyidBannarList[0].getElementsByTagName('img')[0].getAttribute('indeximg');  // 缩略图index

    // 下一张
    go.onclick = function(){
        var imgUrl;
        if(i < 3 ){
            showPicImg = document.getElementsByClassName('showpic')[0].getElementsByTagName('img')[0];     // 获取大图图片img
            i += 1;
            imgUrl = companyidBannarList[i].getElementsByTagName('img')[0].cloneNode();
            showPicImg.remove();
            showPic.appendChild(imgUrl);
            nextPrice();
        }
        else{
            i = 0;
            showPicImg = document.getElementsByClassName('showpic')[0].getElementsByTagName('img')[0];     // 获取大图图片img
            imgUrl = companyidBannarList[i].getElementsByTagName('img')[0].cloneNode();
            showPicImg.remove();
            showPic.appendChild(imgUrl);
            nextPrice();
        }
    }

    // 上一张
    back.onclick = function(){
        var imgUrl;
        if(i > 0 ){
            showPicImg = document.getElementsByClassName('showpic')[0].getElementsByTagName('img')[0];     // 获取大图图片img
            i -= 1;
            imgUrl = companyidBannarList[i].getElementsByTagName('img')[0].cloneNode();
            showPicImg.remove();
            showPic.appendChild(imgUrl);
            nextPrice();
        }
        else{
            i = 3;
            showPicImg = document.getElementsByClassName('showpic')[0].getElementsByTagName('img')[0];     // 获取大图图片img
            imgUrl = companyidBannarList[i].getElementsByTagName('img')[0].cloneNode();
            showPicImg.remove();
            showPic.appendChild(imgUrl);
            nextPrice();
        }
    }
    
    // 点亮显示图片位置
    function nextPrice(){
        for(var j=0; j<companyidBannarList.length; j++){
            if(companyidBannarList[j].className == 'imgon'){
                companyidBannarList[j].className = '';
                break;
            }
        }
        companyidBannarList[i].className = 'imgon';
    }
}
rotation();

// 右侧悬浮导航返回顶部自动显示隐藏
window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var gotop = document.getElementsByClassName('top');     //有序集合
    if (top > 500){
        gotop[0].style.display = "block";
    }
    else{
        gotop[0].style.display = "none";
    }
}

// 装修公司页面显示电话
function showTel(){
    var showTelNub = document.getElementsByClassName('companyid-looktel')[0].getElementsByTagName('a')[0];
    var telNub = showTelNub.getAttribute('tel');
    showTelNub.innerHTML = telNub;
    showTelNub.background = '';
}