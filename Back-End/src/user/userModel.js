var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// const bcrypt = require('bcryptjs')

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
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

module.exports = mongoose.model('users', UserSchema);

// UserSchema.methods.encryptPassword = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt);
// };


// UserSchema.methods.matchPassword = async function(password) {
//     return await bcrypt.compare(password, this.password)
// }

