class Tabela {
    init(conexao) {
        this.conexao = conexao
        this.criarComentarios()
    }

    criarComentarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS comentarios (id int NOT NULL AUTO_INCREMENT, comentario text, PRIMARY KEY(id)) '

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela comentarios foi criada')
            }
        })
    }
}

module.exports = new Tabela
