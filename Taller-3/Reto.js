// Media Geometrica.
// La media geometrica se usa para calcular promedios de porcentajes.
// Media Geometrica = Math.sqrt(Elemento del producto del array).
// PROBLEMA: En una empresa quieren saber la proporción media de mujeres en los diferentes departamentos. 
// Para ello, se recoge el porcentaje de mujeres en los cinco principales departamentos.
const proporcionMedia = [
    {
    Departamento: "Produccion",
    Porcentaje: 32.6,
},{
    Departamento: "Compras",
    Porcentaje: 53.5,
},
{
    Departamento: "Marketing",
    Porcentaje: 28.9,
},
{
    Departamento: "Recursos_Humanos",
    Porcentaje: 48.2,
},
{
    Departamento: "Administracion",
    Porcentaje: 67.4,
}
];
const porcentajesarray = proporcionMedia.map(function (proporcionMediaObject) {
    return proporcionMediaObject.Porcentaje;
});

function calcularMediaGeometrica(argumento){
    let productoTotal= 1;
    console.log(argumento);
    for(var i=0;i<(argumento.length);i++){
        productoTotal= productoTotal * argumento[i];
        console.log(productoTotal);
    }
    return Math.pow(productoTotal, 1/argumento.length);
}
// reto completado.