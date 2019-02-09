// 参考网上方法：http://www.php.cn/js-tutorial-408942.html
function addBuy(){
    var listItem = document.getElementsByClassName('order-list-item');  // 商品某列
    var add =  document.getElementsByClassName('add');  // 加      
    var minus = document.getElementsByClassName('minus');   // 减
    var inputtxt = document.getElementsByClassName('buyNub'); // input值
    var price = document.getElementsByClassName('price');   // 单价
    var sum = document.getElementsByClassName('count-number')[0];   // 总数
    var countPrice = document.getElementsByClassName('count-price')[0]; // 总价
    var chebox = document.getElementsByClassName('chebox');     // 单选框
    var subtotal = document.getElementsByClassName('subtotal');     //小计
    var delectBtn = document.getElementsByClassName('delect-btn');  //删除
    var checkall = document.getElementById('checkall');
    var submitPrice = document.getElementsByClassName('sub-price')[0];

    var conuttotleNub = 0;     // 统计总数
    var countPriceNub = 0;     // 统计总价
        // sum.innerHTML = '0' + '个';

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
            countBubMinus();
            subPrice(this.index);
            showTotlePrice();
        }

         // 增加
        add[i].index = i;
        add[i].onclick = function(){
            var val = inputtxt[this.index].value;
            val++;
            inputtxt[this.index].value = val;
            countBubAdd();
            subPrice(this.index);
            showTotlePrice()
        }
        
        // 输入判断
        inputtxt[i].index = i;
        inputtxt[i].onblur = function(){
            if (parseInt(inputtxt[this.index].value) == 0 || inputtxt[this.index].value.length == 0){
                inputtxt[this.index].value = 1;
                countBubAdd();
            }
            countBubAdd();
            subPrice(this.index);
            showTotlePrice();
        }

        // 选中要购买的商品
        chebox[i].index = i;
        chebox[i].onclick = function(){
            countBubAdd();
            subPrice(this.index);
            showTotlePrice();
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
            countBubAdd();
            subAllPrice();
            showTotlePrice();
        }
        // 删除操作
        delectBtn[i].index = i;
        delectBtn[i].onclick = function(){
            listItem[this.index].remove();
            countBubAdd();
            subPrice(this.index);
            showTotlePrice();
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
                // conuttotleNub = '0';
            }
        }
        sum.innerHTML = conuttotleNub.toString() + '个';
    }

    // 总数减
    function  countBubMinus(){
        conuttotleNub = 0; 
        for(var i=0; i<inputtxt.length; i++){
            if(chebox[i].checked){
                conuttotleNub -= -parseInt(inputtxt[i].value);
            }
            else{
                // conuttotleNub = '0';
            }
        }
        sum.innerHTML = conuttotleNub.toString() + '个';
    }

    // 小计
    function subPrice(index){
        subtotal[index].innerText = parseInt(price[index].innerText) * parseInt(inputtxt[index].value);
    }

    // 全选小计
    function subAllPrice(){
        for(var i=0; i<price.length; i++){
            subtotal[i].innerText = parseInt(price[i].innerText) * parseInt(inputtxt[i].value);
        }
    }

    // 统计总价
    function showTotlePrice(){
        totleNub = 0;
        for(var i=0; i<price.length; i++){
            if(chebox[i].checked){
                totleNub += parseInt(subtotal[i].innerHTML);
            }
        }

        countPrice.innerHTML = totleNub + '元';
        submitPrice.innerHTML = totleNub + '元';
    } 
}
addBuy();


// 个人信息模块
function submitInfo(){
    var adds = document.getElementsByClassName('info-adds'),       // 地址
        times = document.getElementsByClassName('info-times')[0],    // 时间
        tel = document.getElementsByClassName('info-tel')[0],       // 电话
        names = document.getElementsByClassName('info-name')[0];    // 姓名

    var subAdds = document.getElementsByClassName('sub-adds')[0],   
        subDate = document.getElementsByClassName('sub-date')[0],
        subTel = document.getElementsByClassName('sub-tel')[0],
        subName = document.getElementsByClassName('sub-name')[0],
        adrss = '';

        if(parseInt(times.value.length) == 0 || parseInt(tel.value.length) == 0 || parseInt(names.value.length) == 0){
            alert('请全部填写完整')
        }
        else{
            if(parseInt(tel.value.length) == 11 && !(/^1[34578]\d{9}$/.test(tel))){
                subTel.innerText = '联系电话：' + tel.value;
            }
            else{
                alert('请输入正确的手机号')
            }
            subDate.innerText = '预约时间：' + times.value;
            subName.value = names.value;
            for(var i=0; i<adds.length; i++){
                adrss += adds[i].value;
            }
            subAdds.innerHTML = '联系地址：' +  adrss;
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
