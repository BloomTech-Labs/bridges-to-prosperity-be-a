const amenityModel = require('../amenities/amenitiesModel');

module.exports = (req, res, next) => {
  const id = req.params.id;
  amenityModel
    .findAmenitiesById(id)
    .then((amenity) => {
      if (amenity.length == 0) {
        res
          .status(404)
          .json({ message: 'Can not find an amenity with this ID' });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};
