const reviewModel = require('./reviews.model');

module.exports.registrar = (req, res) => {
  var newReview = new reviewModel({
    modelo : req.body.modelo,
    matricula : req.body.matricula,
    marca : req.body.marca,
    image : req.body.image,
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
  reviewModel.findByIdAndUpdate(req.body.matricula, { $set: req.body}, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};