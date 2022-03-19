const { request, response } = require("express");
const { Shop, Animal } = require("../../db");


const getShops = async(req = request, res = response) => {

    try {
        const shops = await Shop.findAll({
            include: {
                model: Animal,
                as: 'animals',
            }
        });

        res.json(shops);




    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}



const actualizarShop = async(req = request, res = response) => {

    const { id } = req.params;
    const body = req.body;



    try {

        await Shop.update(body, { where: { id } });

        res.json({
            msg: 'Shop actualizado',
            id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const crearShop = async(req = request, res = response) => {

    const body = req.body;

    try {

        const shop = await Shop.create(body);

        res.json(shop)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

const borrarShop = async(req = request, res = response) => {

    const { id } = req.params;


    try {

        await Shop.destroy({ where: { id } })

        res.json({
            msg: 'Shop eliminado',
            id
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}



module.exports = {
    getShops,
    actualizarShop,
    crearShop,
    borrarShop
}