const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();
const OrderDAO = prisma.order;

const userRepository = () => {
  const getOrder = orderId => {
    return OrderDAO.findUnique ({where: {OrderId: userId}});
  };

  const getAllOrder = () => {
    return OrderDAO.findMany ();
  };

  const updateOrder = (orderId, updateInfo) => {
    return OrderDAO.update ({where: {OrderId: orderId}, data: updateInfo});
  };

  const createOrder = (orderId, orderInfo) => {
    return OrderDAO.create ({data: orderInfo,
    });
  };

  
};

module.exports = userRepository;
