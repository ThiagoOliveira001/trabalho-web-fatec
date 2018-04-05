const home =  require('../controllers/index');
const memes = require('../controllers/memes');
const colaboradores = require('../controllers/colaboradores');
const contato = require('../controllers/contato');

module.exports = (app) => {
    app.get('/', home.exibir);
    
    app.get('/memes', memes.selecionar);

    app.get('/colaboradores', colaboradores.exibir);

    app.get('/contato', contato.exibir);
};