
// 用户隐藏账户额度
function hideMoney(){
    var userMoney = document.getElementsByClassName('user-money')[0];
    var moneyValue = parseInt(userMoney.getAttribute("value"));

    if(moneyValue == 1){
        userMoney.setAttribute('mymoney',userMoney.innerHTML);
        userMoney.innerHTML = '账户余额：******';
        userMoney.setAttribute('value', '0');
        userMoney.style.backgroundImage = 'URL(e://web/images/hide.png)';
    }
    else{
        userMoney.innerHTML = userMoney.getAttribute('mymoney');
        userMoney.setAttribute('value', '1');
        userMoney.style.backgroundImage = 'URL(e://web/images/show.png)';
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
