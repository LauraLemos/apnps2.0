const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Olá mundo, eu sou a Laura!!!")
    })

    app.get('/mensagem',function(req,res){
        res.send("OI, tudo bem?")
        })
  
app.listen(3000,function(){
console.log("Conexão inicializada!!")
})





