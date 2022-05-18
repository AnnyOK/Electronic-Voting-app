import { Request, Response , NextFunction} from "express";
import Vote from "../models/Votelsmodels";
import Apply from "../models/aspirantModel";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer"

export const getVotes = async (req: Request, res: Response) => {
  try {
    const votes = await Vote.find({});
    res.status(200).json({ votes });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getAspirants = async (req: Request, res: Response) => {
  try {
    const aspirants = await Apply.find({});
    res.status(200).json({ aspirants });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getAspirant = async (req: Request, res: Response) => {
  try {
    const { id: aspirantID } = req.params;
    const aspirant = await Apply.findOne({ _id: aspirantID });

    if (!aspirant) {
      return res
        .status(404)
        .json({ msg: `No Aspirant with id : ${aspirantID}` });
    }
    res.status(200).json({ aspirant });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const createVote = async (req: Request, res: Response) => {
  try {
    const vote = await Vote.create(req.body);
    res.status(201).json({ vote });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
export const authomail =async(req: Request, res: Response)=>{
  console.log("authmail")
const transporter = nodemailer.createTransport({
  host:"smtp-mail.outlook.com",
  port:587,
  auth:{
    user:"anny.okpala@hotmail.com",
    pass:"greatman55",
  }
}as any)
const options ={ 
  from:"anny.okpala@hotmail.com",
  to:"okpalaanayo@gmail.com",
  subject:"testing nodemailer",
  text:"Your voter registration in successful"
}
transporter.sendMail(options,(err,info)=>{
  if(err){
    console.log(err);
    return
  }
  console.log("sent:" + info.response)
})
}

export const register = async (req: Request, res: Response,next: NextFunction) => {
  try {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const {
      password,
      pollingUnit,
      town,
      lga,
      stateOfOrigin,
      occupation,
      dateOfBirth,
      email,
      userName,
      fullName,
    } = req.body;
    const signedUpUser = new Vote({
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
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  next();
};

export const apply = async (req: Request, res: Response) => {
  try {
    const apply = await Apply.create(req.body);
    res.status(201).json({ apply });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getVote = async (req: Request, res: Response) => {
  try {
    const { id: voteID } = req.params;
    const vote = await Vote.findOne({ _id: voteID });

    if (!vote) {
      return res.status(404).json({ msg: `No Vote with id : ${voteID}` });
    }
    res.status(200).json({ vote });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
export const deleteVote = async (req: Request, res: Response) => {
  try {
    const { id: voteID } = req.params;
    const vote = await Vote.findOneAndDelete({ _id: voteID });

    if (!vote) {
      return res.status(404).json({ msg: `No Vote with id : ${voteID}` });
    }
    res.status(200).json({ task: null, status: "success" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const updateVote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { completed: true };
    const voter = await Vote.findOneAndUpdate(filter, update);
    res.status(200).json(voter);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export const getVoter = async (req: Request, res: Response) => {

  try {
    
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
