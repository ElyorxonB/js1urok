var str = prompt('Введите ваше имя');

console.log('My name is ' + str);


var str = +prompt('Введите ваш возраст');

console.log('I am ' + (+str) +  ' years old');


var str = +prompt('Решите пример №1: 10 + 3 = ?');

console.log('Your answer ' + (+str) + ' : Correct answer ' + (+10+3));


var str = +prompt('Решите пример №2: 10 - 3 = ?');

console.log('Your answer ' + (+str) + ' : Correct answer ' + (+10-3));


var str = +prompt('Решите пример №3: 11 * 3 = ?');

console.log('Your answer ' + (+str) + ' : Correct answer ' + (+11*3));


var str = +prompt('Решите пример №4: 10 / 3 = ?');

console.log('Your answer ' + (+str) + ' : Correct answer ' + (+10/3));


var str = +prompt('Решите пример №5: 90 % 20 = ?');

console.log('Your answer ' + (+str) + ' : Correct answer ' + (90%20));

var str = prompt('Закончить тест');

alert(str)
