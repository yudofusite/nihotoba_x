"use strict";


var date = new Date;
console.log(date.getHours());		//なう

let se = new Audio("fly_se.mp3");

let japan1 = new Image()
japan1.src = "japan.png";

let japan2 = new Image()
japan2.src = "japan2.png";

let kemuri = new Image()
kemuri.src = "kemuri.png";


//-------------------------------------------------

function gameflame() {
	bgf.fillStyle = "#000040";		//枠の色

	bgf.fillRect(0, 0, 800, 2);		//四隅の線
	bgf.fillRect(0, 0, 2, 600);
	bgf.fillRect(798, 0, 600, 600);
	bgf.fillRect(0, 598, 800, 600);
};

//-------------------------------------------------

function Rnd(max) {
  return Math.floor(Math.random() * max);	//乱数
};


let bg1_array = [];

for (var i = 0; i < 60; i++) {
bg1_array.push(Rnd(400) + 200);
};
console.log(bg1_array);

let bg_v = 1;	//背景の種類


const bg = document.getElementById("background");
bg.setAttribute("width","800px");
bg.setAttribute("height","600px");
var bgf = bg.getContext("2d");


let bgtimerflame = 0;			//背景描画フレーム数

let bgtimer = setInterval(function() {				//メイン部分

bgf.clearRect(0, 0, 800, 600);

if (bg_v == 1) {
bg1_edit();
};

if (bg_v == 2) {
bg2_edit();
};

if (bg_v == 3) {
bg3_edit();
countdown_edit();
};

if (bg_v == 4) {
bg3_edit();

};

if (bg_v == 5) {
bg5_edit();
};

if (bg_v == 6) {
bg6_edit();
};

if (bg_v == 8) {
badend();
};
gameflame();			//枠

bgtimerflame++

},1000 / 60);


let bgtimer2 = setInterval(function() {

if (bg_v == 4) {
var_motion();
};

},1000 / 60);

//----------------------------背景描画プログラム↓


function bg1_edit() {		//背景1
bgf.fillStyle = "#003762";
bgf.fillRect(2, 2, 798, 598);
bgf.fillStyle = "#001742";
bgf.fillRect(200, 0, 400, 600);
bgf.fillStyle = "#ffffff80";

for (var i = 0; i < 60; i++) {
bgf.fillRect(bg1_array[i], i * 10, 1, 4);
};


	if (bgtimerflame % 2 === 0) {
	bg1_array.unshift(bg1_array[60]);
	};
};


let select_c = 2;	//パワーアップタイプ
let eventonly = 0;	//イベント重複防止
let bgf1 = 800;		//決定後演出

