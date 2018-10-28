// 清除友链
function cl_links()
{
    var loc_url = window.location.href;
    var list_url = ['file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/static/city.html', 
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/about/about.html',
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/article/articleid.html',
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/company/companyid.html',
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/shidu/shiduid.html',
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/user/user.html',
                'file:///E:/web%E7%BB%83%E4%B9%A0/MyWeb/sever/severid.html'
                ];
    var links = document.getElementById('friend');
    var everyResult = list_url.some(function(item, index, array) {
        return(item == loc_url);
        
    });
    if(everyResult){
        links.remove();
    }
}
console.log('111');
setTimeout("cl_links()",100);





window.onload = function() {
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic'),
        list = document.getElementById('list').getElementsByTagName('li'),
        index = 0,
        timer = null;
        arrow = document.getElementsByClassName('arrow');

    // 若果有在等待的定时器，则清掉
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // 自动切换
    timer = setInterval(autoPlay, 3000);
    // 定义并调用自动播放函数
    function autoPlay() {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeImg(index);
    }

    // 定义图片切换函数
    function changeImg(curIndex) {
        for (var j = 0; j < list.length; j++) {
            list[j].className = "";
        }
        // 改变当前显示索引
        list[curIndex].className = "on";
        pic.style.marginTop = -400 * curIndex + "px";
        index = curIndex;
    }

    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function() {
        clearInterval(timer);
    }

    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function() {
        timer = setInterval(autoPlay, 3000);
    }

    // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].id = i;
        list[i].onmouseover = function() {
            clearInterval(timer);
            changeImg(this.id);
        }
    }
}
