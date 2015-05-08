for (var i=0; i<pics.length; i++) {
	var pic = pics[i] = {
		thumb: 'content/thumb/' + pics[i][0] + '.jpg'
		//thumbs are 85% quality 10% size
	,	src: 'content/' + pics[i][0] + '.jpg'
	,	title: pics[i][1]
	,	description: pics[i][2]
	}
	thumbnails.innerHTML += '<div onclick="loadImage(' + i +  ')"><img src="' + pic.thumb + '"></div>'
}

var currentImage = 0;

function loadImage(num) {
	if (num >= 0) {
		var pic = pics[num]
		title.innerHTML = pic.title;
		description.innerHTML = pic.description
		img.src = pic.src
		currentImage = num;
		if (!isFullscreen) switchDisplay()
	}
}

var isFullscreen = false;

fullscreen.style.display = "none";
thumbnails.style.display = "block";

function switchDisplay() {
	var swap = fullscreen.style.display;
	fullscreen.style.display = thumbnails.style.display;
	thumbnails.style.display = swap;
	isFullscreen = true;
}

Mousetrap.bind('esc', function() { if (isFullscreen) switchDisplay() })

Mousetrap.bind('left', function() { loadImage(currentImage-1) })

Mousetrap.bind('right', function() { loadImage(currentImage+1) })
