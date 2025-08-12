const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//! GET - Lista Todos
//! POST - Cria Novo
//! PUT - Atualiza
//! DELETE - Remove

// ** Permitir Receber Dados em JSON
app.use(express.json());

// ** Simula um "Banco de Dados" em memória
let produtos = [
    {id: 1, nome:"Mouse"},
    {id: 2, nome:"Teclado"}
];

// ** GET - Lista todos os produtos
app.get('/api/produtos',(req,res)=>{
    res.json(produtos);
})

// ** POST
app.post('/api/produtos', (req,res)=>{
    const novoProduto = {
        id:produtos.length + 1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// ** PUT
app.put('/api/produtos/:id', (req,res) =>{
    const id = parseInt(req,URLSearchParams.id);
    const produto = produto.find(p=> p.id == id);
    if (!produto){
        return res.status(404).json({mensagem:'produto não encontrado'});
    }
    produto.nome = req.body.nome;
    res.json(produto);
});

// ** DELETE
app.delete('/api/produtos/:id', (req,res) =>{
    const id = parseInt(req,params.id);
    produtos = produtos.filter(p => p.id !== id);
    res.status(204).send();
});

// ** Rota Principal
app.get('/', (req, res) =>{
    res.send('Olá, Este é o Serviço Com Express');
});

// ** Rota "Sobre"
app.get('/sobre', (req,res) =>{
    res.send('Página Sobre');
});

// ** Rota "Produtos"
app.get('/produtos', (req,res) =>{
    res.send('Lista de Produtos');
});

// ** Rota que Retorna JSON (Simula uma API)
app.get('/api/produtos', (req,res) =>{
    const produtos = [
        {id: 1,nome: 'Mouse'},
        {id: 2,nome:'Teclado'}
    ];
    res.json(produtos);
});

// ** Inicia o Servidor na porta 3000
app.listen(3000, () =>{
    console.log('Servidor Rodando http://localhost:3000');
});