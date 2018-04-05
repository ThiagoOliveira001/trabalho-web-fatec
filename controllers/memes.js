async function selecionar(req, res) {
    res.status(200).render('pages/memes');
}

module.exports = {
    selecionar
};