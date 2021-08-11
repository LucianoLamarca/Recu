function mostrar() {
  
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let iterador="si";
  let cantidadCaracteres;
  let contadorEdad=0;
  let cantidadMascotas=0;
  let promedioEdad=0;
  let menorEdad=0;
  let tipoMinimo;
  let sexoMinimo;
  let flagMenor=false;
  let cantidadReptiles=0;
  let cantidadAves=0;
  let porcentajeAves=0;
  let cantidadMamiferos=0;


  do{
    nombre=prompt("Ingrese nombre de mascota:").toLocaleLowerCase();
    cantidadCaracteres = nombre.length;
    while(cantidadCaracteres < 3 || cantidadCaracteres > 8){
      
      nombre=prompt("Vuelva a ingresar el nombre '3 a 8 caracteres':").toLocaleLowerCase();
      cantidadCaracteres = nombre.length;
    }
    tipo=prompt("Indique tipo 'mamifero','ave','reptil':").toLocaleLowerCase();
    while(tipo!="mamifero" && tipo!="ave" && tipo!="reptil"){

      tipo=prompt("Tipo erroneo, vuelva a ingresar 'mamifero','ave','reptil':").toLocaleLowerCase();
    }
    sangre=prompt("Ingrese tipo de sangre 'fria','calida':").toLocaleLowerCase();
    while(sangre!="fria" && sangre!="calida" || sangre=="calida" && tipo=="reptil"){
      
      sangre=prompt("Sangre erronea, vuelva a ingresar 'fria','calida':").toLocaleLowerCase();
    }
    edad=prompt("Ingrese edad de mascota:");
    edad=parseInt(edad);
    while(edad<=0){

      edad=prompt("Edad incorrecta, vuelva a ingresar:");
      edad=parseInt(edad);
    }
    sexo=prompt("Ingrese sexo 'm','h':").toLocaleLowerCase();
    while(sexo!="m" && sexo!="h"){

      sexo=prompt("Error, vuelva a ingresar genero 'm','h':").toLocaleLowerCase();
    }
    
    parseInt(cantidadReptiles);
    if(tipo=="reptil"){
      contadorEdad=contadorEdad+edad;
      cantidadReptiles++;
    }

    parseInt(cantidadAves);
    if(tipo=="ave"){
      cantidadAves++;
    }

    parseInt(cantidadMamiferos);
    if(tipo=="mamifero")
    {
      cantidadMamiferos++;
    }

    if (flagMenor == false || edad < menorEdad){

      menorEdad=edad;
      tipoMinimo=tipo;
      sexoMinimo=sexo;
      flagMenor=true;

    }
    
    parseInt(cantidadMascotas);
    cantidadMascotas++;
    
    iterador=prompt("Desea seguir ingresando datos?'si'/'no':").toLocaleLowerCase();
  }while(iterador=="si");

  

  porcentajeAves=cantidadMascotas/cantidadAves;
  porcentajeAves=100/porcentajeAves;
  promedioEdad=contadorEdad/cantidadReptiles;
  
  alert("El promedio de edad es de los reptiles es: " + promedioEdad + "años");
  alert("La mascota mas joven tiene: " + menorEdad + " años " + " es de tipo "+ tipoMinimo + " y sexo "+ sexoMinimo);
  alert("El porcentaje de aves es: "+ porcentajeAves + "% ");

  if(cantidadReptiles>cantidadAves && cantidadReptiles > cantidadMamiferos )
  {
  	alert("La mayor cantidad de mascotas son de tipo Reptil");
  }
  else if(cantidadAves>cantidadReptiles && cantidadAves > cantidadMamiferos )
  {
  	alert("La mayor cantidad de mascotas son de tipo Aves");
  }
  else if(cantidadMamiferos>cantidadReptiles && cantidadMamiferos > cantidadAves)
  {
  	alert("La mayor cantidad de mascotas son de tipo Mamifero");
  }

}
