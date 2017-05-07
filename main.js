var object = {
	mainNavClick:function(){
		var  nav = document.getElementsByClassName("container-left-bottom")[0];
		var navArray = nav.getElementsByTagName("a");
		
		for(var i=0;i<navArray.length;i++){
			navArray[i].addEventListener("click",function(e){
				$(e.target).parent().children().removeClass(".active");
				$(e.target).addClass(".active");
			},false);
		}
	},
};
object.mainNavClick();