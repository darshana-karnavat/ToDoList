//   Alex's Parth

const aAddingTodos = () => {
  // Creating a 'li' element
  const aNewTask = document.createElement('li');
  // Taking a value of 'input' to variable
  const aTaskValue = document.getElementById('a-my-input').value;
  // Filling a 'li' element with content
  aNewTask.innerHTML = `<input type="checkbox" class="custom-control-input m-2" id="customCheck${aTaskValue}"><input type='text' disabled class='a-task-input text-center' placeholder='${aTaskValue}' id='input-text-${aTaskValue}'></input><span class='a-buttons'><button class="btn btn-info btn-sm me-1" id='a-edit-button-${aTaskValue}'>Edit</button><button class="btn btn-info btn-sm float-left a-delete" id='a-delete-button-${aTaskValue}'>Delete</button></span>`;
  // Setting attribute 'class' to 'li'
  aNewTask.setAttribute('class', 'list-group-item d-flex justify-content-between shadow');
  // Setting attribute 'id' to 'li'
  aNewTask.setAttribute('id', `${aTaskValue}`);
  //Setting an Error Message
  const aErrorMessage = document.getElementById('error-message');
  const aErrorMessageText = document.createTextNode('You must write some Tasks!');
  //Variable for cleaning error message
  const aClearError = () => (aErrorMessage.innerText = '');
  // Error or Add Condition
  if (aTaskValue === '') {
    aClearError();
    aErrorMessage.appendChild(aErrorMessageText);
  } else {
    document.getElementById('a-tasks').appendChild(aNewTask);
    aClearError();
  }
  //cleaning Input Field
  document.getElementById('a-my-input').value = '';
  //Variable for Placeholder of Input
  const aInputText = document.getElementById(`input-text-${aTaskValue}`);
  //Listener for Check
  const aTaskCheck = document.getElementById(`customCheck${aTaskValue}`);
  aTaskCheck.addEventListener('click', () => {
    aInputText.classList.toggle('a-line-through');
  });
  //Listener for Edit Button
  const aEditBtn = document.getElementById(`a-edit-button-${aTaskValue}`);
  aEditBtn.addEventListener('click', () => {
    if (aEditBtn.innerText.toLowerCase() == 'edit') {
      aEditBtn.innerText = 'Save';
      aInputText.removeAttribute('disabled');
      aInputText.focus();
    } else {
      aEditBtn.innerText = 'Edit';
      aInputText.setAttribute('disabled', 'disabled');
    }
  });
  //Listener for Delete Button
  const aDeleteBtn = document.getElementById(`a-delete-button-${aTaskValue}`);
  aDeleteBtn.addEventListener('click', () => {
    aNewTask.remove();
  });
};

/// Endet Here

// stefano code below starts here //
//onload is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).//

window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form'); //the form//
  const input = document.querySelector('#new-task-input');
  //input for the id of the 'input' child element//
  const list_el = document.querySelector('#tasks'); // the tasks div//

  form.addEventListener('submit', (e) => {
    //when a form is submitted//

    //telling user to write something in the field. Still not preventing the div to be created below, though.//
    if (input.value === '') {
      alert('Plan something please!');
    }
    e.preventDefault();
    //stops from refreshing the page after submitting form. Its used to prevent all anomalies related to (e) //

    const task = input.value; //should be storing a text corresponding to the value attribute of the input tag//

    const task_el = document.createElement('div'); //task_el is the new variable, which is the newly created div when you click on 'add task'//
    task_el.classList.add('task'); //adds a class corresponding to the newly created div//

    //if I delete the below it will not be possible to create new divs and have them in the task list//
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
    // task_content_el.innerText = task; <-if this is active, this breaks the code, in the sense that it adds inner text to the div, outside of the form, adding the same text content as it is inside the form. This should not happen.

    task_el.appendChild(task_content_el);
    //I guess this appends the new div to the div that is created before it//
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');
    //I think line31 means that the text content of the newly created div will be readonly, namely, you cannot write or delete whats inside the field. You can only use the button, which we are going to create below.

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    // button creation by means of JS. takes the document and tells it to create a button element gives it a text of Edit, and a class as well.
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    // same thing for creating a button that is for deleting
    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Done! :)';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    task_edit_el.addEventListener('click', (e) => {
      if (task_edit_el.innerText.toLowerCase() == 'edit') {
        task_edit_el.innerText = 'Save';
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
      } else {
        task_edit_el.innerText = 'Edit';
        task_input_el.setAttribute('readonly', 'readonly');
      }
    });

    task_delete_el.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});

// stefano code until here //
