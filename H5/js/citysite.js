// H5顶部轮播
window.onload = function(){
    var articleBannar = document.getElementsByClassName('carousel-contaier')[0],
        bannarList = document.getElementsByClassName('swiper-contaier')[0],
        origin = document.getElementsByClassName('caorusel-btn')[0].getElementsByTagName('span');
    var timer;
    var index = 1;
    playBannar();

    // 点亮按钮小图标
    function showoigin(){
        for(var i = 0; i < origin.length; i++){
            if(origin[i].className == 'caorusel-btn-on'){
                origin[i].className ='';
                break;
            }
        }
        origin[index - 1].className = 'caorusel-btn-on';
    }

    // 自动轮播
    function playBannar(){
         timer = setInterval(function (){
            nextPic();
        }, 3000);
    }

    // 图片滚动
    function nextPic(){
        var offMove =  parseFloat(bannarList.style.marginLeft);
        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }

        if(offMove > -38.693){
            bannarList.style.marginLeft = offMove + -7.7386 + 'rem';
            showoigin();
        } 
        else{
            bannarList.style.marginLeft = 0 + 'rem';
            showoigin();
        }
    }
}
