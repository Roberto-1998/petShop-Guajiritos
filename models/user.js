module.exports = (sequelize, type) => {

    return sequelize.define('user', {
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
        username: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El campo *username es requerido'
                }
            }
        },
        password: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'El campo *password es requerido'
                }
            }
        },
        photo: {
            type: type.STRING,
        }

    }, { timestamps: false })

}