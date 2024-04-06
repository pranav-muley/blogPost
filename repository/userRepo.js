
const userModel = require('../model/user');


class UserRepository{

    async createUser(user){
        const present = userModel.findOne(user);
        console.log(present);
        if(!present){
            return "data already inserted try SignIn..";
        }
        const newUser =  await userModel.create(user);
        return await newUser.save();   
    }

    async signin(username,password){
        const check = userModel.findOne({username,password});
        if(!check){
            return "SingUp then come here.";
        }
        return check;
    }
}

module.exports = UserRepository;