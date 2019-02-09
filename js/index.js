// 选择城市
window.onload = function(){
    var city = document.getElementsByClassName('header_city')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
    var closePop = document.getElementById('close-pop');
    var popCity = document.getElementsByClassName('pop-city')[0];
    var cityName = city.textContent;
    if(popCity != null){
        if (cityName == '深圳'){
            popCity.style.display = 'bolck';
        }
        else{
            popCity.style.display = 'none';
        }
        // 关闭弹窗
        closePop.onclick = function(){
            popCity.style.display = 'none';
        }
    }
    else{
        return null;
    }
}


// 右侧悬浮导航返回顶部自动显示隐藏
window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // var gotop = document.getElementById('top');
    var gotop = document.getElementsByClassName('top');     //有序集合
    if (top > 500){
        gotop[0].style.display = "block";
    }
    else{
        gotop[0].style.display = "none";
    }
}
