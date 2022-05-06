"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VoteSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model('Vote', VoteSchema);
//# sourceMappingURL=Votelsmodels.js.map