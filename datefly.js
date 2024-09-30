//サイト保存データ

var localhi1 = localStorage.getItem("hi1");	//hi1の名称でローカルに保存（飛行距離）
let hi_1 = "";		//ハイスコア（距離）

if (localhi1) {
hi_1 = localhi1;
} else {
localStorage.hi1 = 0;
hi_1 = 0;
};

var localhi2 = localStorage.getItem("hi2");	//hi2の名称でローカルに保存（連打数）
let hi_2 = "";		//ハイスコア（連打数）

if (localhi2) {
hi_2 = localhi2;
} else {
localStorage.hi2 = 0;
hi_2 = 0;
};