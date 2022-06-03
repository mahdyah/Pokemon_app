const mongoose=require('mongoose')
//  create the schema (detial)
const pokemonSchema=mongoose.Schema({
     name:{
          type:String,
          required: true
     },
     img:{
         type: String,
         required: true
     }
}) 
// create the model
module.exports=mongoose.model('Pokemon',pokemonSchema)