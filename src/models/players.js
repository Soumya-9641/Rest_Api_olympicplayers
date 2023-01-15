const mongoose = require("mongoose");


 const playerSchema = new mongoose.Schema({
    ranking:{
            type:Number,
            required:true,
            unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
        
    },
    height:{
        type:Number,
        required:true,
    
    },
    country:{
        type:String,
        required:true,
        
    },
    weight:{
        type:Number,
        required:true,
        
    },
    sex:{
        type:String,
        required:true
    }

 })

 const Player =  mongoose.model("Player",playerSchema);

 module.exports =Player;