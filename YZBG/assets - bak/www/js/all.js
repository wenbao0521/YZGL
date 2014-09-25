// JavaScript Document
  var tbgzdb = window.openDatabase("tbgzzfxxt", "1.0","数据库描述",20000);//-------------------------------------------这是特别关注zf的信息
//获取url中的一个参数，多个不行
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数s
	if (r!=null) return unescape(r[2]); return null; //返回参数值
} 


//主页
function initdatabase(){
	if(window.openDatabase){
  alert('支持');
}else{
	alert("不支持创建数据库！");
	breack;
}
  var db = window.openDatabase("mydata1111", "1.0","数据库描述",20000);

  //window.openDatabase("数据库名字", "版本","数据库描述",数据库大小);
  if(db)
  alert("新建数据库成功！");

  db.transaction(function(tx) {
//  var guid = Guid.NewGuid().toString().replace(/,/g, "");

  tx.executeSql("CREATE TABLE if not exists test (guid varchar , mytitle TEXT, timestamp REAL)");
  tx.executeSql("CREATE TABLE if not exists [CrimsImage] ([bh] VARCHAR(15), [image] BLOB(500), [imgtype] VARCHAR(10))");
  tx.executeSql(" CREATE TABLE if not exists [CrimsInfo] (  [bh] VARCHAR(10),   [nl] VARCHAR(5),   [xm] VARCHAR(100),   [csrq] VARCHAR(15),   [zm] VARCHAR(100), "+
  " [xq] VARCHAR(20),   [qr] VARCHAR(20),   [zr] VARCHAR(20),   [hjgw] VARCHAR(20),   [hjzh] VARCHAR(20),   [tah] VARCHAR(100),   [hjqh] NVARCHAR(20), "+
  "  [hjmx] NVARCHAR(30),   [aflb] VARCHAR(20),   [compbm] VARCHAR(10),   [db] VARCHAR(20),   [jsh] VARCHAR(16),   [cwh] VARCHAR(3),   [beadroll_guid] VARCHAR(50), "+
  "  [zybz] VARCHAR(10),   [rjrq] VARCHAR(15),   [czzl] VARCHAR(15),   [xmpy] VARCHAR(200),   [xh] VARCHAR(10),   [xb] VARCHAR(5)) ")
  tx.executeSql("CREATE TABLE if not exists [KeyCrimsInfo] (   [guid] VARCHAR(50),   [bh] VARCHAR(10),   [zzlb] VARCHAR(40),   [wwxz] NVARCHAR(100),   [zzyy] VARCHAR(500),"+
  "   [bjr] VARCHAR(100),   [jggj] VARCHAR(100),   [zkjb] VARCHAR(20),   [xltz] VARCHAR(50))");
  
  
  
  });
}
 
  
  
  
  
  
function initdeta(){
	var db = window.openDatabase("mydata1111", "1.0","数据库描述",20000);
	db.transaction(function(tx) {
	var guid = newGuid();
  	tx.executeSql("INSERT INTO test (guid,mytitle, timestamp) values(?,?,?)", [guid,"WEB Database", new Date().getTime()], null, null);
	tx.executeSql("INSERT INTO CrimsImage (bh,image, imgtype) values(?,?,?)", [guid,"WEB Database", new Date().getTime()], null, null);
	tx.executeSql("INSERT INTO crimsinfo (bh,nl,xm,csrq,zm,xq,qr,zr,hjgw,hjzh,tah,hjqh,hjmx,aflb,compbm,db,jsh,cwh,beadroll_guid,zybz,rjrq,czzl,xmpy,xh,xb) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
	["1121045711","26","党皓鑫","1987.11.01","这是罪名。。。","03_06_00","2012.06.04","2015.12.03","","","110108人民法院海刑初字2013001632","北京市","石佛营西里24号楼1单元501","一般刑事犯","1121","一分监区","3","",guid,"北京暂押","","","","","男"], null, null);
	tx.executeSql("INSERT INTO crimsinfo (bh,nl,xm,csrq,zm,xq,qr,zr,hjgw,hjzh,tah,hjqh,hjmx,aflb,compbm,db,jsh,cwh,beadroll_guid,zybz,rjrq,czzl,xmpy,xh,xb) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
	["1121045763","26","冯四仪","1987.11.01","这是罪名","03_06_00","2012.06.04","2015.12.03","","","110108人民法院海刑初字2013001632","北京市","石佛营西里24号楼1单元501","一般刑事犯","1121","一分监区","3","","73c3e801-c62c-4971-a599-c72f4b592a84","北京暂押","","","","","男"], null, null);


tx.executeSql("INSERT INTO KeyCrimsInfo (guid,bh,zzlb,wwxz,zzyy,bjr,jggj,zkjb,xltz)values(?,?,?,?,?,?,?,?,?)", 
[guid,"1121045763","危险分子","原省级以上民主党派负责人,省部级以上党政干部直系亲属","此处录入重控原因","赵鹏运(1121029934)","1111386","监区级","此录入写心理特征"], null, null);

  });
  	
}  
  
  //删除数据表
  function droptableall(){
	var db = window.openDatabase("mydata1111", "1.0","数据库描述",20000);
	db.transaction(function(tx) {
 tx.executeSql("drop table test")
 tx.executeSql("drop table CrimsImage")
  tx.executeSql("drop table crimsinfo")
 tx.executeSql("drop table KeyCrimsInfo")


  });
  	
}  
//生成GUID
function newGuid()
{
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
      if((i==8)||(i==12)||(i==16)||(i==20))
        guid += "-";
    }
    return guid.replace(/-/g, "");
}

