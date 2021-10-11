// Codigo cuadrado constante de 5cm
console.group("Cuadrados");
//const LadoCuadrado = 5;
//console.log("Los lados del cuadrado miden:"+ LadoCuadrado);
function perimetroCuadrado5(Lado){
 return 4*Lado;
} 
//console.log("El perimetro del cuadrado mide:"+ perimetroCuadrado5 +" cm");
//const areaCuadrado5 = LadoCuadrado**2;
function areaCuadrado5(lado){
    return lado**2
}
//console.log("El Area del cuadrado mide:"+ areaCuadrado5 + " cm^2");
console.groupEnd();
// Codigo del triangulo
console.group("Triangulos");
//onst ladoTriangulo1 = 4;
//const ladoTriangulo2 = 4;
//const alturaTriangulo = 3.5;
//const baseTriangulo = 2;
//console.log("Los lados del triangulo miden: " 
//+ ladoTriangulo1 
//+ " cm, " 
//+ ladoTriangulo2 
//+" cm, "
//+ baseTriangulo 
//+ " cm,"
//);
//console.log("La altura del triangulo es de:"+ alturaTriangulo);
function perimetroTriangulo(Lado1,Lado2,base){
    return Lado1 + Lado2 + base;

}
//console.log("El perimetro del triangulo mide:"+ perimetroTriangulo +" cm");
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
//console.log("El Area del triangulo mide:"+ areaTriangulo + " cm^2");
console.groupEnd();
// Codigo del circulo
console.group("Circulos");
// Radio
//const radioCirculo = 4;
//console.log('El radio del circulo es:' + radioCirculo + ' cm');
// Diametro
function diametroCirculo(radio){
    return radio*2;
}
//console.log('El diametro del circulo es:' + diametroCirculo + ' cm');
// Pi
const PI = Math.PI;
console.log('El valor de Pi es:' + PI);
// Perimetro.
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}
//console.log("El perimetro del circulo mide:"+ perimetroCirculo +" cm");
// Area
function areaCirculo(radio){
    return (radio**2)*PI;
}
//console.log("El Area del circulo mide:"+ areaCirculo + " cm^2");
console.groupEnd();