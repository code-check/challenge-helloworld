function hello(name) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします。
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  //ここにHelloworldを実装します。
  //return "Hello World!";
  //BEGIN_CHALLENGE
  if (name) {
  	return "Hello "+name+"!";
  } else {
  	return "Hello!";
  }
  //END_CHALLENGE
}

console.log(hello(process.argv[2]));