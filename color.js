var numSquare = 6;
var color = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButton();
	setupSquare();
	reset();
}

function setupModeButton(){
	for(var i = 0;i<modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy!" ? numSquare = 3: numSquare =6;
			// if(this.textContent === "Easy!"){
			// 	numSquare = 3;
			// }else{
			// 	numSquare = 6;
			// }
			reset();
		});
	}
}

function setupSquare(){
	for(var i = 0 ; i< squares.length ; i++){
		squares[i].addEventListener("click",function(){
	
			var clickedColor = this.style.background;
	
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct !"
				resetButton.textContent = "Play Again!";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			} else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again !"
			}
		});
	}
}

function reset(){
	color = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color !";
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.background = color[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}

	// easyBtn.addEventListener("click",function(){
	// 	hardBtn.classList.remove("selected");
	// 	easyBtn.classList.add("selected");
	// 	numSquare = 3;
	// 	color = generateRandomColor(numSquare);
	// 	pickedColor = pickColor();
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i<squares.length; i++){
	// 		if(color[i]){
	// 			squares[i].style.background = color[i];
	// 		}else{
	// 			squares[i].style.display = "none";
	// 		}
	// 	}
	// });
	// hardBtn.addEventListener("click",function(){
	// 	hardBtn.classList.add("selected");
	// 	easyBtn.classList.remove("selected");
	// 	numSquare = 6;
	// 	color = generateRandomColor(numSquare);
	// 	colorDisplay.textContent = pickedColor;
	// 	for(var i = 0; i<squares.length; i++){
	// 			squares[i].style.background = color[i];
	// 			squares[i].style.display = "block";
	// 	}
	// });

	resetButton.addEventListener("click", function(){
		// color = generateRandomColor(numSquare);
		// pickedColor = pickColor();
		// colorDisplay.textContent = pickedColor;
		// this.textContent = "New Color !";
		// messageDisplay.textContent = "";
		// for(var i = 0; i<squares.length; i++){
		// 	squares[i].style.background = color[i];
		// }
		// h1.style.background = "steelblue";
		reset();
	});



function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}
function generateRandomColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);
	 return "rgb(" +  r + ", " +  g + ", " +  b + ")";
}