function removeElement(label, input, valor) {
    const form = document.getElementById('container_inputs')
    const img = document.createElement('img')
    img.src = 'remove.png'
    img.style.width = '19px'
    img.style.cursor = 'pointer'
    form.appendChild(img)
    img.addEventListener('click', function () {
        label.remove()
        input.remove()
        img.remove()
        valor.remove()
    })
}

function resetFull() {
    const getForm = document.querySelector('#container_inputs')
    getForm.innerHTML = ""
}

function inputText() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    const createInputText = document.createElement('input')
    text.innerHTML = "Text"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputText.type = 'text'
    form.appendChild(text)
    form.appendChild(createInputText)
    removeElement(createInputText, text)
}

function inputNumber() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    const createInputNumber = document.createElement('input')
    text.innerHTML = "Number"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputNumber.type = 'number'
    form.appendChild(text)
    form.appendChild(createInputNumber)
    removeElement(createInputNumber, text)
}

function inputDate() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    const createInputDate = document.createElement('input')
    text.innerHTML = "Date"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputDate.type = 'date'
    form.appendChild(text)
    form.appendChild(createInputDate)
    removeElement(createInputDate, text)
}

function inputFile() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    const createInputFile = document.createElement('input')
    text.innerHTML = "File"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputFile.type = 'file'
    form.appendChild(text)
    form.appendChild(createInputFile)
    removeElement(createInputFile, text)
}

function inputButton() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    text.innerHTML = "Button"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    const createInputButton = document.createElement('input')
    createInputButton.type = 'button'
    createInputButton.value = 'Botón'
    form.appendChild(text)
    form.appendChild(createInputButton)
    removeElement(createInputButton, text)
}

function inputCheck() {
    const form = document.getElementById('container_inputs')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const text = document.createElement('label')
    const createInputCheck = document.createElement('input')
    span.innerHTML = 'Valor'
    div.style.display = 'flex', div.style.alignItems = 'center', div.style.gap = '10px'
    text.innerHTML = "CheckBox"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputCheck.type = 'checkbox'
    form.appendChild(text)
    div.appendChild(createInputCheck)
    div.appendChild(span)
    form.appendChild(div)
    removeElement(createInputCheck, text, span)
}

function inputRadio() {
    const form = document.getElementById('container_inputs')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const text = document.createElement('label')
    const createInputRadio = document.createElement('input')
    span.innerHTML = 'Valor'
    div.style.display = 'flex', div.style.alignItems = 'center', div.style.gap = '10px'
    text.innerHTML = "Radio"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    createInputRadio.type = 'radio'
    form.appendChild(text)
    div.appendChild(createInputRadio)
    div.appendChild(span)
    form.appendChild(div)
    removeElement(createInputRadio, text, span)
}

function inputSelect() {
    const form = document.getElementById('container_inputs')
    const text = document.createElement('label')
    const createInputSelect = document.createElement('select')
    const options = ["Selecciona una opción", "Opción A", "Opción B", "Opción C"];
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        createInputSelect.appendChild(option);
    }
    text.innerHTML = "Select"
    text.style.fontWeight = '600'
    text.style.marginTop = '10px'
    form.appendChild(text)
    form.appendChild(createInputSelect)
    removeElement(createInputSelect, text)
}