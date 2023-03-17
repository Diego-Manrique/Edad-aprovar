const MiPromesa = new Promise ( (resolve, reject) => {
let edad = prompt("Dijita tu edad");

if (edad >= 18) {
    resolve("Eres mayor de edad disfruta la fiesta");
  } else if (edad){
    reject("no estas digitando una edad valida");
  } else if (edad <= 17){
    reject("Eres menor de edad no puedes pasar :( ");
  }  else {
    reject("none");
  }
    
});

MiPromesa.then( (valor ) => {
    console.log(valor);
}).catch((err) => {
    console.error(err);
});