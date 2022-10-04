import { Api } from "../controller/Api.controller.js";
import { DomCriarTask } from "./tasks.models.js";

export class EditTask {

    static editTask (tarefa) {
        //SELECIONA A MAIN
        const main = document.getElementById("main")

        //CRIA O WRAPPER DO MODAL
        const wrapper = document.createElement("div")

        //CRIA O MODAL
        const modal = document.createElement("div")

        //CRIA O FORM DO MODAL
        const formModal = document.createElement("form")
        formModal.id = tarefa.habit_id

        //CRIA O TITULO DO MODAL
        const formTitle = document.createElement("h2")
        formTitle.innerText = "Editar hábito"

        //CRIA O BUTTON CLOSE
        const formClose = document.createElement("img")
        formClose.src = "/src/assets/X.png"
        formClose.addEventListener("click", (event) => {
            const modal = document.getElementsByClassName("modalTaskEdit__wrapper")[0]
            modal.parentNode.removeChild(modal)
        })

        //CRIA DIVS PARA ORGANIZAR O CONTEUDO DO FORM
        const headerDiv = document.createElement("div")
        const titleDiv = document.createElement("div")
        const descriptionDiv = document.createElement("div")
        const categoryDiv = document.createElement("div")
        const statusDiv = document.createElement("div")
        const buttonDiv = document.createElement("div")

        //CRIA OS INPUTS
        const taskTitleInput = document.createElement("input")
        taskTitleInput.type = "text"
        taskTitleInput.name = "habit_title"
        taskTitleInput.value = tarefa.habit_title
        
        const taskDescriptionInput = document.createElement("textarea")
        taskDescriptionInput.name = "habit_description"
        taskDescriptionInput.value = tarefa.habit_description

        const taskCategoryInput = document.createElement("select")
        taskCategoryInput.name = "habit_category"
        taskCategoryInput.value = tarefa.habit_category

        const taskStatusCheckbox = document.createElement("input")
        taskStatusCheckbox.type = "checkbox"
        if (tarefa.habit_status === true) {
            taskStatusCheckbox.checked = true
            taskStatusCheckbox.disabled = true
        }
        

        //CRIA LABEL PARA OS INPUTS
        const taskTitleLabel = document.createElement("label")
        taskTitleLabel.innerText = "Título"
        taskTitleLabel.for = "habit_title"

        const taskDescriptionLabel = document.createElement("label")
        taskDescriptionLabel.innerText = "Descrição"
        taskDescriptionLabel.for = "habit_description"

        const taskCategoryLabel = document.createElement("label")
        taskCategoryLabel.innerText = "Categoria"
        taskCategoryLabel.for = "habit_category"

        const taskStatusLabel = document.createElement("label")
        taskStatusLabel.innerText = "Status"
        taskStatusLabel.for = "habit_status"

        //CRIA AS OPTIONS PARA O SELECT DO EDIT
        const optionCasa      = document.createElement("option")
        optionCasa.value = "casa"
        optionCasa.innerText = "🏠 Casa"

        const optionEstudo    = document.createElement("option")
        optionEstudo.value = "estudos"
        optionEstudo.innerText = "📚 Estudos"

        const optionLazer     = document.createElement("option")
        optionLazer.value = "lazer"
        optionLazer.innerText = "🎮 Lazer"

        const optionTrabalho  = document.createElement("option")
        optionTrabalho.value = "trabalho"
        optionTrabalho.innerText = "💻 Trabalho"

        const optionSaude     = document.createElement("option")
        optionSaude.value = "saude"
        optionSaude.innerText = "🩺 Saúde"

        //CRIA OS BUTTONS DO FORM
        const taskDeleteButton = document.createElement("button")
        taskDeleteButton.id = "taskDeleteConfirm"
        taskDeleteButton.innerText = "Excluir"

        //CHAMA MODAL DELETE
        taskDeleteButton.addEventListener("click", (event) => {
            const modal = document.getElementsByClassName("modalTaskEdit__wrapper")[0]
            modal.parentNode.removeChild(modal)
            this.deleteTask(tarefa)    
        })

        const taskUpdateButton = document.createElement("button")
        taskDeleteButton.id = "taskUpdateConfirm"
        taskUpdateButton.innerText = "Salvar alterações"

        // PEGA O SAVE E O CHECK
        formModal.addEventListener("submit", async (event) => {  
            event.preventDefault()
            
            const id = event.currentTarget.id
            const data = {}
            const status = {}
            const elements = Array.from(event.target)
            elements.forEach((elem)=>{
                if (!elem.name == false) {
                    data[elem.name] = elem.value
                }
            })
          
            if (elements[3].checked){
                status["habit_status"] = true;
            } else {
                status["habit_status"] = false;
            }
            const response = await Api.updateHabit(data, id)
            const complete = await Api.completeHabit(status, id);
            window.alert("Alterações Salvas com Sucesso!");
            window.location.reload();
        }) 

        //ADCIONA AS OPTIONS NO SELECT
        taskCategoryInput.append(optionCasa,optionEstudo,optionLazer,optionTrabalho, optionSaude)
        

        //MONTA A ARVORE DOM
        main.appendChild(wrapper)
        wrapper.appendChild(modal)
        modal.append(formModal, taskDeleteButton)
        formModal.append(headerDiv, titleDiv, descriptionDiv, categoryDiv, statusDiv, buttonDiv)
        headerDiv.append(formTitle, formClose)
        titleDiv.append(taskTitleLabel, taskTitleInput)
        descriptionDiv.append(taskDescriptionLabel, taskDescriptionInput)
        categoryDiv.append(taskCategoryLabel, taskCategoryInput)
        statusDiv.append(taskStatusLabel, taskStatusCheckbox)
        buttonDiv.append(taskUpdateButton)

        //ATRIBUI CLASSES CSS
        //headers
        wrapper.classList.add("modalTaskEdit__wrapper")
        modal.classList.add("modalTaskEdit__container")
        formModal.classList.add("modalTaskEdit__form")
        formTitle.classList.add("modalTaskEdit__form--title")
        formClose.classList.add("modalTaskEdit__form--close")

        //inputs
        taskTitleInput.classList.add("modalTaskEdit__form--taskTitle")
        taskDescriptionInput.classList.add("modalTaskEdit__form--taskDescription")
        taskCategoryInput.classList.add("modalTaskEdit__form--taskCategory")
        taskStatusCheckbox.classList.add("modalTaskEdit__form--taskStatus")

        //buttons
        taskDeleteButton.classList.add("modalTaskEdit__form--deleteButton")
        taskUpdateButton.classList.add("modalTaskEdit__form--updateButton")

        //labels
        taskTitleLabel.classList.add("modalTaskEdit__form--label")
        taskDescriptionLabel.classList.add("modalTaskEdit__form--label")
        taskCategoryLabel.classList.add("modalTaskEdit__form--label")
        taskStatusLabel.classList.add("modalTaskEdit__form--labelStatus")

        //options
        optionCasa.classList.add("modalTaskEdit__form--option")
        optionEstudo.classList.add("modalTaskEdit__form--option")
        optionLazer.classList.add("modalTaskEdit__form--option")
        optionTrabalho.classList.add("modalTaskEdit__form--option")
        optionSaude.classList.add("modalTaskEdit__form--option")

        //divs
        statusDiv.classList.add("modalTaskEdit__form--divStatus")
        buttonDiv.classList.add("modalTaskEdit__form--divButton")
        headerDiv.classList.add("modalTaskEdit__form--divHeader")
        descriptionDiv.classList.add("modalTaskEdit__form--divDescription")
        titleDiv.classList.add("modalTaskEdit__form--divTitle")
    }

    static deleteTask (tarefa){
        const main = document.getElementById("main")
        const tagModalExcluir = document.createElement("div")

        const modalExcluir = document.createElement("div")
        const divHeader    = document.createElement("div")
        const h4           = document.createElement("h4")
        const buttonX      = document.createElement("button")
        const img          = document.createElement("img")
        const divWarnings  = document.createElement("div")
        const h3           = document.createElement("h3")
        const p            = document.createElement("p")
        const divOptions   = document.createElement("div")
        const buttonCan    = document.createElement("button")
        const buttonDel    = document.createElement("button")

        tagModalExcluir.classList.add("modalExcluir__wrapper")
        modalExcluir.classList.add("modalExcluir__container")
        divHeader.classList.add   ("modalExcluir__header")
        h4.classList.add          ("modalExcluir__header--title")
        buttonX.classList.add     ("modalExcluir__header--button")
        divWarnings.classList.add ("modalExcluir__warnings")
        h3.classList.add          ("modalExcluir__warnings--title")
        p.classList.add           ("modalExcluir__warnings--subtitle")
        divOptions.classList.add  ("modalExcluir__options")
        buttonCan.classList.add   ("modalExcluir__options--cancel")
        buttonDel.classList.add   ("modalExcluir__options--delete")

        h4.innerText = "Excluir Hábito"
        img.src = "/src/assets/X.png"
        img.alt = "Close Window"
        h3.innerText = "Certeza que deseja excluir este hábito?"
        p.innerText = "Após executar essa ação não será possível desfazer!"
        buttonCan.innerText = "Cancelar"
        buttonDel.innerText = "Sim, excluir esse hábito"

        main.append(tagModalExcluir)
        tagModalExcluir.append(modalExcluir)
        modalExcluir.append(divHeader, divWarnings, divOptions)
        divHeader.append(h4, buttonX)
        buttonX.appendChild(img)
        divWarnings.append(h3, p)
        divOptions.append(buttonCan, buttonDel)
    
        tagModalExcluir.id = "wrapper"
        img.id = "closeModal"
        buttonCan.id = "buttonCancelar"
        modalExcluir.id = tarefa.habit_id

        //EVENTOS DO MODAL
        function closeModal () {
            const modalExcluir = document.querySelector(".modalExcluir__wrapper")
            modalExcluir.parentNode.removeChild(modalExcluir)
        }

        //Central de eventos
        tagModalExcluir.addEventListener("click", (event) => {
            switch (event.target.id) {
                case "wrapper":
                    closeModal()
                    break
                case "buttonCancelar":
                    closeModal()
                    break
                case "closeModal":
                    closeModal()
                    break
                case "":
                    const button = document.getElementsByClassName("modalExcluir__options--delete")[0]
                    validarClick(button, event)
            }
        })
        //Validar se o click eh em Delete para fazer
        async function validarClick (button, event) {
            if (event.target === button) {
                const id = document.getElementsByClassName("modalExcluir__container")[0].id
                await  Api.deleteHabit(id);
                closeModal()
                window.location.reload(true)
            }
        }
    }
}

