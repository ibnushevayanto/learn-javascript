const button = document.querySelectorAll('button')

const btnClickHandler = (e) => {
    // e.target.disabled = true
    console.log(e)
}

button.forEach(btn => {
    btn.addEventListener('mouseenter', btnClickHandler)

    // * Remove Event Listener
    setTimeout(() => {
        btn.removeEventListener('mouseenter', btnClickHandler)
    }, 100);
})

// * Infinite Scroll Example
let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;

    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);

// * Understand preventDefault
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)
})

// * Understand Stop Propagation
const div = document.querySelector('div')

div.addEventListener('mouseenter', (e) => {
    console.log('div')
    console.log(e)
})
button[0].addEventListener('mouseenter', (e) => {
    e.stopPropagation()
    console.log('button')
    console.log(e)
})

const elLi = document.querySelectorAll('li')
const elUl = document.querySelector('ul')

// ! Cara dibawah sangat menghabiskan memory
// for (const li of elLi){
//     li.addEventListener('click', e => {
//         e.target.classList.toggle('highlight')
//     })
// }

// * Cara dibawah lebih baik dari cara diatas
elUl.addEventListener('click', e => {
    e.target.closest('li').classList.toggle('highlight')
    button[2].click()
})