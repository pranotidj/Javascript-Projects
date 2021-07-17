
var changeBackground = function(){
	var c = 1 + Math.floor(Math.random() * 12);
	imgName = "images/"+c+".jpg";
	console.log(imgName);
	//document.getElementById("imgContent").src = "images/"+ c +".jpg";
	document.getElementById("container").style.backgroundImage = "url(" + imgName +")";
};


	