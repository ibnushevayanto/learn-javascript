export default class Modal {
    constructor (templateId, fallbackText) {
        this.templateElement = document.getElementById(templateId)
        this.modalTemplate = document.getElementById('modal-template')
        this.fallbackText = fallbackText
    }
    show(){
        if ('content' in document.createElement('template')) {
            const modalContainer = document.importNode(this.modalTemplate.content, true)
            this.modal = modalContainer.querySelector('.modal')
            this.backdrop = modalContainer.querySelector('.backdrop')
            const content = document.importNode(this.templateElement.content, true)

            this.modal.appendChild(content)

            document.body.insertAdjacentElement('afterbegin', this.modal)
            document.body.insertAdjacentElement('afterbegin', this.backdrop)

        }else{
            alert('Error')
        }
    }
    hide(){
        if(this.modal){
            this.modal.remove()
            this.backdrop.remove()
        }
    }
}