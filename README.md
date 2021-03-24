# Teste Smarkio - IBM Watson
Criei uma página web que apresenta:

Do lado esquerdo, um TextBox onde vocé pode escrever seus comentarios e ao clicar no botão "Cadastrar" você envia seu comentário ao banco de dados(MySQL);

Do lado direito, podemos verificar uma lista de comentários (obtido quando a página é carregada e quando é cadastrado um novo comentário), juntamente com um botão "Ouvir", que quando clicado emite o som do comentário.

 - Frameworks utilizados:
[Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/);

 - API utilizada:
[IBM Watson - Text to Speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech?p1=Search&p4=43700052743483225&p5=e&gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisQigIl8DZU1IxUQzaU4lrxYYDyzYz-BfyRJSemezdum_k_bBfnj_MaAi1ZEALw_wcB&gclsrc=aw.ds);

 - Configuração:
Após instalado o [Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/), abra o MYSQL, entre no seu servidor local, faça uma nova query e digite:

	CREATE DATABASE IF NOT EXISTS cadastro_comentarios;

Após isso, o banco de dados estará criado, portanto agora precisamos configurar a conexão do seu servidor, na pasta infraestrutura/conexao.js:

	const conexao = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: 'root',
		database: 'cadastro_comentarios'
	});


- Configurando o Text to Speech:
Após criar uma conta gratuita na [IBM Watson - Text to Speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech?p1=Search&p4=43700052743483225&p5=e&gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisQigIl8DZU1IxUQzaU4lrxYYDyzYz-BfyRJSemezdum_k_bBfnj_MaAi1ZEALw_wcB&gclsrc=aw.ds), vá até a pasta models/text_to_speech e coloque a sua apikey e serviceUrl (fornecida pela IBM):


	 const textToSpeech = new TextToSpeechV1({
		    authenticator: new IamAuthenticator({
			apikey: '',
		    }),
		    serviceUrl: '',
		});


- Para iniciar:
Na pasta principal(Teste_Smarkio), digite npm start para iniciar a aplicação no browser, na porta 3000.





