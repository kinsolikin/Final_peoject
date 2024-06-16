import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataType} = Sequelize

const User = db.define('daftar',{
    email : DataTypes.STRING,
    password: DataTypes.STRING
},{
    freezeTableName:true
})

export default User;



(async()=>{
await db.sync()
})();