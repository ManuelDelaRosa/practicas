function totalVocales(){
	var cadena=prompt("Ingresa cadena ");
	var letra=prompt("Ingresa caracter a buscar");
	document.write(" <Br> la cadena ingresada es : "+cadena);
	document.write(" <Br> El numero de vocales es: "+vocales(cadena));
	document.write(" <Br> El numero de consonantes es: "+consonantes(cadena));
	document.write(" <Br> La letra "+letra+" aparece "+caracter(cadena,letra)+" veces ");
	document.write(" <Br> Cadena Loca: "+cadenaLoca(cadena));

}

function vocales(cad){
	cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara=='A'||cara=='E'||cara=='I'||cara=='O'||cara=='U') {
		
		cont++;
	}
}
return cont;
}

function consonantes(cad){

	cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara=='A'||cara=='E'||cara=='I'||cara=='O'||cara=='U') {
		
		
	}else{
		if ((cara >= 'A' && cara <= 'Z'&& cara!='A')||(cara >= 'A' && cara <= 'Z'&& cara!='E')||(cara >= 'A' && cara <= 'Z'&& cara!='I')||(cara >= 'A' && cara <= 'Z'&& cara!='O')||(cara >= 'A' && cara <= 'Z'&& cara!='U')) {
			cont++;
		}
		
	}
}
return cont;
	//alert("consonantes");
	/*cad=cad.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	//cara.isAlphabetic(cara.charCodeAt(i));
	if (cara.isAlphabetic(cad.charCodeAt(i)) ) {
		
		cont++;
	}
}
return cont;*/

}

function caracter(cad, let){
	cad=cad.toUpperCase();
	let=let.toUpperCase();
	var cont=0;
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (cara==let) {
		
		cont++;
	}
}
return cont;

}

function cadenaLoca(cad){
	cad=cad.toUpperCase();
	var loca="";
	var cara;
for (var i = 0; i < cad.length; i++) {
	cara=cad.charAt(i);
	if (i% 2 == 0) {
		
		loca+=cara.toUpperCase();
	}else{
		loca+=cara.toLowerCase();
	}

}
return loca;

}