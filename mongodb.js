const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://miarslan555:PswxfNRcQ7y0wBnG@snapx.cseqful.mongodb.net/?retryWrites=true&w=majority&appName=SnapX/user_database')
.then(() => {
    console.log("mongodb Connected")
})

.catch(() => {
    console.log("Connection Failed")
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =new mongoose.model("C1",userSchema)
module.exports = collection