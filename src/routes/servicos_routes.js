const express = require('express');


const router = express.Router()

const servicos_controller = require('../controllers/servicos_controllers')
const auth_controllers = require('../middleware/auth_controllers')




router.get('/', servicos_controller.getAll)
router.post('/cadastrar',auth_controllers.verifyToken, servicos_controller.cadastrarServico)
router.post('/criadosPor', auth_controllers.verifyToken, servicos_controller.listarServicosColaborador)
router.post('/buscar', servicos_controller.listarServicosPorCidade)
router.patch('/atualizar',auth_controllers.verifyToken, servicos_controller.atualizarServico)
router.delete('/deletar',auth_controllers.verifyToken, servicos_controller.deletarServico)
router.patch('/atualizar/:id',auth_controllers.verifyToken, servicos_controller.atualizarServicoPorId)
router.delete('/deletar/:id',auth_controllers.verifyToken, servicos_controller.deletarServicoPorId)













module.exports = router