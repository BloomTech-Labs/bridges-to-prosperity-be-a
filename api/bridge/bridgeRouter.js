const express = require('express');
const bridgeModel = require('./bridgeModel');
const router = express.Router();
const validateBridgeId = require('../middleware/validate-bridge-id');

router.get('/', async (req, res) => {
  bridgeModel
    .findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/:project_code', validateBridgeId, async (req, res) => {
  const id = req.params.project_code;
  bridgeModel.getBridgeByProjectCode(id).then((bridge) => {
    res.status(200).json(bridge);
  });
});

router.put('/update/:project_code', validateBridgeId, async (req, res) => {
  const id = req.params.project_code;
  const updatedBridge = {
    ...req.body,
  };
  bridgeModel
    .updateBridge(id, updatedBridge)
    .then((newBridge) => {
      res.status(200).json(newBridge);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
