
window.onload = function (){  //将js代码放入函数中，等页面加载完，再加载js代码，否则会报错
    
    //使用 JavaScript 向 HTML 元素分配事件
    document.querySelector('.submit-button').onclick = function interface(){
    fetch(`http://www.xhxly.cn:8080/api.php?key=free&appid=0&msg=${inputWord.value}`)       //要获取输入值的id名不要有连接符号，像这样的input-Word
        .then(res => res.json())
        .then(data => document.getElementById('chat-content').innerHTML = data.content) 
        .catch(data => alert('服务器出错'));
    }

}

/* 另一种方法是使用事件属性向 HTML 元素分配事件，如下所示：
<button id="submit" class="submit-button" onclick="interface()" >发送</button> 
即在发送按钮中加入 onclick="interface()"，这样就不会出现
报错 Uncaught TypeError: Cannot set property 'onclick' of null */
// function interface(){
//     fetch(`http://www.xhxly.cn:8080/api.php?key=free&appid=0&msg=${inputWord.value}`) //要获取输入值的id名不要有连接符号，像这样的input-Word
//         .then(res => res.json())
//         .then(data => document.getElementById('chat-content').innerHTML = data.content) 
//         .catch(data => alert('服务器出错'));
//     }