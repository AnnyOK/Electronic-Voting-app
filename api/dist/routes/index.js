"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const controllers_1 = require("../controller/controllers");
router.get('/votes', controllers_1.getVotes);
router.get('/aspirants', controllers_1.getAspirants);
//router.get('registerApply',getVoter);
router.get('/aspirant/:id', controllers_1.getAspirant);
router.post('/register', controllers_1.createVote);
router.post('/registerApply', controllers_1.apply);
router.post('/registerVoter', controllers_1.register, controllers_1.authomail);
router.get('/votes/:id', controllers_1.getVote);
router.delete('/votes/:id', controllers_1.deleteVote);
router.put('/vote-status/:id', controllers_1.updateVote);
exports.default = router;
//# sourceMappingURL=index.js.map