function bg2_edit() {			//背景２　選択画面




bgf.font = "bold 25px sans-serif";
bgf.fillText("パワーアップタイプを選択してください",180, 80);
bgf.font = "bold 13px sans-serif";
bgf.fillText("左右キーで選択、スペースキーで決定",290,570);

bgf.lineWidth = 3;
bgf.strokeStyle = "#404040";
bgf.strokeRect(100, 150, 150, 200);

bgf.beginPath();		//グラフ
bgf.moveTo(110, 330);		
bgf.lineTo(150, 220);
bgf.lineTo(200, 200);
bgf.lineTo(230, 193);
bgf.lineWidth = 4;
bgf.stroke();

bgf.lineWidth = 3;
bgf.strokeRect(320, 150, 150, 200);

bgf.beginPath();
bgf.moveTo(330, 330);
bgf.lineTo(450, 185);
bgf.lineWidth = 4;
bgf.stroke();

bgf.lineWidth = 3;
bgf.strokeRect(540, 150, 150, 200);
bgf.beginPath();
bgf.moveTo(550, 330);
bgf.lineTo(600, 320);
bgf.lineTo(650, 280);
bgf.lineTo(680, 160);
bgf.lineWidth = 4;
bgf.stroke();


addEventListener("keydown", (press2) => {			//カーソル移動
	if (scene == 2) {
		if (press2.key == "ArrowLeft") {
			if (eventonly < 1) {
			console.log("左");
			eventonly = 5;
			select_c--
			se.play()
				if (select_c < 1) {
				select_c = 3;
				};
	console.log(select_c);
			};
		}
		if (press2.key == "ArrowRight") {
			if (eventonly < 1) {
			console.log("右");
			eventonly = 5;
			select_c++
			se.play()
				if (select_c > 3) {
				select_c = 1;
				};
	console.log(select_c);
			};
		}

	};
});	//eventlistenerとじ

eventonly--

bgf.lineWidth = 8;
bgf.font = "20px sans-serif";
bgf.strokeStyle = "#0000ff80";

if (select_c == 1) {
bgf.strokeRect(100, 150, 150, 200);
bgf.fillText("最初はたまりやすいです。最初は・・・",210,500);
};

if (select_c == 2) {
bgf.strokeRect(320, 150, 150, 200);
bgf.fillText("押した回数に比例してパワーがたまります",200,500);
};

if (select_c == 3) {
bgf.strokeRect(540, 150, 150, 200);
bgf.fillText("たくさん押すにつれてたまるパワーも多くなります",180,500);
};


addEventListener("keydown", function(event) {		//決定
	if (event.keyCode == 32) {
		if (scene == 2) {
		scene = 2.1;
		console.log(bgf1);
		};
	};
});

if (scene == 2.1) {
bgf.clearRect(bgf1, 0, 800, 600);
bgf1 = bgf1 - 10
};

if (bgf1 < 0) {
bg_v = 3;
};

};	//functionとじ


//---------------------------------------------------------------カウントダウン

var bgf2 = 0;

function countdown_edit() {
logof.setAttribute("height","600px")
logo.font = "bold 40px sans-serif";
bgf2++

if (date.getHours() > 18 || date.getHours() < 4) {
logo.fillStyle = "#ffffff";
} else {
logo.fillStyle = "#000000";
};

	if (bgf2 < 60) {
	logo.fillText(3, 360, 260);
	} else if(bgf2 < 120) {
	logo.fillText(2, 360, 260);
	} else if(bgf2 < 180) {
	logo.fillText(1, 360, 260);
	} else if(bgf2 < 240) {
	logo.fillText("START", 300, 260);
	} else if(bgf2 < 300) {
	bg_v = 4;
	};
logo.fillText("スペースキーを連打しよう！！！", 80, 570);

};

//-----------------------------------------------------------------チャージ中背景


let count = 0;		//押した数カウント
let count_b = 1;	//とりあえず押されたとき(0)、離したとき(1)の結果を保存
			//select_cでモードが取れる

let countb_count　= 0;	//押した数カウントします

let power = 0;		//最終的なパワー
let power_v = 1;	//パワーのたまる量

var bgf3 = 600;		//連打終了タイミングを計る(60f/s)

function bg3_edit() {

if (date.getHours() > 18 || date.getHours() < 4) {	//夜間
bgf.fillStyle = "#000040";
} else {
bgf.fillStyle = "#3ec1ea";
};

bgf.fillRect(0, 0, 800, 600);

if (date.getHours() > 18 || date.getHours() < 4) {	//夜間
bgf.fillStyle = "#004e00";
} else {
bgf.fillStyle = "#4eff40";
};

bgf.fillRect(0, 400, 800, 200);
bgf.drawImage(japan1, 350, 310);
logo.clearRect(0, 0, 800, 600);

if (countb_count < 5) {
logo.fillText("スペースキーを連打しよう！！！", 80, 570);		//説明書き。親切
};

if (bg_v == 4) {

	//addEvent

};


};


function var_motion() {
		bgf3--
		logo.fillStyle = "#ff0000";
		logo.fillRect(780, 600 - bgf3, 18, 600);

		if (bgf3 < 1) {			//連打終了タイミング
			if (countb_count > 10) {
			bg_v = 5;
			} else {
			bg_v = 8;
			};
		logo.clearRect(0, 0, 800, 600);

		};
};

