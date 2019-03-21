// 显示和隐藏侧边菜单栏
function showSubmenu(){
    var showBtn = document.getElementsByClassName('hide-menu')[0],
        hideMenu = document.getElementsByClassName('fixed-submenu')[0],
        show = true;

    showBtn.onclick = function(){
        if(show){
           hideMenu.style.left = '0';
           show = false;
        }   
        else{
            hideMenu.style.left = -3.25 + 'rem';
            show = true;    
        }
    }
    document.onclick =function(event){
        var e=event || window.event;       //兼容ie和非ie的event
        var aim=e.srcElement || e.target;  //兼容ie和非ie的事件源
        if(e.srcElement){
            var aim=e.srcElement;
            if(aim!=showBtn && aim!=hideMenu){
                hideMenu.style.left = -3.25 + 'rem';
                show = true;
             }
       }
        else{
            var aim=e.target;
            if(aim!=showBtn && aim!=hideMenu){
                hideMenu.style.left = -3.25 + 'rem';
                show = true;
         }
       }
    }
}
showSubmenu();

// function showMoney(){
//     var 
// }