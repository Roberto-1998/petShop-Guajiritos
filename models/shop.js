module.exports = (sequelize, type) => {

    return sequelize.define('shop', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: type.STRING(100),
            allowNull: true
        }

    }, { timestamps: false })

}