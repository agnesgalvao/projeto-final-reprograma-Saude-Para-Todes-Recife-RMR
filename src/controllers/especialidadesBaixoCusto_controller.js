const mongoose = require('mongoose');

const especialidadesBaixoCusto = require('../models/especialidadesBaixoCusto')






const getAll = async (req, res) => {
         

    const profissionais = await especialidadesBaixoCusto.find({}, {criadoPor: 0})


      res.status(200).json(profissionais)







}




const cadastrarProfissional = async (req, res) => {

    const profissional = new especialidadesBaixoCusto ({
        _id: new mongoose.Types.ObjectId(),
        'nomeProfissional': req.body.NomeProfissional,
        'especialidade': req.body.especialidade,
        'estado': req.body.estado,
        'cidade': req.body.cidade,
        'bairro': req.body.bairro,
        'logradouro': req.body.logradouro,
        'numero': req.body.numero,
        'horarioFuncionamento': req.body.horarioFuncionamento,
        'telefone': req.body.telefone,
        'observacoes': req.body.observacoes,
        'criadoPor': req.body.criadoPor
       
    
    }
    )




        try {
            const novoProfissional = await profissional.save()
            res.status(201).json(novoProfissional)


        } catch (err) {

            res.status(500).json({ message: err.message })

        }







    



}



const profissionaisPorCidadeEspecialidade = async (req, res) => {


    


        try{
            const   profissionaisEstado = await especialidadesBaixoCusto.find({ estado: req.body.estado })
            const especialidade = req.body.especialidade.toLowerCase()


            if (profissionaisEstado) {

                const profissionaisCidade = profissionaisEstado.filter( profissional => profissional.cidade == req.body.cidade)
    
                if (profissionaisCidade) {

                    const profissionaisFiltrados = profissionaisCidade.filter( profissionais => profissionais.especialidade == especialidade)
    
                     if( profissionaisFiltrados){
                        res.status(200).json(profissionaisFiltrados)
                     }else{
                        res.status(404).json({ message: 'nenhum profissional encontrado' })
                     }
                  
    
    
                } else { res.status(404).json({ message: 'nenhum profissional encontrado' }) }
    
    
    
            } else {
    
                res.status(404).json({ message: 'nenhum profissional encontrado' })
    
    
            }








        }catch(err){



        }










}





const profissionaisCadastradosPorUsuario = async(req, res) => {

    const profissionais = await especialidadesBaixoCusto.find()
    const email = req.body.email


    try{       
                 

        const profissionaisFiltrados = profissionais.filter( profissional => profissional.criadoPor == email )
        
        
        res.status(200).json(profissionaisFiltrados)}catch(err){err.message}


}





const deletarProfissional = async(req, res) => {
  
    const nomeProfissional = req.body.nomeProfissional


    try{       
        const profissional = await especialidadesBaixoCusto.findByOne(nomeProfissional)

        

                  if( profissional == null){
                        
                    res.status(404).json( {mensage: "Profissional não encontrado"})

                  }

             
        
              await profissional.remove()
           
              res.json({ message: 'Profissional deletado com sucesso!'})}
          
            
            catch(err){err.message}


}



const updateProfissional = async (req, res)=>{



    const profissional = req.body.nomeProfissional






    try{       
        const profissional = await especialidadesBaixoCusto.findByOne(nomeProfissional)


        

                  if( profissional == null){
                        
                    res.status(404).json( {mensage: "Profissional não encontrado"})

                  }
                 
                 
                 
                 
                
                  
            

                  if( req.body.cidade != null ){

                    profissional.cidade = req.body.cidade


                  }


                  if( req.body.bairro != null){   profissional.bairro = req.body.bairro}

                 if(req.body.logradouro != null ) { profissional.logradouro = req.body.logradouro}
                 if( req.body.numero  != null ){profissional.numero =  req.body.numero}
                 if ( req.body.horarioFuncionamento != null ){ profissional.horarioFuncionamento = req.body.horarioFuncionamento}
                 if( req.body.telefone != null){   profissional.telefone = req.body.telefone}
                 if( req.body.observacoes != null ){ profissional.observacoes = req.body.observacoes}

             
        
              await profissional.save()
           
              res.json({ message: 'Profissional atualizado com sucesso!'})}
          
            
            catch(err){err.message}


















}





module.exports ={ 

    getAll, 
    cadastrarProfissional, 
    profissionaisCadastradosPorUsuario, 
    updateProfissional,
     deletarProfissional,
     profissionaisPorCidadeEspecialidade
    


}