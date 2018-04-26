let express = require('express'),
    router = express.Router(),
    mailApi = require('./mail.api.js');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/mail')
  .post((req, res) => {
    mailApi.enviarCorreo(req,res);
});

module.exports = router;