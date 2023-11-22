var mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

var Schema = mongoose.Schema;

const PropertySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        
    }

},{
    timestamps: true
});


PropertySchema.plugin(uniqueValidator);

module.exports = mongoose.model('property', PropertySchema);