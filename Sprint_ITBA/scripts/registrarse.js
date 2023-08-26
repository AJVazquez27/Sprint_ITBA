const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", () => {
  Swal.fire({
    title: "¡Bien!",
    text: "Usurio registrado con éxito",
    icon: "success",
    confirmButtonText: "Ok",
  });
});
