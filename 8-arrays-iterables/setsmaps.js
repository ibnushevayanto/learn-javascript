// const ids = new Set([1, 2, 3, 'Hi'])
// ids.add(2) // * Angka 2 Tidak Akan Berhasil Ditambah Ini Karena Sifat Set Yang Dalam Sebuah Array Nilai Item Tidak Ada Yang Boleh Sama
// ids.add(4) // * Angka 4 Berhasil Ditambahkan Karena Belum Ada Item 4 Dalam Array

// if (ids.has('Hi')) { // * Untuke check apakah item sudah tersedia atau belum
//     ids.delete('Hi') // * delete untuk menghapus item
// }

// for (id of ids.entries()) { // * entries mengambil arraynya
//     console.log(id)
// }

// const person1 = {
//     name: 'Ibnu'
// }
// const person2 = {
//     name: 'Max'
// }

// // const personData = new Map([
// //     ['key', 'some value']
// // ])

// const personData = new Map([
//     [person1, [{
//         date: 'yesterday',
//         price: 10
//     }]]
// ])

// personData.set(person2, [{
//     date: 'two weeks ago',
//     price: 20
// }])

// console.log(personData)
// console.log(personData.get(person1))
// console.log(personData.get(person2))

// for (const [key, value] of personData.entries()) {
//     console.log(value)
// }

// for (const key of personData.keys()) {
//     console.log(key)
// }

// for (const value of personData.values()) {
//     console.log(value)
// }