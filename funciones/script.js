

var productos = [];
var precios = [];
var tipo = [];


for(var i=0;i<2;i++){
   
    productos[i] = prompt("ingrese un producto")
    precios[i] = prompt("ingrese un precio")
    tipo[i] = prompt("ingrese un tipo")
   
}

console.log(productos.length);

console.log(productos)

for(let i=0;i<productos.length;i++){
    console.log(productos[i]);
}