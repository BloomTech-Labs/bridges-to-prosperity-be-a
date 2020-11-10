const express = require('express');
const router = express.Router();
const hospitalModel = require('./hospitalModel');
const validateHospitalId = require('../middleware/validate-hospital-id');
const validateClosestHospital = require('../middleware/validate-closest-hospital-to-bridge');

router.get('/', async (req, res) => {
  hospitalModel
    .getAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/:hospital_id', validateHospitalId, async (req, res) => {
  const id = req.params.hospital_id;
  hospitalModel.getHospitalById(id).then((hospital) => {
    res.status(200).json(hospital);
  });
});

router.get('/bridge/:id', validateClosestHospital, async (req, res) => {
  const id = req.params.id;
  hospitalModel.getHospitalByBridgeId(id).then((hospital) => {
    res.status(200).json(hospital);
  });
});

module.exports = router;
