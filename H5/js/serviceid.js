function buyService(){
    var minus = document.getElementsByClassName('minus')[0],
        add = document.getElementsByClassName('add')[0],
        buyNub = document.getElementsByClassName('buy-nub')[0];
    
    add.onclick = function(){   
        buyNub.value = parseInt(buyNub.value) + 1; 
    }
    minus.onclick = function(){
        var buyvl = parseInt(buyNub.value);
        if(buyvl <= 1){
            buyNub.value = 1;
        }
        else{
            buyNub.value = buyvl - 1;
        }
    }
    buyNub.onfocus = function(){
        if(parseInt(buyNub.value) <= 1 ){
            buyNub.value = 1;
        }
    }
}
buyService();