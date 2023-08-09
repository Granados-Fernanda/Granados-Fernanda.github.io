function muestra_oculta(id) {
  let div = document.getElementById(id);
  console.log ("div vale" + div);
  if (div.hidden){
    div.hidden = false;
  }
  else {
    div.hidden = true;
  }
}
function ocultarMostrar() {
  console.log("Acción Ocultar mostrar");

  var contenido = document.getElementById("contenidoOcultar");
  console.log("Contenido valor tiene " + contenido.hidden);
  if (contenido.hidden) {
    contenido.hidden = false;
  } else {
    contenido.hidden = true;
  }
}