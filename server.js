const { urlencoded } = require('express')
const express=require('express')
let app=express()
let port =3000
const data=require('./models/pokemon')
const pokemon=data
app.use(express.json())
app.use(express.json(urlencoded({extended:false})))
app.set('view engine','ejs')
app.set('views', './Views')

app.get('/',(req,res)=>{
    // res.send('Wecome to the Pokemon App!')
    res.send(pokemon)
})
app.get('/pokemon',(req,res)=>{
    // res.send('Wecome to the Pokemon App!')
    
    res.render('Index',{
        pokemon:pokemon,
        
    })
})
app.get('/pokemon/:id',(req,res)=>{
    // res.send(req.params.id)
    res.render('Show',{
        pokemon:pokemon,
        index:req.params.id
    })
})

app.listen(port,()=>{
    console.log(`The server is running on port ${port} ...`)
})

