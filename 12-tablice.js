'use strict'
//tablica to to samo co objekt tylko na indexy//

var imiona = ['Monika' , 'Krystian' , 'Łukasz'];
console.log(imiona);

imiona[3] = 'Tania';//zamiana imion 3 i 2//
imiona[2] = 'Ela';

imiona.push('Geralt');

console.log(imiona);

imiona.pop();//usuwa ostatni element listy//
imiona.pop();

console.log(imiona);

console.log(imiona.unshift('Robert'));//unshift dodaje jako pierwszy//

console.log(imiona);

console.log(imiona.shift()); //usuwa pierwszy element z tablicy//

console.log(imiona);

console.log(imiona.length);

for (var i = 0; i < imiona.length ; i++) {
	console.log( imiona[i] );
}

// pętla  po tablicy nietzreba definować startu i końca, tylko przelatuje po wszystkich elemętach//

imiona.forEach(function (element, i){
	console.log('Element nr ' + i + '=' +element);
});
