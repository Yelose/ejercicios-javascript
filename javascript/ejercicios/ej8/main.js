function numberOfLinks() {
    let numberOfLinks = document.getElementsByTagName('a').length
    return alert(`Esta página tiene ${numberOfLinks} enlaces`)
}

function numberOfParragraph() {
    let numberOfParragraph = document.getElementsByTagName('p').length
    return alert(`Esta página tiene ${numberOfParragraph} párrafos`)
}

function findLastLink() {
    var allLinks = document.getElementsByTagName("a");
    var lastLink = allLinks[(allLinks.length - 1)];
    return alert(`El último enlace de esta página es ${lastLink}`)
}
function addParragraph() {
    const container = document.getElementById("parrafos")
    const frase = prompt("Introduce unan frase")
    if (!(frase == null || frase == "")) {
        let tag = document.createElement("p")
        let text = document.createTextNode(frase)
        tag.appendChild(text)
        container.appendChild(tag)
    }
}