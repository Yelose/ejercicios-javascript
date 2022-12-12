function parOimpar(n) {
    let number = Number(prompt("escribe un número y te digo si es par o impar"))
    if (number % 2 == 0) {
        alert(`el número ${number} es par`)
    } else {
        alert(`el número ${number} es impar`)
    }
}
function containsUppercase() {
    let frase = prompt("escribe algo")
    let mayusc = /[A-Z]/.test(frase)
    let minusc = /[a-z]/.test(frase)
    if (mayusc == true && minusc == true) {
        return alert(`Tu frase: <<${frase}>> contiene minúsculas y mayúsculas`)
    }
    if (mayusc == true) {
        return alert(`Tu frase: <<${frase}>> contiene mayúsculas`)
    }
    if (minusc == true) { 
        return alert(`Tu frase: <<${frase}>> contiene minúsculas`) 
    }
    return alert(`Tu frase: <<${frase}>> no contiene mayúsculas ni minúsculas`) 

}