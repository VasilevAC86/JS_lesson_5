function initModal(modalSelector, openBtnSelector, claseBtnSelector){ // в () селекторы, по которым будем искать элементы
    const modalNode = document.querySelector(modalSelector);
    const openBtnNode = document.querySelector(openBtnSelector);
    const closeBtnNode = document.querySelector(claseBtnSelector);

    openBtnNode.addEventListener('click', () => {
        modalNode.classList.add('modal--opened');
    })
    closeBtnNode.addEventListener('click', () => {
        modalNode.classList.remove('modal--opened');
    })
}

initModal('.modal', '#open-btn', '#close-btn');