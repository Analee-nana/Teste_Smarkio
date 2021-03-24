# Teste Smarkio - IBM Watson
Criei uma p�gina web que apresenta:
- Do lado esquerdo, um TextBox onde voc� pode escrever seus comentarios e ao clicar no bot�o Cadastrar voc� envia seu coment�rio ao banco de dados(MySQL);
- Do lado direito, podemos verificar uma lista de coment�rios (obtido quando a p�gina � carregada e quando � cadastrado um novo coment�rio), juntamente com um bot�o Ouvir, que quando clicado emite o som do coment�rio.

#Frameworks utilizados:
[Node.js](https://nodejs.org/en/)
[MySQL](https://www.mysql.com/)

#API utilizada:
[IBM Watson - Text to Speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech?p1=Search&p4=43700052743483225&p5=e&gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisQigIl8DZU1IxUQzaU4lrxYYDyzYz-BfyRJSemezdum_k_bBfnj_MaAi1ZEALw_wcB&gclsrc=aw.ds)

#Configura��o 
- Ap�s instalado o [Node.js](https://nodejs.org/en/) e [MySQL](https://www.mysql.com/), abra o MYSQL, entre no seu servidor local, fa�a uma nova query e digite:

CREATE DATABASE IF NOT EXISTS cadastro_comentarios;

- Ap�s isso, o banco de dados estar� criado, portanto agora precisamos configurar a conex�o do seu servidor, na pasta infraestrutura/conexao.js:

const conexao = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'cadastro_comentarios'
});


#Configurando o Text to Speech
 - Ap�s criar uma conta gratuita na [IBM Watson - Text to Speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech?p1=Search&p4=43700052743483225&p5=e&gclid=Cj0KCQjwo-aCBhC-ARIsAAkNQisQigIl8DZU1IxUQzaU4lrxYYDyzYz-BfyRJSemezdum_k_bBfnj_MaAi1ZEALw_wcB&gclsrc=aw.ds), v� at� a pasta models/text_to_speech e coloque a sua apikey e serviceUrl (fornecida pela IBM):

 const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: '',
            }),
            serviceUrl: '',
        });

#Para iniciar
Na pasta principal(Teste_Smarkio), digite npm start para iniciar a aplica��o no browser, na porta 3000.





