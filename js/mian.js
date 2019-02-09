// 自动滚动 (未能实现缓慢滚动，未知功能)
// function goTop(){
//     var goTopLi = document.getElementById("go-top");

//     setInterval(function(){
//         goTopNub = parseInt(goTopLi.style.marginTop.replace('px', ''));
//         if(goTopNub > -60){
//             goTopLi.style.marginTop = -420 + 'px';
//         }
//         else{
//             goTopNub += 60;
//             goTopLi.style.marginTop = goTopNub + 'px';
//         }
//     }, 3000);
// }
// goTop();


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


// 师傅页面显示电话
function showTel(){
    var showTelNub = document.getElementsByClassName('master-tell')[0].getElementsByTagName('a')[0];
    var telNub = showTelNub.getAttribute('tel');
    showTelNub.innerHTML = telNub;
    showTelNub.style.background = '#fff';
    showTelNub.style.textAlign = 'left'; 
}