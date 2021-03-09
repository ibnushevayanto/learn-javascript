function mathRandomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(mathRandomBetween(1, 10))

// * Template Function
function showText(strings, buah, harga){
    
    let deskripsi = "Mahal"

    if(harga < 50000){
        deskripsi = "Murah" 
    }
    
    return `${strings[0]}${buah}${strings[1]}${harga} (${deskripsi})`
}

const durian = {
    name: "Durian",
    price: 60000
}

const showDurian = showText`Nama Buah Ini Adalah ${durian.name} Dan Harganya Rp.${durian.price}`
console.log(showDurian)

// * Regex

const regex = new RegExp('(i|I)(b|B)(n|N)(u|U)')
const string = 'ibnu shevayanto'

console.log(string.search(regex))