const express=require('express')
let app=express()
let port =3000
const data=require('./models/pokemon')
const pokemon=data

app.set('view engine','ejs')
app.set('views', './Views')
app.get('/',(req,res)=>{
    // res.send('Wecome to the Pokemon App!')
    res.send(pokemon)
})
app.get('/pokemon',(req,res)=>{
    // res.send('Wecome to the Pokemon App!')
    
    res.render('Index',{
        pokemon:pokemon
    })
})
app.listen(port,()=>{
    console.log(`The server is running on port ${port} ...`)
})

