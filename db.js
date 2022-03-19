const { Sequelize, DataTypes } = require('sequelize');
const { UserModel, BreedModel, ShopModel, AnimalModel, PetModel } = require('./models');


const sequelize = new Sequelize('petshop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


const User = UserModel(sequelize, DataTypes);
const Breed = BreedModel(sequelize, DataTypes);
const Shop = ShopModel(sequelize, DataTypes);
const Animal = AnimalModel(sequelize, DataTypes);
const Pet = PetModel(sequelize, DataTypes);


//---------------------------------- Relaciones ------------------------------------------

// *Las tiendas tienen animales
// Shop-Animal (1-N)
Shop.hasMany(Animal, { as: 'animals', foreignKey: 'shopId' });
Animal.belongsTo(Shop, { as: 'shop', foreignKey: 'shopId' });

// *Los animales tienen asociada una raza
// Breed - Animal (1-N)
Breed.hasMany(Animal, { as: 'animals', foreignKey: 'breedId' });
Animal.belongsTo(Breed, { as: 'breed', foreignKey: 'breedId' });


// *Los Usuarios compran animales y se convierten en sus mascotas
// User - Pet (1-N)
User.hasMany(Pet, { as: 'pets', foreignKey: 'ownerId' });
Pet.belongsTo(User, { as: 'owner', foreignKey: 'ownerId' });


// Breed - Pet (1-N)
Breed.hasMany(Pet, { as: 'pets', foreignKey: 'breedId' });
Pet.belongsTo(Breed, { as: 'breed', foreignKey: 'breedId' });


//----------------------------------FIN  Relaciones ------------------------------------------


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    })


module.exports = {
    User,
    Shop,
    Animal,
    Pet,
    Breed
};