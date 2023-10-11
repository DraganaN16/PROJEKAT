/****************
Shetanje po DOM-u
*****************/

//
// DESCENDANTS
//

//console.log(document.querySelector('.list-group').childNodes); 
 
//   Vratice NodeList - ocekujemo 5 item-a u objektu a dobicemo 11.
//   Objasniti da 'text' u konzoli predstavlja novi red  koji imamo u kodu i da browser to tumaci kao sastavni deo stranice tj. 'node'.
//   Dodati komentar negde u listu - pokazati da se i on tumaci kao 'node'
//   Ukloniti prazan red izmedju <ul> i prvog <li> i pokazati da nema prvog 'text' node-a

//console.log(document.querySelector('.list-group').firstChild);
//console.log(document.querySelector('.list-group').lastChild);


//console.log(document.querySelector('.list-group').children); 
// // vratice HTML kolekciju - naglasiti razliku u odnosu na NodeList -> samo html elementi su 'vraceni' 

//console.log(document.querySelector('.list-group').children[0]); 

//console.log(document.querySelector('.list-group').firstElementChild);
//console.log(document.querySelector('.list-group').lastElementChild);


//
// SIBLINGS AND ANCESTORS
//

//console.log(document.querySelector('.list-group').nextSibling);
//console.log(document.querySelector('.list-group').previousSibling);

//console.log(document.querySelector('.list-group').nextElementSibling); // vratice null - pokazati u HTML-u da zaista nema next sibling elementa u 'main-content' div-u
//console.log(document.querySelector('.list-group').previousElementSibling);

//console.log(document.querySelector('.list-group').parentNode);
//console.log(document.querySelector('.list-group').parentElement); // vratice isti element





/******************************
Dodavanje/uklanjanje u/iz DOM-a
*******************************/

// appendChild
//---------------

//var countParagraph = document.createElement('p');
//var countText = document.createTextNode('Total count: ');
//countParagraph.appendChild(countText);

//var mainDiv = document.querySelector('div.main-content');

//mainDiv.appendChild(countParagraph);



// insertBefore
//---------------

//var countParagraph = document.createElement('p');
//var countText = document.createTextNode('Total count: ');

//countParagraph.appendChild(countText);

//var mainDiv = document.querySelector('div.main-content');
//var inputContainer = document.querySelector('div.add-item-container');

//mainDiv.insertBefore(countParagraph, inputContainer);



// removeChild
//---------------

// list = document.querySelector('ul.list-group');
// console.log(list);
// list.removeChild(list.children[0]);



// replaceChild
//----------------

/*
ovde ici postepeno; kada se doda novi item u listu, pokazati u browseru;
falice klasa -> dodati i iskoristiti da se objasni kako se svaki atribut na elementu
moze menjati sa element.[atribut] = [nova vrednost].

nakon toga, falice <span class="list-group-item-text"> tag, i to dodati

nakon toga, falice <a> tag, i to dodati - prvo bez href-a, posle dodati href

na kraju zameniti prvi item u listi, potom poslednji (ponoviti 'length')
*/


// list = document.querySelector('ul.list-group');

// var newListItem = document.createElement('li');
// newListItem.className = 'list-group-item';

// //list.appendChild(newListItem);

// // <span>

// var newListSpan = document.createElement('span');
// var newListItemText = document.createTextNode('Pasta');
// newListSpan.className = 'list-group-item-text';
// newListSpan.appendChild(newListItemText);

// newListItem.appendChild(newListSpan);


// //  <a> tag

// var removeLink = document.createElement('a');
// var removeLinkText = document.createTextNode('x');
// removeLink.className = 'list-group-item-button';
// removeLink.appendChild(removeLinkText);

// removeLink.href = '#';

// newListItem.appendChild(removeLink);


// //list.appendChild(newListItem);


// list.replaceChild(newListItem, list.children[0]);
// //list.replaceChild(newListItem, list.children[list.children.length - 1]);