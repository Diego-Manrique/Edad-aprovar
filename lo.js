const MiPromesa = new Promise ( (resolve, reject) => {
    prompt("Dijita tu edad");

if (edad >= 18) {
    console.log("Eres mayor de edad disfruta la fiesta");
  } else if (edad <= 17){
    console.log("Eres menor de edad no puedes pasar :( ");
  } else if (edad = 0){
  console.log("no estas digitando una edad valida")
  } else {
  console.log("none");
  }
    
});