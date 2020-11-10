const hospitalModel = require('../hospital/hospitalModel');

module.exports = (req, res, next) => {
  const hospital_id = req.params.hospital_id;
  hospitalModel
    .getHospitalById(hospital_id)
    .then((hospital) => {
      if (hospital.length == 0) {
        res
          .status(404)
          .json({ message: 'Can not find a hospital with this ID' });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};
