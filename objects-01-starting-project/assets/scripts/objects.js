const addMovieBtn = document.getElementById('add-movie-btn')
const searchMovieBtn = document.getElementById('search-btn')
const movieList = document.getElementById('movie-list')
const fieldFilterTitle = document.getElementById('filter-title')
const movies = []

const renderAddMovie = (movie) => {
    const movieItem = Array.from(document.querySelectorAll('.movie-item'))

    checkMovie()

    const movieEl = document.createElement('li')

    const {
        info: movieInfo,
        getFormattedTitle,
        ...otherPropsMovie
    } = movie

    let text = getFormattedTitle.call(movie)

    for (const key in movieInfo) {
        if (key !== 'title' && key !== '_title') {
            text += ` - ${key} : ${movieInfo[`${key}`]}`
        }
    }

    movieEl.textContent = text
    movieEl.classList.add('movie-item')

    movieList.insertAdjacentElement('beforeend', movieEl)

}

const checkMovie = () => {
    if (movies.length > 0) {
        movieList.classList.add('visible')
    } else {
        movieList.classList.remove('visible')
    }
}

const setEmptyMovieRender = () => {
    movieList.innerHTML = ''

    checkMovie()
}

const resetFormAddMovie = () => {
    const title = document.getElementById('title')
    const extraName = document.getElementById('extra-name')
    const extraValue = document.getElementById('extra-value')

    title.value = ''
    extraName.value = ''
    extraValue.value = ''
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    if (extraName.trim() === '' || extraValue.trim() === '') {
        alert('Please Check Your Field')
        return
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT'
                    return
                }
                this._title = val
            },
            get title() {
                return this._title
            },
            [extraName]: extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase()
        }
    }

    newMovie.info.title = title

    movies.push(newMovie)

    if (fieldFilterTitle.value.trim() === '') {
        renderAddMovie(newMovie)
    }

    resetFormAddMovie()
}

const searchMovieHandler = function () {

    console.log(this)

    setEmptyMovieRender()

    const keyword = fieldFilterTitle.value

    if (keyword.trim() === '') {
        for (const movie of movies) {
            renderAddMovie(movie)
        }
    } else {
        const filteredMovies = movies.filter(movie => {
            const foundString = movie.info.title.toLowerCase().search(keyword.toLowerCase())

            if (foundString >= 0) {
                return true
            } else {
                return false
            }
        })

        for (const movie of filteredMovies) {
            renderAddMovie(movie)
        }
    }

}

addMovieBtn.addEventListener('click', addMovieHandler)
searchMovieBtn.addEventListener('click', searchMovieHandler)