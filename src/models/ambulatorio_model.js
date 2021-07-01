
const mongoose = require('mongoose');


const ambulatorioSchema = new mongoose.Schema  (
  {  _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true

    },
    estado:{
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
        especialidades:{
                 type: Array,
                 required: true,

        },
       observacoes:{
            type: String,
            required:false,

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
 
 





  }



)

module.exports = mongoose.model('ambulatorio', ambulatorioSchema)