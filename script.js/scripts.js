


function getInputValue() {
    return document.getElementById('add-item-text').value;
}

function createNewListItem(text) {
    var newListItem = document.createElement('li');        //kreiramo list item
    newListItem.className = 'list-group-item';

    var newListItemSpan = document.createElement('span');    //kreiramo span
    newListItemSpan.className = 'list-group-item-text';
    newListItemSpan.textContent = text;                      //u okviru span-a imamo i text

    var newListItemLink = document.createElement('a');      //kreiramo link i sve sto je u okviru taga
    newListItemLink.className = 'list-group-item-button';
    newListItemLink.href = '#';
    newListItemLink.title = 'Remove item';
    newListItemLink.textContent = 'x';

    newListItem.appendChild(newListItemSpan);              //sada treba da uvezemo te tri stvari (li, span i a)
    newListItem.appendChild(newListItemLink);

    return newListItem;                                   //tako da nam ova f-ja za prosledjeni text kreira ceo list item sa spanom i link elem. i vraca da ga koristimo

}                                                           
document.getElementById('add-button').addEventListener('click', function() {
    
    var inputValueText = getInputValue();
    var newListItem = createNewListItem(inputValueText); 
    var list = document.getElementById('list-items');
    list.appendChild(newListItem);
    //console.log(inputValueText);
})

//nakon ovog koda kada u input polje ukucamo nesto i kliknemo na add,
// u conzoli se ispisuje uneti sadrzaj
//sledece: treba da prosledimo input value text drugoj f-ji koja ce da se
// zove- kreiraj novu namirnicu
//nakon kreiranja novih el.: li, span i a, dodajemo im klase
//pratimo sta sve treba, u consoli kad inspektujemo, i dodajemo

