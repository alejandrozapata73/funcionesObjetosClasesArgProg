

// var productos = [];
// var precios = [];
// var tipo = [];


// for(var i=0;i<2;i++){
   
//     productos[i] = prompt("ingrese un producto")
//     precios[i] = prompt("ingrese un precio")
//     tipo[i] = prompt("ingrese un tipo")
   
// }

// console.log(productos.length);

// console.log(productos)

// for(let i=0;i<productos.length;i++){
//     console.log(productos[i]);
// }

//principios o ventajas DRY (dont repeat yourself)

function nombre(){
    console.log("saludando");
}

function nombreEdad(nombre,edad){

    console.log("Nombre Usuario: " + nombre);
    console.log("Edad Usuario: " + edad);

}

//invocar, llamar

nombre();

nombreEdad("Maximo",25);
nombreEdad("Bruno",36);

function sumarNumero(num1,num2=40,num3=16){

    console.log(num3)
    console.log(num2);
    //isNaN-> es No un Numero
    console.log(isNaN(num2));

    if(num2==" "||num2==null || isNaN(num2) || num2 <=0){
        alert("no hay nada, tenes vacio, o caracter o es menor a cero")

    }else{

        let total = num1 + num2;

        if(total>25){
            console.log("es mayor a 25");
        }else{
            console.log("es menor a 25");
        }
        console.log("El total de la suma es: " + total);
    }


  


}

sumarNumero(10);



//un string...
// alert("hola alert");