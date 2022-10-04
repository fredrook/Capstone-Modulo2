
<div style='background-color:white'>

</div>
<h1 style='color: #00A48B'>KenzieHabits</h1>
<h2 style='color: #00A48B'>Projeto final do modulo de Front-end</h2>

<p>A kenzieHabits é um sistema de registro de hábitos, servindo como agenda e planer. </p>


<details>
  <summary><h2>KenzieHabits - Documentação da API</h2></summary>


A API tem um total de XXXX endpoints, poder ter total acesso as funcionabilidades do site.


<h2>O url base da API é:</h2>
<h3  style='color: #00A48B'>https://api-kenzie-med.herokuapp.com</h2>


# Rotas que não precisam de autenticação
<h3 style='font-weight: 600; font-size:20px;'>Listando Médicos</h3>
<p>Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver os profissionanis Médicos já cadastrados na plataforma, na API podemos 
acessar a lista dessa forma: Aqui conseguimos ver os usuários médicos e suas especialidades.</p>


## GET /doctors - FORMATO DA RESPOSTA - STATUS 200

```
[
{
	"id": 2,
	"name": "Dra. Aline Rabech",
	"email": "medaline@kenziemed.com",
	"password": "fred123",
	"CPF": "12312312312",
	"CRM": "1991-SE",
	"age": 24,
	"sex": "F",
	"type": "doctor",
	"speciality": "Pneumologista",
	"exames": [
	       {
		"id": 1,
		"exame": "Raio X do Tórax",
		"dia": "Segunda-feira",
		"hora": "9:00"
		}
	]
	"schedules": [
		{
		"id": 1,
		"dia": "28/08/2022",
		"hora": "17:00"
		}
	]
	...
]

```

<h3 style='font-weight: 600'>Podemos acessar um médico específico utilizando o endpoint:</h3>

## GET /doctor/id - FORMATO DA RESPOSTA - STATUS 200
```
{
	"id": 5,
	"name": "Dr. Bruno Rabelo",
	"email": "mebruno@kenziemed.com",
	"password": "fred123",
	"CPF": "12312312312",
	"CRM": "1790-AL",
	"age": 32,
	"sex": "M",
	"type": "doctor",
	"speciality": "Cardiologista",
	"address": "Unidade - Campo Largo",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png",
	"schedules": [
		{
			"id": 1,
			"dia": "01/09/2022",
			"hora": "13:00"
		},
		{
			"id": 2,
			"dia": "01/09/2022",
			"hora": "14:00"
		},
		{
			"id": 3,
			"dia": "01/09/2022",
			"hora": "15:00"
		},
		{
			"id": 4,
			"dia": "01/09/2022",
			"hora": "16:00"
		}
	]
}
```


 <h2 style='font-weight: 600; font-size:20px;'>Criação de usuário</h2>

## POST /users - FORMATO DA REQUISIÇÃO

```
{
		"name": "Kenzie Med",
		"email": "kenzie@kenziemed.com",
		"password": "Senha1234@",
		"CPF": "12312312312",
		"age": 20,
		"sex": "M",
		"type": "patient",
		"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
		"address": "kenzie academy"
	}
  ```

<h2 style='font-weight: 600'>Caso dê tudo certo, a resposta será assim:</h2>


## POST /users - FORMATO DA RESPOSTA - STATUS 201
```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppZUBrZW56aWVtZWQuY29tIiwiaWF0IjoxNjYyMzg0MjgwLCJleHAiOjE2NjIzODc4ODAsInN1YiI6IjMifQ.JnqUtIba1wA1mV7SS4AJ5StKspPLp4YShUM_SRc7T10",
	"user": {
		"email": "kenzie@kenziemed.com",
		"name": "Kenzie Med",
		"CPF": "12312312312",
		"age": 20,
		"sex": "M",
		"type": "patient",
		"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
		"address": "kenzie academy",
		"id": 3
	}
}
```


## POST /users - FORMATO DA RESPOSTA - STATUS 400


```
{

"status": "error",

"message": ["password is required", "email is required"]

}
```

