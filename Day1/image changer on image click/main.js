let myImage = document.querySelector('img');

myImage.onclick = function() {
	let imgSrc = myImage.getAttribute('src');
	if(imgSrc == 'git.png'){
		myImage.setAttribute('src','js.png');
	}else{
		myImage.setAttribute('src','git.png');
	}
}

/*
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/img1.png') {
	  myImage.setAttribute('src','images/img2.png');
	} else {
	  myImage.setAttribute('src','images/img1.png');
	}*/