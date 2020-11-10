const hospitalModel = require('../hospital/hospitalModel');

module.exports = (req, res, next) => {
  const id = req.params.id;
  hospitalModel
    .getHospitalByBridgeId(id)
    .then((hospital) => {
      if (hospital.length == 0) {
        res.status(404).json({
          message: 'Can not find a hospital with the given bridge ID',
        });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};
