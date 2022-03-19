const { Shop } = require("../../db");



const existeShopPorId = async(id) => {

    const shop = await Shop.findByPk(id);
    if (!shop) {
        throw new Error(`No existe un shop con el id - ${id}`)
    }
}





module.exports = {
    existeShopPorId
}