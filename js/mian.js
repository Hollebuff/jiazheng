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

// 参考网上方法：http://www.php.cn/js-tutorial-408942.html
function addBuy(){
    var add =  document.getElementsByClassName('add');  // 加      
    var minus = document.getElementsByClassName('minus');   // 减
    var inputtxt = document.getElementsByClassName('buyNub'); // input值
    var price = document.getElementsByClassName('price');   // 单价
    var sum = document.getElementsByClassName('count-number')[0];   // 总数
    var countPrice = document.getElementsByClassName('count-price')[0]; // 总价
    var chebox = document.getElementsByClassName('chebox');     // 单选框
    var checkall = document.getElementById('checkall');
    var conuttotleNub = 0;     // 统计总数
    var countPriceNub = 0;     // 统计总价

    for (var i = 0; i < add.length; i++){
        // 减少
        minus[i].index = i;
        minus[i].onclick = function(){
            var val = inputtxt[this.index].value;
            if(val < 2){
                val = 1;
            }
            else{
                val--;
            }
            inputtxt[this.index].value = val;
            // subPrice(this.index);    
            countBub();
        }
         // 增加
        add[i].index = i;
        add[i].onclick = function(){
            var val = inputtxt[this.index].value;
            val++;
            inputtxt[this.index].value = val;
            // subPrice(this.index);
            countBubAdd();
        }
        // 输入判断
        inputtxt[i].index = i;
        inputtxt[i].onblur = function(){
            if (parseInt(inputtxt[this.index].value) == 0){
                inputtxt[this.index].value = 1;
                countBubAdd();
            }
            countBubAdd();
        }
        // 选中要购买的商品
        chebox[i].onclick = function(){
            countBubAdd();
        }
        // 全选和取消全选
        checkall.onclick = function(){
            for(var i=0; i<chebox.length; i++){
                if(this.checked == true){
                    chebox[i].checked = true;
                }
                else{
                    chebox[i].checked = false;
                }
            }
            countBub();
        }

    }
    

    // 统计总数加
    function countBubAdd(){
        conuttotleNub = 0; 
        for(var i=0; i<inputtxt.length; i++){
            if(chebox[i].checked){
                conuttotleNub += parseInt(inputtxt[i].value);
            }
            else{
                conuttotleNub = inputtxt.length;
            }
        }
        console.log(conuttotleNub, typeof(conuttotleNub))
        sum.innerHTML = conuttotleNub.toString() + '个';
    }

    // 总数减
    function countBubMinus(){
        
    }


    // 小计
    function subPrice(index){

    }





    // 统计总价
    // function showTotlePrice(){
    //     totleNub = 0;
    //     for(var i=0; i<price.length; i++){
    //         totleNub+=parseInt(price[i].innerHTML);
    //     }
    //     countPrice.innerHTML = totleNub;

    // } 

}
addBuy();






// 服务详情、订单数量加减计算
// 闭包问题参考解决发暗杆： https://blog.csdn.net/weixin_38047955/article/details/70480647
// function addBuy(){
//     var addBuyList = document.getElementsByClassName('addlist');
//     for(var index = 0; index < addBuyList.length; index++){
//         var add =  document.getElementsByClassName('add');  // 加      
//         var minus = document.getElementsByClassName('minus');   // 减
//         var buyNub = document.getElementsByClassName('buyNub'); // input值

//         var price = document.getElementsByClassName('price');   // 单价
//         var sum = document.getElementsByClassName('count-number')[0];   // 总数
//         var countPrice = document.getElementsByClassName('count-price')[0]; // 总价
//         // console.log(addBuyList,add,minus,buyNub)
//         (function(index){
//             var temp = index;
//             var nubText = [];

//             add[temp].onclick = function(){
//                 buyNub[temp].value = parseInt(buyNub[temp].value) + 1;
//                 // console.log(temp, buyNub[temp].value)
//                 if(temp == 0){
//                     sum.innerHTML = parseInt(buyNub[temp].value) + parseInt(buyNub[temp+1].value) + '个';
//                 }
//                 else{
//                     sum.innerHTML = parseInt(buyNub[temp-1].value) + parseInt(buyNub[temp].value) + '个';
//                 }

//                 // 统计总数
//                 // for(var sumNun = 0; sumNun < buyNub.length; sumNun++){
//                 //     (function(sumNun){
//                 //         var sumNuntext = sumNun;
//                 //         var val = 0;
//                 //         val +=  + parseInt(buyNub[sumNuntext].value);
//                 //         console.log(val);
//                 //     })(sumNun);
//                 // }
//             }
//             minus[temp].onclick = function(){
//                 if (buyNub[temp].value < 2){
//                     buyNub[temp].value = 1;
//                 }
//                 else{
//                     buyNub[temp].value = parseInt(buyNub[temp].value) - 1;
//                 }
//             }
//             // 输入判断
//             buyNub[temp].onblur = function(){
//                 if (parseInt(buyNub[temp].value) == 0){
//                     buyNub[temp].value = 1;
//                 }
//             }
//         })(index);
//     }
// }
// addBuy();


// function CountNub(){

// }


// 加减第二种方法 
// 使用HTML前提
    // <li class="order-list-item">
    //     <div class="order-list-item-5">
    //         <img src="E://web/images/order-listimg.jpg" alt="">
    //         <span>家用空调安装，5年专业安装经验服务3服务装经验服务3服务装经验服务3服务</span>
    //         </div>
    //     <div class="order-list-item-1"><span class="price">100</span></div>
    //     <div class="addlist order-list-item-1">
    //         <span class="minus" onclick="return addBuy(this)">-</span> 
    //         <input type="text" value="1" class="buyNub">
    //         <span class="add" onclick="return addBuy(this)">+</span>
    //     </div>
    //     <div class="order-list-item-1"><span>李师傅</span></div>
    //     <div class="order-list-item-2">
    //         <input type="button" name="" value="删除" id="delect-btn" class="delect-btn">
    //     </div>
    // </li>
// function addBuy(span){
//     // 加
//     var add =  document.getElementsByClassName('add')[0];  
//     // 减
//     var minus = document.getElementsByClassName('minus')[0];
//     // input值
//     var buyNub = span.parentNode.getElementsByTagName('input')[0];
//     console.log(add,minus,buyNub)
//     add.onclick = function(){
//         buyNub.value = parseInt(buyNub.value) + 1;
//     }
//     minus.onclick = function(){
//         if(buyNub.value < 2){
//             buyNub.value = 1;
//         }
//         else{
//             buyNub.value = parseInt(buyNub.value) - 1;
//         }
//     }
//     return false;
// }




// // 提交用户信息
// function submitInfo(){
//     var adds = []
//     var info =  document.getElementsByClassName('order-user-add')[0];
//     var infoText = info.getElementsByTagName('input');
//     for(var i = 0; i < infoText.length; i++){
//         console.log(adds.push(infoText[i].value))
//     }
//     console.log('结果', adds)

// }
// submitInfo();






