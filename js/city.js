//城市站轮播图 学习位置：https://www.imooc.com/video/696  【箭头切换】
window.onload = function() {

    // bananr轮播图
    var container = document.getElementById('container'),     //容器
        list = document.getElementById('list'),
        buttons = document.getElementById('buttons').getElementsByTagName('span'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next');
        var index = 1;
        var animated = false;
        var timer;

        // 点亮按钮小图标
        function showButton(){
            for(var i = 0; i < buttons.length; i++){
                if(buttons[i].className == 'on'){
                    buttons[i].className ='';
                    break;
                }
            }
            buttons[index - 1].className = 'on';

        }

    //抽取公用函数
    function animate(offset){
        animated = true;
        var newLeft = parseInt(list.style.left) + offset;
        var time = 300;   //位置总时间
        var interval = 10;  //位移间隔时间
        var speed = offset/(time/interval);  //位移速度

        // setTimeout 单次执行
        function go(){
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else{
                animated = false;
                list.style.left = newLeft + 'px';
                // 判断，防止图片滚动超出距离
                if(newLeft> -1920){
                    list.style.left = -9600 + 'px';
                }
                if(newLeft < -9600){
                    list.style.left = -1920 + 'px';
                }
            }
        }
        go();   
    } 

    // 自动轮播,一直执行
    function play(){
        timer = setInterval(function (){
            next.onclick();
        }, 4000);
    }

    // 暂停
    function stop(){
        clearInterval(timer);
    }

    // 为什么用函数名，不需要带括号？
    container.onmouseover = stop;     // 鼠标放入暂停
    container.onmouseout = play;      // 鼠标离开自动播放
    play();
    

    // 点击下一张
    next.onclick = function(){
        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }
        showButton();
        if(animated == false){
           animate(-1920);
        }
    }
    // 点击上一张
    prev.onclick = function(){
        if(index == 1){
            index = 5;
        }
        else{
            index -= 1;
        }
        showButton();
        if(animated == false){
            animate(1920);
        }
    }

    // 鼠标悬停底部按钮，自动切换图片
    for(var i = 0; i < buttons.length; i++){
        buttons[i].onmouseover = function(){
            if(this.className == 'on'){
                return;
            }
            var myIdenx = parseInt(this.getAttribute('index'));
            var offset = -1920 * (myIdenx - index);
            index = myIdenx;
            showButton();
            if(animated == false){
                animate(offset);
            }
        }
    }
}





// 用户评价轮播图
function lunbo(){
    var assess_box = document.getElementById('assess_box'),
        assess_ul_box = document.getElementById('assess_ul_box'),
        assess_prev = document.getElementById('assess_prev'),
        assess_next = document.getElementById('assess_next');

        function pjanimate(moveoff){
            pjanimated = true;
            var myoff = parseInt(assess_ul_box.style.left) + moveoff,
                asTime = 300,
                asintetval = 10,
                asspeed = moveoff/(asTime/asintetval);

            function asgo(){
                if((asspeed < 0 && parseInt(assess_ul_box.style.left) > myoff) || (asspeed > 0 && parseInt(assess_ul_box.style.left) < myoff)){
                    assess_ul_box.style.left = parseInt(assess_ul_box.style.left) + asspeed + 'px';
                    setTimeout(asgo, asintetval);
                }
                else{
                    pjanimated = false;
                    assess_ul_box.style.left = myoff + 'px';
                    // 判断，防止图片滚动超出距离
                    if(myoff > 0){
                        assess_ul_box.style.left = -2400 + 'px';
                    }
                    if(myoff < -2400){
                        assess_ul_box.style.left = 0 + 'px';
                    }
                }
            }
            asgo();   
        }

    assess_next.onclick = function(){
        pjanimate(-800);
    }
    assess_prev.onclick = function(){
      pjanimate(800);
    }
}
lunbo();



// //城市站轮播图 学习位置：https://www.imooc.com/video/696  【箭头切换】
// window.onload = function() {

//     // bananr轮播图
//     var container = document.getElementById('container'),     //容器
//         list = document.getElementById('list'),
//         buttons = document.getElementById('buttons').getElementsByTagName('span'),
//         prev = document.getElementById('prev'),
//         next = document.getElementById('next');
//         var index = 1;
//         var animated = false;
//         var timer;

