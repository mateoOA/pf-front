export default function validate(newProduct) {
  let errors = {}

  // Validaciones regex
  //const numEnteroPositivo=/^[1-9]\d*$/;
  const noNumeros = /^[^\d]*$/
  //const isUrl = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/

  // Errores en title
  if (!newProduct.title) {
    errors.title = "Title is required."
  } else if (!noNumeros.test(newProduct.title)) {
    errors.title = "The title must not contain numbers."
  } else {
    errors.title = null
  }

  return errors
}
