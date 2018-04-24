class Cliente{
  constructor(pcedula, pnombre1, pnombre2, papellido1, papellido2, pfechanacimiento, pemail, pcontrasenna, pprovincia, pcanton, pdistrito, pphoto, ptipousuario){
    this.cedula = pcedula;
    this.primerNombre = pnombre1;
    this.segundoNombre = pnombre2
    this.primerApellido = papellido1;
    this.segundoApellido = papellido2;
    this.fechaNacimiento = pfechanacimiento;
    this.correoElectronico = pemail;
    this.contrasenna = pcontrasenna;
    this.provincia = pprovincia;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.photo = pphoto;
    this.tipousuario = ptipousuario;
    this.reviews = [];
  }

  agregarReview(pnuevoReview) {
    this.reviews.push(pnuevoReview);
  }

  getCantidadReviews(){
    return this.reviews.length;
  }

  getReviews(){
    return this.reviews;
  }

  getcedula(){
    return this.cedula;
  }

  getContrasenna(){
    return this.contrasenna;
  }

  getCorreo(){
    return this.correoElectronico;
  }

  getFecha(){
    return this.fechaNacimiento;
  }

  getNombre(){
    return `${this.primerNombre} ${this.primerApellido}`;
  }

  getNombreCompleto(){
    return `${this.primerNombre} ${this.primerApellido} ${this.segundoApellido}`;
  }

  getDireccion(){
    return `${this.provincia}, ${this.canton}, ${this.distrito}`;
  }

  getPhoto(){
    return this.photo;
  }

  getRol(){
    return this.tipousuario;
  }

  setReviews(aReviews){
    this.reviews = aReviews;
  }
}

class Review{
  constructor(pmodelo, pmatricula, pmarca, pimage, pidcliente){
    this.modelo = pmodelo;
    this.matricula = pmatricula;
    this.marca = pmarca;
    this.image = pimage;
    this.idCliente = pidcliente
  }

  getMarca(){
    return this.marca;
  }

  getModelo(){
    return this.modelo;
  }

  getmatricula(){
    return this.matricula;
  }

  getInfoReview(){
    return `${this.marca} ${this.modelo}`;
  }

  getImage(){
    return this.image;
  }

  getCedulaDuenno(){
    return this.idCliente;
  }
}

class Hotel{
  constructor(pnombre, pphoto, pposition, pprovincia, pcanton, pdistrito, pdireccionexacta, ptelcs, ptelreserv, pemail){
    this.nombre = pnombre;
    this.photo = pphoto;
    this.position = pposition;
    this.provincia = pprovincia;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.direccionExacta = pdireccionexacta;
    this.telServicioCliente = ptelcs;
    this.telReservaciones = ptelreserv;
    this.correoElectronico = pemail;
  }
}