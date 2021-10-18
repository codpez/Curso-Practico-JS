function descuento(precioOriginal,porcentaje){
    rebaja=(precioOriginal*(porcentaje/100));
    precioFinal=precioOriginal-rebaja;
    return precioFinal
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceVal = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountval= inputDiscount.value;
    const precioConDescuento = descuento(priceVal,discountval);
    console.log(precioConDescuento);
    const resu = document.getElementById("Resultado");
    resu.innerText = "El precio con descuento es $" + precioConDescuento;
}