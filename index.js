const express = require('express')
const app = express()

let people = [{id: 0, Nome: 'William'}, {id: 1, Nome: 'Vanessa'}, {id: 2, Nome: 'Cruela'}, {id: 3, Nome: 'Robert'}, {id: 4, Nome: 'Clark'}, {id: 5, Nome: 'Leona'}]

let sucess = (req, res)=>{
    res.send('Método funcionando corretamente')
}

let reqforquery = (req, res)=>{
    let person = people[req.query.id]
    res.json(JSON.stringify(person))
}

let save = (req, res)=>{
    console.log(req.body)
    res.send('Salvo com sucesso')
}

let methodpeople = (req, res)=>{
    res.json(JSON.stringify(people))
}

app.use(express.urlencoded({extended:false}))

app.get('/people', methodpeople)

app.get('/person', reqforquery)

app.post('/', express.json(), save)

app.put('/', express.json(), save)

app.listen(3000, ()=>{
    console.log('Servidor rodando...')
})