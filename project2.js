//GEt thhe Ui element
let form = document.querySelector("#book-form");
let booklist=document.querySelector('#book-list');



// book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI {
    
    static addtobooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href=# class="delete">X</a></td>`;
        //console.log(row);
        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
    static showAlert(message,classname){
        let div=document.createElement('div');
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        let container= document.querySelector('.container');
        let form=document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(function() {
           document.querySelector('.alert').remove();
        }, 3000);

    }
    static deletefrombook(target){
         if(target.hasAttribute('href')){
           target.parentElement.parentElement.remove();
           UI.showAlert("Book removed","success");
         }
    }
}

//add eventlisterner
form.addEventListener('submit', newbook); 
booklist.addEventListener('click',removebook);




// functions
function newbook(e) {
    e.preventDefault();

    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector('#isbn').value;



    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("please fill all the fields!","error");
    }
    else {
        let book = new Book(title, author, isbn);

        UI.addtobooklist(book);

        UI.clearFields();
        UI.showAlert("book insertion successful!","success");
    }

} 
function removebook(e){
    e.preventDefault();
    UI.deletefrombook(e.target);
}