<h3 style='font-weight: 600'>A senha necessita de 6 caracteres.:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400

```
{

  "status": "error",
  
  "message": ["password: minimum is 6 characters"]
  
}
```


<h3 style='font-weight: 600'>Email já cadastrado:</h3>


## POST /users - FORMATO DA RESPOSTA - STATUS 400


```
{

  "status": "error",
  
  "message": "Email already exists"
  
}
```


<h2 style='font-weight: 600; font-size:20px;'>Criação de Médico</h2>


## POST /doctors - FORMATO DA REQUISIÇÃO

```
{
      "name": " Arnold Schwarzenegger ",
      "email": "reimaromba@kenziemed.com",
      "password": "123456",
      "CPF": "12345678901",
      "age":75,
      "sex": "Masculino",
      "address": "Espirito Santo",
      "speciality": "Endocrinologista",
      "type": "medico",
      "exames":[
	{
	"id": 1,
	"exame": "Ecocardiograma",
	"dia": "Segunda-feira",
	"hora": "9:00"
	}
	],
	"schedules": [
	{
	"id": 1,
	"dia": "28/08/2022",
	"hora": "17:00"
	}		
	],
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/492.png",
	
}
```
	
	
<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>


## POST /doctors - FORMATO DA RESPOSTA - STATUS 201
	
	
```
{
	"id": 5,
	"name": " Arnold Schwarzenegger ",
	"email": "reimaromba@kenziemed.com",
	"password": "123456",
	"CPF": "12345678901",
	"CRM": "1790-AL",
	"age": 75,
	"sex": "Masculino",
	"address": "Unidade - Campo Largo",
	"type": "medico",
	"speciality": "Endocrinologista",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png",
	"schedules": [
		{
			"id": 1,
			"dia": "01/09/2022",
			"hora": "13:00"
		},
		{
			"id": 2,
			"dia": "01/09/2022",
			"hora": "14:00"
		},
		{
			"id": 3,
			"dia": "01/09/2022",
			"hora": "15:00"
		},
		{
			"id": 4,
			"dia": "01/09/2022",
			"hora": "16:00"
		}
	],
	"userId": 2
}
```


## POST /doctors - FORMATO DA RESPOSTA - STATUS 400


```
{
"status": "error",
"message": ["password is required", "email is required"]
}
```

<h3 style='font-weight: 600; font-size:20px;'>A senha necessita de 6 caracteres:</h3>


## POST /doctors - FORMATO DA RESPOSTA - STATUS 400

```
{
  "status": "error",  
  "message": ["password: minimum is 6 characters"]  
}
```

<h3 style='font-weight: 600; font-size:20px;'>Email já cadastrado:</h3>


## POST /doctors - FORMATO DA RESPOSTA - STATUS 400

```
{
  "status": "error",  
  "message": "Email already exists"  
}
```

<h2 style='font-weight: 800; font-size:20px;'>Login</h2>


## POST /login - FORMATO DA REQUISIÇÃO
```
{
	"email": "kenzie@kenziemed.com",
	"password": "Senha1234@"
}
```


<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

