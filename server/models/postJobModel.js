import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataType} = Sequelize

const job = db.define('postJob',{
    name : DataTypes.STRING,
    title: DataTypes.STRING,
    type : DataTypes.STRING,
    creativefields : DataTypes.STRING,
    location : DataTypes.STRING,
    city : DataTypes.STRING,
    employmentCountry : DataTypes.STRING,
    shortDesxription : DataTypes.TEXT,
    fulldescriotion : DataTypes.TEXT 
},{
    freezeTableName:true
})

export default job;



(async()=>{
await db.sync()
})();