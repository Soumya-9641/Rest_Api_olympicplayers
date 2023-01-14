const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympic_players",{

}).then(()=>{
    console.log("connection set up")
}).catch(()=>{
    console.log("Error in setup")
})