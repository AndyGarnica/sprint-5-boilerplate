var api ={
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};

var contenedorTemas= $("#mostarTema");

var cargarPagina = function () {
  cargarTemas();
};

var cargarTemas = function (){
  $.getJSON(api.url, function(temas){
    temas.forEach(crearTemas);
  });
};

var crearTemas = function (tema){
  var plantillaFinal= " ";
  plantillaFinal += plantillaTema.replace('__temaF__', tema.content)
  .replace('__autor__', tema.author_name)
  .replace('__respuesta__', tema.responses_count);
  contenedorTemas.append(plantillaFinal); // para mostrar
console.log(tema);

};

var plantillaTema = '<tr>' +
    '<td>__temaF__</td>' +
    '<td>__autor__</td>' +
    '<td>__respuesta__</td>' +
  '</tr>' ;

$(document).ready(cargarPagina);
