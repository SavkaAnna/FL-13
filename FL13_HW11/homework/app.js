const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

let folderClose = '<i class="material-icons close">folder</i>';
let folderOpen = '<i class="material-icons open">folder_open</i>';
let file = '<i class="material-icons file">insert_drive_file</i>';

function elementsInList(array){
  let ul = document.createElement('ul');
  array.forEach(el => {
    let li = document.createElement('li');
    if(el['folder']) {
      li.innerHTML = `<div class = 'folder'> ${folderClose} <span> ${el['title']} </span></div>`;
    }else {
      li.innerHTML = `<div class = 'file'> ${file} <span> ${el['title']} </span></div>`;
    }
    if(el['children']){
      li.append(elementsInList(el['children']));
    }
    ul.append(li);
  });
  return ul;
}
rootNode.append(elementsInList(data));

let div = rootNode.querySelectorAll('.folder');
div.forEach(element => {
  if(element.nextSibling){
    element.nextSibling.setAttribute('style', 'display: none')
  }
  element.addEventListener('click', function(){
    if(element.querySelector('i').textContent === 'folder'){
      element.querySelector('i').innerHTML = 'folder_open';
      if(element.nextSibling){
        element.nextSibling.setAttribute('style', 'display: auto')
      }else if(!element.querySelector('li')){
        let li = document.createElement('li');
        li.innerHTML='Folder is empty!';
        li.classList.add('isEmpty');
        element.append(li)
      }
    }else if(element.querySelector('i').textContent === 'folder_open'){
      element.querySelector('i').innerHTML = 'folder';
      element.nextSibling.setAttribute('style', 'display: none');
    }
  })
});

  let menu = document.createElement('ul');
  menu.setAttribute('class', 'menu')
  let rename = document.createElement('li');
  let delete_item = document.createElement('li');
  rename.innerHTML = 'Rename';
  menu.append(rename);
  delete_item.innerHTML = 'Delete item';
  menu.append(delete_item);
  rootNode.appendChild(menu);

div = rootNode.querySelectorAll('li');
let eventLi; 
div.forEach(element => {
  element.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.setAttribute('style', 'top: ' + event.clientY + 'px;' + ' left: ' + + event.clientX + 'px');
    menu.classList.add('active');
    eventLi = event.target.closest('li');
  });

  document.addEventListener('click', event => {
    if(event.button !== 2){
      menu.classList.remove('active');
    }
  }, false)

  menu.addEventListener('click', event => {
    event.stopPropagation();
  }, false)
  
  delete_item.addEventListener('click', () => {
    eventLi.hidden = true;
  })

  rename.addEventListener('click', () => {
    
    let span = eventLi.querySelector('span')
    span.innerHTML = '<input value = ' + span.textContent + '></input>'

    rootNode.addEventListener('click', () => {
      span.innerHTML = '<span>'+span.querySelector('input').value+'</span>'
    })
    span.addEventListener('click', event => {
      event.stopPropagation();
    }, false)
    
  }, false)

});


