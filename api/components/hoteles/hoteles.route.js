const express = require('express'),
      router = express.Router(),
      users = require('./hoteles.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los hoteles dentro del local storage
 */
router.route('/save_hotel')
  .post((req, res) => {
    users.registrar(req,res);
});

/**
 * Función que obtiene todos los hoteles
 */
router.route('/get_all_hotels')
  .get((req, res) => {
    users.listarTodos(req,res);
});

/**
 * Función que actualiza los hoteles
 */
router.route('/update_hotels')
  .put((req, res) => {
    users.actualizar(req,res);
});

module.exports = router;