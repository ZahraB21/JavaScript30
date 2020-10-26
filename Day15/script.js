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
                <input type = "checkbox" data-index = ${item.index} id = ${item.text}>
                <label for = ${item.text}>${item.text}</label>
            </li>
        `}).join('');
}

addItems.addEventListener('submit', addItem);

populateItems(items, itemsList);
