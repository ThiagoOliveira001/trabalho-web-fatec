async function exibir(req, res) {
    res.status(200).render('pages/index');
}

module.exports = {
    exibir
}