const express = require('express');

const especialidadeBaixoCusto = require('../controllers/especialidadesBaixoCusto_controller')
const auth_controllers = require('../middleware/auth_controllers')



const router = express.Router()


router.get('/', especialidadeBaixoCusto.getAll)
router.post('/cadastrar', auth_controllers.verifyToken, especialidadeBaixoCusto.cadastrarProfissional)
router.post('/buscarProfissional',auth_controllers.verifyToken, especialidadeBaixoCusto.profissionaisPorCidadeEspecialidade)
router.post('/criadosPor', auth_controllers.verifyToken, especialidadeBaixoCusto.profissionaisCadastradosPorUsuario)
router.patch('/atualizar/:id',  auth_controllers.verifyToken, especialidadeBaixoCusto.updateProfissional)
router.delete('/deletar/:id',auth_controllers.verifyToken, especialidadeBaixoCusto.deletarProfissional)

module.exports = router