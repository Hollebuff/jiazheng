// tab选项卡菜单
function clickTab(){
    var subMenu = document.getElementsByClassName("menu-container")[0].getElementsByTagName('li'),
        showSubMenu = document.getElementsByClassName("submenu-container");
        
    for(var i = 0, len = subMenu.length; i< len; i++) {
        subMenu[i].index = i;
        subMenu[i].onclick = function(){
			showTab(this.index);
        }
    }

    function showTab(a) {
        subMenu[a].classList.add('look-on');
        showSubMenu[a].style.display = "block";
        for(var j=0; j<subMenu.length; j++){
            if(j != a){
                subMenu[j].classList.remove('look-on');
                showSubMenu[j].style.display = "none";	
            }
        }
    }
}
clickTab();