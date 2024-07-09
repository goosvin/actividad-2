
let cantidadArticulos = 25;
let precioTotal = 40;


let descuento;
if (cantidadArticulos <= 10) {
  descuento = precioTotal * 0.05; 
} else {
  if (cantidadArticulos <= 20) {
    descuento = precioTotal * 0.10;
  } else {
    descuento = precioTotal * 0.15;
  }
}
let precioConDescuento = precioTotal - descuento;
let iva = precioConDescuento * 0.16;
let precioFinal = precioConDescuento + iva;
console.log("Comprobante de la compra:");
console.log(`Cantidad de artículos: ${cantidadArticulos}`);
console.log(`Precio total: ${precioTotal.toFixed(2)}`);
console.log(`Descuento: ${descuento.toFixed(2)} (${descuento / precioTotal * 100}%)`);
console.log(`Precio con descuento: ${precioConDescuento.toFixed(2)}`);
console.log(`IVA (16%): ${iva.toFixed(2)}`);
console.log(`Precio final: ${precioFinal.toFixed(2)}`);

