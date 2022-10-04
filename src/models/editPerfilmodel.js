import { Api } from "../controller/Api.controller.js";

class Perfil {

    static editPerfil() {

        const userName = JSON.parse(localStorage.getItem("usr_name"))
        const userImg = JSON.parse(localStorage.getItem("usr_img"))

        const userImgHeader = document.getElementById('userImgHeader');
        const userImgSection = document.getElementById('userImgSection');
        const userIdHome = document.getElementById('userId');
        const modal = document.getElementById('modal');
        const divModal = document.createElement('div');
        const buttonModalClose = document.createElement('button');
        const imgFechar = document.createElement('img');
        const modalForm = document.createElement('form');
        const h2EditarPerfil = document.createElement('h2');
        const h3Nome = document.createElement('h3');
        const inputName = document.createElement('input');
        const h3Description = document.createElement('h3');
        const description = document.createElement('input');
        const buttonSaveText = document.createElement('button');

        userImgHeader.src = userImg;
        userImgSection.src = userImg;
        userIdHome.innerText = userName;
        
        divModal.className = "modal__inner";
        buttonModalClose.className = "modal__close";
        imgFechar.src = "../assets/X.png";
        imgFechar.alt = "Fechar";

        modalForm.className = "modal__form";
        h2EditarPerfil.innerText = "Editar perfil";
        h3Nome.className = "h3title";
        inputName.type = "text";
        inputName.id = "title";
        inputName.placeholder = userName;

        h3Description.className = "h3description";
        h3Description.innerText = "Url do seu Avatar";
        description.id = "description";
        description.type = "url";
        description.placeholder = '  url';

        buttonSaveText.type = "submit";
        buttonSaveText.classList = "buttonSave buttonSaveText";
        buttonSaveText.innerText = "Salvar alterações";

        buttonModalClose.appendChild(imgFechar)
        modalForm.append(h2EditarPerfil, h3Nome, inputName, h3Description, description, buttonSaveText)
        divModal.append(buttonModalClose, modalForm );
        modal.appendChild(divModal)

        async function verify(event) {
            event.preventDefault()

            const profile = {
                "usr_image": `${description.value}`
            };

            if (description.value == "") {
                alert("Confira se a url do seu avatar está válida!")
            } else {

                await Api.updateProfile(profile)
                userImgSection.src = await userImg;
                userImgHeader.src = await userImg;
                document.getElementById("modal").style.display = "none";
                window.location.href = "../views/homepage.views.html";
            }
        };


        buttonModalClose.addEventListener('click', () => {
            document.getElementById("modal").style.display = "none";
            window.location.href = "../views/homepage.views.html";
        });

        modalForm.addEventListener('submit', verify);

    }

}

export default Perfil;