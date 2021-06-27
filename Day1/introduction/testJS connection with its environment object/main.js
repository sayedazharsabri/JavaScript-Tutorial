
var htmlTag = document.querySelector('html');
var h1Tag = document.querySelector('h1');

htmlTag.onclick = function(){
		h1Tag.textContent = "Hello Clicked on HTML";
		alert("You clicked here on HTML");

}



