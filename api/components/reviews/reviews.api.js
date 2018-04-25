const reviewModel = require('./reviews.model');

module.exports.registrar = (req, res) => {
  var newReview = new reviewModel({
    hotel : req.body.hotel,
    comida : req.body.comida,
    calidadservicio : req.body.calidadservicio,
    habitaciones : req.body.habitaciones,
    infraestructura  : req.body.infraestructura,
    limpieza  : req.body.limpieza,
    idCliente : req.body.idCliente
  });

  newReview.save((err) => {
    if(err){
      res.json({success:false, msg: 'Ha ocurrido un error en el registro del review' + err});
    }else{
      res.json({success:true, msg:'Se registró el review correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  reviewModel.find().then((review) => {
    res.send(review);
  });
};

module.exports.actualizar = (req,res) => {
  reviewModel.findByIdAndUpdate(req.body.hotel, { $set: req.body}, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};