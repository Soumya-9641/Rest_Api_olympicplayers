const mongoose = require("mongoose");


 const playerSchema = new  mongoose.Schema({
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
    dob:{
        type:Number,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:String,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }

 })

 const playersdb = new mongoose.model("player",playerSchema);

 module.export =playersdb;