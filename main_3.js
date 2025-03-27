const ballNode = document.querySelector('#ball'); // Находим мяч
let isMove = false;

ballNode.addEventListener('mousedown', () => { // обработка события "нажата кнопка мыши"
    isMove = true;
})

ballNode.addEventListener('mouseup', () => { // обработка события "отжата кнопка мыши"
    isMove = false;
})

// document.addEventListener('click', (e) => { // Обработка события click по странице
//     ballNode.style.top = (e.pageY - 50) + 'px'; // координата Y для top
//     ballNode.style.left = (e.pageX - 50) + 'px';
// })

document.addEventListener('mousemove', (e) => { // Обработка события mousemove по странице
    if (isMove){
        ballNode.style.top = (e.pageY - 50) + 'px'; // координата Y для top
        ballNode.style.left = (e.pageX - 50) + 'px';
    }    
})