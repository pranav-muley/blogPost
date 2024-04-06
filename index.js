const express = require('express');
const connectToMongoose = require('./config/mongoose');
const bodyparser = require('body-parser');
const userRouter = require('./routes/userRouter');
const tagRouter = require('./routes/tagRouter');
const postRouter = require('./routes/postRouter');

const server = express();

// const corsOptions = {
//     origin:'http://localhost:5500',
//     allowedHeaders:'*',
// }
// server.use(cors(corsOptions));


server.use(bodyparser.json());//then we can able to get a json data from client.


 server.use('/api/users',userRouter);
 server.use('/api/tags',tagRouter);

server.use('/api/posts',postRouter);

server.get('/',(req,res)=>{
    res.send("we are creating Blogs Api...");
})




server.listen(8000,(req,res)=>{
    console.log("Server start on 8000 port");
    connectToMongoose();
})