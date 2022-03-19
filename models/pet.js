module.exports = (sequelize, type) => {

    return sequelize.define('pet', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: type.STRING(100),
            allowNull: true
        },
        breedId: {
            type: type.INTEGER,
            allowNull: false
        },
        ownerId: {
            type: type.INTEGER,
            allowNull: false
        }

    }, { timestamps: false })

}