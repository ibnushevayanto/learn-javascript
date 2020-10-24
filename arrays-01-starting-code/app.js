// ? Cara Pertama
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

// ? Cara Kedua
// const moreNumber = new Array(5) // * Membuat Array Dengak Kondisi Maximal 5 Item 
// const moreNumber = new Array(5, 2) // * Sama Seperti Cara Yang Pertama
// console.log(moreNumber)

// ? Cara Ketiga
// const moreNumber = Array.of(5) // * Sama Seperti Cara Yang Pertama
// console.log(moreNumber)

// ? Cara Keempat
const arr = Array.from('hi') // * Mengconvert Sesuata Yang Iterable Menjadi Sebuah Array / Megnconver Sesuatu Menjadi Array
console.log(arr)

const hobbies = ['Sports', 'Cooking']
hobbies.push('Soccer') // * Menambahkan Item Dengan Posisi Paling Akhir Dari Item Arrray
hobbies.unshift('Coding') // * Menambahkan Item Dengan Posisi Paling Awal Dari Item Arrray
hobbies.pop() // * Menghapus Item Paling Akhir
hobbies.shift() // * Menghapus Item Paling Awal

// ! Array splice()
// * Splice Berguna Menyelipkan Dan Mengubah Array Dari Range Tertentu
// * Parameter 1 : Adalah Posisi Item Yang Akan Digunakan Untuk Item Baru Array
// * Paramter 2 : Aka Melibatkan Berapa Item Setelahnya Untuk Menjadikan Array Yang Baru
// * Parameter 3++ : Item Array Yang Akan Diselipkan
// ? hobbies.splice(1, 0, 'Eat', 'Sleep')

// ! Array splice()
// * Example Kode
// ? hobbies.splice(0) // * Untuk Mengosokan Array
// ? hobbies.splice(1) // * Untuk Mengosokan Array Dan Menyisakan Array Index 1
// ? hobbies.splice(1,1) // * Menghapus Array Index 1 Sebanyak 1 Item Jika Parameter 2 Lebih Dari Satu Akan Menghapus Item Setelahnya Sebanyak n - 1
// ? hobbies.splice(-1, 1) // * Menghapus Array Index 1 Dari Paling Belakang Sebanya Satu Item Jika Parameter 2 Lebih Dari Satu Akan Menghapus Item Sebelumnya Sebanyak n - 1
console.log(hobbies)

const testResults = [1, 5.3, 1.5, 10.99, -5, 10]

// ! Array slice()

// * Example 1 :
// ? const storedResults = testResults.slice() // * Slice membantu jika testResults mengalami perubahan item maka tidak akan berpengaruh disini
// ? testResults.push(5.32)

// * Example 2 :
// ? const storedResults = testResults.slice(3, 5) // * Slice Juga Bisa Membuat Array Menampilkan Item Dengan Index Tertentu, Parameter 1 = Index Awal, Parameter 2 = Index Akhir, Note : Parameter 1 Tidak Boleh Lebih Besar Dari Parameter 2

// * Example 3
const storedResults = testResults.slice(2) // * Slice dengan parameter 1 = array akan dimulai dari index ke 2 dan seterusnya

console.log(storedResults)

//  ! Array concat()
// ? const arr1 = [1, 2, 3]
// ? const arr2 = ['Kamu', 'Aku', 'Kua']
// ? const arr3 = ['Jibril', 'Mikail', 'Israfil']
// ? const concatExample = arr1.concat(arr2, arr3) // * Concat Menggabungkan 2 Array Menjadi Satu
// ? console.log(concatExample)

// ! Array indexOf() & lastIndexOf()
// ? const arrIndexOfExample = [1, 2, 3, 1]
// ? const indexOfArrExample = arrIndexOfExample.indexOf(1) // * indexOf() untuk mencari index dari sebuah item pertama
// ? const indexOfArrExample2 = arrIndexOfExample.lastIndexOf(1) // * lastIndexOf() untuk mencari index dari sebuah item terakhir
// ? console.log(indexOfArrExample, indexOfArrExample2)

// ! Array find() & findIndex()
// ? const personData = [{name: 'Ibnu Shevayanto'}, {name: 'Jajang Marujang'}]

// * find() menghasilkan sebuah item yang ingin dicari, contoh penggunan kode dibawah ini
// ? const ibnu = personData.find((person, idx, persons) => {
// ?    return person.name === 'Ibnu Shevayanto'
// ? })
// ? console.log(ibnu)

// * findIndex() menghasilkan sebuah index dari item yang ingin dicari, contoh penggunan kode dibawah ini
// ? const jajang = personData.findIndex((person, idx, persons) => {
// ?    return person.name === 'Jajang Marujang'
// ? })
// ? console.log(jajang)

// ! Array includes()
// * includes() apakah sebuah item ada dalam array, menghasilkan nilai boolean
// ? const arrInclude = [1, 2, 3]
// ? const include = arrInclude.includes(1)
// ? console.log(include)

// ! Array sort() & reverse()
const arrToSort = [10.99, 2.22, 5.66, 7.88, 2.33, 2.22, 9.22]
// ? const sortedArray = arrToSort.sort((a, b) => {
// ?    if (a > b) {
// ?        return 1;
// ?    }else if (a === b) {
// ?        return 0;
// ?    }else{
// ?        return -1;
// ?    }
// ? })
// ? const reverseSortedArray = sortedArray.reverse()
// ? console.log(reverseSortedArray)

// ! Array filter()
// * filter() fungsinya sama seperti find() tetapi menghasilkan array bukan item
// ? const filterArr = arrToSort.filter((number, idx, numbers) => {
// ?    return number > 5
// ? })
// ? console.log(filterArr)