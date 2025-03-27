function initValidatedInput(selector) {
    const inputNodeList = document.querySelectorAll(selector); // ищем все Input в index.html по селектору (классу)
    inputNodeList.forEach((inputNode) => { // inputNode - это элемент inputNodeList
        let oldInput = '';
        inputNode.value = '';
        
        inputNode.addEventListener('input', (e) => { // обработчик события ввода
            const newSymbol = inputNode.value.slice(-1) // берём копию строки от последнего симола до конца строки
            if (newSymbol.charCodeAt(0) >= 48 && newSymbol.charCodeAt(0) <= 57)
                inputNode.value = oldInput;
            oldInput = inputNode.value;
        })
    })
}

initValidatedInput(".validated");