import { Api } from "../controller/Api.controller.js";
import  DoomLogin  from "../models/login.models.js";
import { DomCriarTask } from "../models/tasks.models.js"

//const login = await Api.loginUser({
//   email: "grupo5Jardel@mail.com",
//   password: "8981b282d9497f249fff13dcbda023ee"
//})

DoomLogin.createLoginDom()
//DomCriarTask.criarTaskCards()

//const dados = await Api.createHabit({
//  "habit_title": "bater ponto corretamente",
//  "habit_description": "bater ponto todos os dias nos horários corretos",
//  "habit_category": "Saude"
//})