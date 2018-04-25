//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de hoteles
var HotelSchema = new mongoose.Schema({
  nombre : {type : String, required : true},
  photo : {type : String, required : true},
  position : {type : String, required : true},
  provincia : {type : String, required : true},
  canton : {type : String, required : true},
  distrito : {type : String, required : true},
  direccionExacta : {type : String, required : true},
  telServicioCliente : {type : String, required : true},
  telReservaciones : {type : String, required : true},
  correoElectronico : {type : String, required : true}
});

//nombre del modelo dentro del back end y el hotelSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Hotel', HotelSchema); 
//Hotel va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural