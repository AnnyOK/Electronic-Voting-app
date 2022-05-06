import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "must provide fullName"],
        trim: true
    },

    voteStatus: {
        type: Boolean,
        default: false
    },
    dateOfBirth: {
        type: String,
        required: [true, "must provide dateOfBirth"],
        trim: true
    },
    stateOfOrigin: {
        type: String,
        required: [true, "must provide stateOfOrigin"],
        trim: true
    },
    town: {
        type: String,
        required: [true, "must provide town"],
        trim: true
    },

    pollingUnit: {
        type: String,
        required: [true, "must provide pollingUnit"],
        trim: true
    },

    lga: {
        type: String,
        required: [true, "must provide lga"],
        trim: true
    },

    password: {
        type: String,
        required: [true, "must provide password"],
        trim: true
    }

})

export default mongoose.model('Vote', VoteSchema)