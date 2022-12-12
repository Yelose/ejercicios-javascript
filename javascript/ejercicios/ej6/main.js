let numero = Number(prompt("introduce un número, y te digo su factorial"))
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return alert(`El factorial de ${numero} es ${total}`); 
}
factorial(numero)
