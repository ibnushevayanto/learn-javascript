const addMovieModal = document.getElementById('add-modal')
const btnAddMovie = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieBtn = addMovieModal.querySelector('.modal__actions').firstElementChild
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling
const userInput = document.getElementsByTagName('input')
const entryText = document.getElementById('entry-text')
const dialogConfirmationDelete = document.getElementById('delete-modal')
const movies = []

const processDeleteMovie = function (id) {

    console.log(id)

    const moviesArr = movies.map(res => res.id)
    const indexOfMovie = moviesArr.indexOf(id)

    movies.splice(indexOfMovie, 1)

    const movieList = document.querySelectorAll('.movie-element')
    movieList[indexOfMovie].remove()
}

const showConfirmDeleteMovie = () => {
    dialogConfirmationDelete.classList.add('visible')
}

const hideConfirmDeleteMovie = () => {
    dialogConfirmationDelete.classList.remove('visible')
}

const cancelDeleteMovieHandler = function () {
    hideBackdrop()
    hideConfirmDeleteMovie()
}

const deleteMovie = function (id) {

    // * Cara Agar Event Listener Tidak Tereksekusi 2 Kali

    showConfirmDeleteMovie()
    showBackdrop()
    const cancelDeleteBtn = dialogConfirmationDelete.lastElementChild.firstElementChild

    // * Cara Pertama
    cancelDeleteBtn.removeEventListener('click', cancelDeleteMovieHandler)
    cancelDeleteBtn.addEventListener('click', cancelDeleteMovieHandler)

    let btnConfirm = cancelDeleteBtn.nextElementSibling

    // * Cara Kedua
    btnConfirm.replaceWith(btnConfirm.cloneNode(true))
    btnConfirm = cancelDeleteBtn.nextElementSibling

    btnConfirm.addEventListener('click', function () {
        processDeleteMovie(id)
        hideBackdrop()
        hideConfirmDeleteMovie()
        updateUI()
        console.log(movies)
    })
}

const rendererElement = (id, title, imageUrl, rating) => {
    const containerMovieList = document.getElementById('movie-list')

    const liItem = document.createElement('li')
    liItem.className = 'movie-element';

    const containerMovieImage = document.createElement('div')
    containerMovieImage.className = 'movie-element__image'
    const image = document.createElement('img')
    image.setAttribute('src', imageUrl)

    const containerMovieInfo = containerMovieImage.cloneNode(false)
    containerMovieInfo.className = 'movie-element__info'
    const titleMovieInfo = document.createElement('h2')
    titleMovieInfo.innerText = title
    const ratingMovieInfo = document.createElement('p')
    ratingMovieInfo.innerText = `${rating}/5 stars`

    const movieList = document.querySelectorAll('.movie-element')

    if (movieList.length > 0) {
        containerMovieList.lastElementChild.insertAdjacentElement('afterend', liItem)
    } else {
        containerMovieList.insertAdjacentElement('afterbegin', liItem)
    }

    liItem.insertAdjacentElement('afterbegin', containerMovieImage)
    containerMovieImage.insertAdjacentElement('afterbegin', image)
    containerMovieImage.insertAdjacentElement('afterend', containerMovieInfo)
    containerMovieInfo.insertAdjacentElement('afterbegin', titleMovieInfo)
    titleMovieInfo.insertAdjacentElement('afterend', ratingMovieInfo)

    liItem.addEventListener('click', deleteMovie.bind(null, id))
}
const updateUI = function () {
    if (movies.length === 0) {
        entryText.style.display = 'block'
    } else {
        entryText.style.display = 'none'
    }
}
const showBackdrop = function () {
    backdrop.classList.add('visible')
}

const hideBackdrop = function () {
    backdrop.classList.remove('visible')
}

const hideMovieModal = function () {
    addMovieModal.classList.remove('visible')
}

const showMovieModal = function () {
    addMovieModal.classList.add('visible')
    showBackdrop()
}
const clearInputHandler = function () {
    for (input of userInput) {
        input.value = ''
    }
}
const addMovieHandler = function () {
    const titleValue = userInput[0].value
    const imageUrlValue = userInput[1].value
    const ratingValue = userInput[2].value

    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5) {
        alert('Please Enter Valid Value')
        return
    }

    const movie = {
        id: Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }

    movies.push(movie)

    hideMovieModal()
    hideBackdrop()
    clearInputHandler()
    updateUI()
    rendererElement(movie.id, titleValue, imageUrlValue, ratingValue)
}
const cancelMovieHandler = function () {
    hideBackdrop()
    clearInputHandler()
}
const backdropHandler = function () {
    hideMovieModal()
    clearInputHandler()
    hideBackdrop()
    hideConfirmDeleteMovie()
}

btnAddMovie.addEventListener('click', showMovieModal)
cancelAddMovieBtn.addEventListener('click', cancelMovieHandler)
backdrop.addEventListener('click', backdropHandler)
confirmAddMovieBtn.addEventListener('click', addMovieHandler)