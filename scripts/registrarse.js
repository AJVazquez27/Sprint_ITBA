const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "¡Bien!",
    text: "Usuario registrado con éxito",
    confirmButtonText: "Ok",
  }).then(() => {
    window.location.href = "./iniciar_sesion.html";
  });
});
