export class DOMHelper {
    static clearNode(el) {
        const element = el.cloneNode(true)
        el.replaceWith(element)
        return element
    }

    static switchElement(elDestination, el) {
        const elementDestination = document.querySelector(elDestination)
        const element = document.getElementById(el)
        elementDestination.append(element)
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }
}