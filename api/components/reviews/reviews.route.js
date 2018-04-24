const express = require('express'),
      router = express.Router(),
      reviews = require('./reviews.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_review')
  .post((req, res) => {
    reviews.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */
router.route('/get_all_reviews')
  .get((req, res) => {
    reviews.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */
router.route('/update_reviews')
  .put((req, res) => {
    reviews.actualizar(req,res);
});

module.exports = router;