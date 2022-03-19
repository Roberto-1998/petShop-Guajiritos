module.exports = (sequelize, type) => {

    return sequelize.define('animal', {

        id: {
            type: type.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        price: {
            type: type.FLOAT,
        },
        amount: {
            type: type.INTEGER
        }

    }, { timestamps: false })

}