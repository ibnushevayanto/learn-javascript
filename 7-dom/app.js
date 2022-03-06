const ul = document.body.firstElementChild.nextElementSibling.firstElementChild
const firstLi = ul.firstElementChild

console.log(firstLi)






const section = document.querySelector('section')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    /*
    ? About toggle()
     * Code Akan Mencheck Apakah Class 'invisible' Ada Dalam List
     * Jika Ada Maka Akan Menghapus Class 'invisible'
     * Jika Tidak Maka Akan Menambahkan Class 'invisible'
    */
    section.classList.toggle('invisible')
})





const div = document.querySelector('div')

// * Cara Menggunakan insertAdjacentHTML
div.insertAdjacentHTML('beforeend', '<p class="test">Hello World</p>')

// * Best Experience Cara Membuat Element Tanpa Merender Ulang Semua Element
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';

// * Kenapa Menggunakan Append Child Bukan Append ? Karena Append Akan Mereturn String Bukan Element
ul.appendChild(newLi)





// * Cara Memindahkan Posisi Element
// ! const secondLi = ul.children[1];
// ! secondLi.insertAdjacentElement('beforebegin', newLi)
// * Cara Replace Element
// ! secondLi.remove()





// * Cara Clone Node Agart Tidak Perlu Lagi createElement
const newLi2 = newLi.cloneNode(true)
ul.appendChild(newLi2)