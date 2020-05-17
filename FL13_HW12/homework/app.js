const root = document.getElementById('root');
let divStatic = document.createElement('div');
divStatic.setAttribute('class', 'section static')
let buttonAdd = createButton('Добавить книгу');
buttonAdd.setAttribute('class', 'button button-add');
divStatic.append(buttonAdd);
let divDinamic = document.createElement('div');
divDinamic.setAttribute('class', 'section dinamic')
root.append(divStatic, divDinamic);
let arrayButtonsEdit = [];
let book = [];
let url = 'file:///home/anna/Документы/FL13_HW12/homework/index.html';


document.addEventListener('DOMContentLoaded',() => {
    bookArray();
    showAllBooks();
    window.onpopstate = function(){
        book.forEach(element => {
            if(location.hash === '#preview' && location.search === `?id={${element.id}}`){
                showBook(book[element.id-1]);
            }else if(location.hash === '#add'){
                addBook();
            }else if(location.hash === '#edit' && location.search === `?id={${element.id}}`){
                editBook(element.id);
            }
        })
    }
    
    buttonAdd.addEventListener('click', function(){
        addBook();
    });
    
    arrayButtonsEdit.forEach(element => {
        element.addEventListener('click', event => {
            let nameBook = event.target.closest('div').querySelector('a');
            let idbook;
            for(let i = 1; i<=localStorage.length; i++){
                if(JSON.parse(localStorage.getItem(i)).title === nameBook.innerHTML){
                    idbook = i;
                    break;
                }
            }
            
            editBook(idbook);
            console.log(location.hash)
            console.log(location.search)
        })
    });

    document.querySelectorAll('.name-book').forEach(element => {
        element.addEventListener('click', (e) => {
            for(let i = 1; i<=localStorage.length; i++){
                if(JSON.parse(localStorage.getItem(i)).title === element.innerHTML){
                    showBook(JSON.parse(localStorage.getItem(i)))
                    break;
                }
            }
            e.stopPropagation();
        })
    });
})

function bookArray () {
    for(let i = 1; i<=localStorage.length; i++){
        if (!localStorage.hasOwnProperty(i)) {
            continue;
        }
        book.push(JSON.parse(localStorage.getItem(i)));
    }
}

function showAllBooks() {
    history.pushState(book, '', url);
    book.forEach(element => {
        let divBook = document.createElement('div');
        divBook.setAttribute('class', 'books');
        let bookLink = document.createElement('a');
        bookLink.innerHTML = element.title;
        bookLink.setAttribute('class', 'name-book');
        bookLink.setAttribute('href', '#preview');
        let button = createButton('Редактировать');
        button.setAttribute('class', 'button button-edit');
        divBook.append(bookLink, button);
        divStatic.append(divBook);
        arrayButtonsEdit.push(button);
    });
}

function createButton(textButton){
    let button = document.createElement('button');
    button.innerHTML = textButton;
    return button;
}

function createBook(newId, newTitle, newAuthor, newImg, newPlot){
    let book = {
        id: newId,
        title: newTitle,
        author: newAuthor,
        img: newImg,
        plot: newPlot
    }
    localStorage.setItem(book.id, JSON.stringify(book));
}

function formBook(){
    clearDinamicSection();
    let title = document.createElement('div');
    title.setAttribute('class', 'form-book title');
    title.innerHTML = 'Название';
    let author = document.createElement('div');
    author.setAttribute('class', 'form-book author');
    author.innerHTML = 'Автор';
    let img = document.createElement('div');
    img.setAttribute('class', 'form-book img');
    img.innerHTML = 'Обложка';
    let plot = document.createElement('div');
    plot.setAttribute('class', 'form-book plot');
    plot.innerHTML = 'Аннотация';
    let buttonSave = createButton('Сохранить');
    buttonSave.setAttribute('class', 'button button-save');
    let buttonCancel = createButton('Отменить');
    buttonCancel.setAttribute('class', 'button button-cancel');
   
    title.append(document.createElement('input'));
    author.append(document.createElement('input'));
    img.append(document.createElement('input'));
    plot.append(document.createElement('input'));
    divDinamic.append(title, author, img, plot, buttonSave, buttonCancel);

    return {'title': title.querySelector('input'),
            'author': author.querySelector('input'),
            'img': img.querySelector('input'),
            'plot': plot.querySelector('input'),
            'save': buttonSave,
            'cancel': buttonCancel};
}

function addBook(){
    let data = formBook();
    data.save.addEventListener('click', () => {
        createBook(localStorage.length+1, data.title.value, data.author.value, data.img.value, data.plot.value);
        showBook(JSON.parse(localStorage.getItem(localStorage.length)));
        setTimeout(alert('Книга успешно добавлена'), 300);
    })
    data.cancel.addEventListener('click', () => {
        if(confirm('Отменить изменения?')){ 
            history.back();
        }
    })
    history.pushState(book, '', `${url}#add`);
}

function editBook(bookid){
    let getItem = JSON.parse(localStorage.getItem(bookid));
            
    let data = formBook();
    data.title.value = getItem.title;
    data.author.value = getItem.author;
    data.img.value = getItem.img;
    data.plot.value = getItem.plot;
                
    data.save.addEventListener('click', () => {
        createBook(bookid, data.title.value, data.author.value, data.img.value, data.plot.value);
        showBook(JSON.parse(localStorage.getItem(localStorage.length)));
        setTimeout(alert('Книга успешно обновлена'), 300);
    })

    data.cancel.addEventListener('click', () => {
        if(confirm('Отменить изменения?')){ 
            history.back();
        }
    })
    history.pushState(book, '', `${url}?id={${bookid}}#edit`);
}

function clearDinamicSection(){
    while(divDinamic.firstChild){
        divDinamic.removeChild(divDinamic.firstChild)
    }
}

function showBook(book_show){
    clearDinamicSection();
    let title = document.createElement('div');
    title.setAttribute('class', 'title-book');
    title.innerHTML = book_show.title;
    let author = document.createElement('div');
    author.setAttribute('class', 'author-book');
    author.innerHTML = book_show.author;
    let img = document.createElement('img');
    img.setAttribute('class', 'img-book');
    img.setAttribute('src', book_show.img);
    let plot = document.createElement('div');
    plot.setAttribute('class', 'plot-book');
    plot.innerHTML = book_show.plot;

    history.pushState(book_show, '', `?id={${book_show.id}}#preview`);
    divDinamic.append(title, author, img, plot);
}





