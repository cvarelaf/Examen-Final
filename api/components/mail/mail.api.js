let nodemailer = require('nodemailer');

module.exports.enviarCorreo = (req,res)=>{

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cs.rankinn@gmail.com',
      pass: 'examen2018'
    }
  });

  let mailOptions = {
    from: 'cas.rankinn@gmail.com',
    to: req.body.correoElectronico,
    subject: 'Bienvenido a RankInn!',
    text: 'Confirmación de registración.',
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
      res.json({success:false, msg:error});
    }
    else{
      res.json({success:true});
    }
  });

}