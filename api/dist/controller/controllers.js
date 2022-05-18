"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoter = exports.updateVote = exports.deleteVote = exports.getVote = exports.apply = exports.register = exports.authomail = exports.createVote = exports.getAspirant = exports.getAspirants = exports.getVotes = void 0;
const Votelsmodels_1 = __importDefault(require("../models/Votelsmodels"));
const aspirantModel_1 = __importDefault(require("../models/aspirantModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const getVotes = async (req, res) => {
    try {
        const votes = await Votelsmodels_1.default.find({});
        res.status(200).json({ votes });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.getVotes = getVotes;
const getAspirants = async (req, res) => {
    try {
        const aspirants = await aspirantModel_1.default.find({});
        res.status(200).json({ aspirants });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.getAspirants = getAspirants;
const getAspirant = async (req, res) => {
    try {
        const { id: aspirantID } = req.params;
        const aspirant = await aspirantModel_1.default.findOne({ _id: aspirantID });
        if (!aspirant) {
            return res
                .status(404)
                .json({ msg: `No Aspirant with id : ${aspirantID}` });
        }
        res.status(200).json({ aspirant });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.getAspirant = getAspirant;
const createVote = async (req, res) => {
    try {
        const vote = await Votelsmodels_1.default.create(req.body);
        res.status(201).json({ vote });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.createVote = createVote;
const authomail = async (req, res) => {
    console.log("authmail");
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        auth: {
            user: "anny.okpala@hotmail.com",
            pass: "greatman55",
        }
    });
    const options = {
        from: "anny.okpala@hotmail.com",
        to: "okpalaanayo@gmail.com",
        subject: "testing nodemailer",
        text: "this is it"
    };
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("sent:" + info.response);
    });
};
exports.authomail = authomail;
const register = async (req, res, next) => {
    try {
        const saltPassword = await bcrypt_1.default.genSalt(10);
        const securePassword = await bcrypt_1.default.hash(req.body.password, saltPassword);
        const { password, pollingUnit, town, lga, stateOfOrigin, occupation, dateOfBirth, email, userName, fullName, } = req.body;
        const signedUpUser = new Votelsmodels_1.default({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            stateOfOrigin: req.body.stateOfOrigin,
            occupation: req.body.occupation,
            lga: req.body.lga,
            town: req.body.town,
            pollingUnit: req.body.pollingunit,
            password: securePassword,
        });
        signedUpUser
            .save()
            .then((data) => {
            res.json(data);
        })
            .catch((error) => {
            res.json(error);
        });
        // const vote = await Vote.create(req.body);
        // res.status(201).json({ vote });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
    next();
};
exports.register = register;
const apply = async (req, res) => {
    try {
        const apply = await aspirantModel_1.default.create(req.body);
        res.status(201).json({ apply });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.apply = apply;
const getVote = async (req, res) => {
    try {
        const { id: voteID } = req.params;
        const vote = await Votelsmodels_1.default.findOne({ _id: voteID });
        if (!vote) {
            return res.status(404).json({ msg: `No Vote with id : ${voteID}` });
        }
        res.status(200).json({ vote });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.getVote = getVote;
const deleteVote = async (req, res) => {
    try {
        const { id: voteID } = req.params;
        const vote = await Votelsmodels_1.default.findOneAndDelete({ _id: voteID });
        if (!vote) {
            return res.status(404).json({ msg: `No Vote with id : ${voteID}` });
        }
        res.status(200).json({ task: null, status: "success" });
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.deleteVote = deleteVote;
const updateVote = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: id };
        const update = { completed: true };
        const voter = await Votelsmodels_1.default.findOneAndUpdate(filter, update);
        res.status(200).json(voter);
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.updateVote = updateVote;
const getVoter = async (req, res) => {
    try {
    }
    catch (err) {
        res.status(500).json({ msg: err });
    }
};
exports.getVoter = getVoter;
//# sourceMappingURL=controllers.js.map