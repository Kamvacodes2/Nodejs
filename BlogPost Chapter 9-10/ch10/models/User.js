const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash)=>{
        user.password = hash
        next()
    })
})

//mongo will automatically look for the plural form name of our db i.e BlogPosts Collection in of BlogPost
const User = mongoose.model('User',UserSchema);
module.exports = User // you can only export one variable