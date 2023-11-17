import mongoose from "mongoose";

const database =process.env.MONGODB_URL;

const db = () => {
    mongoose.connect(database)
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log(err))

}

export default db;
