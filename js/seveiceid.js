function addNubSeveice(){
    var add =  document.getElementsByClassName('add');  // 加      
    var minus = document.getElementsByClassName('minus');   // 减
    var inputtxt = document.getElementsByClassName('buyNub'); // input值

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
        }

         // 增加
        add[i].index = i;
        add[i].onclick = function(){
            var val = inputtxt[this.index].value;
            val++;
            inputtxt[this.index].value = val;
        }
        
        // 输入判断
        inputtxt[i].index = i;
        inputtxt[i].onblur = function(){
            if (parseInt(inputtxt[this.index].value) == 0 || inputtxt[this.index].value.length == 0){
                inputtxt[this.index].value = 1;
            }
        }
    }
}
addNubSeveice();

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
