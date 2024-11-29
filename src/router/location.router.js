const express = require("express")
const router = express.Router();
const locationController = require("../controller/location.controller")

router.post("/addLocation", locationController.addLocation)

router.get("/getAllLocations" , locationController.getAllLocations)

module.exports = router;