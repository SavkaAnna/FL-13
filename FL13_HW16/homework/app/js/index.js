const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
const allUsersDiv = document.getElementsByClassName('all-users')[0];

const dataMethods = [ 'POST', 'PUT' ]
const adminMethods = [ 'DELETE' ]
let getButtonsOfUpdate = [];
let getButtonsOfDelete = [];

(async function () {

    if(!await getUsers()){
        let uploadMasage = document.getElementsByClassName('upload')[0];
        uploadMasage.classList = 'none-upload';
    }
    
    let addButton = document.getElementsByClassName('add-new-user')[0];
    
    addButton.addEventListener('click', () => {
        addButton.disabled = 'true';
        let name = document.querySelector('.name');
        let username = document.querySelector('.username');
        postUser(name.value, username.value)
        addButton.disabled = false;
    })
    
    getButtonsOfUpdate.forEach(element => {
        element.addEventListener('click', (event) => {
            element.disabled = 'true';
            let getParentNode = event.target.parentNode;
            let getId = getParentNode.children[0].textContent;
            let newName = prompt('Enter new name:', 'name');
            let newUsername = prompt('Enter new username');
            putUser(getId, newName, newUsername);
            element.disabled = false;
        })
    })
    
    getButtonsOfDelete.forEach(element => {
        element.addEventListener('click', (event) => {
            element.disabled = 'true';
            let getParentNode = event.target.parentNode;
            let getId = getParentNode.children[0].textContent;
            deleteUser(getId);
            element.disabled = false;
        })
    })
})();

function sentHTTPRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        dataMethods.includes(method) && xhr.setRequestHeader('Content-Type', 'application/json');
        adminMethods.includes(method) && xhr.setRequestHeader('Authorization', 'admin');

        xhr.onload = () => {
            if(xhr.status >= 400){
                const errorMsg = `${xhr.status}: ${xhr.statusText}`
                console.error(errorMsg);
                reject(new Error(errorMsg))
            }else {
                resolve(xhr.response);
            }
            
        };

        xhr.send(JSON.stringify(data));

    });
    return promise;
}
 
async function getUsers() {
    return sentHTTPRequest('GET', `${baseUrl}/users`).then(responseData => {
        addDataToPage(responseData);
    })
}

function postUser(name, username) {
    sentHTTPRequest('POST', `${baseUrl}/users`, {
        name: name,
        username: username
    })
}

function putUser(id, name, username) {
    sentHTTPRequest('PUT', `${baseUrl}/users/${id}`, {
        name: name,
        username: username
    })
}

function deleteUser(id){
    sentHTTPRequest('DELETE', `${baseUrl}/users/${id}`)
}

function addDataToPage(array){
    array.forEach(element => {
        let div = document.createElement('div');
        div.classList = 'user';
        let id = document.createElement('p');
        let name = document.createElement('span');
        let username = document.createElement('span');
        let update = document.createElement('button');
        update.classList = 'update-user';
        getButtonsOfUpdate.push(update);
        let delet = document.createElement('button');
        delet.classList = 'delete-user';
        getButtonsOfDelete.push(delet);
        

        id.innerHTML = element.id;
        name.innerHTML = element.name;
        username.innerHTML = element.username;
        update.innerHTML = 'Update';
        delet.innerHTML = 'Delete';

        div.append(id, name, username, update, delet);
        allUsersDiv.append(div);
    });
    
}
