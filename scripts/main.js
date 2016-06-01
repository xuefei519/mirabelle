//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function() {
  if(document.querySelector('h1').textContent === 'Hello! Meow~'){
    document.querySelector('h1').textContent = 'Mirabella'}
  else{
    document.querySelector('h1').textContent = 'Hello! Meow~'};
}

var myImage = document.querySelector('#slides');

var imageIdx = 0;
var numImages = 2;
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    imageIdx = (imageIdx + 1)%2;
    imagePath = 'images/pic'+imageIdx+'.jpg';
    myImage.setAttribute ('src',imagePath);
}

var myHeading=document.querySelector('h1');

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

	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut();
	});

$(function() {
    $('body').on('click', '.nav-bar-link', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('#mobile-nav a').click(function() {
    $('.navbar-toggle:visible').click();
});


$('.translate').click(function(){
  $('.bio-data').toggleClass("EN CN");
  $('.translate').toggleClass("toEN toCN");

  //$(this).html($(this).html() == "English" ? "中文" : "English");
  e.preventDefault();
});

function translate(){

}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" selected", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " selected";
}
