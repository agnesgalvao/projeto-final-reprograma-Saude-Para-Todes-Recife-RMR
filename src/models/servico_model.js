const mongoose = require('mongoose');






const servicoSchema = new mongoose.Schema  (
    {  _id: mongoose.Schema.Types.ObjectId,
      nome: {
          type: String,
          required: true
  
      },
  
        tipoDeServico : {
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
        criadoPor:{
            type: String,
            required:true,
        
        },
        atendimentoOnline:{
            type: String,
            required:true,

   },
        observacoes:{
            type: String,
            required:false,
        
        },

          criadoEm:{
              type: Date, 
              required: true,
              default: new Date
   
   
          },
          
   
   
  
  
  
  
  
    }
  
  
  
    
  )





 
  module.exports = mongoose.model('servico', servicoSchema)