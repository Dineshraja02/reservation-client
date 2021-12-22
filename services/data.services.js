const db = require("../mongo");

const service = {
    async history(req,res){
        try{
            const {insertedid:_id} =  await db.details.insertOne({...req.body, userId:req.user.userId});
           
        }
        catch(err){
            res.send(error)
        }
    },

    async searchHistory(req,res){
        try{
            const data=await db.details.find({userId:req.user.userId}).toArray();
            res.status(200).send(data);
        }
        catch(err){
            res.send(err)
        }
    }
}
module.exports = service;