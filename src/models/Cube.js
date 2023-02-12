const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50, // check real length
    },
    imageUrl: {
        type: String,
        required: true,
        // add http/https validation
        validate: {
            validator: function (value) {
                return this.values.startsWith('http://') || this.values.startsWith('https://')
            },
            message: "URL is invalid!"
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;