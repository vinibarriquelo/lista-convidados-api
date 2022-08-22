import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db01.wie9hjx.mongodb.net/?retryWrites=true&w=majority`).then(() => {
        console.log('MongoDB Connect.');
    }).catch(err => console.log(err));
}

export default connect;