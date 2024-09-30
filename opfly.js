const logof = document.getElementById("logo");
logof.setAttribute("width","800px")
logof.setAttribute("height","220px")

var logo = logof.getContext("2d");

let scene = "";		//シーン。0-タイトル画面(ボタン押すまで）

let logoimage = new Image();
logoimage.src = "fly5banner.png";

logoimage.onload = function() {
	
	var optimercounter = 80;

	let optimer = setInterval(function() {		//OP

	logo.clearRect(0, 0, 800, 600);
	logof.setAttribute("height",optimercounter + "px");
	logo.drawImage(logoimage, 100, 100, 600, 100); 

	logo.fillStyle = "#ffffff";
	logo.font = "20px selif";

	logo.fillText("copyright 2024 Yudofusite",270,500)

	if (scene == 0) {
	optimercounter++
	} else if (scene == 1) {
	optimercounter = 198;
	scene = 1.1;
	} else if (scene == 1.1) {
	optimercounter--
		if (optimercounter < 90) {
		scene = 2;
		clearInterval(optimer);
		bg_v = 2;
		};

	};

	if (optimercounter == 200) {
	optimercounter = 460;
	scene = 0;
	};

	if (optimercounter > 600) {
	optimercounter = 600;
	logo.font = "15px selif bold";
	logo.fillText("PRESS SPACE KEY", 320, 300)
	};

	},1000/60);

};	//onloadとじ

addEventListener("keydown", (press) => {
	if (scene == 0) {
	scene = 1;
	};
});