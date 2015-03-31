var content = document.querySelector('.content');
console.log("content here");

var text1 = document.querySelector('.word-1');
var text1text1 = text1.innerHTML;

var myRandomWords1 = ['red', 'blue', 'yellow', 'orange', 'green', 'purple'];

//

var text2 = document.querySelector('.word-2');
var text2text2 = text2.innerHTML;

var myRandomWords2 = ['boldest', 'meanest', 'sweetest', 'rudest', 'best', 'worst'];

//

var text3 = document.querySelector('.word-3');
var text3text3 = text3.innerHTML;

var myRandomWords3 = ['cute', 'sweaty', 'clammy', 'obscene', 'hard', 'soft'];

//

var text4 = document.querySelector('.word-4');
var text4text4 = text4.innerHTML;

var myRandomWords4 = ['eyes', 'legs', 'fingers', 'wings', 'thighs', 'toes'];

//

var text5 = document.querySelector('.word-5');
var text5text5 = text5.innerHTML;

var myRandomWords5 = ['mouth', 'nail', 'arm', 'foot', 'tounge', 'tooth'];

//

var text6 = document.querySelector('.word-6');
var text6text6 = text6.innerHTML;

var myRandomWords6 = ['house', 'mailbox', 'paper', 'human', 'tree', 'television'];

//

var text7 = document.querySelector('.word-7');
var text7text7 = text7.innerHTML;

var myRandomWords7 = ['mice', 'rats', 'humans', 'whales', 'tucans', 'zebras'];

//

var text8 = document.querySelector('.word-8');
var text8text8 = text8.innerHTML;

var myRandomWords8 = ['morbid', 'mangy', 'dreadful', 'pointless', 'dark', 'depressed'];

//

var text9 = document.querySelector('.word-9');
var text9text9 = text9.innerHTML;

var myRandomWords9 = ['happy', 'lighthearted', 'beautiful', 'scary', 'dreamy', 'unlawful'];

//

var text10 = document.querySelector('.word-10');
var text10text10 = text10.innerHTML;

var myRandomWords10 = ['sly', 'embarrased', 'bewildered', 'soft', 'light', 'loud'];

////////

text1.innerHTML = getNewWord1();

text2.innerHTML = getNewWord2();

text3.innerHTML = getNewWord3();

text4.innerHTML = getNewWord4();

text5.innerHTML = getNewWord5();

text6.innerHTML = getNewWord6();

text7.innerHTML = getNewWord7();

text8.innerHTML = getNewWord8();

text9.innerHTML = getNewWord9();

text10.innerHTML = getNewWord10();

////////

function getNewWord1(){
	var randomNumber = Math.floor(Math.random() * myRandomWords1.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords1[randomNumber];
	return randomWord;  //returns the random word
}

//

function getNewWord2(){
	var randomNumber = Math.floor(Math.random() * myRandomWords2.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords2[randomNumber];
	return randomWord;  //returns the random word
}

//

function getNewWord3(){
	var randomNumber = Math.floor(Math.random() * myRandomWords3.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords3[randomNumber];
	return randomWord;  //returns the random word
}

//

function getNewWord4(){
	var randomNumber = Math.floor(Math.random() * myRandomWords4.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords4[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord5(){
	var randomNumber = Math.floor(Math.random() * myRandomWords5.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords5[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord6(){
	var randomNumber = Math.floor(Math.random() * myRandomWords6.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords6[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord7(){
	var randomNumber = Math.floor(Math.random() * myRandomWords7.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords7[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord8(){
	var randomNumber = Math.floor(Math.random() * myRandomWords8.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords8[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord9(){
	var randomNumber = Math.floor(Math.random() * myRandomWords9.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords9[randomNumber];
	return randomWord;  //returns the random word
}

function getNewWord10(){
	var randomNumber = Math.floor(Math.random() * myRandomWords10.length);   //math.floor makes it a whole number, math.random picks a random decimal, .length refers to number of elements the array so you don't have to change if you add more or delete some
	var randomWord = myRandomWords10[randomNumber];
	return randomWord;  //returns the random word
}










