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

// 师傅页面自动滚动 (未能实现缓慢滚动，未知功能)
function goTop(){
    var goTopLi = document.getElementById("go-top");
    setInterval(function(){
        goTopNub = parseInt(goTopLi.style.marginTop.replace('px', ''));
        if(goTopNub > -60){
            goTopLi.style.marginTop = -420 + 'px';
        }
        else{
            goTopNub += 60;
            goTopLi.style.marginTop = goTopNub + 'px';
        }
    }, 3000);
}
goTop();

// 师傅页面显示电话
function showTel(){
    var showTelNub = document.getElementsByClassName('master-tell')[0].getElementsByTagName('a')[0];
    var telNub = showTelNub.getAttribute('tel');
    showTelNub.innerHTML = telNub;
    showTelNub.style.background = '#fff';
    showTelNub.style.textAlign = 'left'; 
}