//zfxxck  初始化方法
function zfxxck(){
	
//	        $("[data-type='search']").keyup(function(){//keyup

$("[class='ui-icon ui-icon-delete ui-icon-shadow']").click(function(){//输入搜索条件后，在搜索条件后有“X”关闭符号，获取点击此关闭图标，清空listView
$("#list").find("li").remove();//删除之前输入的条件后，把查出的历史列表清空
})
//$('#searchid').keyup(function(){
	 $("#searchid").on("input", function (e) {
//			alert('21'+$("[data-type='search']").val());
			var srval = $("#searchid").val().replace(/^\s+|\s+$/g,"");//去除两端空格

			if(!srval){
				$("#list").find("li").remove();//删除之前输入的条件后，把查出的历史列表清空
					return;
				}
				
			//连接数据库获得数据
			var db = window.openDatabase("mydata1111", "1.0","数据库描述",20000);
			  db.transaction(function(tx) {
			  var sql = "select * ,(case (select count(*) from keycrimsinfo where keycrimsinfo.bh = crimsinfo.bh) when 0 then 'ptzftoucss' else 'zdzftoucss' end) as ssclass,(case (select count(*) from keycrimsinfo where keycrimsinfo.bh = crimsinfo.bh) when 0 then 'ptzfweicss' else 'zdzfweicss' end) as ssclasswei  from crimsinfo where bh like '%"+srval+"%' or hjzh like '%"+srval+"%' or xm like '%"+srval+"%'"
			  tx.executeSql(sql, [],
			  function(tx, result) {
			  for(var i = 0; i < result.rows.length; i++){
//			  alert(result.rows.item(i)['mytitle']+'````'+result.rows.item(i)['timestamp']+'guid' + result.rows.item(i)['guid']);
//alert(result.rows.item(i)['zkjb']);
			/*
			 var list = $("<div id='container'> <li><div id='leftDiv'><img src='images/c.jpg' width='100px' heigth='100px'/></div>"+
				"<div id='rightDiv'  onclick='hello(this)'><div class='"+result.rows.item(i)['ssclass']+"'>姓名："+result.rows.item(i)['xm']+"("+result.rows.item(i)['bh']+")</div>"+
				"<div style='float:left'><p>性别："+result.rows.item(i)['xb']+"&nbsp&nbsp&nbsp&nbsp年龄："+"？？"+"&nbsp&nbsp&nbsp&nbsp刑期："+"14_07_00</p></div>"+
					"<div style='float:left'><p>家庭地址："+"这是家庭住址是的方式的方式地方时代发生的发生的发顺对方是的方式的方式地方时代发生的发生的方式丰士大夫士大夫水电费"+"</p></div>"+
						"<div style='float:left'><p>Broken Bells Broken Bells</p></div></div>"+
      			"</li></div>");
 			*/
			 var list = $( "<li class='' data-icon='false' data-theme='d'> <a class='ui-link-inherit' href='#xiangxi' data-rel='dialog' onclick='getzfxxxxxx("+result.rows.item(i)['bh']+",\""+result.rows.item(i)['ssclass']+"\")'> <img  width='100px' src='http://h.hiphotos.baidu.com/image/pic/item/810a19d8bc3eb135e4485776a41ea8d3fc1f4474.jpg'>"+
			 "<p class='"+result.rows.item(i)['ssclass']+"'>姓名："+result.rows.item(i)['xm']+"("+result.rows.item(i)['bh']+")</p> "+
			 " <p class='ui-li-desc'>性别："+result.rows.item(i)['xb']+"&nbsp&nbsp&nbsp&nbsp年龄："+result.rows.item(i)['nl']+"&nbsp&nbsp&nbsp&nbsp刑期："+result.rows.item(i)['xq']+"</p>"+
			 "<p class='ui-li-desc'>家庭地址："+result.rows.item(i)['hjmx']+"</p>"+
			 "<p class='"+result.rows.item(i)['ssclasswei']+"'>犯罪类型："+result.rows.item(i)['aflb']+"&nbsp&nbsp&nbsp&nbsp罪名："+result.rows.item(i)['zm']+"</p>"+
			 " </a> </li>"

				);
			
					
			    $("#list").append(list).find("li:last").hide();
                $('ul').listview('refresh');
                $("#list").find("li:last").slideDown(300);
			}

			  }, function(tx,error){
			  		alert("error："+error.message);
			  });
			 			 $("#list").find("li").remove();//不remove，会一直append li元素，没查询完成后，remove一次
			  });
							
	
            });
			
}






//
//获取 罪犯信息详细信息
function getzfxxxxxx(zfbh,zflx){
	
	var db = window.openDatabase("mydata1111", "1.0","数据库描述",20000);
			  db.transaction(function(tx) {
		var sql = '';	
		if(zflx == 'zdzftoucss'){//重点罪犯
			sql='select * from crimsinfo c,keycrimsinfo k where k.bh = c.bh and c.bh ='+zfbh;
			$('#photodown1').show();
		}else if(zflx == 'ptzftoucss'){//普通罪犯
			sql='select * from crimsinfo where bh ='+zfbh;
			$('#photodown1').hide();
		}

			  tx.executeSql(sql, [],
			  function(tx, result) {
			  for(var i = 0; i < result.rows.length; i++){
			  	$('#xmid').text('姓名:'+result.rows.item(i)['xm']);
				$('#nlid').text('年龄:'+result.rows.item(i)['nl']);
				$('#csnyid').text('出生年月:'+result.rows.item(i)['csrq']);
				$('#xqid').text('刑期:'+result.rows.item(i)['xq']);
				
				$('#qrid').text('起日:'+result.rows.item(i)['qr']);
				$('#zrid').text('止日:'+result.rows.item(i)['zr']);
				$('#rjid').text('入监日期:'+result.rows.item(i)['rjrq']);
				
				$('#zflx').text('罪犯类型:'+result.rows.item(i)['aflb']);
				$('#zm').text('罪名:'+result.rows.item(i)['zm']);
				$('#hjgw').text('互监岗位:'+result.rows.item(i)['hjgw']);
				$('#hjzh').text('互监组号:'+result.rows.item(i)['hjzh']);
				$('#cl').text('暂押/常留:'+result.rows.item(i)['czzl']);
				$('#hjzy').text('互监组员:互监成员。。。。');
				$('#jdzz').text('家庭住址:'+result.rows.item(i)['hjmx']);

				$('#zdzflx').text('罪犯类型:'+result.rows.item(i)['zzlb']);
				$('#zfxltzid').text('罪犯心里特征:'+result.rows.item(i)['xltz']);
				$('#szwzid').text('所在位置:所在位置没找到');
				$('#bjzfmdid').text('包夹罪犯名单:'+result.rows.item(i)['bjr']);
				$('#zrgjid').text('责任干警:'+result.rows.item(i)['jggj']);
				$('#zkjb').text('重控级别:'+result.rows.item(i)['zkjb']);
				$('#wwxzid').text('顽危性质:'+result.rows.item(i)['wwxz']);
				$('#zdyyid').text('重点原因:'+result.rows.item(i)['zzyy']);

			  
			  }
			  })
});
//alert($("#xiangxinr").width());
//	alert($("#xiangxi").width());
	//给照片右边的文字设置宽度
	  $("#photoleft").width('40%')
}


