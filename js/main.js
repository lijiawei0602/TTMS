var object = {
	initial:function(){
		showLoginBox();
	},
	cinema:[{
		cinemaid:"201701",
		cinemaname:"奥斯卡情调"
	},{
		cinemaid:"201702",
		cinemaname:"民族情怀"
	},{
		cinemaid:"201703",
		cinemaname:"城市韵味"
	},{
		cinemaid:"201704",
		cinemaname:"乡村风情"
	},{
		cinemaid:"201705",
		cinemaname:"乱七八糟"
	}],
	seatBrokenindex:[{
		index:"201701",
		title:"奥斯卡情调",
		array:[5,9,30]
	},
	{
		index:"201702",
		title:"民族情怀",
		array:[3]
	},
	{
		index:"201703",
		title:"城市韵味",
		array:[15]
	},{
		index:"201704",
		title:"乡村风情",
		array:[60]
	},{
		index:"201705",
		title:"乱七八糟",
		array:[50,70]
	}
	],
	play:[
	{
		imgUrl:"img/1.jpg",
		title:"摔跤吧！爸爸",
		type:"动作/传记",
		director:"尼特什·提瓦瑞",
		actor: "阿米尔·汗，萨卡诗·泰瓦，桑亚·玛荷塔",
		time:"2小时20分钟"
	},{
		imgUrl:"img/2.jpg",
		title:"速度与激情8",
		type:"动作/犯罪/惊悚",
		director:"F·加里·格雷",
		actor: "范·迪塞尔，道恩·强森，杰森·斯坦森",
		time:"2小时40分钟"
	},{
		imgUrl:"img/3.jpg",
		title:"拆弹专家",
		type:"动作/嫌疑/犯罪",
		director:"邱礼涛",
		actor: "刘德华，姜武，宋佳",
		time:"2小时"
	},{
		imgUrl:"img/4.jpg",
		title:"喜欢你",
		type:"爱情/喜剧",
		director:"许宏宇",
		actor: "金城武，周冬雨，孙艺洲",
		time:"1小时46分钟"
	},{
		imgUrl:"img/5.jpg",
		title:"灵狼传奇",
		type:"动画/冒险/奇幻",
		director:"马克西姆法捷耶夫",
		actor: "Maksim Chukharyov / 康斯坦丁·哈宾斯",
		time:"95分钟"
	},{
		imgUrl:"img/6.jpg",
		title:"蓝精灵",
		type:"动画/冒险/喜剧",
		director:"凯利·阿斯博瑞",
		actor: "曼迪·帕廷金，雷恩·威尔森，黛米·洛瓦托",
		time:"1小时30分钟"
	},{
		imgUrl:"img/7.jpg",
		title:"亚瑟王:斗兽争霸",
		type:"动作/冒险/剧情",
		director:"盖·里奇",
		actor:"查理·汉纳姆，裘德·洛，阿斯特丽德·伯格斯-弗瑞斯贝",
		time:"2小时6分钟"
	}],
	plan:[{
		planid:"201701",
		plancinema:"民族情怀",
		planplay:"亚瑟王:斗兽争霸",
		plantime:"12:00 ~ 2:30",
		price:"￥30.00"
	},{
		planid:"201702",
		plancinema:"奥斯卡情调",
		planplay:"蓝精灵",
		plantime:"12:00 ~ 1:30",
		price:"￥21.00"
	},{
		planid:"201703",
		plancinema:"城市韵味",
		planplay:"灵狼传奇",
		plantime:"12:00 ~ 2:30",
		price:"￥40.00"
	},{
		planid:"201704",
		plancinema:"民族情怀",
		planplay:"喜欢你",
		plantime:"3:00 ~ 5:00",
		price:"￥Free"
	},{
		planid:"201705",
		plancinema:"乡村风情",
		planplay:"拆弹专家",
		plantime:"12:00 ~ 2:30",
		price:"￥18.00"
	},{
		planid:"201706",
		plancinema:"乱七八糟",
		planplay:"亚瑟王:斗兽争霸",
		plantime:"5:00 ~ 7:00",
		price:"￥20.00"
	}],
	user:[{
		userid:"04153077",
		password:"153077",
		username:"祁浩东",
		privilege:"root"
	},{
		userid:"04153079",
		password:"153079",
		username:"仲纳蔚",
		privilege:"root"
	},{
		userid:"04153080",
		password:"153080",
		username:"李佳伟",
		privilege:"root"
	},{
		userid:"04153082",
		password:"153082",
		username:"魏天亮",
		privilege:"root"
	},{
		userid:"04153098",
		password:"153098",
		username:"孙美鑫",
		privilege:"root"
	},{
		userid:"04153099",
		password:"153099",
		username:"李蓉",
		privilege:"root"
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
			var flag = 0,j;

			for(var i=0;i<object.user.length;i++){
				if(object.user[i].userid === userid && object.user[i].password === password){
					flag = 1;
					j = i;
				}
			}

			if(flag == 1){
				var data = object.user[j];
				object.loginSuccess(data);
				var state = ifRemember();
				if(state){
					storeCookie(data.userid,data.password);
				}
				object.exit(data);
			}else{
				alert("账号/密码 错误");
			}
		},false);
	},
	loginSuccess:function(data){
		var containerMain = document.getElementsByClassName("container-main")[0];
		closeLoginBox();
		containerMain.style.display = "block";
		changeLoginTitle(data.username);
		this.cinemaAction();
	},	
	exit:function(data){
		var exit = document.getElementById("exit");
		exit.addEventListener("click",function(){
			// object.initial();
			window.location.href="index.html";
			deleteCookie(data.userid,data.password);
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
				var name = $(e.target).prop("name");
				$("." + name).parent().children().css("display","none");
				$("." + name).css("display","block");
			},false);
		}
	},
	cinemaAction:function(){
		object.cinemaNavClick();
		showCinemaTable();
		//详情操作
		$(document).on("click",".cinema .table-two td a:nth-child(1)",function(e){
			var id = $(e.target).parent().parent().children(":first").text();
			trigger(id);
		});
		//删除操作
		$(document).on("click",".cinema .table-two td a:nth-child(2)",function(e){
			if(confirm("确定删除吗？")){
				// $(e.target).parent().parent().css("display","none");
				//在数组中删除
				var id = $(e.target).parent().parent().children(":first").text();
				deleteFromArr(id,object.cinema,"cinema");
				showCinemaTable();
			}
		});
		//更新操作
		$(document).on("click",".cinema .table-two td a:nth-child(3)",function(e){
			var html =
						"<div class='boxHeader'><h2>修改</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>修改名称：</dt>"
									+"<dt><input type='text' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".updateBox").html(html);
			showBox("updateBox");
			//点击更新框的保存按钮
			$(".updateBox .updateButton").click(function(){
				changeCinemaName(e);
				showCinemaTable();
				closeBox("updateBox");
			});
			$(".updateBox .boxHeader span").click(function(){
				closeBox("updateBox");
			});
		});
		//添加影厅
		$(".cinema .btn a").click(function(){
			var html = "<div class='boxHeader'><h2>添加</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>添加影厅ID：</dt>"
									+"<dt><input type='text' id='cinemaID' class='addTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加影厅名称：</dt>"
									+"<dt><input type='text' id='cinemaName' class='addTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".addBox").html(html);
			showBox("addBox");
			$(".addBox .boxHeader span").click(function(){
				closeBox("addBox");
			});
			$(".addBox .updateButton").click(function(){
				var id = $("#cinemaID").val();
				var name = $("#cinemaName").val();
				addCinema(id,name);
			});
		});
		object.cinemaInfoBtn();
		//hover显示坐标
		$(document).on("mouseover",".cinema .seatMain div",function(e){
			var index = $(this).index()+1;
			var data = getIndexXY(index);
			var string = data.x + "排" + data.y + "列";

			$(this).children(":first").attr("data-attr",string);
			$(this).children(":first").addClass("hover");
		});
		$(document).on("mouseout",".cinema .seatMain div",function(e){
			$(this).children(":first").removeClass("hover");
		});
	},
	cinemaNavClick:function(){
		$(".cinema .main-content .title li").click(function(){
			$(this).parent().children().removeClass("cur");
			var newName = $(this).addClass("cur").attr('name');
			$(".cinema .content").css("display","none");
			$(".cinema #"+newName).css("display","block");
		});
	},
	cinemaInfoBtn:function(){
		$(".cinema #cinemaInfo #btn").click(function(){
			var id = $(".cinema #cinemaInfo #txt").val();
			showSeat(id);
		});
	},
	playAction:function(){
		showPlayTable();
		//添加剧目
		$(".play .btn a:nth-child(1)").click(function(){
			var html =
						"<div class='boxHeader'><h2>添加</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>添加图片地址：</dt>"
									+"<dt><input type='text' id='playImg' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加剧目名称：</dt>"
									+"<dt><input type='text' id='playTitle' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加剧目类型：</dt>"
									+"<dt><input type='text' id='playType' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".addPlayBox").html(html);
			showBox("addPlayBox");
			$(".addPlayBox .boxHeader span").click(function(){
				closeBox("addPlayBox");
			});
			$(".addPlayBox .boxContent .updateButton").click(function(){
				var imgUrl = $(".addPlayBox #playImg").val();
				var title = $(".addPlayBox #playTitle").val();
				var type = $(".addPlayBox #playType").val();
				
				// var div = document.createElement("div");
				// div.className = "playDiv";
				// var html =
				// 		"<img src=" +imgUrl + ">"
				// 		+"<div class='playTitle'>"
				// 			+"<span>" + title + "</span>"
				// 			+"<br />"
				// 			+"<span class='playType'>" + type + "</span>"
				// 		+"</div>";
				// div.innerHTML = html;

				// $(".play .page").append(div);
				var data = {
					imgUrl:imgUrl,
					title:title,
					type:type
				};
				addFromArr(data,object.play,"play");
				showPlayTable();
				closeBox("addPlayBox");
			});
		});
		//单击playDiv
		$(document).on("click",".play .playDiv",function(e){
			$(this).parent().children().removeClass("border");
			$(this).toggleClass("border");
			//修改剧目
			$(".play .btn a:nth-child(2)").click(function(){
				var html =
						"<div class='boxHeader'><h2>修改</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>修改图片地址：</dt>"
									+"<dt><input type='text' id='playImg' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>修改剧目名称：</dt>"
									+"<dt><input type='text' id='playTitle' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>修改剧目类型：</dt>"
									+"<dt><input type='text' id='playType' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
				$(".updatePlayBox").html(html);
				showBox("updatePlayBox");
				$(".updatePlayBox .boxHeader span").click(function(){
					closeBox("updatePlayBox");
				});
				$(".updatePlayBox .boxContent .updateButton").click(function(){
					var imgUrl = $(".updatePlayBox #playImg").val();
					var title = $(".updatePlayBox #playTitle").val();
					var type = $(".updatePlayBox #playType").val();
					var oldTitle = $(this).find(".playTitle").children(":first").text();
					console.log(oldTitle);
					// $(that).find("img").prop("src",imgUrl);
					// $(that).find(".playTitle span:nth-child(1)").html(title);
					// $(that).find(".playTitle span:nth-child(2)").text(type);
					var data = {
						imgUrl:imgUrl,
						title:title,
						type:type,
						oldTitle:oldTitle
					};
					updateFromArr(data,object.play,"play");
					showPlayTable();
					closeBox("updatePlayBox");
				}.bind(this));
			}.bind(this));
			//删除剧目
			$(".play .btn a:nth-child(3)").click(function(){
				// $(that).css("display","none");
				// var name = $(this).find(".playTitle").children(":first").text();
				var $page = $(".play .page");
				var $playDiv = $page.children();
				var name;
				for(var i=0;i<$playDiv.length;i++){
					if($playDiv.eq(i).hasClass("border")){
						name = $playDiv.eq(i).find(".playTitle").children(":first").text();
						break;
					}
				}
				deleteFromArr(name,object.play,"play");
				showPlayTable();
			}.bind(this));
		});
		//双击playDiv
		$(document).on("dblclick",".play .playDiv",function(){
			var title = $(this).find(".playTitle span:nth-child(1)").text();
			var director;
			var actor;
			var time;
			var arr = object.play;
			var j;
			for(var i =0; i<arr.length;i++){
				if(arr[i].title == title){
					director = arr[i].director;
					actor = arr[i].actor;
					time = arr[i].time;
					j = i;
					break;
				}
			}

			var html =
						"<div class='boxHeader'><h2>详情</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>剧名：</dt>"
									+"<dt><input value="+title+ " readonly='readonly' type='text' id='playTitle' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>导演：</dt>"
									+"<dt><input value="+ director +" type='text' id='playDirector' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>演员表：</dt>"
									+"<dt><input value="+ actor +" type='text' id='playActor' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>时长：</dt>"
									+"<dt><input value="+ time +" type='text' id='playTime' class='updateTxt'></td>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".morePlayBox").html(html);
			showBox("morePlayBox");
			$(".morePlayBox .boxHeader span").click(function(){
				closeBox("morePlayBox");
			});
			$(".morePlayBox .boxContent .updateButton").click(function(){
				arr[j].director = $("#playDirector").val();
				arr[j].actor = $("#playActor").val();
				arr[j].time = $("#playTime").val();
				closeBox("morePlayBox");
			});
		});
	},
	planAction:function(){
		showPlanTable();
		//添加演出计划
		$(".plan .btn a:nth-child(1)").click(function(){
			var html =
							"<div class='boxHeader'><h2>添加</h2><span>X</span></div>"
								+"<div class='boxContent'>"
									+"<dl class='list'>"
										+"<dt>计划ID：</dt>"
										+"<dt><input type='text' id='planID' class='updateTxt'></td>"
									+"</dl>"
									+"<dl class='list'>"
										+"<dt>所在影厅：</dt>"
										+"<dt><input type='text' id='planCinema' class='updateTxt'></td>"
									+"</dl>"
									+"<dl class='list'>"
										+"<dt>演出剧目：</dt>"
										+"<dt><input type='text' id='planPlay' class='updateTxt'></td>"
									+"</dl>"
									+"<dl class='list'>"
										+"<dt>演出时间：</dt>"
										+"<dt><input type='text' id='planTime' class='updateTxt'></td>"
									+"<dl class='list'>"
										+"<input type='button' value='保存' class='updateButton'>"
									+"</dl>"
								+"</div>";
			$(".addPlanBox").html(html);
			showBox("addPlanBox");

			$(".addPlanBox .boxHeader span").click(function(){
				closeBox("addPlanBox");
			});
			$(".addPlanBox .boxContent .updateButton").click(function(){
				var id = $(".addPlanBox #planID").val();
				var cinema = $(".addPlanBox #planCinema").val();
				var play = $(".addPlanBox #planPlay").val();
				var time = $(".addPlanBox #planTime").val();
		
				addPlanBox(id,cinema,play,time);
				showPlanTable();
				closeBox("addPlanBox");
			});
		});
		//删除演出计划
		$(document).on("click",".plan .table-two a:nth-child(1)",function(e){
			if(confirm("确定删除吗？")){
				// $(e.target).parent().parent().css("display","none");
				var id = $(e.target).parent().parent().children(":first").text();
				deleteFromArr(id,object.plan,"plan");
				showPlanTable();
			}
		});
		//修改演出计划
		$(document).on("click",".plan .table-two td a:nth-child(2)",function(e){
			var html =
						"<div class='boxHeader'><h2>修改</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>修改计划ID：</dt>"
									+"<dt><input type='text' id='upID' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>修改所在影厅：</dt>"
									+"<dt><input type='text' id='upCinema' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>修改演出剧目：</dt>"
									+"<dt><input type='text' id='upPlay' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>修改演出时间：</dt>"
									+"<dt><input type='text' id='upTime' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".updatePlanBox").html(html);
			showBox("updatePlanBox");
			//点击更新框的保存按钮
			$(".updatePlanBox .updateButton").click(function(){
				var id = $(".updatePlanBox #upID").val();
				var cinema = $(".updatePlanBox #upCinema").val();
				var play = $(".updatePlanBox #upPlay").val();
				var time = $(".updatePlanBox #upTime").val();
				var oldid = $(e.target).parent().parent().children(":first").text();
				
				// t.find("td:nth-child(1)").text(id);
				// t.find("td:nth-child(2)").text(cinema);
				// t.find("td:nth-child(3)").text(play);
				// t.find("td:nth-child(4)").text(time);
				var data = {
					planid:id,
					plancinema:cinema,
					planplay:play,
					plantime:time,
					oldid:oldid
				};
				updateFromArr(data,object.plan,"plan");
				showPlanTable();
				closeBox("updatePlanBox");
			});
			$(".updatePlanBox .boxHeader span").click(function(){
				closeBox("updatePlanBox");
			});
		});
	},
	userAction:function(){
		showUserTable();
		$(".user .btn a:nth-child(1)").click(function(){
			var html =
						"<div class='boxHeader'><h2>添加</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>添加用户ID：</dt>"
									+"<dt><input type='text' id='addUserID' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加用户名称：</dt>"
									+"<dt><input type='text' id='addUserName' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加用户权限：</dt>"
									+"<dt><input type='text' id='addUserPrivilege' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".addUserBox").html(html);
			showBox("addUserBox");
			$(".addUserBox .boxHeader span").click(function(){
				closeBox("addUserBox");
			});
			$(".addUserBox .boxContent .updateButton").click(function(){
				var id = $(".addUserBox #addUserID").val();
				var name = $(".addUserBox #addUserName").val();
				var privilege = $(".addUserBox #addUserPrivilege").val();
				
				addUserBox(id,name,privilege);
				showUserTable();
				closeBox("addUserBox");
			});
		});
		$(document).on("click",".user .table-two td a:nth-child(1)",function(e){
			if(confirm("确定删除吗？")){
				// $(e.target).parent().parent().css("display","none");
				var id = $(e.target).parent().parent().children(":first").text();
				deleteFromArr(id,object.user,"user");
				showUserTable();
			}
		});
		$(document).on("click",".user .table-two td a:nth-child(2)",function(e){
			var html =
					"<div class='boxHeader'><h2>修改</h2><span>X</span></div>"
						+"<div class='boxContent'>"
							+"<dl class='list'>"
								+"<dt>修改用户ID：</dt>"
								+"<dt><input type='text' id='upUserID' class='updateTxt'></td>"
							+"</dl>"
							+"<dl class='list'>"
								+"<dt>修改用户名称：</dt>"
								+"<dt><input type='text' id='upUserName' class='updateTxt'></td>"
								+"</dl>"
							+"<dl class='list'>"
								+"<dt>修改用户权限：</dt>"
								+"<dt><input type='text' id='upUserPrivilege' class='updateTxt'></td>"
							+"</dl>"
							+"<dl class='list'>"
								+"<input type='button' value='保存' class='updateButton'>"
							+"</dl>"
						+"</div>";
			$(".updateUserBox").html(html);
			showBox("updateUserBox");
			$(".updateUserBox .boxHeader span").click(function(){
				closeBox("updateUserBox");
			});
			$(".updateUserBox .boxContent .updateButton").click(function(){
				var id = $(".updateUserBox #upUserID").val();
				var name = $(".updateUserBox #upUserName").val();
				var privilege = $(".updateUserBox #upUserPrivilege").val();
				var oldid = $(e.target).parent().parent().children(":first").text();
				
				// t.find("td:nth-child(1)").text(id);
				// t.find("td:nth-child(2)").text(name);
				// t.find("td:nth-child(3)").text(privilege);
				
				var data = {
					userid:id,
					username:name,
					privilege:privilege,
					oldid:oldid
				};
				updateFromArr(data,object.user,"user");
				showUserTable();
				closeBox("updateUserBox");
			});
		});
	},
	ticketAction:function(){
		showTicketTable();
		//添加票务
		$(".ticket .btn a:nth-child(1)").click(function(){
			var html =
						"<div class='boxHeader'><h2>添加</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>添加计划ID：</dt>"
									+"<dt><input type='text' id='upID' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加演出剧目：</dt>"
									+"<dt><input type='text' id='upPlay' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加所在影厅：</dt>"
									+"<dt><input type='text' id='upCinema' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加演出时间：</dt>"
									+"<dt><input type='text' id='upTime' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加价格：</dt>"
									+"<dt><input type='text' id='upPrice' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";

			$(".addTicketBox").html(html);
			showBox("addTicketBox");
			$(".addTicketBox .boxHeader span").click(function(){
				closeBox("addTicketBox");
			});
			$(".addTicketBox .boxContent .updateButton").click(function(){
				var id = $(".addTicketBox .boxContent #upID").val();
				var play = $(".addTicketBox .boxContent #upPlay").val();
				var cinema = $(".addTicketBox .boxContent #upCinema").val();
				var time = $(".addTicketBox .boxContent #upTime").val();
				var price = $(".addTicketBox .boxContent #upPrice").val();

				var data = {
					planid:id,
					planplay:play,
					plancinema:cinema,
					plantime:time,
					price:price
				};

				addFromArr(data,object.plan,"ticket");
				showPlanTable();
			});
		});
		//删除操作
		$(document).on("click",".ticket .table-two td a:nth-child(2)",function(e){
			var oldid = $(e.target).parent().parent().children(":first").text();
			if(confirm("确定删除吗？")){
				deleteFromArr(oldid,object.plan,"ticket");
				showTicketTable();
			}
		});
		//修改操作
		$(document).on("click",".ticket .table-two td a:nth-child(3)",function(e){
			var html =
						"<div class='boxHeader'><h2>修改</h2><span>X</span></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>添加计划ID：</dt>"
									+"<dt><input type='text' id='upTicketID' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加演出剧目：</dt>"
									+"<dt><input type='text' id='upTicketPlay' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加所在影厅：</dt>"
									+"<dt><input type='text' id='upTicketCinema' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加演出时间：</dt>"
									+"<dt><input type='text' id='upTicketTime' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<dt>添加价格：</dt>"
									+"<dt><input type='text' id='upTicketPrice' class='updateTxt'></td>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='保存' class='updateButton'>"
								+"</dl>"
							+"</div>";
			$(".updateTicketBox").html(html);
			showBox("updateTicketBox");
			$(".updateTicketBox .boxHeader span").click(function(){
				closeBox("updateTicketBox");
			});
			$(".updateTicketBox .boxContent .updateButton").click(function(){
				var oldid = $(e.target).parent().parent().children(":first").text();
				var planid = $(".updateTicketBox #upTicketID").val();
				var plancinema = $(".updateTicketBox #upTicketCinema").val();
				var planplay = $(".updateTicketBox #upTicketPlay").val();
				var plantime = $(".updateTicketBox #upTicketTime").val();
				var price = $(".updateTicketBox #upTicketPrice").val();
				
				var data = {
					planid:planid,
					planplay:planplay,
					plancinema:plancinema,
					plantime:plantime,
					price:price,
					oldid:oldid
				};

				updateFromArr(data,object.plan,"ticket");
				showTicketTable();
				closeBox("updateTicketBox");
			});
		});
		//详情操作
		$(document).on("click",".ticket .table-two td a:nth-child(1)",function(e){
			var id = $(e.target).parent().parent().children(":first").text();
			ticketTrigger(id);
		});
		//查询按钮
		object.ticketSaleBtn();
		//hover显示坐标
		$(document).on("mouseover",".ticket .seatMain div",function(e){
			var index = $(this).index()+1;
			var data = getIndexXY(index);
			var string = data.x + "排" + data.y + "列";

			$(this).children(":first").attr("data-attr",string);
			$(this).children(":first").addClass("hover");
		});
		$(document).on("mouseout",".ticket .seatMain div",function(e){
			$(this).children(":first").removeClass("hover");
		});

	},
	ticktNavClick:function(){
		$(".ticket .main-content .title li").click(function(){
			$(this).parent().children().removeClass("cur");
			var newName = $(this).addClass("cur").attr("name");
			$(".ticket .content").css("display","none");
			$(".ticket #"+newName).css("display","block");
		});
	},
	ticketSaleBtn:function(){
		var count = 0;
		$(".ticket #ticketSale #btn").click(function(){
			var id = $(".ticket #ticketSale #txt").val();
			showSale(id);

			//点击更改票状态
			var cinema,play,time,price;
			for(var i=0;i<object.plan.length;i++){
				if(id == object.plan[i].planid){
					cinema = object.plan[i].plancinema;
					play = object.plan[i].planplay;
					time = object.plan[i].plantime;
					price = object.plan[i].price;
					break;
				}
			}
			var data = {
				cinema:cinema,
				play:play,
				time:time,
				price:price,
			};
			$(".ticket .seatMain div").click(function(){
				if($(this).css("background-color") == "rgb(0, 132, 62)"){
					var index = $(this).index() + 1;
					var l = getIndexXY(index);
					data.seat = "第"+l.x+ "排第"+l.y+"列";
					
					//第一次点击购票
					$(this).addClass("yellow");
					firstCountTicket(data);
					$(".saleBox #yes").click(function(){
						$(this).removeClass();
						$(this).addClass("redTrue");
						closeBox("saleBox");
					}.bind(this));
					$(".saleBox #no").click(function(){
						$(this).removeClass();
						$(this).addClass("green");
						closeBox("saleBox");
					}.bind(this));
				}

				//退票
				if($(this).hasClass("redTrue")){
					var that = this;
					if(confirm("确定退票吗？")){
						$(that).removeClass();
						$(that).addClass("green");
					}	
				}
			});
		});
	}

};
window.onload = function(){
	object.initial();
	object.loginDelClick();
	object.loginButtonClick();
	object.identifyClick();
	object.mainNavClick();
	object.playAction();
	object.planAction();
	object.ticktNavClick();
	object.ticketAction();
	object.userAction();
};

