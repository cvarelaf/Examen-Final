//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var ReviewSchema = new mongoose.Schema({
  modelo : String,
  matricula : String,
  marca : String,
  image : String,
  idCliente: String
});

//nombre del modelo dentro del back end y el reviewSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Review', ReviewSchema); 
//Review va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural