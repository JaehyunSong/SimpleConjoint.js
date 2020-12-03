# SimpleConjoint.js 0.0.0

JavaSciprt for VERY VERY simple conjoint experiment using Qualtrics

**作動は確認できておりますが、使い方については今度作成します。**

---

### Author

* [Jaehyun Song](https://www.jaysong.net)

---

### 履歴
* 2020年12月3日: 0.0.0

---

# 使い方

### 1. スクリプトのダウンロード

* [`SimpleConjoint.js`](https://github.com/JaehyunSong/SimpleConjoint.js/raw/main/SimpleConjoint.js)をダウンロードします。
* 推奨はしませんが、QualtricsのJavaScript Editorで直接修正をするなら、スクリプトのコピーだけで十分です。

### 2. スクリプトを修正

### 3. Qualtricsの質問文に埋め込む

### 4. Embedded Data (ED)設定

#### 方法1. 手入力（Embedded Dataブロック利用）
#### 方法2. スクリプトの利用（Web Serviceブロック利用）

```
http://tintstyle.cafe24.com/Qualtrics/SimpleConjoint/QualtricsSetED.php?T=5&P=2&A=6&L=F
```

* パラメーター
  * `T`: タスク数
  * `P`: プロファイル数
  * `A`: 属性数
  * `L`: 変数名の先頭文字（指定しない場合、F）
* 全データ追加
* URLを削除する。URLを残しても良いが、意味もなく調査の度の宋のサーバーをいじめることになる。

### 5. 質問文にデータフィールドを入力

ここからは[宋のHP](https://www.jaysong.net/studynote/methodology/qualtrics_conjoint/)の3.2.2を参照してください。
