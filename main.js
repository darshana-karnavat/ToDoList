const aAddingTodos = () => {

    const aNewTask = document.createElement('li');
    aNewTask.setAttribute('class', 'list-group-item')
    const aTaskValue = document.getElementById('a-my-input').value;
    const aTaskText = document.createTextNode(aTaskValue);
    const aErrorMessage = document.getElementById('error-message');
    const aErrorMessageText = document.createTextNode('You must write some Tasks!');
    const aClearError = () => aErrorMessage.innerText = '';


    aNewTask.appendChild(aTaskText);
    if (aTaskValue === '') {
        aClearError();
        aErrorMessage.appendChild(aErrorMessageText)
    } else {
        document.getElementById('a-tasks').appendChild(aNewTask);
        aClearError();
    }
    document.getElementById('a-my-input').value = '';
    }