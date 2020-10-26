const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('input[type=text]')).value; // this, refers to the form
    const item = {
        text,
        done: false
    }

    items.push(item);
    populateItems(items, itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset(); // resetting the input by resetting the form
}

function populateItems(plates = [], platesList) {
    platesList.innerHTML = plates.map( (item, index) => {
        return `
            <li>
                <input type = "checkbox" data-index = ${index} id = ${item.text} ${item.done ? 'checked': ''}>
                <label for = ${item.text}>${item.text}</label>
            </li>
        `}).join('');
}

function toggleDone(e){
    if (!e.target.matches('input')) return; // if its not an input
    const el = e.target;
    const index = el.dataset.index;
    console.log(index);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateItems(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateItems(items, itemsList);



