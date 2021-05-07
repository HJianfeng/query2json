function query2json(sUrl) {
  var Oparam = {};
  sUrl.replace(/[\?&]?(\w+)=(\w+)/g, function($0, $1, $2) {
    Oparam[$1] === undefined ? Oparam[$1] = $2 : Oparam[$1] = [].concat(Oparam[$1], $2);
  });
  return Oparam;
}


export default query2json;