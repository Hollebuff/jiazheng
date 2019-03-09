// <script src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
// // 横向菜单
// function serviceMenu(){
//     var u = navigator.userAgent;
// 	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
// 	var isUc = u.indexOf('UCBrowser') > -1;    //uc浏览器
// 	//var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// 	if(isAndroid&&isUc){		/*注释5*/
// 	    $('.box').on('touchstart',function(){
//             $(document).on('touchmove',function(e){
//                 e.preventDefault();
//             });
// 		$(document).on('touchend',function(){
// 		    $(document).unbind();
// 		});
//     });
//     }   
// }
// serviceMenu();