function showLoginBox(){
	var userid = document.getElementsByClassName("userid")[0];
	var password = document.getElementsByClassName("password")[0];
	var btnState = document.getElementsByClassName("remeBtn")[0];
	var data = getCookie();
	if(!data.userid){
		userid.value = "";
		password.value = "";
	}else{
		userid.value = data.userid;
		password.value = data.password;
		btnState.setAttribute("checked",true);
	}
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
function storeCookie(userid,password){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + 30);
	document.cookie = "userid=" + escape(userid)+"; expires="+oDate.toGMTString();
	document.cookie = "password=" + escape(password)+"; expires="+oDate.toGMTString();
}
function deleteCookie(userid,password){
	var oDate = new Date();
	//设置expires为过去的时间即可
	oDate.setDate(oDate.getDate() -1000);
	document.cookie = "userid=" + escape(userid) + "; expires="+oDate.toGMTString();
	document.cookie = "password=" + escape(password)+ "; expires="+oDate.toGMTString();
}
function getCookie(){
	var data={};
	var userid,password;
	var arrCookie = document.cookie.split(";");
	for(var i=0;i<arrCookie.length;i++){
		var arr = arrCookie[i].split("=");
		if("userid" == arr[0]){
			userid = unescape(arr[1]);
		}
		if(" password" == arr[0]){
			password = unescape(arr[1]);
		}
	}
	data.userid = userid;
	data.password = password;
	return data;
}
function ifRemember(){
	var isSelected = $(".remeBtn").prop("checked");
	return isSelected;
}
function showCinemaTable(){
	var arr = object.cinema;
	var html = "";
	for(var i=0;i<arr.length;i++){
		html +=
				"<tr>"
					+"<td>" + arr[i].cinemaid + "</td>"
					+"<td>" + arr[i].cinemaname + "</td>"
					+"<td><a>详情</a><a>删除</a><a>修改</a></td>"
				+"</tr>";
	}
	$(".cinema .table-two tbody").html(html);
}
function changeCinemaName(e){
	var id = $(e.target).parent().parent().find("td:nth-child(1)").text();
	var updateTxt = $(".updateBox .boxContent .updateTxt").val();
	// $(e.target).parent().parent().find("td:nth-child(2)").text(updateTxt);
	//修改数组内容
	var data = {};
	data.id = id;
	data.name = updateTxt;
	updateFromArr(data,object.cinema,"cinema");
	showCinemaTable();
}
function addCinema(id,name){
	var tr = document.createElement("tr");
	var td1 = document.createElement("td"),
		td2 = document.createElement("td"),
		td3 = document.createElement("td");
		td1.innerHTML = id;
		td2.innerHTML = name;
		td3.innerHTML = "<a>置顶</a><a>删除</a><a>修改</a>";
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		// $(".cinema .table-two tbody").append(tr);
		var data = {};
		data.id = id;
		data.name = name;
		addFromArr(data,object.cinema,"cinema");
		showCinemaTable();
		closeBox("addBox");
}

