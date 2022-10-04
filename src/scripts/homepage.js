import { Api } from "../controller/Api.controller.js";
import { DomCriarTask } from "../models/tasks.models.js"
import { Homepage } from "../models/Homepage.model.js";
import Perfil from "../models/editPerfilmodel.js";

Homepage.homepageSetter()

// NOME E IMAGEM DO USUÁRIO
const userName = JSON.parse(localStorage.getItem("usr_name"))
const userImg = JSON.parse(localStorage.getItem("usr_img"))

const userImgHeader = document.getElementById('userImgHeader');
const userImgSection = document.getElementById('userImgSection');
const userIdHome = document.getElementById('userId');

userImgHeader.src = userImg;
userImgSection.src = userImg;
userIdHome.innerText = userName;

const modalCriarHabit = document.querySelector(".modalCriar")
const buttonCriar = document.querySelector("#buttonCriar")
const buttonEditPerfil = document.querySelector('#buttonEditPerfil')
const buttonExitApp = document.querySelector('#buttonExitApp')
const closeCriarHabit = document.querySelector("#closeCriarHabit")


buttonCriar.addEventListener(("click"), () => {
    const divTotal = document.querySelector(".modalCriar")
    divTotal.classList.toggle("modalCriarHabitoAtivo")
    DomCriarTask.criarNeWTaskCard()
});

buttonEditPerfil.addEventListener('click', () => {

    Perfil.editPerfil();
    document.getElementById("dropdown-content").style.display = "none";
    document.getElementById("modal").style.display = "flex";

});

closeCriarHabit.addEventListener("click", (event) => {
    let formCreate = document.querySelector('.modal__form')
    formCreate.parentNode.removeChild(formCreate)
    document.querySelector(".modalCriar").classList.toggle("modalCriarHabitoAtivo")

})

buttonExitApp.addEventListener('click', () => {
    window.location.href = "../../index.html";
    localStorage.removeItem("usr_name");
    localStorage.removeItem("usr_img");
    localStorage.removeItem("token");
});