const {PrismaClient} = require ('@prisma/client');
const prisma = new PrismaClient ();
const productDAO = prisma.driver