function showSeat(id){
	var html = "";
	for(var i=0;i<100;i++){
		html += "<div><p></p></div>";
	}
	var p;
	var arrSeat = object.seatBrokenindex;
	for(var i=0;i<arrSeat.length;i++){
		if(arrSeat[i].index == id){
			var q = true;
			var p=i;
			$(".cinema .seatMain").html(html);
			var m = arrSeat[i].title;
			for(var j=0;j<arrSeat[i].array.length;j++){
				var t = arrSeat[i].array[j];
				$(".cinema .seatMain div:nth-child(" + t +")").addClass("red");
			}
		}
	}
	if(!q){
		alert("查询不到该影厅，请核对影厅ID！");
		$(".cinema #cinemaInfo #txt").val("");
		return;
	}

	$(".cinema .seatTitle").text(m);
	$(".cinema .seat").css("display","block");
	var flag = 0;
	var j;
	$(".cinema .seatMain div").click(function(e){
		$(this).toggleClass("red");
		//改变数组
		var index = $(this).index() + 1;
		for(var i=0;i<arrSeat[p].array.length;i++){
			if(index == arrSeat[p].array[i]){
				flag = 1;
				j = i;
				break;
			}
		}
		if(!flag){
			arrSeat[p].array.push(index);
		}else{
			arrSeat[p].array.splice(j,1);
		}
	});
}
function trigger(id){
	$(".cinema .main-content .title li:nth-child(2)").trigger("click");
	$(".cinema #cinemaInfo #txt").val(id);
	$(".cinema #cinemaInfo #btn").trigger("click");
}
function ticketTrigger(id){
	$(".ticket .main-content .title li:nth-child(2)").trigger("click");
	$(".ticket #ticketSale #txt").val(id);
	$(".ticket #ticketSale #btn").trigger("click");
}
function showPlayTable(){
	var html = "";
	var arr =  object.play;
	for(var i=0;i<arr.length;i++){
		html += "<div class='playDiv'>"
					+"<img src=" + arr[i].imgUrl + ">"
					+"<div class='playTitle'>"
						+"<span>" + arr[i].title + "</span>"
						+"<br />"
						+"<span class='playType'>" + arr[i].type + "</span>"
					+"</div>"
				+"</div>";
	}
	$(".page").html(html);
}
function showPlanTable(){
	var html = "";
	var arr = object.plan;
	for(var i=0;i<arr.length;i++){
		html +=
				"<tr>"
					+"<td>" + arr[i].planid+ "</td>"
					+"<td>" + arr[i].plancinema + "</td>"
					+"<td>" + arr[i].planplay+ "</td>"
					+"<td>" + arr[i].plantime+ "</td>"
					+"<td><a>删除</a><a>修改</a></td>"
				+"</tr>";
	}
	$(".plan .table-two tbody").html(html);
}
function addPlanBox(id,cinema,play,time){
	// var tr = document.createElement("tr");
	// var td1 = document.createElement("td"),
	// 	td2 = document.createElement("td"),
	// 	td3 = document.createElement("td");
	// 	td4 = document.createElement("td"),
	// 	td5 = document.createElement("td");

	// 	td1.innerHTML = id;
	// 	td2.innerHTML = cinema;
	// 	td3.innerHTML = play;
	// 	td4.innerHTML = time;
	// 	td5.innerHTML = "<a>删除</a><a>修改</a>";
	// 	tr.appendChild(td1);
	// 	tr.appendChild(td2);
	// 	tr.appendChild(td3);
	// 	tr.appendChild(td4);
	// 	tr.appendChild(td5);
	// 	$(".plan .table-two tbody").append(tr);
	var data = {
		planid:id,
		plancinema:cinema,
		planplay:play,
		plantime:time
	};
	addFromArr(data,object.plan,"plan");
}

