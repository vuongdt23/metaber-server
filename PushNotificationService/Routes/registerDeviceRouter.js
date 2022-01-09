const express = require ('express');
const registerDeviceRouter = express.Router ();
const registerDeviceController = require ('../Controllers/registerDeviceController');

registerDeviceRouter.post (
  '/android/register',
  registerDeviceController.androidRegistration
);


