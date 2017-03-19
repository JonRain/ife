window.onload = function(){
    var btns = document.getElementsByTagName("button"); //获取按钮
    var btn1 = btns[0],
        btn2 = btns[1],
        btn3 = btns[2],
        btn4 = btns[3];
    var container = document.getElementById("bottom");

    
//    btn1 功能实现
    btn1.onclick=function(){
        var text = document.getElementById("data").value;
        if(text=="" || isNaN(text)){
            alert("请输入正确的数字！");
        }
        else{
            var items = document.createElement("li");  //创建文本容器
            items.innerHTML=text;                      //数据存入容器
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
        if(text=="" || isNaN(text)){
            alert("请输入正确的数字！");    
        }
        else{
            var items = document.createElement("li");  //创建文本容器
            items.innerHTML=text;                      //数据存入容器
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
}