//         // 点亮按钮小图标
//         function showButton(){
//             for(var i = 0; i < buttons.length; i++){
//                 if(buttons[i].className == 'on'){
//                     buttons[i].className ='';
//                     break;
//                 }
//             }
//             buttons[index - 1].className = 'on';

//         }

//     //抽取公用函数
//     function animate(offset){
//         animated = true;
//         var newLeft = parseInt(list.style.left) + offset;
//         var time = 300;   //位置总时间
//         var interval = 10;  //位移间隔时间
//         var speed = offset/(time/interval);  //位移速度

//         // setTimeout 单次执行
//         function go(){
//             if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
//                 list.style.left = parseInt(list.style.left) + speed + 'px';
//                 setTimeout(go, interval);
//             }
//             else{
//                 animated = false;
//                 list.style.left = newLeft + 'px';
//                 // 判断，防止图片滚动超出距离
//                 if(newLeft> -600){
//                     list.style.left = -3000 + 'px';
//                 }
//                 if(newLeft < -3000){
//                     list.style.left = -600 + 'px';
//                 }
//             }
//         }
//         go();   
//     } 

//     // 自动轮播,一直执行
//     function play(){
//         timer = setInterval(function (){
//             next.onclick();
//         }, 3000);
//     }

//     // 暂停
//     function stop(){
//         clearInterval(timer);
//     }

//     // 为什么用函数名，不需要带括号？
//     container.onmouseover = stop;     // 鼠标放入暂停
//     container.onmouseout = play;      // 鼠标离开自动播放
//     play();
    

//     // 点击下一张
//     next.onclick = function(){
//         if(index == 5){
//             index = 1;
//         }
//         else{
//             index += 1;
//         }
//         showButton();
//         if(animated == false){
//            animate(-600);
//         }
//     }
//     // 点击上一张
//     prev.onclick = function(){
//         if(index == 1){
//             index = 5;
//         }
//         else{
//             index -= 1;
//         }
//         showButton();
//         if(animated == false){
//             animate(600);
//         }
//     }

//     // 点击底部按钮切换图片
//     for(var i = 0; i < buttons.length; i++){
//         buttons[i].onclick = function(){
//             if(this.className == 'on'){
//                 return;
//             }
//             var myIdenx = parseInt(this.getAttribute('index'));
//             var offset = -600 * (myIdenx - index);
//             index = myIdenx;
//             showButton();
//             if(animated == false){
//                 animate(offset);
//             }
//         }
//     }
// }


// // 用户评价轮播图
// function lunbo(){
//     var assess_box = document.getElementById('assess_box'),
//         assess_ul_box = document.getElementById('assess_ul_box'),
//         assess_prev = document.getElementById('assess_prev'),
//         assess_next = document.getElementById('assess_next');

//         function pjanimate(moveoff){
//             pjanimated = true;
//             var myoff = parseInt(assess_ul_box.style.left) + moveoff,
//                 asTime = 300,
//                 asintetval = 10,
//                 asspeed = moveoff/(asTime/asintetval);

//             function asgo(){
//                 if((asspeed < 0 && parseInt(assess_ul_box.style.left) > myoff) || (asspeed > 0 && parseInt(assess_ul_box.style.left) < myoff)){
//                     assess_ul_box.style.left = parseInt(assess_ul_box.style.left) + asspeed + 'px';
//                     setTimeout(asgo, asintetval);
//                 }
//                 else{
//                     pjanimated = false;
//                     assess_ul_box.style.left = myoff + 'px';
//                     // 判断，防止图片滚动超出距离
//                     if(myoff > 0){
//                         assess_ul_box.style.left = -2400 + 'px';
//                     }
//                     if(myoff < -2400){
//                         assess_ul_box.style.left = 0 + 'px';
//                     }
//                 }
//             }
//             asgo();   
//         }

//     assess_next.onclick = function(){
//         pjanimate(-800);
//     }
//     assess_prev.onclick = function(){
//       pjanimate(800);
//     }
// }
// lunbo();
