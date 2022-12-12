let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
let dni = Number(prompt('Introduce tu dni sin letra'))
let resto = dni%23
let dniLetra = letras[resto]
if (dni >0 && dni <= 99999999){
    alert(`Tu DNI es ${dni}${dniLetra}, si no lo es, llame al servicio técnico del Gobierno de España`)
} else {
    alert('Refresca la página e introduce un número válido')
}
