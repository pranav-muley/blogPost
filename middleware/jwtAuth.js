const jwt = require('jsonwebtoken');
const User = require('../model/user');


const jwtAuth = (req, res, next) => {
    // 1. Read the Token.
    const token = req.headers['authorization'];

    // 2. if no token, return error.
    if (!token) {
        return res.status(401).send("Unauthorized");
    }

    // 3. check if token is valid
    try {
        const payload = jwt.verify(
            token,
            "UNzYVx1FDE3PVlOgQhaTPsXb7FfDUbld",
        );
        // console.log("JWT payload",payload);
        //to get uiserId from payload
        req.userID = payload.userID;


        console.log("PayLoad ...",payload);
        
        // 5. call next middleware 
        next();
    } catch (err) {
        return res.status(401).send("Unauthorized");
    }
}



module.exports = async function(req, res, next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, "UNzYVx1FDE3PVlOgQhaTPsXb7FfDUbld");
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.user = user; // Attach user object to request
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
