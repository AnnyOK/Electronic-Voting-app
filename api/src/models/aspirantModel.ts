import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true
    },

    Status: {
        type: Boolean,
        default: false
    },

    count: {
        type: Number,
        required: [true, "must provide name"],
        trim: true,
        default: 0
    }
})

export default mongoose.model('Apply', ApplicationSchema);