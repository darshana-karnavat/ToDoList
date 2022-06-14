

const button = document.getElementById('add_button')
const deleteEl = document.getElementById('delete');

button.addEventListener('click', () => {

    const task = document.querySelector('#fname').value;
    const newTask = document.createElement('div#test');
    newTask.innerHTML = `
    <div id='test'>
    <p>${task}</p>
    <button id='delete' onclick='removeDiv()'>x</button>
    </div>
    `;
    document.getElementById('result').appendChild(newTask);
    
}
)

const removeDiv = () => {
    document.getElementById('test').remove()
}



// const addingTodos = () => {

//     // const task = document.querySelector('#fname');
//     const newTask = document.createElement('div');
//     newTask.innerHTML = `<p>${task}</p>`
// }


// const body = document.querySelector('body');
//DONT TOUCH!!!

// document.body.innerHTML = '';
// const myNewDiv = document.createElement('div');
// myNewDiv.setAttribute('class', 'my-class');
// myNewDiv.innerHTML = '<h1>Hello!</h1>';
// document.body.appendChild(myNewDiv);


// .setAttribute('class', 'my-class');
// body.appendChild(myNewDiv);
// .innerHTML = '<h1>Hello!</h1>';