const jwt = require('jsonwebtoken');
const UserRepository = require('../repository/userRepo'); 

class UserModel{
    constructor(username,password,role){
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

class UserController{
    constructor(){
       this.userRepository = new  UserRepository();
    }

    async signup(req,res){
        const{username,password,role} = req.body;
        const user = new UserModel(username,password,role);
        const newUser = await this.userRepository.createUser(user);
        console.log(newUser);
        res.send(newUser);
    }

    async singin(req,res){
        const{username,password} = req.body;
        const result = await this.userRepository.signin(
            username,
            password,
        )
        console.log(result);
        if(!result){
            return res.status(400).send('Incorect creddentials');
        }
        else{
            //1 create token  payload,key,options
            const token = jwt.sign({userID:result._id,
                role:result.role},
                "SecreteKey",
                {
                    expiresIn:'3h',
                });
            //2 send token
            return res.status(200).send(token);
        }
    }


}

module.exports = UserController;