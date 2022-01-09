const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();
const driverDAO = prisma.driver;

const getDriver = driverId => {
  return driverDAO.findFirst ({where: {DriverId: driverId}});
};

const getDrivers = () => {
  return driverDAO.findMany ();
};

const updateDriver = (driverId, updateInfo) => {
  return driverDAO.update ({where: {DriverId: driverId}, data: updateInfo});
};

module.exports = {
  getDriver: getDriver,
  getDrivers: getDrivers,
  updateDriver: updateDriver,
};
