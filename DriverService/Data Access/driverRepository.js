const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();
const driverDAO = prisma.driver;