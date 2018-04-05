async function exibir(req, res) {
    res.status(200).render('pages/colaboradores');
}

module.exports = {
    exibir
};