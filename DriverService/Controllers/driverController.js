const driverRepository = require ('../DataAccess/driverRepository');

const updateDriverLocation = (req, res) => {
  const driverId = req.params.driverId;
  const updateData = {
    DriverLocation: req.body.DriverLocation,
    DriverLat: req.body.DriverLat,
    DriverLng: req.body.DriverLng,
  };

  driverRepository.updateDriver (driverId, updateData).then (updateSuccess => {
    res.status (200).send ('driver location updated successfully');
  });
};

module.exports = {
  updateDriverLocation: updateDriverLocation,
};
