
/************************
document.getElementById()
************************/

// console.log(document.getElementById('shopping-list-title'));

// console.log(document.getElementById('shopping-list-title').id);
// console.log(document.getElementById('shopping-list-title').tagName);

// document.getElementById('shopping-list-title').style.color = 'orange';
// document.getElementById('shopping-list-title').style.fontSize = '12px';
// document.getElementById('shopping-list-title').style.fontStyle = 'italic';
// document.getElementById('shopping-list-title').style.textDecoration = 'underline';
// document.getElementById('shopping-list-title').style.padding = '20px 20px';

// // Cast to var
// var title = document.getElementById('shopping-list-title');

// // Update content
// title.textContent = 'My shopping list for the weekend';
// title.innerText = 'Shopping list for next month';

// add HTML
// title.innerHTML = 'Shopping list for <span style="color: green">next month</span>';

// // dodati samo da se pokaze razlika izmedju innerHTML i ostalih koji ne parsiraju html
// title.textContent = 'My shopping list for <span>the weekend</span>';
 


/***********************
document.querySelector()
***********************/

// console.log(document.querySelector('#shopping-list-title'));
// console.log(document.querySelector('.list-group-item')); // naglasiti da uvek vraca samo prvi element iz match-ovanog skupa
// console.log(document.querySelector('a'));
// console.log(document.querySelector('li.list-group-item'));
// console.log(document.querySelector('li.list-group-item:nth-child(3)'));
// console.log(document.querySelector('div, h4, h5')); // uklanjati spreda po jedan tag kako bi pokazali da se uvek uzme prvi na koji se naidje



/**************************
document.querySelectorAll()
**************************/

// console.log(document.querySelectorAll('.list-group-item')); // vraca NodeList objekat - ima length i index-e
// console.log(document.querySelectorAll('.list-group-item')[2]);

// var groceriesList = document.querySelectorAll('.list-group-item');

// groceriesList[2].style.color = 'red';
// groceriesList[2].style.backgroundColor = '#ccc';

// for (var i = 0; i < groceriesList.length; i++) {
//   groceriesList[i].style.border = '5px solid green';
// }

// console.log(document.querySelectorAll('div, h4, h5'));

// var mixedTags = document.querySelectorAll('div, h4, h5');

// for (var i = 0; i < mixedTags.length; i++) {
//   mixedTags[i].style.border = '3px solid orange';
// }

// console.log(document.querySelectorAll('#shopping-list-title')); // iako imamo samo jedan element koji se poklapa sa css selektorom, opet dobijamo NodeList



/********************************
document.getElementsByClassName()
********************************/

// console.log(document.getElementsByClassName('list-group-item'));

// var groceriesList = document.getElementsByClassName('list-group-item');

// groceriesList[0].style.padding = '30px';
// groceriesList[4].textContent = 'The changed last element';

// for (i = 0; i < groceriesList.length; i++) {
//   groceriesList[i].style.backgroundColor = '#ccc';
//   // groceriesList[i].style.display = 'none';
// }



/******************************
document.getElementsByTagName()
******************************/

// console.log(document.getElementsByTagName('a'));

// var links = document.getElementsByTagName('a');
// var metaTags = document.getElementsByTagName('meta');
// var inputs = document.getElementsByTagName('input');

// console.log(links[0].className);

// // svi primeri koji vaze za getElementByClassName() mogu se i ovde primeniti


