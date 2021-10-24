const lista1 = [100, 200,300,500,];

 function calcularPromedio(LS) {
  //  let sumaLista1 = 0;
  //  for(let i=0; i<LS.length; i++){
    //    sumaLista1 = sumaLista1 + LS[i];
  //  }
  const sumaList = LS.reduce(
      function(valorAcumulado=0, nuevoElemento) {
        return valorAcumulado+nuevoElemento;
      }
  );
  return sumaList;
 }