//----------------------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//----------------------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//----------------------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




function getSJSYRInfo(){//获取手机使用人信息，每开一次程序，重新获取一次
	$.getScript(getServerIpAddress()+"/YZBGinterface/AspWebServiceClientGetGanJingInfo?callbackname=getBack&hid=864219020023223",function(response,status){/*alert(response+"funciton"+status);*/});	
	 
}
function getBack(data){
	window.localStorage.clear();
	window.localStorage.setItem("gjbh",data[0].gjbh); //干警编号
    window.localStorage.setItem("jh",data[0].jh);//警号
    window.localStorage.setItem("dwbm",data[0].dwbm);//警号	
	window.localStorage.setItem("bm1mc",data[0].bm1mc);//部门1
	window.localStorage.setItem("bm2mc",data[0].bm2mc);//部门2
	window.localStorage.setItem("xm",data[0].xm);//部门2		
		getZJSPCount();
};


//----------------------------imei
function getPluginInfo(){
		document.addEventListener("deviceready", onDeviceReady, false);	
}	
	function onDeviceReady() {
		//PhoneGap.exec(successFunction, failFunction, "MyPlugin","echo",["a","b"]);
		PhoneGap.exec(successFunction, failFunction, "MyPlugin","imei",["a","b"]);
	}
	
	function successFunction(e){
/*		$("#searchid").val(e);
		$("#searchid").focus();*/
alert(e);		
		window.sessionStorage.setItem("imei",e);
	}
	function failFunction(e){
		alert("fail:"+e);
		return;
	}

//-------------------nfc
function  getNFCPluginInfo(){
	document.addEventListener("deviceready", onNFCDeviceReady, false);	
}
	function onNFCDeviceReady() {
		//PhoneGap.exec(successFunction, failFunction, "MyPlugin","echo",["a","b"]);
		PhoneGap.exec(NFCSuccessFunction, NFCfailFunction, "MyPlugin","nfc",["a","b"]);
	}
	
	function NFCSuccessFunction(e){

		$("#searchid").val(e);
		$("#searchid").focus();

		$("#searchid").bind("propertychange focus",function(){//获取nfc卡之后，给搜索框焦点，此处是监听focus焦点事件的。
				var srval = $("#searchid").val().replace(/^\s+|\s+$/g,"");//去除两端空格\
		
					if(!srval){
						$("#list").find("li").remove();//删除之前输入的条件后，把查出的历史列表清空
							return;
						}
		$.getScript(getServerIpAddress()+"/YZBGinterface/GetData?par="+escape(escape(srval))+"&callbackname=getServerDetaCallBack&hid=864219020023223&sqlid=10&appid=11",function(response,status){/*alert(response+"--funciton--"+status);*/});	
		})

	}//NFCSuccessFunction
	function NFCfailFunction(e){
		alert("fail:"+e);
		return;
	}









