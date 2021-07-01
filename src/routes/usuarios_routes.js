const express = require('express');

const usuarios_controllers = require('../controllers/usuarios_controllers')
const auth_controllers = require('../middleware/auth_controllers')


const router = express.Router()
 

router.get('/', auth_controllers.verifyToken, usuarios_controllers.Usuarios )
router.post('/infoUsuario', usuarios_controllers.recuperarInfosUsuarios)
router.post('/logar', usuarios_controllers.login )
router.post('/cadastrar', usuarios_controllers.cadastrarUsuario )
router.post('/resetarSenha', usuarios_controllers.resetarSenha )
router.patch('/atualizar', auth_controllers.verifyToken, usuarios_controllers.atualizarUsuario)
router.delete('/deletar', auth_controllers.verifyToken, usuarios_controllers.deletarUsuario)
router.delete('/deletar/:id', auth_controllers.verifyToken, usuarios_controllers.deletarUsuarioPorId)
router.patch('/atualizar/:id',  auth_controllers.verifyToken, usuarios_controllers.atualizarUsuarioById)









module.exports = router