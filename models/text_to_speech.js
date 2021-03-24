const fs = require('fs');
const { IamAuthenticator } = require('ibm-watson/auth');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

class Speech { 
    ouvir(res) {
        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: '',
            }),
            serviceUrl: '',
        });

        const params = {
            text: res.req.query.comentario,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaV3Voice',
        };

        textToSpeech.synthesize(params)
            .then(audio => {
                return textToSpeech.repairWavHeaderStream(audio.result);
            })
            .then(buffer => {
                fs.writeFile('sound/audio' + res.req.query.id + '.wav', buffer, function (err, result) {
                    if (err) console.log('error', err);
                });

                res.status(201).json("Sucesso");
			})
            .catch(err => {
                console.log(err)
            });
    }
}

module.exports = new Speech