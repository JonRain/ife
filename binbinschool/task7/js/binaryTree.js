window.onload=function(){
    var root = document.getElementsByClassName("binaryTree")[0];
    var btns = document.getElementsByTagName("button");
    var all = document.getElementsByTagName("div");
    var btnDLR = btns[0],
        btnLDR = btns[1],
        btnLRD = btns[2];
    //DLR-前序遍历
    function preOrder(node){
        if(node != null){
//            setTimeout(function(){
                preOrder(node.children[0]);
                preOrder(node.children[1]);
                 changeBackground(node);
//            },2000)
          
        }
    }
    
    //节点背景颜色变化
    function changeBackground(node){
        for(var i=0;i<all.length;i++){
            all[i].style.backgroundColor = "#fff";
        }
        node.style.backgroundColor = "#00f";
    }
    
    //btnDLR绑定点击事件
    btnDLR.onclick=function(){
        preOrder(root);
    }
}