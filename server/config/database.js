import { Sequelize }  from "sequelize";

const db = new Sequelize('mini_project','root','',{
    host : 'localhost',
    dialect: 'mysql'
})

export default db;