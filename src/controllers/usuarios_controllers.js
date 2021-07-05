

require('dotenv').config()



const mongoose = require('mongoose')
const usuarios = require('../models/usuario_model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const cidades = require('../ultils/cidadesUltils')

const salt = bcrypt.genSaltSync(10)





const Usuarios = async ( req, res) =>{


     try{     
         
         const Usuarios = await usuarios.find({}, { senha: 0 })

      

        
        
        res.status(200).json(Usuarios)}catch(err){

        res.status(500).json( {message: err.message})

    


     }








}



const cadastrarUsuario = async (req, res)=>{
           
   
    const  senhaParaSalvar = bcrypt.hashSync(req.body.senha, salt, process.env.TEXTPASSWORD)
    const email = req.body.email
    const cidade = req.body.cidade
   

    const user = new usuarios ({
 _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
   email : email,
   identidade: req.body.identidade,
   genero: req.body.genero, 
   sexualidade: req.body.sexualidade,
   cidade: cidade,
   senha:  senhaParaSalvar,
   criadoEm: req.body.criadoEm
    })

    const verificarEmail = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if( verificarEmail.test(String(email).toLowerCase()))
   {
        const verificacao = await usuarios.findOne( {email: email })
        if(verificacao){
        
        
        res.status(409).json("error: usuario já cadastrado")
        
        
        }else{



            if(  cidades.includes(cidade.toLowerCase()) ){

                try{  const novoUsuario = await user.save()
                    res.status(201).json(novoUsuario)
                    
                    
                    }catch(err){
                    
                           res.status(500).json( {message: err.message})
                    
                    }
                    

            }else{ res.status(400).json("error: a cidade não faz parte do área abrangente") }

         


        }



    }else { res.status(400).json("error: email invalido") }



}


const login = async (req, res) =>{

       

                 try{
                    const email = req.body.email
                     const Senha = req.body.senha



                     if( email == null || Senha == null){

                        res.status(404).json( {message: 'email invalido'})


                     }else{
                             
                        
                        
                        const  user =  await usuarios.findOne({ email: email }) 

                        
                          
                
                            if (!user) { 
                                res.status(404).json( {message: 'email invalido'})
                            }else if( bcrypt.compareSync (Senha, user.senha)){

                             

                          
                                jwt.sign( {"email" : user.email} , process.env.TOKEN , {expiresIn: 86400}, (err, token) => {
                                    if (err){ res.status(404)}else{
                                       
                                        return res.status(200).json(token)

                                    }
                                 
                                    
                                })
                                 
                              

                            }else{
                                res.status(401).json( {message: 'login negado'})
                            }



                     
                   
                    
                 }
                }catch{

                    res.status(500).json( {message: 'erro servidor'})








                 }
                
                
                
                
                
                }
          
              


       const deletarUsuario = async(req, res)=>{
       
        try {
            const usuario = await usuarios.findOne({email: req.body.email})
    
                          
            if (usuario == null) {
            return res.status(404).json({ message: 'usuario não encontrado!'})
            }
                  
            await usuario.remove()
           
            res.json({ message: 'usuario deletado com sucesso!'})
        } catch (err) {
            return res.status(500).json({ message: err.message})
        }


       }        
       const deletarUsuarioPorId = async(req, res)=>{
       
        try {
            const usuario = await usuarios.findById({_id: req.params.id})
    
                          
            if (usuario == null) {
            return res.status(404).json({ message: 'usuario não encontrado!'})
            }
                  
            await usuario.remove()
           
            res.json({ message: 'usuario deletado com sucesso!'})
        } catch (err) {
            return res.status(500).json({ message: err.message})
        }


       }        
       
       

       const atualizarUsuario = async (req, res)=>{

        senhaAtual = req.body.senhaAtual
        novaSenha =  req.body.senha    
       


        try {
            const usuario = await usuarios.findOne({email: req.body.email })
               
                if (!usuario) { 
                    res.status(404).json( {message: 'email invalido'})
                }

                 if ( senhaAtual  && novaSenha ){

                  
                       if(bcrypt.compareSync(senhaAtual, usuario.senha)){

                           
                                
                                
                                usuario.senha = bcrypt.hashSync( novaSenha, salt, process.env.TEXTPASSWORD)
                              
                       
                            

                        }else{ res.status(401).json( {message: 'senha incorreta'}) }

                        }

                              
     

  
                           
                    
    
    
            if (req.body.estado != null) {
          
                usuario.estado = req.body.estado


               
           }
            


            if (req.body.cidade != null) {
          
                usuario.cidade = req.body.cidade


               
           }
    
          
            const UsuarioAtualizado = await usuario.save()
            res.status(200).json( {message: 'perfil atualizado'})


        }catch(err){

            res.status(500).json( {message: err.message})



        }
    








       }




       const atualizarUsuarioById = async (req, res ) =>{
        
       


        try {
            const usuario = await usuarios.findById({_id: req.params.id })
               
                if (!usuario) { 
                    res.status(404).json( {message: 'id invalido'})
                }
                if ( req.body.senhaAtual != null && req.body.senha){

                  
                    bcrypt.compareSync (req.body.senhaAtual, usuario.senha, (err, result) => {

                        if (result){    
                            
                            
                            usuario.senha = bcrypt.hashSync(req.body.senha, salt, process.env.TEXTPASSWORD)
                          
                        }

                        if (err){  res.status(401).json( {message: 'senha incorreta'})                
                    }

                    }

                          
                          
                      ) 

                        
                     

                        
                    
    
    
                       
                

                

                
        }
    

    
            if (req.body.cidade != null) {
          
                 usuario.cidade = req.body.cidade


                
            }
    
          
            const UsuarioAtualizado = await usuario.save()
            res.status(200).json( {message: 'perfil atualizado'})


        }catch(err){

            res.status(500).json( {message: err.message})



        }
    








       }




       const recuperarInfosUsuarios = async (req, res)  => {
                      
        
        const email = req.body.email
        
                   const usuario =  await usuarios.findOne({email: email})



                   try{
                         if(usuario){



                            const Usuario = {
                                "nome": usuario.nome,
                                "email": usuario.email,
                                "identidade": usuario.identidade,
                                "genero": usuario.genero,
                                "sexualidade": usuario.sexualidade,
                                "cidade": usuario.cidade

                            }


                           

                            res.status(200).json(Usuario) }





                   }catch(err){

                     err.message



                   }
             





       }

       



    

       
    const resetarSenha = async (req, res) =>{
        const emailUsuario = req.body.email
        const Token = Math.random().toString(36).substring(7)
        const token = bcrypt.hashSync(Token, salt, process.env.TEXTPASSWORD)
        
        const usuario = usuarios.findOne({email:emailUsuario})


        try{
            if (!usuario) { 
                res.status(404).json( {message: 'usuario não cadastrado'})
            }else {
    
    
             
    
             await usuarios.updateOne({email: emailUsuario}, {$set:{senha: token}} )




                var transporter = nodemailer.createTransport(smtpTransport({
                    service: 'gmail',
                    host: 'smt.gmail.com',
                    auth: {
                      user: process.env.EMAIL,
                      pass: process.env.SENHA_EMAIL
                    }
                  }));
        
        
        
                  var mailOptions = {
                    from: process.env.EMAIL,
                    to: emailUsuario,
                    subject: 'Recuperação de senha saúde para todes Recife e RMR',
                    text: `Sua nova senha é: ${Token}`
                  }
        
              transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      res.status(501).json({message: "erro ao enviar email"})
                    } else {
                        res.status(200).json({message: "email enviado com sucesso"+ info})
                      
                    }
                  });
        
        
    
    
    
    
                }         
                 
        
    
            }catch(err){
                 res.status(500).json({message:err})
    
            }
    
            
    
             


    }



  
       


       
       
















module.exports = {

    cadastrarUsuario,
    login,
    deletarUsuario,
    deletarUsuarioPorId,
    Usuarios,
    recuperarInfosUsuarios,
    resetarSenha,
    atualizarUsuario, atualizarUsuarioById
 
   
}
 
          