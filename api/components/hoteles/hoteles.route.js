const express = require('express'),
      router = express.Router(),
      users = require('./hoteles.api');

/**
 * 
 */
router.param('nombre', (req, res, next, nombre) => {
  req.body.nombre = nombre;
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
router.route('/update_hotel')
  .put((req, res) => {
    users.updateHotel(req,res);
});

/**
 * Función que elimina los hoteles
 */
router.route('/delete_hotel')
  .post((req, res) => {
    users.deleteHotel(req,res);
});

module.exports = router;