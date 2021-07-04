
const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "titulo": "Saúde para todes Recife e RMR",
        "version": "1.0.0",
        "mensagem": "Seja bem vinde! Encontre locais de atendimento e/ou ajude nossa comunidade a crescer  adicionando novos locais!"
    })
})

module.exports = router 