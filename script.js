let books = [];
if (localStorage.books) books = JSON.parse(localStorage.getItem('books'));

const appi = document.getElementById("list-cr");

function create() {
let card = '';

for(let i = 0; i < books.length; i++){
   const uni = `
   <ul>
   <li>${books[i].name}</li>
   <li>${books[i].author}</li>
   <li><button data-index = "${i}" class="remove">remove</button></li>
   </ul>
   `
   card += uni;
}

appi.innerHTML = card;

document.querySelectorAll(".remove").forEach((element) => element.addEventListener('click', (event) =>{
    const getindex = event.currentTarget.dataset.index;
    books.splice(parseInt(getindex, 5), 1);
    create();
    localStorage.setItem('books', JSON.stringify(books));
}));
}

create();

const newtitle = document.getElementById("title");
const auth = document.getElementById("author");

function addbooks() {
    const book = {};
    book.name = newtitle.value;
    book.author = auth.value;
    books.push(book);
    create();
    localStorage.setItem('books', JSON.stringify(books));
}

const addbtn = document.getElementById("add");

addbtn.addEventListener('click', () => {
    addbooks();
})



