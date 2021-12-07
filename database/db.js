// create a db connection
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Amel:Amel2021!@hello-stickers.2okrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database connection sucees")
    } catch(err){
        console.log(err)
    }
};

// export connectDB to use it otherwhere

module.exports = connectDB;