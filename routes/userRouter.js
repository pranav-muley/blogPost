const express = require('express');
const UserController = require('../controllers/userController');
const jwtAuth = require('../middleware/jwtAuth');

const userRouter = express.Router();

const userController = new UserController();

// userRouter.post('/',(req,res)=>{
//     console.log("U are at users Router...");
// })

userRouter.post('/signup',(req,res)=>{
    //logic to control
    userController.signup(req,res);
})

userRouter.post('/signin',(req,res)=>{
    userController.singin(req,res);
})

module.exports = userRouter;