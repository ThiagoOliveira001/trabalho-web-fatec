const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./config/config');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('C:/trabalho-web-fatec' + '/public'))
require('./routes/routes')(app);

app.listen(global.config.port, () => {
    console.log(`SERVER ON PORT ${global.config.port}`)
});