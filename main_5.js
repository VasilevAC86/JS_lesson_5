const listNode = document.querySelector('ol')
const itemNodeList = listNode.querySelectorAll('li');

listNode.addEventListener('click', (e) =>{
    if (e.target.tagName == 'LI') { // Тэги большими буквами
        itemNodeList.forEach((itemNode) => { // убираем подсветку, если она была у каждого элемента в списке
            itemNode.style.backgroundColor = 'transparent';
        })
        e.target.style.backgroundColor = 'orange'; // добавляем подсветку элементы, на который нажали
    }
})