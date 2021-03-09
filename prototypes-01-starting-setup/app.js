class PersonClass {
    constructor() {
        this.name = 'Ibnu'
        this.age = 20
    }

    showAge = () => {
        console.log(this.age)
    }
}



// * my first constructor function
function Person() {
    this.name = 'Ibnu Shevayanto'
    this.age = 20
    this.greet = () => {
        console.log(`Hello my name is ${this.name} and iam ${this.age} years old`)
    }
}

// * my first prototype
Person.prototype.showAge = function () {
    console.log(this.age)
}

const person = new Person()
// person.greet()
// person.showAge()

// const person2 = new person.__proto__.constructor()
console.log(person)
// console.dir(Object)

const p  = new PersonClass()
console.log(p)