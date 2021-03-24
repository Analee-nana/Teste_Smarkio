const TextToSpeech = require('../models/text_to_speech')

module.exports = app => {
    app.get('/text_to_speech', (req, res) => {
        TextToSpeech.ouvir(res)
    })
}
