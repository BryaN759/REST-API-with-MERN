const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
            console.log(`Database connected: ${conn.connection.host}`.bgBrightGreen);
        
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB