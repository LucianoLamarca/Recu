function mostrar() {
  
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias=0;
  let notaPromedio=0;
  let edad=0;
  let iterador;
  let flagMayor=false;
  let flagMenor=false;
  let promedioMayor=0;
  let nombrePromedio;
  let estudiantesQuimica=0;
  let estudiantesFisica=0;
  let estudiantesSistemas=0;
  let edadMenor=0;
  let nombreMenor;
  let cantidadEstudiantes=0;
  let porcentajeFisica=0;
  let porcentajeQuimica=0;
  let porcentajeSistemas=0;

  for(iterador=0;iterador<3;iterador++){
    nombre=prompt("Indique nombre:").toLocaleLowerCase();
    
    carrera=prompt("Indique carrera 'quimica','fisica','sistemas':").toLocaleLowerCase();
    while(carrera!="quimica" && carrera!="fisica" && carrera!="sistemas"){

      carrera=prompt("Tipo erroneo, vuelva a ingresar 'quimica','fisica','sistemas':").toLocaleLowerCase();
  }

    sexo=prompt("Indique sexo 'masculino','femenino','no binario':").toLocaleLowerCase();
    while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario"){

      sexo=prompt("Sexo incorrecto, vuelva a ingresar 'masculino','femenino','no binario':").toLocaleLowerCase();
  }

    cantidadMaterias=prompt("Indique cantidad de materias:");
    parseInt(cantidadMaterias);
    while(cantidadMaterias<0 || cantidadMaterias>5){

      cantidadMaterias=prompt("Cantidad materias incorrecta '1 a 5':");
      parseInt(cantidadMaterias);
  }

    notaPromedio=prompt("Ingrese nota promedio:");
    parseInt(notaPromedio);
    while(notaPromedio<0 || notaPromedio>10){

      notaPromedio=prompt("Nota promedio invalida, vuelva a ingresar '0 a 10':");
      parseInt(notaPromedio);
  }

    edad=prompt("Ingrese edad:");
    parseInt(edad);
    while(edad<17 || edad>70){

      edad=prompt("Edad fuera del rango, vuelva a ingresar '17 a 70':");
      parseInt(edad);
  }
  
    parseInt(promedioMayor);
    if (flagMayor == false || notaPromedio > promedioMayor){

      if(carrera=="fisica"){
        promedioMayor=notaPromedio;
        nombrePromedio=nombre;
      }
      flagMenor=true;
    }

    parseInt(edadMenor);
    if (flagMenor == false || edad<edadMenor){

      if(sexo=="femenino"){
        nombreMenor=nombre;
        edadMenor=edad;
      }
      flagMenor=true;
    }

    switch(carrera){

      case "quimica":
        parseInt(estudiantesQuimica);
        estudiantesQuimica++;
      
         break;

      case "fisica":
        parseInt(estudiantesFisica);
        estudiantesFisica++;

        break;

      case "sistemas":
        parseInt(estudiantesSistemas);
        estudiantesSistemas++;
        
        break;
  }    
}

cantidadEstudiantes=iterador;

parseInt(porcentajeFisica);
parseInt(porcentajeQuimica);
parseInt(porcentajeSistemas);

porcentajeFisica=cantidadEstudiantes/porcentajeFisica;
porcentajeFisica=100/porcentajeFisica;
porcentajeQuimica=cantidadEstudiantes/porcentajeQuimica;
porcentajeQuimica=100/porcentajeQuimica;
porcentajeSistemas=cantidadEstudiantes/porcentajeSistemas;
porcentajeSistemas=100/porcentajeSistemas;

alert("El estudiante de mejor promedio estudiante de Fisica es: "+ nombrePromedio);
alert("La alumna mas joven es: "+ nombreMenor);
alert("El porcentaje de los estudiantes de Fisica es: " + porcentajeFisica + "de quimica: "+ porcentajeQuimica + "de sistemas: "+ porcentajeSistemas);



  


}
