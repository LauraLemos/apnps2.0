const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Olá mundo, eu sou a Laura!!!")
 })

app.get('/msg',function(req,res){
    res.send("OI, tudo bem?")
})

 app.get('/sobre',function(req,res){
      res.send("A pagina ainda está em construção")
 })

 app.get('/layout',function(req,res){
    res.send("Esse é o novo layout")
 })

app.listen(3000,function(){
console.log("Conexão inicializada!!")
})





