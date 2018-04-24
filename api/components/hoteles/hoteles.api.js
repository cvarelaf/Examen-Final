const HotelModel = require('./hoteles.model');

module.exports.registrar = (req, res) => {
  var newHotel = new HotelModel({
    nombre                :  req.body.nombre,
    photo                 :  req.body.photo,
    position              :  req.body.position,
    provincia             :  req.body.provincia,
    canton                :  req.body.canton,
    distrito              :  req.body.distrito,
    direccionExacta       :  req.body.direccionExacta,
    telServicioCliente    :  req.body.telServicioCliente,
    telReservaciones      :  req.body.telReservaciones,
    correoElectronico     :  req.body.correoElectronico
  });

  newHotel.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de hoteles' + err});
    }else{
      res.json({success:true, msj:'Se registró el hotel correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  HotelModel.find().then((hoteles) => {
    res.send(hoteles);
  });
};

module.exports.actualizar = (req,res) => {
  HotelModel.findByIdAndUpdate(req.body._nombre, { $set: req.body},
    function (error){
      if(error){
        res.json({success:false, msg:'No se ha actualizado el hotel debido al siguiente error: ' + handleError(error)});
      } else{
        res.json({success:true, msg:'El hotel se ha modificado con éxito.'});
      }
  });
};