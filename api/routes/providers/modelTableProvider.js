const Sequelize = require('sequelize');
const instancia = require('../../database');

//Standard columns model 
const columns = {
    "empresa": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "email": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "categoria": {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    } 
};

//Standard options model 
const options = {
    freezeTableName: true,
    tableName: 'fornecedores',
    createdAt: 'dataCriacao',
    updateAt: 'dataAtualizacao',
    version: 'versao'
};

module.exports = instancia.define('fornecedor', columns, options);