const home =  require('../controllers/index');
const memes = require('../controllers/memes');

module.exports = (app) => {
    app.get('/', home.exibir);
    
    app.get('/memes', memes.selecionar);
};