import express, { Application, Request, Response, NextFunction } from 'express';
let router = express.Router();

import { getVotes, createVote,getVoter,authomail,register ,getVote, deleteVote, apply, getAspirants, getAspirant,updateVote } from '../controller/controllers'


router.get('/votes', getVotes);
router.get('/aspirants', getAspirants);
//router.get('registerApply',getVoter);
router.get('/aspirant/:id', getAspirant);
router.post('/register', createVote);
router.post('/registerApply', apply);
router.post('/registerVoter', register,authomail);
router.get('/votes/:id', getVote);
router.delete('/votes/:id', deleteVote);
router.put('/vote-status/:id',updateVote);


export default router