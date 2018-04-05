async function exibir(req, res) {
    res.status(200).render('pages/contato');
}

module.exports = {
    exibir
};