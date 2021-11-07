import{mexico} from './salarios.js'
const salariosMx = mexico.map(
    function(persona){
        return persona.salary;
    }
);
const salariosMxSorted= salariosMx.sort(
    function(SalaryA,SalaryB){
        return SalaryA-SalaryB;
    }
);
function esPar(numero){
  return numero%2===0;
}
function calcularMedianaAritmetica(lista){
    const sumaLista= lista.reduce(
        function (valorAcumulado= 0, numevoElemento){
            return valorAcumulado + numevoElemento; 
        }
    );
}
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)){
        const personaMitad1= lista[mitad];
        const personaMitad2= lista[mitad-1];
        const mediana= calcularMedianaAritmetica(personaMitad1, personaMitad2);
        return mediana;
    } else {
        const personaMitad= lista[mitad];
    }
}
console.log(function medianaSalarios(salariosMxSorted){});