const express = require('express');



const router = express.Router()
const ambulatorio_controller = require('../controllers/ambulatorios_controllers')
const auth_controllers = require('../middleware/auth_controllers')


router.get('/', ambulatorio_controller.getAll)
router.post('/cadastrar',auth_controllers.verifyToken, ambulatorio_controller.cadastrarAmbulatorio )
router.post('/criadosPor',auth_controllers.verifyToken, ambulatorio_controller.ambulatoriosPorCriador)
router.post('/buscar', ambulatorio_controller.buscarEspecialidade)
router.delete('/deletar',auth_controllers.verifyToken, ambulatorio_controller.deletarAmbulatorio)
router.patch('/atualizar',auth_controllers.verifyToken, ambulatorio_controller.atualizarAmbulatorio)
router.patch('/atualizar/:id', ambulatorio_controller.atualizarAmbulatorioPorId)
router.delete('/deletar/:id', ambulatorio_controller.deletarAmbulatorioPorId)







module.exports = router