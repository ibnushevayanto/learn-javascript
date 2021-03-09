// * Pure Function
function add(num1, num2) {
    return num1 + num2
}
console.log(add(1, 2))

// * Impure Function
function addRandom(num1) {
    return num1 + Math.random()
}
console.log(addRandom(5))

// * Not Pure Function
const hobbies = ['Coding', 'Eating', 'Swimming']

function showHobbies(hobbies) {
    const myHobbies = hobbies
    myHobbies.push('Gaming')
    console.log(myHobbies)
}
showHobbies(hobbies)

// * Factory Function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax
    }
    return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeTaxAmount = createTaxCalculator(0.25)

console.log(calculateVatAmount(100))
console.log(calculateVatAmount(200))

// * Recursion Function

function powerOfX(x, n) {
    if (n === 1) {
        return x
    }

    const hasil = powerOfX(x, n - 1)
    console.log(hasil)

    return x * hasil
}

console.log(powerOfX(2, 3))

function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1)
}

console.log(factorial(4))

const myFamily = [{
        name: 'Hariyanto',
        kids: [{
                name: 'Ibnu',
                kids: [{
                    name: 'Andi',
                    kids: [{
                        name: 'Bima'
                    }]
                }, {
                    name: 'Dita'
                }]
            },
            {
                name: 'Hera'
            },
            {
                name: 'Hayata'
            }
        ]
    },
    {
        name: 'Hariyanti',
        kids: [{
                name: 'Anggi'
            },
            {
                name: 'Taji',
                kids: [{
                    name: 'Anto'
                }, {
                    name: 'Ani'
                }]
            },
            {
                name: 'Khois'
            }
        ]
    }
]

function showFamilyKids(parent) {
    const arrKids = []

    if (!(parent.kids)) {
        return {
            name: parent.name,
            kids: []
        }
    }

    for (const kid of parent.kids) {
        arrKids.push(kid.name)
        arrKids.push(...showFamilyKids(kid).kids)
    }
    return {
        name: parent.name,
        kids: arrKids
    }
}

for (const family of myFamily) {
    const getFamilyKids = showFamilyKids(family)
    console.log(getFamilyKids.name, getFamilyKids.kids)
}