const mongoose = require('mongoose');


const especialidadesBaixoCustoSchema = new mongoose.Schema  (
  {  _id: mongoose.Schema.Types.ObjectId,


 nomeProfissional: {
        type: String,
        required: true,
      
    },

   especialidade: {
               type: String,
               required: true
    },
    

    cidade:{
        type: String,
    required: true

    },

    bairro :{
        type: String,
        required: true


    },

   logradouro:{

        type: String,
        required: true,
       


    }, 
    numero:{

        type: String,
        required: true,
       


    }, 
   horarioFuncionamento :{
        type: String,
        required: true,

    },
    telefone :{
        type: String,
        required: true,

    },
    antendimentoOnline:{
        type: String,
        required:true,

},
    criadoPor:{
        type: String,
        required:true,
    
    },
    criadoEm:{

        type: Date, 
        required: true,
        default: new Date
    }

      


   















})

module.exports = mongoose.model('EspesicalidadesBaixoCusto', especialidadesBaixoCustoSchema)
