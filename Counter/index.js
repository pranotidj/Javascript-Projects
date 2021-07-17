var num = 0;
document.getElementById("demo").innerHTML = window.num;

var decNumber = function(){
	num = num - 1;
	document.getElementById("demo").innerHTML = window.num;
	if(num < 0){
		document.getElementById("demo").style.color = "red";
	}
};

var reset = function(){
	num = 0;
	document.getElementById("demo").innerHTML = window.num;
	document.getElementById("demo").style.color = "#000";

};

var increment = function(){
	num = num + 1;
	document.getElementById("demo").innerHTML = window.num;
	if(num > 0){
		document.getElementById("demo").style.color = "green";
	}
};
console.log(num);
	