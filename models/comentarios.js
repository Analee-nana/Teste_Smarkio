const conexao = require('../infraestrutura/conexao')

class Comentario {
    adiciona(comentario) {
        const sql = 'INSERT INTO comentarios SET ?'

        conexao.query(sql, comentario, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    consulta(res) {
        const sql = 'SELECT * FROM comentarios'

        conexao.query(sql, (erro, resultado,) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
}

module.exports = new Comentario
