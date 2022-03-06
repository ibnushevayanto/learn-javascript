import { ProjectItem } from "./ProjectItem.js";
import { DOMHelper } from "./DOMHelper.js";

export class ProjectList {
    items = []
    constructor(type) {
        this.type = type
        const elProjectItem = document.querySelectorAll(`#${type}-projects li`)
        for (const el of elProjectItem) {
            this.items.push(new ProjectItem(el.id, this.switchProject.bind(this), type))
        }
        this.connectDroppable()
    }
    connectDroppable(){
        const list = document.querySelector(`#${this.type}-projects ul`)
        list.addEventListener('dragenter', e =>{ 
            if(e.dataTransfer.types[0] === 'text/plain'){
                e.preventDefault()
            }
            list.classList.add('droppable')
        })
        list.addEventListener('dragover', e => {
            if(e.dataTransfer.types[0] === 'text/plain'){
                e.preventDefault()
            }
        })
        list.addEventListener('dragleave', e => {
            try {
                if(e.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
                    list.classList.remove('droppable')
                }
            } catch (error) {
            }
        })
        list.addEventListener('drop', e => {
            const projectId = e.dataTransfer.getData('text/plain')
            if(this.items.find(res => res.id === projectId)){
                return 
            }else{
                document.getElementById(projectId).querySelector('button:last-of-type').click()
                list.classList.remove('droppable')
            }
        })
    }
    setSwitchHandler(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction
    }
    addProject(project) {
        console.log(globalThis.DEFAULT_VALUE)
        this.items.push(project)
        DOMHelper.switchElement(`#${this.type}-projects ul`, project.id)
        project.update(this.switchProject.bind(this), this.type)
    }
    switchProject(id) {
        this.switchHandler(this.items.find(res => res.id === id))
        this.items = this.items.filter(res => res.id !== id)
    }
}