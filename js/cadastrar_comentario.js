var botaoAdicionar = document.querySelector("#adicionar-comentario");



botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();

	var comentario = document.querySelector("#txt_comentario");
	var comentarioTr = montaTr(comentario.value);

	if (comentario.value != '') {
		//$.ajax({
		//	method: "POST",
		//	url: "/comentarios",
		//	headers: {
		//		'Content-Type': 'application/json'
		//	},
		//	comentario: JSON.parse(comentarioTr)
  //      })
		//ajax
		//localhost:3000/comentarios -- Json

	}
})

function adicionaComentarioNaTabela(comentario) {
	var comentarioTr = montaTr(comentario);
	var tabela = document.querySelector("#tabela-comentarios");
	tabela.appendChild(comentarioTr);
}



function montaTr(comentario) {
	var comentarioTr = document.createElement("tr");
	comentarioTr.classList.add("comentarios");
	comentarioTr.appendChild(montaTd(comentario, false));
	comentarioTr.appendChild(montaTd('<button class="bto-ouvir">Ouvir</button>', true));

	return comentarioTr;
}



function montaTd(dado, botao) {
	var td = document.createElement("td");
	if (botao == false) {
		td.textContent = dado;
	} else {
		td.innerHTML = dado;
	}
	return td;
}


