const mongoose = require('mongoose');

const { Schema } = mongoose;

const LocationSchema = new Schema(
    {
        name: {
            type: String,
            required: true, // Ensure the name is provided
        },
        latitude: {
            type: Number,
            required: true, // Latitude is essential for geolocation
        },
        longitude: {
            type: Number,
            required: true, // Longitude is essential for geolocation
        },
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

module.exports = mongoose.model('Location', LocationSchema);
// this line creates a collection by the name of loactions in the database "dhundo" right?