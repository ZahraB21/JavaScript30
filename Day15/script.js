const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('input[type=text]')).value; // this, refers to the form
    const item = {
        text,
        done: false
    }
    items.push(item);
    itemsList.innerHTML = items.map( (item, index) => {
        return `
            <li>
                <input type = "checkbox" data-index = ${item.index} id = ${item.text}>
                <label for = ${item.text}>${item.text}</label>
            </li>
        `}).join('');

    this.reset(); // resetting the input by resetting the form
}

addItems.addEventListener('submit', addItem);
