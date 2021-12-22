const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URL);
module.exports ={
    db:null,

    users:null,
    details:null,

    async connect(){
        await client.connect();

        this.db = client.db(process.env.MONGODB_NAME);
        console.log("Database Selected")

        this.users=this.db.collection("users");
        this.details=this.db.collection("details");

    }
}