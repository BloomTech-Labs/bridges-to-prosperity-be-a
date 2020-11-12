const express = require('express');
const router = express.Router();
const amenitiesModel = require('./amenitiesModel.js');
const validateAmenityId = require('../middleware/validate-amenity-id');

router.get('/', async (req, res) => {
  amenitiesModel
    .findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/:id', validateAmenityId, async (req, res) => {
  const id = req.params.id;
  amenitiesModel
    .findAmenitiesById(id)
    .then((bridge) => {
      res.status(200).json(bridge);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
