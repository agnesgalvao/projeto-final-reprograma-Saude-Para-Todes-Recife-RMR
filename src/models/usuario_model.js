const mongoose = require('mongoose');


const userSchema = new mongoose.Schema  (
  {  _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true

    },

       email:{
            type: String,
        required: true

        },

        identidade :{
            type: String,
            required: true


        },

       genero:{

            type: String,
            required: true,
           


        }, 
        sexualidade:{

            type: String,
            required: true,
           


        }, 
    
        cidade:{
            type: String,
            required: true,

        },
    
       senha:{
            type: String,
            required: true,

        },
        
        criadoEm:{
            type: Date, 
            required: true,
            default: new Date
 
 
        }
 
 





  }



)

module.exports = mongoose.model('usuario', userSchema)