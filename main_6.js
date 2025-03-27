const conteinerNode = document.querySelector('.conteiner')
const btnNode = document.querySelector('#btn')

let dropdown = null

btnNode.addEventListener('mouseover', (e => {
    dropdown = document.createElement('DIV'); // создаём новый элемент
    dropdown.classList.add('dropdown');
    dropdown.textContent = 'Подсказка';
    if (conteinerNode.offsetTop > 25){ /*смещение эл. относительно верхнего края экрана*/    
        dropdown.style.top = '-33px';
    }
    else {
        dropdown.style.top = '20px';
    }
    conteinerNode.appendChild(dropdown); // помещаем эл. dropdown в div
}))

btnNode.addEventListener('mouseleave', () => {
    dropdown.remove();
    dropdown = null;
})