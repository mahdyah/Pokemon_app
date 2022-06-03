const express=require('express')
const data=require('./models/pokemon')
require('dotenv').config()
const mongoose = require('mongoose');
const PokemonModel=require('./models/PokemonModel') 
let app=express()
let port =3000
const pokemon=data
app.use((req,res,next)=>{
    console.log('middleware is runnning')
    next()
    })
app.use(express.json())  // parese the req into json
app.use(express.urlencoded({extended:false}))  // parse into javascript
app.set('view engine','ejs')
app.set('views', './Views')

app.get('/',(req,res)=>{
  res.send('Welcome to pokemon')
})
app.get('/pokemon',async (req,res)=>{
  try{
  const pokemons=await PokemonModel.find()


     res.render('Index',{
        pokemon:pokemons,
        
    })
  }catch(error){
    console.log(error)
    
  }
})
app.get('/pokemon/new',(req,res)=>{
    res.render('new')
 })

app.get('/pokemon/:id',async(req,res)=>{ 
  try{
    const pokemon=await PokemonModel.findById(req.params.id)
  
    res.render('Show',{
        pokemon:pokemon,
   
    })
  }catch(error){
    console.log(error)
  }
})

// post request handler
app.post('/pokemon',async (req,res)=>{ 
    const newPokemon=req.body // create a new pokemon 
    console.log('new Polemion=>',newPokemon) 
    //add an image property
  newPokemon.img=`http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}` 

  //    save the new pokemon to the db
  await PokemonModel.create(newPokemon,(error,result)=>{
if (error){
    console.log(error)
}
console.log(result)
  }
  )
    res.redirect('/pokemon')
}
)

app.listen(port,()=>{
    console.log(`The server is running on port ${port} ...`)
    mongoose.connect(process.env.MONGODB_URI)  //CONNECTS TO MONGO DB
    console.log('MangoDB connected') 
})

