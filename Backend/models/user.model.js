const mongoose= require('mongoose');
const bcryct= require('bcrypt');
const jwt= require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'first name must be 3 character'],
        },
        lastname:{
            type:String,
            // require:true,
            minlength:[3,'last name must be 3 character'],
        }
    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:[5, 'email must have 3 charcter or more then that']
    },
    password:{
        type:String,
        require:true,
        select :false
    },
    socketId:{
        type: String,
    },
})

userSchema.methods.generateAuthToken = function (){
    const token =jwt.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword= async function(password){
    return await bcryct.compare(password,this.password);
}

userSchema.static.hashPassword= async function(password){
    return await bcryct.hash(password,10);
}


const userModel= mongoose.model('user', userSchema);


module.exports= userModel;