# Hello World
## codecheckで「Hello world」を試してみよう

現在、皆様は試験を開始して、チャレンジを開いています。
早速ですが、試しにcodecheckを利用して、問題を回答してみましょう。

### 1. ファイルの移動
こちらのリンクをクリックしてください。  
[test1.js](test/test1.js)  
リンクで指定されたファイルが、エディタ上で開かれていることを確認してください。
リンクをクリックして指定されたファイルを表示することが可能です。
また、もとの編集ファイルに戻るには、画面左側のプロジェクトツリーから
```
app/hello.js
```
を再度クリックしてください。  
  
[hello.js](app/hello.js)  
のファイルが開かれます。

### 2. ファイルの編集
エディタ上のファイルを編集してみましょう。  
```
//ここにHelloworldを実装します。
```
と書かれている下の行のコメントアウトを外して
```
//return "Hello World";
```
から
```
return "Hello World";
```
にしてみましょう。

### 3. ファイルの保存
編集したファイルの実行にはまず編集したファイルの保存が必要です。
編集が完了したら、画面右上の"SAVE"ボタンをクリックしましょう。  
"app/hello.js"にチェックが入っていることを確認して、ファイルを保存してください。  
保存が完了したら"continue"ボタンを選択しましょう。

### 4. ファイルの実行
正しく実行できているかどうかを確かめるために、テスト（正しく動いているかどうかを確かめるコード）を実行することが出来ます。
エディタ中部の”RUN”ボタンをクリックしてみましょう。  
クリックすると、テストコードが実行されます。少々時間がかかりますが、最後に

```
codecheck: Finish 'npm install with code 0
1..2
ok 1 helloWorld Hello World!
# tests 2
# pass 1
# fail 1
codecheck: Finish with code 0
codecheck: tests  : 2
codecheck: success: 1
codecheck: failure: 1
```
と表示されれば問題なく実行されています。  
この場合、テストケース（期待される入力と出力値）2つに対して、1つが正しく回答ができている事になります。

### 5. チャレンジの回答
現段階では、完璧な回答ではありません。
先ほどコメントアウトを外した行を
```
return "Hello "+name+"!";
```
に書き換えましょう。編集が完了したら「SAVE」をして、もう一度"RUN"ボタンをクリックしてください。
```
codecheck: Finish 'npm install with code 0
1..2
ok 1 helloWorld Hello World!
# tests 2
# pass 2
# fail 0
codecheck: Finish with code 0
codecheck: tests  : 2
codecheck: success: 2
codecheck: failure: 0
```
が表示されたら成功です。

### 6. ファイルの保存
編集が完了したら、改めて画面右上の"SAVE"ボタンをクリックしましょう。  
クリック後に表示されているファイルの中から「保存したいファイル」を選択してください。
ファイルが保存をされたら、"Back"ボタンをクリックして、チャレンジの一覧ページに戻ってください。
