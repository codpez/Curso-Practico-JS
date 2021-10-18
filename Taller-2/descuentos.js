const cupon = [
    "cupon1",
    "cupon2",
    "cupon3",
    "cupon4",
];
function descuento(precioOriginal,porcentaje){
    rebaja=(precioOriginal*(porcentaje/100));
    precioFinal=precioOriginal-rebaja;
    return precioFinal
}
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceVal = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discount= parseInt(inputDiscount.value);
    const valordecupon = cupones();
    const discountval = discount + valordecupon;
    const precioConDescuento = descuento(priceVal,discountval);
    const resu = document.getElementById("Resultado");
    resu.innerText = "El precio con descuento es $" + precioConDescuento;
}
function cupones(){
    const inputCupon = document.getElementById("InputCupon");
    const cuponUsado = inputCupon.value;
    let descuento;
    switch(cuponUsado){
        case cupon[0]:
            descuento = 10;
        return descuento;
        case cupon[1]:
            descuento= 25;
        return descuento;
        case cupon[2]:
            descuento= 50;
        return descuento;
        case cupon[3]:
            descuento= 30;
        return descuento;
        case "":
            descuento=0;
        return descuento;
    }
    
}