const mongoose = require('mongoose')


const servicos = require('../models/servico_model')



const getAll = async (req, res) =>{

const Servicos = await servicos.find({},{criadoPor: 0})



        res.status(200).json( Servicos)





}


const cadastrarServico = async (req, res) => {

    const servico = new servicos ({
        _id: new mongoose.Types.ObjectId(),
        'nome': req.body.nome,
        'tipoDeServico': req.body.tipoDeServico,
        'cidade': req.body.cidade,
        'bairro': req.body.bairro,
        'logradouro': req.body.logradouro,
        'numero': req.body.numero,
        'horarioFuncionamento': req.body.horarioFuncionamento,
        'telefone': req.body.telefone,
        'atendimentoOnline': req.body.atendimentoOnline,
        'observacoes': req.body.observacoes,
        'criadoPor': req.body.criadoPor
    }
    )

     const verificacao = await servicos.findOne({ nome: req.body.nome, cidade: req.body.cidade })

    if (verificacao) {


        return res.status(409).json("error: serviço já cadastrado")


    } else {



        try {
            const  novoServico = await servico.save()
            res.status(201).json(novoServico)


        } catch (err) {

            res.status(500).json({ message: err.message })

        }







    }



}
const listarServicosPorCidade = async (req, res)=>{


    const Servicos = await servicos.find()
    const cidade = req.body.cidade

   try{   
       
    const servicosCidade = Servicos.filter(servico => servico.cidade == cidade)
 
            if ( servicosCidade){

                const servicosFiltrados = listarServicosPorCidade.filter( servicos => servicos.cidade == cidade)     
                

                
    if(servicosFiltrados ){


      res.status(200).json(servicosFiltrados)


      

     }else{   res.status(401).json({message: "nenhum serviço disponivel"})  }




                  

            }else{ res.status(401).json({message: "nenhum serviço disponivel"})}   



   }catch(err){
    res.status(500).json(err.message)}








  }

  const listarServicosColaborador = async (req, res)=>{


    const Servicos = await servicos.find()
    const usuario = req.body.usuario

   try{   
       
    const servicosFiltrados = Servicos.filter(servico => servico.criadoPor == usuario)
 



    if(servicosFiltrados == null){

        res.status(401).json({message: "nenhum serviço disponivel"})

    }


    res.status(200).json(servicosFiltrados)




   }catch(err){
    res.status(500).json(err.message)}








  }


  const atualizarServicoPorId = async (req, res)=>{


    const id = req.body.id

           
    const servico = await servicos.findById(id)




    try{
        
               if( !servico){

                res.status(404).json({message: "servico nao encontrado"})
               }
               

               if ( req.body.nome != null){

                 servico.nome = req.body.nome

               }

               if ( req.body.tipoDeServico != null){

                servico.tipoDeServico = req.body.tipoDeServico

              }


              if ( req.body.bairro != null){

                servico.bairro = req.body.bairro

              }

              
              if ( req.body.lagradouro != null){

                servico.lagradouro = req.body.lagradouro

              }


              if ( req.body.numero != null){

                servico.numero = req.body.numero

              }


              if (  req.body.horarioFuncionamento != null){

                servico.horarioFuncionamento =  req.body.horarioFuncionamento

              }

              if (  req.body.telefone != null){

                servico.telefone =   req.body.telefone

              }


              if (req.body.atendimentoOnline != null ){



                ambulatorio.atendimentoOnline = req.body.atendimentoOnline

             }

                    if( req.body.observacoes != null){

                           servico.observacoes = req.body.observacoes

                    }





                  await servico.save()


                    res.status(200).json({message: "serviço atualizado"})

                }catch(err){
                    err.message
                }




  }



   const deletarServicoPorId = async (req, res)=>{

    const id = req.body.id  

    const servico = await servicos.findById(id)



    try{
                   if(!servico ){ 


                    res.status(401).json({message: "serviço não encontrado"})
                     }
                 
                    
                  await servico.remove()

                  res.status(200).json({message: "serviço excluido"})


    }catch(err){err.message}





   }








  const atualizarServico= async (req, res)=>{


    const nome = req.body.nome

           
    const servico = await servicos.findOne({nome: nome})




    try{
        
               if( !servico){

                res.status(404).json({message: "servico nao encontrado"})
               }
               

               if ( req.body.nome != null){

                 servico.nome = req.body.nome

               }

               if ( req.body.tipoDeServico != null){

                servico.tipoDeServico = req.body.tipoDeServico

              }


              if ( req.body.bairro != null){

                servico.bairro = req.body.bairro

              }

              
              if ( req.body.lagradouro != null){

                servico.lagradouro = req.body.lagradouro

              }


              if ( req.body.numero != null){

                servico.numero = req.body.numero

              }


              if (  req.body.horarioFuncionamento != null){

                servico.horarioFuncionamento =  req.body.horarioFuncionamento

              }

              if (  req.body.telefone != null){

                servico.telefone =   req.body.telefone

              }

              if (req.body.atendimentoOnline != null ){



                ambulatorio.atendimentoOnline = req.body.atendimentoOnline

             }

                    if( req.body.observacoes != null){

                           servico.observacoes = req.body.observacoes

                    }





                  await servico.save()


                    res.status(200).json({message: "serviço atualizado"})

                }catch(err){
                    err.message
                }




  }



   const deletarServico = async (req, res)=>{

    const nome = req.body.nome  

    const servico = await servicos.findOne({nome:nome})



    try{
                   if(!servico ){ 


                    res.status(401).json({message: "serviço não encontrado"})
                     }
                 
                    
                  await servico.remove()

                  res.status(200).json({message: "serviço excluido"})


    }catch(err){err.message}





   }






module.exports = { getAll,cadastrarServico,
     listarServicosPorCidade,
     listarServicosColaborador,
     atualizarServicoPorId,
     deletarServicoPorId,
     atualizarServico,
     deletarServico


}