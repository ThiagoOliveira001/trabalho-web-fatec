const home =  require('../controllers/index');
const memes = require('../controllers/memes');
const colaboradores = require('../controllers/colaboradores');

module.exports = (app) => {
    app.get('/', home.exibir);
    
    app.get('/memes', memes.selecionar);

    app.get('/colaboradores', colaboradores.exibir);
};