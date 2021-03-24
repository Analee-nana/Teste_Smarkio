const path = require('path');
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

module.exports = () => {
    const app = express()

    app.use('/', router);
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/sound/', express.static('sound'));

    consign()
        .include('controllers')
        .into(app)

    return app
}
