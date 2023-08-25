function generarTabla() {
  document.getElementById("tabla").innerHTML = "";

  let montoIngresado = Number(document.getElementById("montoPrestamo").value);
  let cuotas = Number(document.getElementById("cuotasPrestamo").value);
  let tasaInteres = Number(document.getElementById("interesPrestamo").value);
  if (montoIngresado > 0) {
    for (i = 1; i <= cuotas; i++) {
      cantCuotas = montoIngresado / cuotas;
      d1 = cantCuotas.toFixed(2);
      i2 = (montoIngresado * tasaInteres) / 100 / cuotas;
      d2 = i2.toFixed(2);
      r = cantCuotas + i2;
      d3 = r.toFixed(2);
      document.getElementById("tabla").innerHTML =
        document.getElementById("tabla").innerHTML +
        `<tr>
            <td> ${i}</td>
            <td> ${d1}</td>
            <td> ${d2}</td>
            <td> ${d3}</td>
        </tr>`;
    }
    n1 = montoIngresado.toFixed(2);
    t_i = i2 * cuotas;
    d4 = t_i.toFixed(2);
    t_p = r * cuotas;
    d5 = t_p.toFixed(2);
    document.getElementById("t1").innerHTML = n1;
    document.getElementById("t2").innerHTML = d4;
    document.getElementById("t3").innerHTML = d5;
  } else {
    alert("Falta ingresar un valor");
  }
}
