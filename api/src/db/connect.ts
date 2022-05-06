import mongoose from "mongoose"

export const connectDB = (url: string) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
    }).then(() => {console.log(" database connected")})
}


