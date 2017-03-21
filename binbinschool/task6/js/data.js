window.onload = function(){
    var btns = document.getElementsByTagName("button"); //获取按钮
    var btn1 = btns[0],
        btn2 = btns[1],
        btn3 = btns[2],
        btn4 = btns[3],
        btn5 = btns[4],
        btn6 = btns[5];
    var container = document.getElementById("bottom");

    
//    btn1 功能实现
    btn1.onclick=function(){
        var text = document.getElementById("data").value;
        var liArray=[];       //创建一个数组，用来存储分割的内容
        liArray = text.split(/\s+/);
        for(var i=0;i<liArray.length;i++){
            var items = document.createElement("li");  //创建文本容器
            items.innerHTML=liArray[i];                      //数据存入容器
            if(container.hasChildNodes()){          //判断是否存在子节点
                var fc=container.firstChild;    //获取第一个子节点
                container.insertBefore(items,fc);
            }else{
                container.appendChild(items);                    //添加到文档节点树中
            }
        }
        document.getElementById("data").value=""; //清空输入框里的值
    }
    
    //    btn2 功能实现
    btn2.onclick=function(){
        var text = document.getElementById("data").value;
        var liArray=[];       //创建一个数组，用来存储分割的内容
        liArray = text.split(/\s+/);
        for(var i=0;i<liArray.length;i++){
                var items = document.createElement("li");  //创建文本容器
                items.innerHTML=liArray[i];                      //数据存入容器
                container.appendChild(items);                    //添加到文档节点树中
            }
         document.getElementById("data").value=""; //清空输入框里的值
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
    
    //btn5功能实现
    btn5.onclick=function(){
        var searchContent = document.getElementById("search").value;
        var lis = container.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
            if(lis[i].innerHTML.indexOf(searchContent)>-1){
                lis[i].setAttribute("class","highlight");
            }
        }
    }
    
    //btn6功能实现
    btn6.onclick=function(){
        var lis = container.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
                lis[i].removeAttribute("class","highlight");
        }
    }
}

