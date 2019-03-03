// 推荐文章切换
function clickTab(){
    var ariticleTab = document.getElementsByClassName("recommend-tab")[0].getElementsByTagName('a'),
        showArticle = document.getElementsByClassName("recommend-content")[0].getElementsByTagName('ul');
        
    for(var i = 0, len = ariticleTab.length; i< len; i++) {
        ariticleTab[i].index = i;
        ariticleTab[i].onclick = function(){
			showTab(this.index);
        }
    }

    function showTab(a) {
        ariticleTab[a].classList.add('look-on');
        showArticle[a].style.display = "block";

        for(var j=0; j<ariticleTab.length; j++){
            if(j != a){
                ariticleTab[j].classList.remove('look-on');
                showArticle[j].style.display = "none";	
            }
        }
    }
}
clickTab();