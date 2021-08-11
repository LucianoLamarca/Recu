function mostrar() {
	
	let continuar = "si";
	let tipoJuguete;
	let origenJuguete;
    let precioJuguete;
    let cantidadMuñecas = 0;
    let cantidadRompecabezas = 0;
    let cantidadPelotas = 0;
    let cantidadJuguetesImportados=0;
    let precioImportados = 0;
 	let promedioImportados;
 	let recaudacion = 0;
 	let rompecabezasMasBarato;
 	let flagRompecabezas = false;
 	let totalIva;
    while(continuar=="si"){
  		tipoJuguete=prompt("Ingrese el tipo de juguete: ");
  		while(tipoJuguete!="muñeca" && tipoJuguete!="rompecabezas" && tipoJuguete!="pelota"){
  			tipoJuguete=prompt("Error, ingrese nuevamente el tipo de juguete: ");
  		}

  		origenJuguete=prompt("Ingrese el origen del juguete: ");
  		while(origenJuguete!="nacional" && origenJuguete!="importado"){
  			origenJuguete = prompt("Error, Ingrese el origen del juguete: ");
  		}

  		precioJuguete=prompt("Ingrese el precio del juguete: ");
  		precioJuguete=parseInt(precioJuguete);
  		while(precioJuguete < 1000 && precioJuguete > 5000  ){
  			precioJuguete=prompt("Error, Ingrese el precio del juguete: ");
  			precioJuguete=parseInt(precioJuguete);
  		}

  		switch(tipoJuguete){
  			case "muñeca":
  				cantidadMuñecas++
  				break;
  			case "rompecabezas":
  				cantidadRompecabezas++;
  				break;
  			case "pelota":
  				cantidadPelotas++;
  				break;

  		}	


  		if(origenJuguete=="importado"){
  			cantidadJuguetesImportados++;
  			precioImportados=precioImportados + precioJuguete;
  			precioImportados=parseInt(precioImportados)
  		}
  		recaudacion=recaudacion + precioJuguete;

  		if(tipoJuguete=="rompecabezas" && origenJuguete=="nacional"){
  			if (flagRompecabezas==false || precioJuguete<rompecabezasMasBarato ){
  				rompecabezasMasBarato=precioJuguete;
  				flagRompecabezas=true;
  			}
  		}

  		continuar=prompt("Desea ingresar otro juguete?(si para continuar / no para salir): ");
	}

	if(cantidadMuñecas>cantidadPelotas && cantidadMuñecas>cantidadRompecabezas){
  			alert("El tipo de juguete mas vendido es muñecas");
  		}
  		else if(cantidadPelotas>cantidadMuñecas && cantidadPelotas>cantidadRompecabezas){
  			alert("El tipo de juguete mas vendido es pelotas");
  		}
  		else if(cantidadRompecabezas>cantidadMuñecas && cantidadRompecabezas>cantidadPelotas){
  			alert("El tipo de juguete mas vendido es rompecabezas");
  		}
  		else{
  			alert("Todos los tipos de juguete se vendieron por igual");
  		}
  	totalIva=recaudacion * 0.21;

  	promedioImportados=precioImportados/cantidadJuguetesImportados;
  	alert("El promedio de precio de los juguetes importados es: " + promedioImportados);
  	alert("La recaudacion total es: " + recaudacion);
  	alert("el precio del rompecabezas mas barato es" + rompecabezasMasBarato);
  	alert("De iva se percibio: " + totalIva);


}
