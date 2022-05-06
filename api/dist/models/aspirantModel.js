"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ApplicationSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model('Apply', ApplicationSchema);
//# sourceMappingURL=aspirantModel.js.map