function showUserTable(){
	var arr = object.user;
	var html = "";
	for(var i=0;i<arr.length;i++){
		html += 
				"<tr>"
					+"<td>"+ arr[i].userid +"</td>"
					+"<td>"+ arr[i].username+"</td>"
					+"<td>"+ arr[i].privilege+"</td>"
					+"<td><a>删除</a><a>修改</a><td>"
				+"</tr>";
	}
	$(".user .table-two tbody").html(html);
}
function showBox(className){
	$(".bg").css("display","block");
	$("." + className).css("display","block");
}
function closeBox(className){
	$(".bg").css("display","none");
	$("." + className).css("display","none");
}
function addUserBox(id,name,privilege){
	// var tr = document.createElement("tr");
	// var td1 = document.createElement("td"),
	// 	td2 = document.createElement("td"),
	// 	td3 = document.createElement("td");
	// 	td4 = document.createElement("td");

	// 	td1.innerHTML = id;
	// 	td2.innerHTML = name;
	// 	td3.innerHTML = privilege;
	// 	td4.innerHTML = "<a>删除</a><a>修改</a>";
	// 	tr.appendChild(td1);
	// 	tr.appendChild(td2);
	// 	tr.appendChild(td3);
	// 	tr.appendChild(td4);
	// 	$(".user .table-two tbody").append(tr);
	var data = {
		userid:id,
		username:name,
		privilege:privilege
	};
	addFromArr(data,object.user,"user");
}
function deleteFromArr(value , array , moduleName){
	switch(moduleName){
		case "cinema":
			for(var i=0;i<array.length;i++){
				if(value == array[i].cinemaid){
					array.splice(i,1);
					for(var j=0;j<object.seatBrokenindex.length;j++){
						if(value == object.seatBrokenindex[j].index){
							object.seatBrokenindex.splice(j,1);
							break;
						}
					}
					break;
				}
			}
			break;
		case "play":
			for(var i=0;i<array.length;i++){
				if(value == array[i].title){
					array.splice(i,1);
					break;
				}
			}
			break;
		case "plan":
			for(var i=0;i<array.length;i++){
				if(value == array[i].planid){
					array.splice(i,1);
					break;
				}
			}
			break;
		case "ticket":
			for(var i=0;i<array.length;i++){
				if(value == array[i].planid){
					array.splice(i,1);
					break;
				}
			}
			break;
		case "user":
			for(var i=0;i<array.length;i++){
				if(value == array[i].userid){
					array.splice(i,1);
					break;
				}
			}
			break;
		default:
			break;
	}
}
function updateFromArr(data,array,moduleName){
	switch(moduleName){
		case "cinema":
			var id = data.id;
			var name = data.name;
			for(var i=0;i<array.length;i++){
				if(id == array[i].cinemaid){
					array[i].cinemaname = name;
					break;
				}
			}
			break;
		case "play":
			var imgUrl = data.imgUrl;
			var title = data.title;
			var type = data.type;
			var oldTitle = data.oldTitle;

			for(var i=0;i<array.length;i++){
				if(oldTitle == array[i].title){
					array[i].imgUrl = imgUrl;
					array[i].title = title;
					array[i].type = type;
					break;
				}
			}
			break;
		case "plan":
			var id = data.planid;
			var cinema = data.plancinema;
			var play = data.planplay;
			var time  = data.plantime;
			var oldid = data.oldid;

			for(var i=0;i<array.length;i++){
				if(oldid == array[i].planid){
					array[i].planid = id;
					array[i].plancinema = cinema;
					array[i].planplay = play;
					array[i].plantime = time;
					break;
				}
			}
			break;
		case "ticket":
			var oldid = data.oldid;
			for(var i=0;i<array.length;i++){
				if(oldid == array[i].planid){
					array[i].planid = data.planid;
					array[i].planplay = data.planplay;
					array[i].plancinema = data.plancinema;
					array[i].plantime = data.plantime;
					array[i].price = data.price;
					break;
				}
			}
			break;
		case "user":
			var id = data.userid;
			var name = data.username;
			var privilege = data.privilege;
			var oldid = data.oldid;
			for(var i=0;i<array.length;i++){
				if(oldid == array[i].userid){
					array[i].userid = id;
					array[i].username = name;
					array[i].privilege = privilege;
					break;
				}
			}
			break;
		default:
			break;
	}
}
function addFromArr(data,array,moduleName){
	switch(moduleName){
		case "cinema":
			var id = data.id;
			var name = data.name;
			var t = {
				cinemaid:id,
				cinemaname:name
			};
			array.push(t);
			var m = {
				index:id,
				title:name,
				array:[]
			};
			object.seatBrokenindex.push(m);
			break;
		case "play":
			var imgUrl = data.imgUrl;
			var title = data.title;
			var type = data.type;
			var t = {
				imgUrl:imgUrl,
				title:title,
				type:type,
				director:"暂未填充",
				actor:"暂未填充",
				time:"暂未填充"
			};
			array.push(t);
			break;
		case "plan":
			var id = data.planid;
			var cinema = data.plancinema;
			var play = data.planplay;
			var time = data.plantime;
			var t ={
				planid:id,
				plancinema:cinema,
				planplay:play,
				plantime:time,
				price:"￥0.00"
			};
			array.push(t);
			break;
		case "ticket":
			var t = {
				planid:data.planid,
				plancinema:data.plancinema,
				planplay:data.planplay,
				plantime:data.plantime,
				price:data.price
			};
			array.push(t);
			break;
		case "user":
			var id = data.userid;
			var name = data.username;
			var privilege = data.privilege;
			var t = {
				userid:id,
				username:name,
				privilege:privilege
			};
			array.push(t);
			break;
		default:
			break;
	}
}
function showTicketTable(){
	var arr = object.plan;
	var html = "";
	for(var i=0;i<arr.length;i++){
		html += 
				"<tr>"
					+"<td>" + arr[i].planid +"</td>"
					+"<td>" + arr[i].planplay+"</td>"
					+"<td>" + arr[i].plancinema+"</td>"
					+"<td>" + arr[i].plantime+"</td>"
					+"<td>" + arr[i].price+"</td>"
					+"<td><a>详情</a><a>删除</a><a>修改</a></td>";
	}
	$(".ticket .table-two tbody").html(html);
}
function showSale(id){
	var array = object.plan;
	var arr = object.seatBrokenindex;
	var needArr;
	var cinema,play;
	var html = "";
	var q = false;
	for(var i=0;i<array.length;i++){
		if(id == array[i].planid){
			play = array[i].planplay;
			cinema = array[i].plancinema;
			q = true;
			break;
		}
	}

	if(!q){
		alert("查询不到该演出加护，请核对计划ID！");
		$(".ticket #cinemaSale #txt").val("");
		return;
	}

	for(var i=0;i<100;i++){
		html +="<div><p></p></div>";
	}

	for(var i=0;i<arr.length;i++){
		if(cinema == arr[i].title){
			needArr = arr[i].array;
			break;
		}
	}

	$(".ticket .seatTitle").text(cinema);
	$(".ticket .seatMain").html(html);
	$(".ticket .seat").css("display","block");

	for(var i=0;i<needArr.length;i++){
		$(".ticket .seatMain div:nth-child("+needArr[i]+")").addClass("red");
	}
}
function getIndexXY(index){
	var x;
	var y;
	if(index % 10 == 0 && index >0){
		x = Math.floor(index / 10);
		y = 10;
	}else{
		y = index % 10;
		x = Math.floor(index / 10) + 1;
	}
	var data = {
		x:x,
		y:y
	};
	return data;
}
function firstCountTicket(data){
	var html =
						"<div class='boxHeader'><h2>订单</h2></div>"
							+"<div class='boxContent'>"
								+"<dl class='list'>"
									+"<dt>剧目："+ data.play+"</dt>"
									+"<dt>影厅："+ data.cinema+"</dt>"
									+"<dt>时间："+ data.time+"</dt>"
									+"<dt>座位："+ data.seat+"</dt>"
									+"<dt>票价："+ data.price+"</dt>"
								+"</dl>"
								+"<dl class='list'>"
									+"<input type='button' value='确定' id='yes' class='updateButton'>"
									+"<input type='button' value='取消' id='no' class='updateButton'>"
								+"</dl>"
							+"</div>";
	$(".saleBox").html(html);
	showBox("saleBox");
}