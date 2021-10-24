// Calcular promedio.
const lista1 = [100, 200,300,500];

 function calcularPromedio(LS) {
    let sumaLista1 = 0;
    for(let i=0; i<LS.length; i++){
        sumaLista1 = sumaLista1 + LS[i];
    }
  return sumaLista1/LS.length;
 }
 // Mediana
 const lista2=[100,200,500,800,400000000];

 function calcularMediana(LS){
   const mitad = parseInt(LS.length/2);
   let mediana;
   if ((LS.length%2)==0){
    const element1=LS[mitad];
    const element2=LS[mitad-1];
    return mediana = calcularPromedio([element1,element2]);
   }
   else{
     mediana=LS[mitad];
     return mediana;
   }
 }
 // Moda
 const lista3 = [1,2,3,1,2,3,4,2,2,2,1];
const lista3Count = {};
lista3.map(
  function(elemento){
    if (lista3Count[elemento]) {
      lista3Count[elemento] +=1;
    }else {
      lista3Count[elemento] = 1 ;
    }
  }
);
const lista3Ordenado = Object.entries(lista3Count).sort(
  function (elementoA, elementoB){
    return elementoA[1]-elementoB[1];
  }
);
const moda = lista3Ordenado[lista3Ordenado.length - 1];
