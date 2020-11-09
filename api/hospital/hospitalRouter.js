const express = require('express');
const router = express.Router();
const hospitalModel = require('./hospitalModel');

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

router.get('/:hospital_id', async (req, res) => {
  const id = req.params.hospital_id;
  hospitalModel.getHospitalById(id).then((hospital) => {
    res.status(200).json(hospital);
  });
});

router.get('/bridge/:closest_bridge_id', async (req, res) => {
  const id = req.params.closest_bridge_id;
  hospitalModel.getHospitalByBridgeId(id).then((hospital) => {
    res.status(200).json(hospital);
  });
});

module.exports = router;