## POST /login - FORMATO DA RESPOSTA - STATUS 201

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppZUBrZW56aWVtZWQuY29tIiwiaWF0IjoxNjYyMzg0NDYzLCJleHAiOjE2NjIzODgwNjMsInN1YiI6IjMifQ.VsuNhaDkdq26TjQqUSUjDEqEv63CvtCIZjTN7JwcNZY",
	"user": {
	"email": "kenzie@kenziemed.com",
	"name": "Kenzie Med",
	"CPF": "12312312312",
	"age": 20,
	"sex": "M",
	"type": "patient",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
	"address": "kenzie academy",
	"id": 3
	}
}
```
<br>
<p>Com essa resposta, vemos que temos duas informações, o user.id e o token respectivo, dessa forma você pode guardar o token e o 
usuário logado no localStorage para fazer a gestão do usuário no seu frontend.</p></br>

# Rotas que necessitam de autorização

<br>
<p>Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo <strong> "Authorization"</strong> , dessa forma:</p></br>


## Authorization: Bearer {token}
<br>
<p>Após o usuário estar logado, ele deve conseguir informar as especialidades que ele contratou até agora.</p></br>

<h2 style='font-weight: 600'>Buscar Perfil do usuário logado (token)</h2>

## GET /users/userId - FORMATO DA REQUISIÇÃO

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

### GET /users/userId - FORMATO DA RESPOSTA - STATUS 200

```
{
	"email": "kenzie@kenziemed.com",
	"password": "$2a$10$9oMvNj1E6pey6J7SpEqBo.R7aeNKMXV7lZ0mhxw4GXpfnbYHL1Chu",
	"name": "Kenzie Med",
	"CPF": "12312312312",
	"age": 20,
	"sex": "M",
	"type": "patient",
	"img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
	"address": "kenzie academy",
	"id": 3
}
```

<br><p>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</p>
</br>

<h2 style='font-weight: 600'>Buscar Perfil de um Médico</h2>

## GET /doctors/doctorId - FORMATO DA REQUISIÇÃO

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

## GET /doctors/doctorId - FORMATO DA RESPOSTA - STATUS 200

```
{
	"id": 4,
	"name": "Dra. Flavia Costa",
	"email": "medflav@kenziemed.com",
	"password": "fred123",
	"CPF": "12312312312",
	"CRM": "1994-SE",
	"age": 25,
	"sex": "F",
	"type": "doctor",
	"speciality": "Cardiologista",
	"exames": [
		{
			"id": 1,
			"exame": "Ecocardiograma",
			"dia": "Segunda-feira",
			"hora": "9:00"
		},
		{
			"id": 2,
			"exame": "Teste de Ergométrico ",
			"dia": "Segunda-feira",
			"hora": "10:00"
		}
	]
}
```


<h2 style='font-weight: 600; font-size:20px;'>Marcar consulta:</h2>

## POST /appointment - FORMATO DA REQUISIÇÃO

```
{
      "userId": 1,
      "doctor": 6
     "dia": "19-08-2022",
      "horario": "9:00",
      "address": "Unidade - Campo Largo",
      "speciality": "Cardiologista",
      "name": "Dr. Roberto Marcelo",
    }

