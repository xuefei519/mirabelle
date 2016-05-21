//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function() {
  if(document.querySelector('h1').textContent === 'Hello! Meow~'){
    document.querySelector('h1').textContent = 'Mirabella'}
  else{
    document.querySelector('h1').textContent = 'Hello! Meow~'};
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpg') {
      myImage.setAttribute ('src','images/pic2.jpg');
    } else {
      myImage.setAttribute ('src','images/pic1.jpg');
    }
}

var myButton=document.querySelector('button');
/*var myHeading=document.querySelector('h1');

function setName(){
  var name=prompt('What is your name?');
  localStorage.setItem('name', name);
  myHeading.textContent = 'Mirabella is cool, ' + name;
}

if(!localStorage.getItem('name')) {
  setName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mirabella is cool, ' + storedName;
}

myButton.onclick=function(){
  setName();
}*/

var imgUrl = 'images/nyan.png';
//分享链接的链接地址
var lineLink = 'https://xuefei519.github.io/mirabelle/';
//分享链接的描述信息
var descContent = "This page is for Mirabelle";
//分享链接的标题
var shareTitle = "Mirabelle's Page";
//一般为空 就好
var appid = '';
//分享给好友
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    })
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
    });
}, false);
