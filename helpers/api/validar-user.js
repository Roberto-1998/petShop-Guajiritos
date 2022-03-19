const { User } = require("../../db");



const existeUserPorId = async(id) => {

    const user = await User.findByPk(id);
    if (!user) {
        throw new Error(`No existe un usuario con el id - ${id}`)
    }


}

const existeUserPorUsername = async(username = '') => {

    const user = await User.findOne({ where: { username } });
    if (user) {
        throw new Error(`Ya existe un usuario con el username - ${username}`)
    }


}

module.exports = {
    existeUserPorId,
    existeUserPorUsername
}