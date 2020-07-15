module.exports = {
    create(req, res) {
        //Pegar Categorias
        return res.render("products/create.njk")
    },
    post(req, res) {
        //Lógica de Salvar
    }
}