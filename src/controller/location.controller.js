const LocationModel = require("../model/location.model");

exports.addLocation = async (req, res) => {
    const { latitude, longitude, name } = req.body; // Corrected variable names
    try {
        const location = new LocationModel({
            latitude,
            longitude,
            name,
        });

        await location.save(); // Save the new location to the database

        res.status(201).json({
            status: true,
            message: "Location added successfully",
            data: location,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message || "Internal Server Error",
        });
    }
};


exports.getAllLocations = async (req, res) => {
    try {
        const locations = await LocationModel.find(); // Retrieve all locations

        res.status(200).json({
            status: true,
            message: "Locations retrieved successfully",
            data: locations,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message || "Internal Server Error",
        });
    }
};
