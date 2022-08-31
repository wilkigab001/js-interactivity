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
   inputField = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie added back"
    }
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie)