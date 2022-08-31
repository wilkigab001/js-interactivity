console.log('Hello World')
let message = document.querySelector('#message')
const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input').value

    console.log(inputField)
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    let ul = document.querySelector('ul')
    ul.appendChild(movie)
    deleteBtn.addEventListener('click', deleteMovie)
   inputField.value = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} added back`
    }
    revealMessage()
}
function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 750);
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie)