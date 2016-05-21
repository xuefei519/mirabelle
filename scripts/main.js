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
