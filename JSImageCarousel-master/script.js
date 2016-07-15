var imageArray = ['images/dog1.jpeg', 'images/dog2.jpeg', 'images/dog3.jpeg', 'images/dog4.jpeg', 'images/dog5.jpeg' ]

var index = 0;
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var dogImage = document.getElementById('dog-image');



//clicking the previous button
prevButton.addEventListener('click', function (){
	if (index === 0){
		//this is index of last value in array (length 5 so index of 4)
		index = imageArray.length - 1; 
	} else {
		index = index - 1;
	}
	var prevImagePath = imageArray[index];
	dogImage.src = prevImagePath;
})

// clicking the next button
nextButton.addEventListener('click', function (){
	//nextButton clicked and at last image
	if (index = imageArray.length - 1){
		//this is index of last value in array (length 5 so index of 4)
		index = 0; 
	} else {
		index = index + 1;
	}
	dogImage.src = imageArray[index + 1];
})



