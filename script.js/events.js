/****************/
/* mouse events */
/****************/

//   var addButton = document.getElementById('add-button');

//   addButton.onclick = function() { // nismo do sad pominjali anonimne funkcije - objasniti ukratko
//      console.log ("Klik")
//   var mainTitle = document.getElementById('shopping-list-title');
//      mainTitle.style.backgroundColor = 'magenta';
//    }

// addButton.onblur = function() {
//   var mainTitle = document.getElementById('shopping-list-title');
//   mainTitle.style.backgroundColor = 'green';
// }

// addButton.ondblclick = function() {
//   var mainTitle = document.getElementById('shopping-list-title');
//   mainTitle.style.backgroundColor = 'gray';
// }

/*******************/
/* keyboard events */
/*******************/

//   var inputField = document.getElementById('add-item-text');

// // ovo copy/paste-ovati - naglasiti da je ovo pomocna f-ja ciju cemo namenu objasniti za par redova
//   function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//    }

// // na kucanje u input menja se boja podnaslova
//    inputField.onkeydown = function() {
//    var subtitle = document.querySelector('h5');
//     subtitle.style.color = 'rgb(' + random(1, 255) + ',' + random(1, 255) + ',' + random(1, 255) + ')';
//  }


/*****************************************/
/* addEventListener, removeEventListener */
/*****************************************/

  //  var addButton = document.getElementById('add-button');

  //  addButton.addEventListener('click', function() {
  //     var mainTitle = document.getElementById('shopping-list-title');
  //    mainTitle.style.backgroundColor = 'red';
  //   });

/*
  prvi put se prosledjuje f-ja kao parametar - objasniti da je to u JS-u moguce.
  ime event-a je razlicito 'onclick' -> 'click' - naglasiti da se obrati paznja
  podeliti link https://developer.mozilla.org/en-US/docs/Web/Events
*/


/**********************/
/* alternativni nacin */
/**********************/

// var addButton = document.getElementById('add-button');

// var changeBackgroundColor = function() {
//   var mainTitle = document.getElementById('shopping-list-title');
//   mainTitle.style.backgroundColor = 'red';
// }

// addButton.addEventListener('click', changeBackgroundColor);


/************************/
/* window.resize example*/
/************************/

//resizovati prozor browsera pri demonstraciji - u inputu ce se ispisivati size

// ovo copy/paste-ovati - naglasiti da je ovo pomocna f-ja ciju cemo namenu objasniti za par redova
// function displayWindowSize() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   var size = "W: " + w + ", " + "H: " + h;
//   document.getElementById('add-item-text').value = size;
// }

// window.addEventListener('resize', displayWindowSize);



// /***********************/
// /* removeEventListener */
// /***********************/


// addButton.removeEventListener('click', changeBackgroundColor);

// window.removeEventListener('resize', displayWindowSize);