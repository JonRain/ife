window.onload = function(){
    var btns = document.getElementsByTagName("button"); //获取按钮
    var btn1 = btns[0],
        btn2 = btns[1],
        btn3 = btns[2],
        btn4 = btns[3],
        btn5 = btns[4];
    var container = document.getElementById("bottom");
    var onData = document.getElementById("data");
    
//输入合法性判断功能封装
    function checkNumber(num){
        var liNum = container.getElementsByTagName("li").length;
        if(num=="" || isNaN(num)||num>100||num<10){
            alert("请输入10-100之间的数字！");
            return false;
        }
        else if(liNum>=60){
            alert("已超出可添加元素的个数！");
            return false;
        }
        else{
            return true;
        }
    }
    
//    btn1 功能实现
    btn1.onclick=function(){
        var text = onData.value;
        if(checkNumber(text)){              //调用判断函数
            var items = document.createElement("li");  //创建文本容器
            items.innerHTML=text;                      //数据存入容器
            if(container.hasChildNodes()){          //判断是否存在子节点
                var fc=container.firstChild;    //获取第一个子节点
                container.insertBefore(items,fc);
            }else{
                container.appendChild(items);                    //添加到文档节点树中
            }
            onData.value="";            //清空输入框中的值
        }
    }
    
    //    btn2 功能实现
    btn2.onclick=function(){
        var text = onData.value;
        if(checkNumber(text)){
            var items = document.createElement("li");  //创建文本容器
            items.innerHTML=text;                      //数据存入容器
            container.appendChild(items);                    //添加到文档节点树中
        }
        onData.value="";            //清空输入框中的值
    }
    
    //btn3功能实现
    btn3.onclick=function(){
        alert(container.firstChild.innerHTML);
        container.removeChild(container.firstChild);  
    }
    
    //btn4功能实现
    btn4.onclick=function(){
        alert(container.lastChild.innerHTML);
        container.removeChild(container.lastChild); 
    }
    
    
    //js.prototype.sort()排序
    btn5.onclick=function(){
        var lis = container.getElementsByTagName("li");  //伪数组
        var liArray = [];
        for(var i=0;i<lis.length;i++){
            liArray[i]=lis[i].innerHTML;
        }
        liArray.sort(function(a,b){
            return a-b;
        })
        var sortLi=document.getElementById("sortLi");
        if(sortLi.getElementsByTagName("li").length!=0){
				sortLi.innerHTML = "";
			}
        for( var i=0; i<liArray.length; i++)
		{     
            var li =document.createElement("li");
            li.style.height = liArray[i]*5+"px";
			li.innerHTML=liArray[i];
            sortLi.appendChild(li);
		}
    }
    
}


