# SimpleConjoint.js 0.0.0

JavaSciprt for VERY VERY simple conjoint experiment using Qualtrics

Qualtricsを利用した完全無作為コンジョイント実験のためのスクリプト

**作動は確認できておりますが、使い方については今度作成します。**

---

### Author

* [Jaehyun Song](https://www.jaysong.net) (そん じぇひょん)
* 同志社大学文化情報学部　助教
* https://www.jaysong.net
* jasong@mail.doshisha.ac.jp

---

### 履歴
* 2020年12月3日: 0.0.0

---

# 使い方

### 1. スクリプトのダウンロード

* [`SimpleConjoint.js`](https://github.com/JaehyunSong/SimpleConjoint.js/raw/main/SimpleConjoint.js)をダウンロードします。
* 推奨はしませんが、QualtricsのJavaScript Editorで直接修正をするなら、スクリプトのコピーだけで十分です。

### 2. スクリプトを修正

**タスク数の設定**
```javascript
var Tasks = 3;
```

**プロファイル数の設定**
```javascript
var Profiles = 2;
```

**先頭文字の設定**
```javascript
var Letter = "F";
```

**属性名を入力**

```javascript
var KeyArray = ["性別", "年齢", "学歴", "年収"];
```

**各属性に対応する水準を入力**

* `{}`内は`"属性名":["水準1", "水準2", ...]`の形式で入力してください。
* `KeyArray`と`FeaturesArray`の属性名は一致する必要がありますが、順序が一致しなくても問題ありません。


```javascript
var FeaturesArray = {"性別":["男性", "女性"], 
                     "年齢":["20", "30", "40", "50"],
                     "学歴":["高校", "大学", "大学院"],
                     "年収":["0", "300万", "500万", "700万", "1000万"]};
```

**属性順番のランダム化**

ランダム化しない場合、以下の行をコメントアウトしてください。コメントアウトは行の冒頭に`//`を付けるだけです。

```javascript
var KeyArray = shuffle(KeyArray);
```

### 3. Qualtricsの質問文に埋め込む

1. 調査票における最初の質問文左側の歯車ボタンをクリックし、「Add JavaSciprt」を選択
    * コンジョイント実験のブロックより上ならどこでも良いですが、調査同意書などに入れておけば確実でしょう。
2. コード3行目の箇所にスクリプトを貼り付けます。

```javascript
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads (ここにスクリプトを貼り付ける)*/
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
```

### 4. Embedded Data (ED)設定

#### 方法1. 手入力（Embedded Dataブロック利用）

1. Survey Flow
2. 最上段にEmbedded Dataブロック追加
    * JavaScriptが埋め込まれた質問文が含まれているブロックより上ならどこでもOKをです。Survey Flow上の最上段なら安心です。
3. `F-1-1`、`F-1-1-1`、`F-1-2`...などをすべて追加
    * (タスク数 x 属性数 x プロファイル数) + (タスク数 x 属性数)個を入力する必要があります。上の例だと36個です。
    * ここが一番面倒くさいかも

#### 方法2. スクリプトの利用（Web Serviceブロック利用）

結局、値を保存するフィールドさえ作れば良いわけですが、Web Serviceを使用してもフィールドの生成は可能です。中身が空のフィールドを生成し、JavaScriptを用いてそのフィールドを埋めることになります。具体的な方法としては、一瞬だけ宋のサーバーを借りて自動的にEmbedded Dataフィールドを入力します。宋のサーバーを使用するのは調査票設計の段階のみであって、実際の調査では宋のサーバーは使いません。

1. Survey Flow
2. 最上段にWeb Serviceブロック追加
    * JavaScriptが埋め込まれた質問文が含まれているブロックより上ならどこでもOKをです。Survey Flow上の最上段なら安心です。
3. URLに以下のURLを入力。`T=3&P=2&A=4&L=F`の箇所を適宜修正します。

```
http://tintstyle.cafe24.com/Qualtrics/SimpleConjoint/QualtricsSetED.php?T=3&P=2&A=4&L=F
```

* 4つのパラメーター（`T`、`P`、`A`、`L`）の詳細は以下の通りです。
  * `T`: タスク数
  * `P`: プロファイル数
  * `A`: 属性数
  * `L`: 変数名の先頭文字（指定しない場合、F）

4. URL入力欄右側の「Test」ボタンをクリック
5. ダイアログ上段Selectの「All」をクリックして全項目を選択し、「Add Embedded Data」をクリック
6. URLを削除します。
   * URLを残しても作動しますが、意味もなく調査の度の宋のサーバーをいじめることになります。実査の際、読み込み速度も落ちるので、URLは除去しておきましょう。

### 5. 質問文にデータフィールドを入力

ここからは[宋のHP](https://www.jaysong.net/studynote/methodology/qualtrics_conjoint/)の3.2.2を参照してください。
