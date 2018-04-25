//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var ReviewSchema = new mongoose.Schema({
  hotel : {type : String, required : true},
  comida : {type : String, required : true},
  calidadservicio : {type : String, required : true},
  habitaciones : {type : String, required : true},
  infraestructura  : {type : String, required : true},
  limpieza  : {type : String, required : true},
  idCliente: {type : String, required : true}
});

//nombre del modelo dentro del back end y el reviewSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Review', ReviewSchema); 
//Review va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural