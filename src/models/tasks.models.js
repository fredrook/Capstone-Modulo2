import { Api } from "../controller/Api.controller.js"
import { EditTask } from "./editTask.model.js"

export class DomCriarTask {
    constructor (id, title, description, category) {
        this.id = id
        this.title = title
        this.description = description
        this.category = category
    }

    static criarTaskCards (tarefa, bodyPai) {
       const tableTasksBody = document.querySelector(".tableTasksBody")
        //CRIA A LINHA E ADD ID REFERENTE A TAREFA
        const tr        = document.createElement("tr")
        tr.classList.add("mainTable")
        tr.classList.add("line")
      

        //CRIA A CHECKBOX E ALTERA O CHECKED COM BASE NO STATUS
        const td1       = document.createElement("td")
        td1.classList.add("trMain")
        const input     = document.createElement("input")
        input.type      = "checkbox"
        input.name      = "checkbox"
        input.id        = tarefa.habit_id
      

        input.addEventListener("change", async (event) => {
            console.log(event)
            const id = event.currentTarget.id;
            const status = {};
            if (event.currentTarget.checked){
                status["habit_status"] = true;
            } else {
                status["habit_status"] = false;
            }
            const complete = await Api.completeHabit(status, id)
            window.alert("Alterações Salvas com Sucesso!");
            window.location.reload();
        })
        
        //CRIA O TITULO
        const td2       = document.createElement("td")
        td2.classList.add("textTasks")
        td2.classList.add("block-with-text")
        td2.classList.add("mobile")
        const td2p      = document.createElement("h5")
        td2p.innerText  = tarefa.habit_title

        if (tarefa.habit_status === true) {
            input.checked = true
            input.disabled = true
            tr.style.backgroundColor = "#F1F3F5"
            td2p.style.textDecoration = "line-through"
        } else {
            input.checked = false;
            tr.style.backgroundColor = "white"
            td2p.style.textDecoration = ""
        }

        //CRIA A DESCRIPTION
        const td3       = document.createElement("td")
        td3.classList.add("textTasks")
        td3.classList.add("block-with-text")
        td3.classList.add("mobileHidden")
        const td3p      = document.createElement("p")
        td3p.innerText  = tarefa.habit_description

        //CRIA A CATEGORIA 
        const td4       = document.createElement("td")
        td4.classList.add("textCategTasks")
        td4.classList.add("mobileHidden")
        const td4p      = document.createElement("p")
        const categoriaSplit = tarefa.habit_category.split("")
        categoriaSplit[0] = categoriaSplit[0].toUpperCase()
        td4p.innerText  = categoriaSplit.join("");
        

        //CRIA O BUTTON
        const td5       = document.createElement("td")
        td5.classList.add("tdMain") 
        td5.classList.add("tdButton")
        const button    = document.createElement("button")

        button.addEventListener("click", (event) => {
            EditTask.editTask(tarefa)
        })

        //CRIA O ICONE DO BUTTON
        const tableIco = document.createElement("img")
        tableIco.classList.add("table__button--icone")
        tableIco.src = "/src/assets/options.png"

        //ATRIBUINDO CLASSES AOS COMPONENTES DAS CELULAS
        input.classList.add("checkbox")

        td2p.className = ("textTasks block-with-text mobile")

        td3p.classList.add("textTasks")
        td3p.classList.add("block-with-text")
        td3p.classList.add("mobileHidden")

        td4p.classList.add("textCategTasks") 
        td4p.classList.add("mobileHidden")

        button.classList.add("buttonEdit")
        button.classList.add("buttonNoDecoration")
        
        //MONTA A ARVORE DOM
        bodyPai.appendChild(tr)
        tr.append(td1,td2,td3,td4,td5)
        td1.appendChild(input)
        td2.appendChild(td2p)
        td3.appendChild(td3p)
        td4.appendChild(td4p)
        td5.appendChild(button)
        button.appendChild(tableIco)

        return tr
    }
    
    static criarNeWTaskCard () {
        const criarHabito     = document.querySelector("#criarHabito")
        const form            = document.createElement("form")
        const h2              = document.createElement("h2")
        const h3title         = document.createElement("h3")
        const inputTitle      = document.createElement("input")
        const h3description   = document.createElement("h3")
        const inputDescription= document.createElement("input")
        const h3category      = document.createElement("h3")
        const select          = document.createElement("select")
        const optionCasa      = document.createElement("option")
        const optionEstudo    = document.createElement("option")
        const optionLazer     = document.createElement("option")
        const optionTrabalho  = document.createElement("option")
        const optionSaude     = document.createElement("option")
        const button          = document.createElement("button")
        form.classList.add("modal__form")
        h2.innerText      = "Criar Hábito"
        h3title.innerText = "Título"
        inputTitle.type = "title"
        inputTitle.name = "habit_title"
        inputTitle.id   = "description"
        inputTitle.placeholder = "Digitar Título"
        h3description.innerText = "Descrição"
        inputDescription.type = "description"
        inputDescription.name = "habit_description"
        inputDescription.id = "description"
        inputDescription.placeholder = "Digitar descrição"
        h3category.innerText = "Categoria"
        h3description.classList.add("h3description")
        h3category.classList.add("h3category")
        select.name = "habit_category"
        select.id   = "breed"
        select.classList.add("breed")
        optionCasa.value = "casa"
        optionCasa.innerText = "🏠 Casa"
        optionEstudo.value = "estudos"
        optionEstudo.innerText = "📚 Estudos"
        optionLazer.value = "lazer"
        optionLazer.innerText = "🎮 Lazer"
        optionTrabalho.value = "trabalho"
        optionTrabalho.innerText = "💻 Trabalho"
        optionSaude.value = "saude"
        optionSaude.innerText = "🩺 Saúde"
        button.innerText = "Criar"
        button.type = "submit"

        form.addEventListener("submit", async (event) => {  
            event.preventDefault()
            const data = {}
            const elements = Array.from(event.target)
            elements.forEach((elem)=>{
                if (!elem.name == false) {
                    data[elem.name] = elem.value
                }
            })
             if(Object.keys(data).length == 3){
                const divTotal = document.querySelector(".modalCriar")
                divTotal.classList.toggle("modalCriarHabitoAtivo")
                await Api.createHabit(data)
                window.location.reload(true);
             } else {
                alert("Alguns dos campos não foi preenchido")
             }  
        })
        criarHabito.appendChild(form)
        form.append(h2,h3title,inputTitle,h3description,inputDescription,h3category,select,button)
        select.append(optionCasa,optionEstudo,optionLazer,optionTrabalho, optionSaude)
        return form
    }
}
