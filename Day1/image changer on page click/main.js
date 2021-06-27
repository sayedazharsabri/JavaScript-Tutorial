let myImage = document.querySelector('img');
let page = document.querySelector('html');

page.onclick = function() {
	let imgSrc = myImage.getAttribute('src');
	if(imgSrc == 'git.png'){
		myImage.setAttribute('src','js.png');
	}else{
		myImage.setAttribute('src','git.png');
	}
}