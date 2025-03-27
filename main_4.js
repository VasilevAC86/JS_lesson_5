const btnNode = document.querySelector('.btn');
const colorNodeList = document.querySelectorAll('.color');

let currentLight = 0; // текущий цвет светофора (нулевой индекс)

btnNode.addEventListener('click', () => {
    currentLight++;
    currentLight = currentLight % 3;
    colorNodeList.forEach((colorNode, idx) => {        
        colorNode.classList.remove('active') /*убираем класс active*/
        if (idx == currentLight)
            colorNode.classList.add('active')
    })
})