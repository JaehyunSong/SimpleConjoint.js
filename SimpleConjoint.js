// タスク数
var Tasks = 3;
// プロファイル数
var Profiles = 2;
// 先頭文字
var Letter = "F";
// 属性順番のランダム化（true / false）
var AttrRand = true;

// 属性名配列
var KeyArray = ["A", "B", "C"];
// 水準配列
var FeaturesArray = {"A":["A1", "A2", "A3"], 
                     "B":["B1", "B2"],
                     "C":["C1", "C2", "C3", "C4"]};

// Fisher-Yatesシャッフル
// なんでJavaScriptには配列シャフル関数がないんだ
function shuffle(array){
	for (var i = array.length  - 1; i > 0; i--) {
		var j = Math.floor(Math.random () * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

// 配列から一つの要素を無作為に抽出
function choose_one(array) {
	var chosen_element = shuffle(array);
	var chosen_element = chosen_element[0];
	
	return chosen_element;
};

// 属性順番のランダム化
if (AttrRand == true) {
	var KeyArray = shuffle(KeyArray);
}

for (i = 1; i <= Tasks; i++) {
	for (j = 0; j <= KeyArray.length - 1; j++) {
		//Qualtrics.SurveyEngine.setEmbeddedData(Letter + "-" + i + "-" + (j+1), KeyArray[j]);
		console.log(Letter + "-" + i + "-" + (j+1) + ":" + KeyArray[j]); // デバッグ用
		for (k = 1; k <= Profiles; k++) {
			//Qualtrics.SurveyEngine.setEmbeddedData(Letter + "-" + i + "-" + k + "-" + (j+1), choose_one(FeaturesArray[KeyArray[j]]));
			console.log(Letter + "-" + i + "-" + (j+1) + "-" + k + ":" + choose_one(FeaturesArray[KeyArray[j]]));  // デバッグ用
		}
	}
}

