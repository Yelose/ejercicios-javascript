let nombre = prompt("Ingresa tu nombre ")
let numero = Number(prompt("Incgresa un número"))
let mensaje = `Hola ${nombre}, tu número + 1 = ${numero+1}`
mensaje = mensaje.substring(0,10)
alert(mensaje)