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
    correoElectronicoCs     :  req.body.correoElectronicoCs,
    correoElectronicoRsvp     :  req.body.correoElectronicoRsvp
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

module.exports.updateHotel = (req,res) => {
  HotelModel.update({nombre: req.body.nombre} , req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};