//根据输入数据获取服务器数据
function getServerDeta(){

/*	$(document).keydown(function(event){
if(event.keyCode == 8){
	alert();
}
});*/
	
/*	alert("getServerDeta");
	var srval = $("#searchid").val().replace(/^\s+|\s+$/g,"");//去除两端空格
	$.getScript("http://192.168.1.3:8080/YZBGinterface/DA_JBXXServlet?querypar="+srval+"&callbackname=getServerDetaCallBack",function(){alert("e");},function(){alert("1");});	
*/

$("[class='ui-icon ui-icon-delete ui-icon-shadow']").click(function(){//输入搜索条件后，在搜索条件后有"X"关闭符号，获取点击此关闭图标，清空listView
$("#list").find("li").remove();//删除之前输入的条件后，把查出的历史列表清空
})
//	 $("#searchid").on("input", function (e) {
	

	
	
		 $("#searchid").on("input", function (e) {
			var srval = $("#searchid").val().replace(/^\s+|\s+$/g,"");//去除两端空格\

			if(!srval){
				$("#list").find("li").remove();//删除之前输入的条件后，把查出的历史列表清空
					return;
				}
//$.getScript("http://192.168.2.173:8080/YZCSinterface/CeShi?name="+serverDataByThis+"&callbackname=getServerDetaCallBack");	

//$.getScript(getServerIpAddress()+"/YZBGinterface/DA_JBXXServlet?action=getmaininfo&querypar="+escape(escape(srval))+"&callbackname=getServerDetaCallBack",function(response,status){/*alert(response+"funciton"+status);*/});	
//  "+window.sessionStorage.getItem("imei")+"

$.getScript(getServerIpAddress()+"/YZBGinterface/GetData?par="+escape(escape(srval))+"&callbackname=getServerDetaCallBack&hid=864219020023223&sqlid=10&appid=11",function(response,status){/*alert(response+"--funciton--"+status);*/});	


});	

	
	
	
	//
//	var serverDataByThis=$("#serverDataByThis").val();
//	alert(serverDataByThis+"getServerDeta");
//	/*$.ajax({ 
//			 url: "http://192.168.159.3:8080/YZCSinterface/CeShi", 
//			 data:{"name":serverDataByThis},
//			 type:"post",
//			 success: function(data){
//				alert(data+"success");	
//		  },
//		   error: function(XMLHttpRequest, textStatus, errorThrown) {
//                        alert(XMLHttpRequest.status);
//                        alert(XMLHttpRequest.readyState);
//                        alert(textStatus);
//                    }
//
//		 });*/
//		 
// $.getScript("http://192.168.2.173:8080/YZCSinterface/CeShi?name="+serverDataByThis+"&callbackname=getServerDetaCallBack");

}
//获取后台数据后的回调方法
function getServerDetaCallBack(data){

	$("#list").find("li").remove();//先删除以前的数据		 
			  for(var i = 0; i < data.length; i++){
			 var list ="<li class='' data-icon='false' data-theme='d'> <a  href='#' data-ajax=\"false\" onclick='getJTXXByBh("+data[i].BH+",\""+data[i].BH+"\")'> <img  width='100px'  heigth='10px' src='http://210.73.88.55:28000/%E7%B3%BB%E7%BB%9F%E5%9B%BE%E7%89%87/111.png'>"+
			 "<p class='ui-li-desc'>姓名："+data[i].XM+"("+data[i].BH+")</p> "+
			 " <p class='ui-li-desc'>性别："+data[i].XB+"&nbsp&nbsp&nbsp&nbsp年龄："+data[i].NL+"&nbsp&nbsp&nbsp&nbsp刑期："+data[i].XQ+"</p>"+
			 "<p class='ui-li-desc'>家庭地址："+data[i].HJZZ+"</p>"+
			 "<p class='ui-li-desc'>犯罪类型："+data[i].XAFLB+"&nbsp&nbsp&nbsp&nbsp罪名："+data[i].ZM+"</p></a>";
if(data[i].BH ==="1121044365"){
	list +="<a href=\"#\" data-rel=\"dialog\" data-transition=\"pop\" data-icon=\"star\" id="+data[i].BH+" data-theme=\"d\" onclick=\"setgz('"+data[i].BH+"','"+data[i].XM+"','"+data[i].XB+"','"+data[i].NL+"','"+data[i].XQ+"','"+data[i].HJZZ+"','"+data[i].XAFLB+"','"+data[i].ZM+"')\">Download Browser</a> "	
}else{
	list +="<a href=\"#\" data-rel=\"dialog\" data-transition=\"pop\" data-icon=\"star\" id="+data[i].BH+" data-theme=\"a\" onclick=\"setgz('"+data[i].BH+"','"+data[i].XM+"','"+data[i].XB+"','"+data[i].NL+"','"+data[i].XQ+"','"+data[i].HJZZ+"','"+data[i].XAFLB+"','"+data[i].ZM+"')\">Download Browser</a> "	
}





		    
				list +="</li>";
				list =$(list);						
			    $("#list").append(list).find("li:last").hide();
                $('ul').listview('refresh');
                $("#list").find("li:last").slideDown(300);

	
	
	
	
					if(i>=9){//判断返回数据，如果是多余10条信息，第11条显示，由于数据太多情重新添加查询条件,下标是0
						var list = $("<li><p style=\"font-size:14px;margin-top:5px; text-align:center; color:#F00; font-weight:700\">由于模糊查询返回数据信息太大，请添加详细查询信息！</p></li>");
						$("#list").append(list).find("li:last").hide();
						$('ul').listview('refresh');
						$("#list").find("li:last").slideDown(300);
						return false;
					}
			}
 			//	$("#list").find("li").remove();//不remove，会一直append li元素，没查询完成后，remove一次
			  
}
//创建特别关注数据库
function createTBGZSJK(){
 tbgzdb.transaction(function(tx) {	
//  tx.executeSql("drop table tbgztable")
	tx.executeSql("CREATE TABLE if not exists tbgztable (bh varchar, xm varchar , xb varchar ,nl varchar ,xq varchar, hjzz varchar, xaflb varchar ,zm varchar,createtiem REAL)");	
 });
}
//设置特别关注zf
function setgz(bh,xm,xb,nl,xq,hjzz,xaflb,zm){
createTBGZSJK();//如果有特别关注数据库和表，创建
	    tbgzdb.transaction(function(tx) {//没有实现的关注。。。。。。。。。。。。。。。。。。。。。。。。。。
			  var sql = 'SELECT * FROM tbgztable';	
			  tx.executeSql(sql, [],
			  function(tx, result) {
				  for(var ii=0;ii < result.rows.length;ii++){					
					  if(result.rows.item(ii)['bh'] != bh){
						 	alert("if");
								tbgzdb.transaction(function(tx) {
								tx.executeSql("INSERT INTO tbgztable (bh,xm,xb,nl,xq,hjzz,xaflb,zm,createtiem) values(?,?,?,?,?,?,?,?,?)", [bh,xm,xb,nl,xq,hjzz,xaflb,zm,new Date().getTime()], null, null);
  								});//transaction
							
					  }else{							    
					  }

				  }//result  for
			  })
});

	
	


	
	
}
//根据获取详细信息，传 bh,
function getJTXXByBh(bh,bh1){
		window.sessionStorage.setItem("bh",bh);//参数放到sessionStorage中，参数传递完毕后清空
		
		window.location = "XXInfoPage.html"; //网页版能执行

/*		 $.mobile.changePage('XXInfoPage.html',{ //app中能执行
      	  transition:'slideup'
   		 });
*/		 
	//	 $.mobile.changePage($.mobile.activePage.jqmData('XXInfoPage.html'), {reloadPage : true});
		 
}


//根据编号，获取基础信息
function getJCXX(){
	var bh = window.sessionStorage.getItem("bh");	
	$("[class='ui-collapsible-heading']").click();//手动点击，让显示的折叠框，收缩回去。
//	alert("bh-sessionStorage:"+window.sessionStorage.getItem("bh"));	
$.getScript(getServerIpAddress()+"/YZBGinterface/GetData?bh="+bh+"&callbackname=getJCXXCallBack&hid=864219020023223&sqlid=11&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	


	//window.sessionStorage.clear();//参数传递完毕，清空sessionStorage
}
//获取基础信息成功回调函数
function getJCXXCallBack(data){
$("#titleid").text("基础信息");
	
	$('#bhid').text(data[0].bh);
	$('#xmid').text(data[0].xm);
	$('#bhmid').text(data[0].bhm);
	$('#xbid').text(data[0].XB);
	$('#mzid').text(data[0].MZ);
	$('#nlid').text(data[0].NL);	
	
	$('#bqwhcdid').text(data[0].BQWHCD);
	$('#bqzyid').text(data[0].bqzy);
	$('#bqmmid').text(data[0].BQMM);
	$('#tcid').text(data[0].TC);
	$('#jggjid').text(data[0].JGGJ);

	$('#hjzzid').text(data[0].HJZZ);
	$('#jtzzid').text(data[0].JTZZ);
	$('#bqdwid').text(data[0].BQDW);


	
}


//跳转信息页面
function jumpInfoPage(url){
			window.location = url; //网页版能执行

//		 $.mobile.changePage(url,{ //app中能执行
//      	  transition:'slideup'
//   		 });
				
}
//根据，审批类型，跳转信息页面
function jumpInfoSPPage(instid,splb){

var splbhz=unescape(splb);//根据审批类别不同，跳转不同页面+"&splb="+splb  +"&splb="+splb
var url='';	
if(splbhz === "离监就医"){
	url ="SPPageMB.html?instid="+instid;
}else if(splbhz === "社会关系审核"){
	url ="SPPageMBSHGX.html?instid="+instid;
}else{// if("")
	url ="LSCRZSPPage.html?instid="+instid;
}
	
//	'SPPage.html?instid="+data[i].instid+"&splb="+escape(escape(data[i].splb))+"'
//var splb = unescape(getUrlParam("splb")); //根据审批类别，跳转不同的页面，有不同的审批流程

			window.location = url; //网页版能执行

//		 $.mobile.changePage(url,{ //app中能执行
//      	  transition:'slideup'
//   		 });
			
}




//---------------------------获取判裁信息
function getPCXX(){

	var bh = window.sessionStorage.getItem("bh");	
	$("[class='ui-collapsible-heading']").click();//手动点击，让显示的折叠框，收缩回去。
//	alert("bh-sessionStorage:"+window.sessionStorage.getItem("bh"));	
$.getScript(getServerIpAddress()+"/YZBGinterface/GetData?bh="+bh+"&callbackname=getpCXXCallBack&hid=864219020023223&sqlid=12&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
}
//获取判裁信息成功回调函数
function getpCXXCallBack(data){

$("#titleid").text("判裁信息");
	
	$('#DBJGID').text(data[0].DBJG);
	$('#DBRQID').text(data[0].DBRQ);
	$('#PJJGID').text(data[0].PJJG);
	$('#PJRQID').text(data[0].PJRQ);
	$('#HYID').text(data[0].HY);
	
	$('#ZMID').text(data[0].ZM);
	$('#XQID').text(data[0].XQ);  /*看数据要求，有多个*/
	$('#ypxqID').text(data[0].ypxq);
	$('#qrID').text(data[0].qr);
	$('#zrID').text(data[0].zr);
	
	$('#bznxID').text(data[0].bznx);
	$('#RJRQID').text(data[0].RJRQ);
	$('#drrqID').text(data[0].drrq);

	$('#sljgID').text(data[0].sljg);
	$('#gydwID').text(data[0].gydw);
	$('#qkID').text(data[0].qk);
    $('#ljID').text(data[0].lj);	
	
	$('#lgfID').text(data[0].lgf);	
	$('#xaflbID').text(data[0].xaflb);	
	$('#fgdjID').text(data[0].fgdj);	
	

	
}


//-----------------审批主页，获取属于自己要审批的信息
function getZJSPCount(){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?jh="+window.localStorage.getItem("jh")+"&callbackname=getZJSPCountCallBack&hid=864219020023223&sqlid=13&appid=11",function(response,status){/*alert(response+"--funciton--"+status);*/});	
	
	
}
//主页泡泡数，回调
function getZJSPCountCallBack(data){
		$("#zjspCount").text(data[0].spcount);
		
		$("#zhugxyid").text(data[0].gxy); 
}



//根据警号获取属于自己的审批列表，每次启动程序后，会执行一边插入干警信息方法，放入localStorage中
function getSPLieBiaoByIMEIAndJH(){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?jh="+window.localStorage.getItem("jh")+"&callbackname=getSPLieBiaoByIMEIAndJHCallBack&hid=864219020023223&sqlid=14&appid=11",function(response,status){/*alert(response+"--funciton--"+status);*/});	
}
//审批列表回调instactid
function getSPLieBiaoByIMEIAndJHCallBack(data){
//	alert(data.length+"data.length");
$("#spliebiaogxyid").text(data[0].gxy);

	$("#list").find("li").remove();//先删除以前的数据+"&splb="+escape(data[i].splb)		instcreatetime 根式为120的时间
			  for(var i = 0; i < data.length; i++){
			 var list = $( "<li> <a href=\"#\" onclick=\"jumpInfoSPPage('"+data[i].instid+"','"+escape(data[i].splb)+"')\"><p style=\"font-weight:800; font-size:16px; margin-top:5px\">"+data[i].splb+"</p><p><span>"+data[i].instdesc+"</span><span style=\"float:right;\">"+data[i].gshtime+"</span></p> <p style=\"margin-top:5px;\">未审批</p> </a></li>"

				);			
					
			    $("#list").append(list).find("li:last").hide();
                $('ul').listview('refresh');
                $("#list").find("li:last").slideDown(300);
	
				
			}

}






//根据 临时表id，获取审批信息getUrlParam
//function getSPByLSID(){
function getSpyjInfo(){	
//var splb = unescape(getUrlParam("splb")); //根据审批类别，跳转不同的页面，有不同的审批流程
//$("#SPTitleId").text(splb);

		var instid = getUrlParam("instid");
		/*	var splb = getUrlParam("splb");	
		$("#SPTitleId").text(splb);//审批title*/
		//	alert("bh-sessionStorage:"+window.sessionStorage.getItem("bh"));	
		$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?instid="+instid+"&callbackname=getSpyjInfoCallBack&hid=864219020023223&sqlid=15&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	

	//window.sessionStorage.clear();//参数传递完毕，清空sessionStorage
}


//获取审批信息成功后，操作的
function getSpyjInfoCallBack(data){
$("#spyjxinxidivid").html('');	
var yjwidth =$("#spyjxinxidivid").width();
var spyjxinxilist='';
spyjxinxilist='<table border=\"1\" cellspacing=\"0\" cellpadding=\"0\">';
window.sessionStorage.setItem("InstEsconrtID",data[0].InstEsconrtID);



  for(var i = 0; i < data.length; i++){
//alert("instactoperuserrange"+data[0].instactoperuserrange.length);		  
				spyjxinxilist +="<tr> <td class=\"tdfont\" style=\"width:150px\">"+data[i].actname+"</td><td style=\"width:"+yjwidth+"px;text-align:left\">"+data[i].instactopername+" -- "+data[i].instactactiontime+" -- "+data[i].instactstatedesc+"</td> </tr> ";  
//判断当前使用人的jh和审批的环节的警号
if(data[i].instactopersiren === window.localStorage.getItem("jh")){
	window.sessionStorage.setItem("instactid",data[i].instactid);
//	window.sessionStorage.getItem("instactid");

//1.只有确认按钮，转交2是审批环节同意和不同意，转交

	if(data[i].actrule === "1"){
		$("#qrid").text("确认");
		$("#qrdivid").show();
	}else if(data[i].actrule ==="2"){
		$("#tyaid").text("同意");
		$("#btyaid").text("不同意");		
		
		$("#spdivid").show();

	}
	//	window.localStorage.setItem("instactoperuserrange",data[i].instactoperuserrange);
	var instactoperuserranges=data[i].instactoperuserrange.data;
		
		for(var ii = 0; ii < instactoperuserranges.length; ii++){//在获取审批类表的同时，把可以转交的人的信息，放到select中
			var zjlist = $(" <option value=\""+instactoperuserranges[ii].jh+"\">"+instactoperuserranges[ii].xm+"</option>");
			$("#spzjselectId").append(zjlist);		
		}
}

			
}//for
spyjxinxilist +='</table>';
spyjxinxilist =$(spyjxinxilist);
$("#spyj").text("审批意见");
$("#spyjxinxidivid").prepend(spyjxinxilist);	



	 getyjzrgj();//获取押解责任干警信息
/*	 getyjce();//获取押解车辆信息
	 getspzfxx();//获取审批罪犯信息
	 getsplj();//获取离监信息*/

}

//获取押解责任干警信息<td>这是警号</td>
function getyjzrgj(){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetYJZRGJAndName?InstEsconrtID="+window.sessionStorage.getItem("InstEsconrtID")+"&callbackname=getyjzrgjInfoCallBack&hid=864219020023223&sqlid=16&appid=11",function(response,status){})
}

function getyjzrgjInfoCallBack(data){
$("#yjzrgjxinxidivid").html('');	
var yjzrgjwidth =$("#yjzrgjxinxidivid").width()-70-80;

var yjzrgjilist='';

yjzrgjilist =" <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr> <th style=\"width:70px;\" scope=\"col\">姓名</th> <th style=\"width:80px;\" scope=\"col\">警号</th><th style=\"width:"+yjzrgjwidth+"px;\" scope=\"col\">职责分工</th></tr>";  
	
 for(var i = 0; i < data.length; i++){
yjzrgjilist +="<tr><td> <a href=\"#zrgjpage\" data-rel=\"dialog\" onclick=\"getzrgninfobyguid('"+data[i].guid+"')\"> "+data[i].xm+"</a></td><td>"+data[i].GuidForPolice+"</td><td>"+data[i].RespDivision+"</td></tr>";


}//for
	yjzrgjilist +="</table> ";

	yjzrgjilist =$(yjzrgjilist);
$("#zrgjxx").text("押解责任干警信息");	
$("#yjzrgjxinxidivid").prepend(yjzrgjilist);		

getyjce();//获取押解车辆
}
////获取押解责任干警名称，在jgxt表中没有此字段
function getyjzrgjnameCallBack(data){
	alert(data.length+"getyjzrgjnameCallBack"+data[0].xm);
//var bh = window.sessionStorage.getItem("bh");
var temp="<tr><td>"+data[0].xm+"</td><td>"+data[0].yddh+"</td><td>职责分工。。距离是家乐福</td></tr> ";
window.sessionStorage.setItem("gjxmanddh",temp);

}






//获取-------押解车辆信息
function getyjce(){	
$.getScript(getServerIpAddress()+"/YZBGinterface/GetData?InstEsconrtID="+window.sessionStorage.getItem("InstEsconrtID")+"&callbackname=getyjceInfoCallBack&hid=864219020023223&sqlid=17&appid=11",function(response,status){})
}
//---------------
function getyjceInfoCallBack(data){
		$("#yjclxinxidivid").html('');	
var yjcewidth =$("#yjclxinxidivid").width()/3;

var yjjiecllist='';

yjjiecllist =" <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr> <th style=\"width:"+yjcewidth+"px;\" scope=\"col\">车牌号</th> <th style=\"width:"+yjcewidth+"px;\" scope=\"col\">司机姓名</th><th style=\"width:"+yjcewidth+"px;\" scope=\"col\">司机电话</th></tr>";  
	
 for(var i = 0; i < data.length; i++){
			
yjjiecllist +="<tr><td>"+data[i].VehicleLicence+"</td><td>"+data[i].DriverName+"</td><td>"+data[i].DriverPhone+"</td></tr>";


}//for


	yjjiecllist +="</table> ";

	yjjiecllist =$(yjjiecllist);
$("#yjcl").text("押解车辆信息");		
$("#yjclxinxidivid").prepend(yjjiecllist);		

	
	
	
	
getsplj()//获取离监信息
}

//获取离监信息
function  getsplj(){
	$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataSJ?InstEsconrtID="+window.sessionStorage.getItem("InstEsconrtID")+"&callbackname=getspljInfoCallBack&hid=864219020023223&sqlid=19&appid=11",function(response,status){})
}


function getspljInfoCallBack(data){
$("#ljxinxidivid").html('');	
var ljxxwidth =$("#ljxinxidivid").width();

var lijianxinxilist='';
var lclx='';

<!--lijianxinxilist =" <table  border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr> <th style=\"width:"+ljxxwidth+"px;\" scope=\"col\">计划离监时间</th> <th style=\"width:"+ljxxwidth+"px;\" scope=\"col\">计划返监时间</th></tr>";  -->

lijianxinxilist =" <table  border=\"1\" cellspacing=\"0\" cellpadding=\"0\">";

 for(var i = 0; i < data.length; i++){

//lijianxinxilist +="<tr><td>"+data[0].jhljtime+"</td><td>"+data[0].jhfjtime+"</td></tr>";
lijianxinxilist +="<tr><td class=\"tdfont\">计划离监时间</td><td>"+data[i].jhljtime+"</td></tr><tr><td class=\"tdfont\">计划返监时间</td><td>"+data[i].jhfjtime+"</td></tr>";
lclx=" <tr><td class=\"tdfont\">离监去向</td><td>"+data[i].leaveprisondirection+"</td></tr><tr><td class=\"tdfont\" style=\"width:200px;\">行车路线</td><td style=\"width:"+ljxxwidth+"px;\">"+data[i].Travelway+"</td></tr>";

}//for


	lijianxinxilist +=lclx+"</table> ";

	lijianxinxilist =$(lijianxinxilist);
$("#ljxx").text("离监信息");			
$("#ljxinxidivid").prepend(lijianxinxilist);		

getspzfxx();//获取------zf信息
}


//获取------zf信息
function getspzfxx(){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataSJ?InstEsconrtID="+window.sessionStorage.getItem("InstEsconrtID")+"&callbackname=getspzfxxInfoCallBack&hid=864219020023223&sqlid=18&appid=11",function(response,status){})
}
function getspzfxxInfoCallBack(data){
$("#zfxxxinxidivid").html('');	
var zfxxwidth =$("#zfxxxinxidivid").width()-70-100-80;
var zfxxxinxilist='';

zfxxxinxilist =" <table border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr> <th style=\"width:70px;\" scope=\"col\">姓名</th> <th scope=\"col\" style=\"width:100px;\">案情</th><th scope=\"col\" style=\"width:80px\">刑期</th><th  style=\"width:"+zfxxwidth+"px;\" scope=\"col\">病情</th></tr>";  
	
 for(var i = 0; i < data.length; i++){
			
zfxxxinxilist +="<tr><td style=\"text-align:center\"><a href=\"#ljrypage\" data-rel=\"dialog\" onclick=\"getljryinfobyguid('"+data[i].guid+"')\"> "+data[i].xm+"</a></td><td>"+data[i].zm+"</td><td style=\"text-align:center\">"+data[i].xq+"<td>"+data[i].LeavePrisonReason+"</td></tr>";


}//for


	zfxxxinxilist +="</table> ";

	zfxxxinxilist =$(zfxxxinxilist);
$("#zfxxxinxidivid").prepend(zfxxxinxilist);		

}

//-----------------------------------------------------------------------点击责任干警姓名获取责任干警信息
function getzrgninfobyguid(guid){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetYJZRGJAndName?guid="+guid+"&callbackname=getzrgninfobyjhCallBack&hid=864219020023223&sqlid=21&appid=11",function(response,status){})
}
function getzrgninfobyjhCallBack(data){
	$("#zrgjinfo_xm").text(data[0].xm);
	$("#zrgjinfo_jh").text(data[0].GuidForPolice);
	$("#zrgjinfo_dh").text(data[0].yddh);		
	$("#zrgjinfo_djj").text(data[0].PoliceInterPhone);	
	$("#zrgjinfo_sfxdjg").text(data[0].isdjg);	
	$("#zrgjinfo_zzfg").text(data[0].respdivisionmc);<!--RespDivision		-->
	$("#zrgjinfo_fgms").text(data[0].DivisonDesc);		
}
//--------------------------------------------------------点击离监人员姓名，过去离监人员信息
function getljryinfobyguid(guid){
$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataSJ?guid="+guid+"&callbackname=getljryinfobyguidCallBack&hid=864219020023223&sqlid=22&appid=11",function(response,status){})
}
function getljryinfobyguidCallBack(data){
	$("#ljryinfo_xm").text(data[0].xm);
	$("#ljryinfo_xb").text(data[0].xb);
	$("#ljryinfo_csrq").text(data[0].csrq);
	$("#ljryinfo_an").text(data[0].zm);
	$("#ljryinfo_xq").text(data[0].xq);
	$("#ljryinfo_xqqzr").text(data[0].qr+" - "+data[0].zr);
	$("#ljryinfo_jtzz").text(data[0].jtzz);
	$("#ljryinfo_zflb").text(data[0].zflb);

	
}

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//                                   临时出入证
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

//临时出入证，事由、带领干警和人数
function  getLSCRZInfo(){
var instid = unescape(getUrlParam("instid"));
		$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?instid="+instid+"&callbackname=getLSCRZInfoCallBack&hid=864219020023223&sqlid=15&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
}


function getLSCRZInfoCallBack(data){

$("#shiyouorganjingorrenshudivid").html('');	
var wscrzwidth =$("#shiyouorganjingorrenshudivid").width();

var lscrzxinxilist='';

<!--lijianxinxilist =" <table  border=\"1\" cellspacing=\"0\" cellpadding=\"0\"><tr> <th style=\"width:"+ljxxwidth+"px;\" scope=\"col\">计划离监时间</th> <th style=\"width:"+ljxxwidth+"px;\" scope=\"col\">计划返监时间</th></tr>";  -->

lscrzxinxilist =" <table  border=\"1\" cellspacing=\"0\" cellpadding=\"0\">";

 for(var i = 0; i < data.length; i++){
			
//lijianxinxilist +="<tr><td>"+data[0].jhljtime+"</td><td>"+data[0].jhfjtime+"</td></tr>";
lscrzxinxilist +="<tr><td>事由</td><td>"+data[0].jhljtime+"</td></tr><tr><td>带领干警</td><td>"+data[0].jhfjtime+"</td></tr><tr><td>人数</td><td>"+data[0].jhfjtime+"</td></tr>";


}//for


	lscrzxinxilist +="</table> ";

	lscrzxinxilist =$(lscrzxinxilist);
		
$("#shiyouorganjingorrenshudivid").prepend(lscrzxinxilist);		

//getspzfxx();//获取------zf信息
}



//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//							审批操作
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
function spjgtyorqr(){
	
	if(window.confirm('同意此审批？')){//点击同意，不做任何操作，继续进行下面操作，点击取消，return false 终止操作
	}else{
	return false;
	}

	var instid =getUrlParam("instid");
	var instactid = window.sessionStorage.getItem("instactid");
	
$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateData?instid="+instid+"&instactid="+instactid+"&spjg="+escape(escape("同意"))+"&callbackname=getSPJGResult&hid=864219020023223&sqlid=900&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	

}//result
function getSPJGResult(data){//获取实例的状态
var instid =getUrlParam("instid");
	if(data[0].result ==="Succss"){
			$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?instid="+instid+"&callbackname=getinststatebyinstid&hid=864219020023223&sqlid=30&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
	}
}

function getinststatebyinstid(data){
			$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateDataQT?instesconrtid="+window.sessionStorage.getItem("InstEsconrtID")+"&inststate="+data[0].inststate+"&spjg="+escape(escape("同意"))+"&callbackname=getSPJGResultSJ&hid=864219020023223&sqlid=25&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});		
}
//跟改 省局库的放回
function getSPJGResultSJ(data){
	if(data[0].result ==="Succss"){
		alert("审批成功！");
	}
		jumpInfoPage("SPLieBiao.html");	
}





//转交，同意按钮
function spzjbutton(){
var spzjslectJh =$("#spzjselectId").find("option:selected").val();//转交给的jh
var spzjslectXm =$("#spzjselectId").find("option:selected").text();//转交给的xm
var instactid = window.sessionStorage.getItem("instactid");

$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateData?jh="+spzjslectJh+"&xm="+escape(escape(spzjslectXm))+"&instactid="+instactid+"&callbackname=spzjbuttoncallback&hid=864219020023223&sqlid=905&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});
	
}
//转交回调
function spzjbuttoncallback(data){
	if(data[0].result ==="Succss"){
		alert("转交成功！");
}
jumpInfoPage("SPLieBiao.html");	
}

//离监就医--不同意
function btytj(){
	if($('#textareaid').val().replace(/^\s+|\s+$/g,"") == "请输入不同意理由，不要操过15个汉字！" || $('#textareaid').val().replace(/^\s+|\s+$/g,"") ===''){
		return; //如果没有输入不同意理由，不让提交。
	}
	
	var instid =getUrlParam("instid");
	var instactid = window.sessionStorage.getItem("instactid");
	
$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateData?instid="+instid+"&instactid="+instactid+"&spjg="+escape(escape($('#textareaid').val()))+"&callbackname=btytjcallback&hid=864219020023223&sqlid=901&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
	
}
function btytjcallback(data){//获取实例的状态
var instid =getUrlParam("instid");
		if(data[0].result === "Succss"){
		$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?instid="+instid+"&callbackname=getinststatebyinstidBTY&hid=864219020023223&sqlid=30&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
			
		}	
	
}
function getinststatebyinstidBTY(data){
$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateDataQT?instesconrtid="+window.sessionStorage.getItem("InstEsconrtID")+"&inststate="+data[0].inststate+"&spjg="+escape(escape($('#textareaid').val()))+"&callbackname=allgengai&hid=864219020023223&sqlid=25&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});		
}
function allgengai(data){
if(data[0].result ==="Succss"){
	alert("不同意提交成功！");		
}
jumpInfoPage("SPLieBiao.html");		
}