addEventListener("keydown", function(event1) {		//決定
	if (event1.keyCode == 32) {
		if (bg_v == 4) {
		count_b = count_b + "1";
		};
	};
});

addEventListener("keyup", function(event2) {		//決定
	if (event2.keyCode == 32) {
		if (bg_v == 4) {
		count_b = count_b + "0";

		countb_count = count_b.match(/10/g).length



		};
	};
}); 

var bgf5 = 0;
let bgf5_kemuri = [250];

function bg5_edit() {
bgf.fillStyle = "#000030";
bgf.fillRect(0, 0, 800, 600);


	for (let i5 = 0; i5 < bgf5; i5++) {
	bgf.drawImage(kemuri, (bgf5 * 10) - (i5 * 35) - 77, bgf5_kemuri[i5]);
	};
bgf5_kemuri.unshift(Rnd(40) + 250);
bgf.drawImage(japan2, bgf5 * 10, 270);
bgf5++

if (bgf5 > 90) {
bg_v = 6;
bgtimerflame = 0;
};

};


function bg6_edit() {		//結果発表の時の背景
bgf.fillStyle = "#000030";
bgf.fillRect(500, 2, 798, 596);

bgf.fillStyle = "#ffffff80";

	for (var i = 0; i < 60; i++) {
	bgf.fillRect(bg1_array[i] + 200, i * 10, 1, 4);
	};


	if (bgtimerflame % 2 === 0) {
	bg1_array.unshift(bg1_array[60]);
	};

bgf.drawImage(japan1, 620 + Math.sin(bgtimerflame), 300 + Math.cos(bgtimerflame));

bgf.fillStyle = "#49436b";
if (bgtimerflame < 50) {
bgf.fillRect(0, 200, bgtimerflame * 10, 5);
bgf.fillRect(0, 300, bgtimerflame * 10, 5);
bgf.fillRect(0, 450, bgtimerflame * 8, 3);
bgf.fillRect(0, 520, bgtimerflame * 8, 3);
} else {
bgf.fillRect(0, 200, 500, 5);	//とんだ距離
bgf.fillRect(0, 300, 500, 5);	//自己記録距離
bgf.fillRect(0, 450, 400, 3);	//連打回数(毎秒）
bgf.fillRect(0, 520, 400, 3);	//自己記録連打（毎秒）
};

bgf.font = "bold 30px sans-serif";
bgf.fillStyle = "#000040";

bgf.fillText("飛行距離", 10, 180);
bgf.fillText("飛行距離自己記録", 10, 280);
bgf.fillText("連打数", 10, 430);
bgf.fillText("連打数自己記録", 10, 500);

kyori(select_c);		//飛行距離計算

bgf.fillText(hikoukyori + "km", 280, 180);		//飛行距離
	if (hi_1 < hikoukyori) {
	hi_1 = hikoukyori;
	localStorage.hi1 = hi_1;
	};
bgf.fillText(hi_1 + "km", 280, 280);			//飛行距離記録

bgf.fillText(countb_count / 10 + "連打/秒", 250, 430);	//連打数
	if (hi_2 < countb_count / 10) {
	hi_2 = countb_count / 10;
	localStorage.hi2 = hi_2;
	};
bgf.fillText(hi_2 + "連打/秒", 250, 500);

};




let badendmas = "";				//バッドエンド
let becount = 0;
let bemasd = "ちゃんとやれや！ちゃんとやれ！";

function badend() {

	if (becount < 15) {
	badendmas = badendmas + "" + bemasd.charAt(becount);
	becount++
	};
bgf.fillText(badendmas, 250, 300);
};

//-------------------------------------------------------

let hikoukyori = 0;
function kyori(m) {

	if(m == 1) {
	hikoukyori = countb_count * 700 + (countb_count * (800 / countb_count));	//モード１（早溜）
	} else if(m == 2) {
	hikoukyori = countb_count * 900;	//モード２（比例）
	} else {
	hikoukyori = 15 * (countb_count * Math.round(countb_count * 0.8));
	};

};



