const express = require("express");
const { update } = require("tar");
require("./db/connect")
const Player = require("./models/players")
const app = express();
const port = 8000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.post("/players",(req,res)=>{
    console.log(req.body);
    const user = new Player(req.body);
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
})
app.get("/players", async (req,res)=>{
    try{
        
        const getplayer = await Player.find();
        res.status(200).send(getplayer);
        console.log(getplayer)

    }catch(e){
        res.status(404).send(e)
    }
})
app.get("/players/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const getplayer1= await Player.findById(_id);
        if(getplayer1){
            res.status(200).send(getplayer1);
        }else{
            res.status(400).send()
        }
    }catch(e){
        console.log(e)
    }
})

app.patch("/players/:id", async (req,res)=>{
    try{

        const _id = req.params.id;
        const updateplayer = await Player.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(updateplayer){
            res.status(200).send(updateplayer);
            console.log(updateplayer)
        }else{
            res.status(400).send()
        }

    }catch(e){
        console.log(e)
    }
})

app.delete("/players/:id",async (req,res)=>{
        try{
            const _id = req.params.id;
            const deleteplayer = await Player.findByIdAndDelete(_id)
            if(deleteplayer){
                res.status(200).send(deleteplayer)
                console.log(deleteplayer);
            }else{
                res.status(400).send()
            }
        }catch(e){
            res.status(400).send(e)
        }
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})