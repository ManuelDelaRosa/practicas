function solicitarNumeroDecimal(){
	//alerta("Prueba");
	var numDecimal=prompt("Ingresa numero en base decimal");
	document.write(" <Br> El numero ingresado es : "+numDecimal);
	document.write(" <Br> El numero"+numDecimal+ "  en binario es:" +ConvertirDec_Bin(numDecimal));
	document.write(" <Br> El numero"+ numDecimal+" en hexadecimal es : "+ConvertirDec_Hex(numDecimal));
	document.write(" <Br> El numero"+numDecimal+"  en octal es : " +ConvertirDec_Oct(numDecimal));
}


function ConvertirDec_Bin(num){
	 return (parseInt(num, 10)).toString(2);
	  
}

function ConvertirDec_Oct(num){
	 return (parseInt(num, 10)).toString(8);
	  
}

function ConvertirDec_Hex(num){
	 return (parseInt(num, 10)).toString(16);
	  
}