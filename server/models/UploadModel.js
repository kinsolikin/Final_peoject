import {Sequelize } from "sequelize";
import db from "../config/database.js"
const {DataTypes} = Sequelize


const Upload = db.define('upload',{
   title : DataTypes.STRING,
   description :  DataTypes.STRING,
   tags :  DataTypes.STRING,
   images : DataTypes.STRING,
   url : DataTypes.STRING
},{
    freezeTableName:true
})

export default Upload;



(async()=>{
await db.sync()
})();