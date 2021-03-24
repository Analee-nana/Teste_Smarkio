const Comentario = require('../models/comentarios')

module.exports = app => {
    app.get('/comentarios', (req, res) => {
        Comentario.consulta(res)
    })

    app.post('/comentarios', (req, res) => {
        Comentario.adiciona(req.body);

        res.send('Entrou no Post')
    })
}
