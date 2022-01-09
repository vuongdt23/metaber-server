const saveTokenToStore = require ('../FCMOperations/Cloudstore')
  .saveTokenToStore;

const androidRegistration = async (req, res) => {
  const userId = req.user.uid;
  const token = req.body.token;

  saveTokenToStore (token, userId).then (() => {
    res.send ('registering new device successfully');
    console.log ('new device registered, token: ', token);
  });
};

module.exports = {
    androidRegistration: androidRegistration
}
