const addMovieModal = document.getElementById('add-modal')
const btnAddMovie = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieBtn = addMovieModal.querySelector('.modal__actions').firstElementChild
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling
const userInput = document.getElementsByTagName('input')
const entryText = document.getElementById('entry-text')
const movies = []

const rendererElement = (title, imageUrl, rating) => {
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

    containerMovieList.insertAdjacentElement('afterbegin', liItem)
    liItem.insertAdjacentElement('afterbegin', containerMovieImage)
    containerMovieImage.insertAdjacentElement('afterbegin', image)
    containerMovieImage.insertAdjacentElement('afterend', containerMovieInfo)
    containerMovieInfo.insertAdjacentElement('afterbegin', titleMovieInfo)
    titleMovieInfo.insertAdjacentElement('afterend', ratingMovieInfo)

}
const updateUI = function () {
    if (movies.length === 0) {
        entryText.style.display = 'block'
    } else {
        entryText.style.display = 'none'
    }
}
const checkBackdrop = function () {
    backdrop.classList.toggle('visible')
}
const toggleAddMovieModal = function () {
    addMovieModal.classList.toggle('visible')
    checkBackdrop()
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
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }

    movies.push(movie)

    toggleAddMovieModal()
    clearInputHandler()
    updateUI()
    rendererElement(titleValue, imageUrlValue, ratingValue)
}
const cancelMovieHandler = function () {
    toggleAddMovieModal()
    clearInputHandler()
}
const backdropHandler = function () {
    toggleAddMovieModal()
    clearInputHandler()
}

btnAddMovie.addEventListener('click', toggleAddMovieModal)
cancelAddMovieBtn.addEventListener('click', cancelMovieHandler)
backdrop.addEventListener('click', backdropHandler)
confirmAddMovieBtn.addEventListener('click', addMovieHandler)