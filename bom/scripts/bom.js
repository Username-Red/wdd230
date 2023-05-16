// const input = document.querySelector("favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("list");

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", () => {
    if (input.value != "") {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener("click", function() {
            list.removeChild(listItem);
        } )

        input.focus();

        input.textContent = "";



    }
});