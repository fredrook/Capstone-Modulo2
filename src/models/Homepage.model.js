import { DomCriarTask } from "./tasks.models.js"
import { Api } from "../controller/Api.controller.js"

export { Homepage }

class Homepage {

    static homepageSetter() {
        Homepage.renderizarTarefas()
        Homepage.filterAllHabits()
        Homepage.filterCompleteHabits()
    }
    
    static clearTable() {
        const bodyPai   = document.querySelector("#tableTasksBody")
        bodyPai.innerHTML = ""
        return bodyPai
    }

    static async fetchHabits(filtro) {
        let tarefas = await Api.readAll()
        if (filtro) {
            tarefas = tarefas.filter(tarefa => tarefa.habit_status === filtro)
        }
        return tarefas
    }

    static async renderizarTarefas (filtro) {
        const bodyPai = this.clearTable()
        let tarefas = []
        if (!filtro) {
            tarefas = await this.fetchHabits()
        } else {
            tarefas = await this.fetchHabits(filtro)
        }
        tarefas.forEach(tarefa => DomCriarTask.criarTaskCards(tarefa, bodyPai))
    }

    static filterAllHabits() {
        const btnFilter = document.getElementById('filterTodos')
        btnFilter.addEventListener('click', (event) => {
            Homepage.renderizarTarefas()
        });
    }
    
    static filterCompleteHabits() {
        const btnFilter = document.getElementById('filterConcluidos')
        btnFilter.addEventListener('click', (event) => {
            Homepage.renderizarTarefas(true)
        });
    }

    
}
