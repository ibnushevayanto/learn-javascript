let keyName = 'newKey'

const person = {
    'first-name': 'Ibnu',
    age: 19,
    [keyName]: 'Key Name',
    hobbies: ['Coding', 'Cooking'],
    greet: function () {
        alert('hello world')
    }
}


console.log(person)

const movieList = document.getElementById('movie-list')

movieList[`style`]['display'] = 'block'
movieList[`style`]['background-color'] = 'red'