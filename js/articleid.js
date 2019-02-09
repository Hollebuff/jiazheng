// 文章详情页右侧轮播图自动播放
window.onload = function(){
    var articleBannar = document.getElementById('article-bannar'),
        bannarList = document.getElementById('bannar-list'),
        origin = document.getElementById('origin').getElementsByTagName('span');
        var timer;
        var index = 1;
        playBannar();

    // 点亮按钮小图标
    function showoigin(){
        for(var i = 0; i < origin.length; i++){
            if(origin[i].className == 'on'){
                origin[i].className ='';
                break;
            }
        }
        origin[index - 1].className = 'on';
    }

    // 自动轮播
    function playBannar(){
         timer = setInterval(function (){
            nextPic();
        }, 3000);
    }

    // 图片滚动
    function nextPic(){
        var offMove =  parseInt(bannarList.style.marginLeft);
        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }

        if(offMove > -1064){
            bannarList.style.marginLeft = offMove + -266 + 'px';
            showoigin();
        } 
        else{
            bannarList.style.marginLeft = 0 + 'px';
            showoigin();
        }

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
