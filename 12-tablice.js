'use strict'
//tablica to to samo co objekt tylko na indexy//

var imiona = ['Monika' , 'Krystian' , 'Łukasz'];
//console.log(imiona);

imiona[3] = 'Tania';//zamiana imion 3 i 2//
imiona[2] = 'Ela';

imiona.push('Geralt');

//console.log(imiona);

imiona.pop();//usuwa ostatni element listy//
imiona.pop();

//console.log(imiona);

console.log(imiona.unshift('Robert'));//unshift dodaje jako pierwszy//

console.log(imiona);
