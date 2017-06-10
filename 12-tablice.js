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

console.log(imiona.join(" - ") ); //dołacz do kody po między wszystkimi elemętami

/*imiona.sort()// w kolejności alfabetycznej */

/*imiona.reverse()//odwraca kolejnoiść tablicy od końca do początku*/

var imionaMeskie =['Robert', 'Mariusz' , 'Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona);//concat łączy tablice//

console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz"));

console.log( Array.isArray(zbiorImion));//sprawdza czy to jest tablica

console.log(zbiorImion.slice(2, 5));

zbiorImion.splice(2, 3, "Julek",  "Krzyś");//sortuje od 2, wycina 3 elementy i wstawia julka i krzysia

console.log(zbiorImion);

//to string-całą tablice zamienia na stringi , i wyświetala po przecinku