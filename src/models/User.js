import { DataTypes } from "sequelize";
import { connection } from "../config/connection.js";

const User = connection.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    useremail:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    phonenumber:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    message:{
        type:DataTypes.TEXT,
        allowNull:false,
    }

},{
    tableName:'users',
    timestamps:true
})
export default User