//社会关系审批，同意按钮，要是否要开启亲情电话和允许会见
function shgxspty(){//获取chackbox值

		
}
function shgxbutton(){


	
	if(window.confirm('同意此审批？')){//点击同意，不做任何操作，继续进行下面操作，点击取消，return false 终止操作
	}else{
	return false;
	}

	var instid =getUrlParam("instid");
	var instactid = window.sessionStorage.getItem("instactid");
	
$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateData?instid="+instid+"&instactid="+instactid+"&spjg="+escape(escape("同意"))+"&callbackname=getSHGXTYSPCallBack&hid=864219020023223&sqlid=900&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	

}



function getSHGXTYSPCallBack(data){//获取实例的状态
var instid =getUrlParam("instid");
	if(data[0].result ==="Succss"){
			$.getScript(getServerIpAddress()+"/YZBGinterface/GetDataDecent?instid="+instid+"&callbackname=getinststatebyinstidTY&hid=864219020023223&sqlid=30&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});	
	}
}

function getinststatebyinstidTY(data){
var hj='0';
var qqdh='0';	

if($("#yxhj").is(':checked')){
	hj = 1;
}
if($("#yxqqdh").is(':checked')){
	qqdh = 1;
}

			$.getScript(getServerIpAddress()+"/YZBGinterface/UpdateDataQT?instesconrtid="+window.sessionStorage.getItem("InstEsconrtID")+"&inststate="+data[0].inststate+"&shgxspjg=1&hj="+hj+"+&qqdh="+qqdh+"&callbackname=getSHSPSPJGResult&hid=864219020023223&sqlid=110&appid=11",function(response,status){/*alert(response+"funciton"+status);*/});		
}
function getSHSPSPJGResult(data){
	if(data[0].result ==="Succss"){
		alert("审批成功！");
	}
		jumpInfoPage("SPLieBiao.html");	
}


