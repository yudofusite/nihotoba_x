"use strict";

//連打状況可視化部分
const rendac = document.getElementById("rendac");
rendac.setAttribute("width","50px");
rendac.setAttribute("height","600px");
var rend = rendac.getContext("2d");

let rend_timer = setInterval(function () {


if (bg_v  > 2) {

rend.clearRect(0, 0, 50, 600);

rend.fillStyle = "#000000";
rend.fillRect(0, 0, 50, 600);
rend.fillStyle = "#505050";
rend.fillRect(4, 4, 42, 592);
	if (renda_m.length > 0) {
	rendaedit();
	};
};

},1000/60);	//timerとじ

let renda_m = [];

function rendaedit() {
rend.fillStyle = "#ff00ff";
	for (var i = 0; i < renda_m.length; i++) {
	rend.fillRect(4, renda_m[i], 42, 4);
	renda_m[i] = renda_m[i] - 10;
	};
};


let renda_hantei_m = "0";
let renda_hantei = setInterval(function () {

	if (renda_hantei_m !== countb_count) {
	renda_m.push(600);
	};

renda_hantei_m = countb_count;

},1000/30);