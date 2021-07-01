
require('dotenv').config()


const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(401).send({ mensagem: 'não autorizado!' })
  
  const token = authorization.split(' ')[1];


  jwt.verify(token, process.env.TOKEN, (err, decoded) => {
    if (err) return res.status(401).send({ mensagem: 'Token Expirada!' });

  const email = decoded.email
  if ( email == req.body.email ||email == req.body.usuario || email == req.body.criadoPor ){

    next();

  }else{

    return res.status(401).send({ mensagem: 'Token Expirada!' });

  }
   
  })



}


module.exports = { verifyToken }