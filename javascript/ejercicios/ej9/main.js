const formCv = document.getElementById("cv-form")

formCv.addEventListener("submit", validateForm())

function validateForm(event) {
  alert("hijo de tu p madre")
  event.prefentDefault()
  const provincia = document.forms["cv"]["provincia"].value
  const diaNacimiento = document.forms["cv"]["dia-nacimiento"].value
  let provinceEmpty = ""
  let dayOfBirthEmpty = ""
  let dayOfBirthWrong = ""
  

  if (provincia == 0) {
    provinceEmpty = "Debes seleccionar una provincia\n"
  }
  if (diaNacimiento == "") {
    dayOfBirthEmpty = "Debes rellenar el día de nacimiento\n"
  }
  if (diaNacimiento < 1 || diaNacimiento > 31) {
    dayOfBirthWrong = "¿Naciste ayer o eres un aborto?\n"
  }
  if (provinceEmpty != "" || dayOfBirth !="" || dayOfBirthWrong != ""){
    alert(provinceEmpty + dayOfBirthEmpty + dayOfBirthWrong)

  } else {
    alert("Formulario enviado correctamente.")
  }
}



function validateProductForm() {
  
  const productName = document.forms["product"]["name"].value
  const productPrice = document.forms["product"]["price"].value
  const productTax = document.forms["product"]["taxes"].value
  const productDiscount = document.forms["product"]["discount"].value

  let nameMissing = ""
  let priceMissing = ""
  let priceWrong = ""
  let taxLowerThan16 = ""
  let discountApplied = ""

  if (productName.value == "" || productName.value == null)
    nameMissing = "Campo nombre requerido \n"

  if (productPrice.value == "" || productPrice.value == null)
    priceMissing = "Campo precio requerido \n"

  if (productPrice.value < 120)
    priceWrong = "El precio ha de ser mayor a 120€ \n"

  if (productTax.value < 16)
    taxLowerThan16 = "Esta seleccionando un impuesto bajo \n"

  if (productDiscount.checked == true)
    discountApplied = "La opción de promoción seleccionada es la más indicada \n"

  if (nameMissing != "" || priceMissing != "" || priceWrong != "" || taxLowerThan16 != "" || discountApplied != ""){
    alert(nameMissing + priceMissing + priceWrong + taxLowerThan16 + discountApplied)
    return false
  }

}