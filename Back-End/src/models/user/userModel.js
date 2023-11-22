var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

const bcrypt = require('bcryptjs')

const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

},{
    timestamps: true
});

UserSchema.plugin(uniqueValidator);



UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};


UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}


module.exports = mongoose.model('users', UserSchema);