function validarInicioSesion() {
  let email = document.getElementById("exampleInputEmail1").value;
  let contraseña = document.getElementById("exampleInputPassword1").value;

  if (email === "") {
    alert("Por favor ingrese un e-mail");
    return false;
  } else if (contraseña === "") {
    alert("Por favor ingrese la contraseña");
    return false;
  } else {
    window.location.href = "/index.html";
  }
}
