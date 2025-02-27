const allowedCors = ["https://localhost:3000", "https://localhost:3001",'https://pindie.portal.nomoredomainswork.ru','http://pindie.portal.nomoredomainswork.ru','https://portal.game.pindie.nomoredomainswork.ru','http://portal.game.pindie.nomoredomainswork.ru'];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
}
module.exports=cors;