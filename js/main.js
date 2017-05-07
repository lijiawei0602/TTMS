var object = {
	initial:function(){
		showLoginBox();
	},
	user:[{
		userid:"04153080",
		password:"13903584060.ljw",
		username:"李佳伟"
	},{
		userid:"04153082",
		password:"123456",
		username:"魏天亮"
	}],
	loginDelClick:function(){
		var login_del = document.getElementsByClassName("login_del")[0];
		login_del.addEventListener("click",closeLoginBox,false);
	},
	loginButtonClick:function(){
		var a = document.getElementsByClassName("head-right")[0].children[0];
		a.addEventListener("click",showLoginBox,false);
	},
	identifyClick:function(){
		var loginButton = document.getElementsByClassName("button")[0];
		
		loginButton.addEventListener("click",function(){
			var userid = document.getElementsByClassName("userid")[0].value;
			var password = document.getElementsByClassName("password")[0].value;
			var containerMain = document.getElementsByClassName("container-main")[0];
			var flag = 0,j;

			for(var i=0;i<object.user.length;i++){
				if(object.user[i].userid === userid && object.user[i].password === password){
					flag = 1;
					j = i;
				}
			}

			if(flag == 1){
				closeLoginBox();
				containerMain.style.display = "block";
				changeLoginTitle(object.user[j].username);
				object.exit();
			}
		},false);
	},
	exit:function(){
		var exit = document.getElementById("exit");
		exit.addEventListener("click",function(){
			// object.initial();
			window.location.href="index.html";
		},false);
	},
	mainNavClick:function(){
		var nav = document.getElementsByClassName("container-left-bottom")[0];
		var navArray = nav.getElementsByTagName("a");

		for(var i=0;i<navArray.length;i++){
			navArray[i].addEventListener("click",function(e){
				// console.log(e.target);
				$(e.target).parent().children().removeClass("active");
				$(e.target).addClass("active");
			},false);
		}
	},

};
window.onload = function(){
	object.initial();
	object.loginDelClick();
	object.loginButtonClick();
	object.identifyClick();
	object.mainNavClick();
};

function showLoginBox(){
	document.getElementsByClassName("userid")[0].value = "";
	document.getElementsByClassName("password")[0].value = "";
	var bg = document.getElementsByClassName("bg")[0];
	var login = document.getElementsByClassName("login")[0];
	bg.style.display = "block";
	login.style.display = "block";
}
function closeLoginBox(){
	var bg = document.getElementsByClassName("bg")[0];
	var login = document.getElementsByClassName("login")[0];
	bg.style.display = "none";
	login.style.display = "none";
}
function changeLoginTitle(userName){
	var html = "当前用户：<span><ul id='ul'><li id='user'>"+userName
				+"<ul id='exit'><li>退出</li></ul></li></ul></span>";
	var headRight = document.getElementsByClassName("head-right")[0];
	headRight.innerHTML = html;
}