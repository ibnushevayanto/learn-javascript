import { ProjectList } from "./App/ProjectList.js";

globalThis.DEFAULT_VALUE = "Heyooo";

class App {
    static init() {
        const activeProject = new ProjectList('active')
        const finishProject = new ProjectList('finished')

        activeProject.setSwitchHandler(
            finishProject.addProject.bind(finishProject)
        )
        finishProject.setSwitchHandler(
            activeProject.addProject.bind(activeProject)
        )
    }
}

App.init()