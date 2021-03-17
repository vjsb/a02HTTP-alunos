//receita fazer serviços usando o node
//importa os modulos HTTP e express
const http = require('http');
const express = require('express');

//constroi um objeto express
const app = express();

//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//configura a porta do servidor e coloca em execução
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(porta);

//cria a versão inicial do conjunto de dados
let id = 2;
let alunos = [
    {
        id: 1,
        nome: "João",
        fone: "56466118",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        fone: "4411554",
        email: "maria@email.com"
    }
];

//tratamento da requisição GET
app.get("/alunos", (req,res,next) => {
    res.status(200).json(alunos);
})

//tratamento da requisição POST
//serve para colocar
app.post("/alunos", (req,res,next) => {
    
    //esse json pega os dados que  usuario insere e insere um id
    const aluno = {
        id: id = id + 1,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    }
    alunos.push(aluno); //coloca o aluno no vetor alunos
    res.status(201).json(aluno);//vai voltar o objeto aluno que acabou de ser criado
} )

//tratamento da requisição PUT
app.put("/alunos", (req, res, next) => {
    alunos.forEach((aluno) => { //foreach que vai percorrer alunos e colocar em aluno
        if (aluno.id === req.body.id){
            aluno.fone = req.body.fone;
        }
    });
    res.status(204).end();
})