```

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>

### POST /appointment - FORMATO DA RESPOSTA - STATUS 201


Caso você tente agendar com o mesmo médico, receberá este erro:


## POST /appointment - FORMATO DA RESPOSTA - STATUS 401


```
{
  "status": "error",  
  "message": "Já possui uma consulta agendada com esté médico."  
}
```


<h2 style='font-weight: 600; font-size:20px;'>Editar o perfil do Usuario</h2>

<br><p>Ou seja, você pode apenas modificar a consulta que já estão no seu perfil. Utilizando este endpoint:</p></br>


## PATCH /users/userId - FORMATO DA REQUISIÇÃO

```
{
  "email": "Rook@mail.com",
  "name": " Frederico Rook ",
  "password": "$2a$10$Is87SNQHT/fYA5xM6Ka4h.p8dXH17lNw2C3y.RkEHTQkYh2oobWKW",
  "confirmPassword": "$2a$10$Is87SNQHT/fYA5xM6Ka4h.p8dXH17lNw2C3y.RkEHTQkYh2oobWKW",
  "CPF": "12345678901",
  "age": 33,
  "sex": "Masculino",
  "address": "Pão de Queijo",
  "id": 5,
  "img": "URL da imagem que quer utilizar!"
}
```


<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>

## PATCH /users/userId- FORMATO DA RESPOSTA - STATUS 201

```
{
  "id": "5",
  "email": "Rook@mail.com",
  "name": " Frederico Rook ",
  "password": "$2a$10$Is87SNQHT/fYA5xM6Ka4h.p8dXH17lNw2C3y.RkEHTQkYh2oobWKW",
  "confirmPassword": "$2a$10$Is87SNQHT/fYA5xM6Ka4h.p8dXH17lNw2C3y.RkEHTQkYh2oobWKW",
  "CPF": "12345678901",
  "age": 33,
  "sex": "Masculino",
  "address": "Pão de Queijo",
  "id": 5,
  "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArtEtS7yr3J-zGMzI-b0muQQHOswy0Nh0M3C0OBfdjpAuXf3PcE7tNXz4PGg6-St0RaI&usqp=CAU"
}
```

<h2 style='font-weight: 800; font-size:20px;'>Editar o Perfil de um Médico</h2>

## PATCH /doctors/doctorsId - FORMATO DA REQUISIÇÃO

```
{
	"name": " Arnold Schwarzenegger ",
	"email": "reimaromba@kenziemed.com",
	"password": "123456",
	"CPF": "12345678901",
	"CRM": "1790-AL",
	"age": 75,
	"sex": "Masculino",
	"type": "medico",
	"speciality": "Psicólogo",
	"address": "Minas Gerais",
	"img": "https://img.freepik.com/vetores-premium/mulher-profissional-medico-avatar-vector-illustration-design_24877-18178.jpg?w=740"
}
```

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:</h3>


## POST /doctors - FORMATO DA RESPOSTA - STATUS 201

```
{
	"id": 5,
	"name": " Arnold Schwarzenegger ",
	"email": "reimaromba@kenziemed.com",
	"password": "123456",
	"CPF": "12345678901",
	"CRM": "1790-AL",
	"age": 75,
	"sex": "Masculino",
	"type": "medico",
	"speciality": "Psicólogo",
	"address": "Minas Gerais",
	"img": "https://img.freepik.com/vetores-premium/mulher-profissional-medico-avatar-vector-illustration-design_24877-18178.jpg?w=740",
	"schedules": [
		{
			"id": 1,
			"dia": "01/09/2022",
			"hora": "13:00"
		},
		{
			"id": 2,
			"dia": "01/09/2022",
			"hora": "14:00"
		},
		{
			"id": 3,
			"dia": "01/09/2022",
			"hora": "15:00"
		},
		{
			"id": 4,
			"dia": "01/09/2022",
			"hora": "16:00"
		}
	],
	"userId": 2
}
```

## POST /doctors - FORMATO DA RESPOSTA - STATUS 400


```
{

"status": "bad request"

}
```

<h2 style='font-weight: 600; font-size:20px;'>Deletar um usuario</h2>

## DELETE /users/userId - FORMATO DA REQUISIÇÃO

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>


``` 
{}
``` 


<h2 style='font-weight: 600; font-size:20px;'>Deletar uma consulta, utilizando este endpoint</h2>


## DELETE appointment/id - FORMATO DA REQUISIÇÃO

<br><p>OBSERVAÇÃO: Não é necessário um corpo da requisição.</p></br>

<h3 style='font-weight: 600; font-size:20px;'>Caso dê tudo certo, a resposta será assim:
</h3>


``` 
{}
``` 
  
</details>

## Tecnologias Utilizada

<div style='display:flex; gap: 5px;'><br>
 <img align="center" alt="Html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

 <img align="center" alt="css" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

  <a href="https://ibb.co/F86VtPM"><img src="https://i.ibb.co/2cqNBbQ/Java-Script-Ecma6.png" alt="Java-Script-Ecma6" border="0"></a>

   
</div></br>

## Ferramentas Utilizadas

 <img align="center" alt="Typescript" src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">
 
 <img align="center" alt="Typescript" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  
  <img align="center" alt="Typescript" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">


## Equipe

<ul>
<li><a href="https://github.com/annekarolle">Frederico Rook Chaves - Scrum Master</a></li>
<li><a href="https://github.com/DnlGalvan">Thiago Araujo Scherer - Tech Lead</a></li>
<li><a href="https://github.com/fredericosafebox" >Frederico Costa - Product Owner</a></li>
<li><a href="https://github.com/fredrook">Ricardo Martins - Quality Assurance </a></li>
<li><a href="https://github.com/marcuspvh">Breno Almeida - Quality Assurance</a></li>
</ul>


