window.addEventListener('load', () => {})
const inputTextMain = document.querySelector('#text-main');
const buttonAdd = document.querySelector('#addButton');
const listInputs = document.querySelector('#list-inputs');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = inputTextMain.value;

    if(inputTextMain.value === ''){
        alert('Coloque a sua tarefa do dia!');
        return
    };

    const singleItem = document.createElement('div');
    singleItem.classList.add('single-item')
    listInputs.appendChild(singleItem);
    
    const textInput = document.createElement('div');
    textInput.classList.add('text-input');
    singleItem.appendChild(textInput);

    const inputText = document.createElement('input');
    inputText.classList.add('text');
    inputText.type = 'text';
    inputText.value = task;
    inputText.setAttribute('readonly','readonly');

    textInput.appendChild(inputText);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    singleItem.appendChild(buttons);

    const inputButtonEdit = document.createElement('input');
    inputButtonEdit.type = 'button';
    inputButtonEdit.value = 'Editar';
    inputButtonEdit.id = 'editar';

    const inputButtonDelete = document.createElement('input');
    inputButtonDelete.type = 'button';
    inputButtonDelete.value = 'Deletar';
    inputButtonDelete.id = 'delete';
    
    buttons.appendChild(inputButtonEdit);
    buttons.appendChild(inputButtonDelete);

    inputTextMain.value = '';

    inputButtonEdit.addEventListener('click', (e)=>{
        if(inputButtonEdit.value === 'Editar'){
            inputButtonEdit.value = 'Salvar'
            inputText.removeAttribute('readonly');
            inputText.focus();
        }else if (inputButtonEdit.value === 'Salvar'){
            inputText.setAttribute('readonly','readonly');
            inputButtonEdit.value = 'Editar';
        }
    })
    
    inputButtonDelete.addEventListener('click', () => {
        singleItem.remove();
    })

})
