const moneda_1 = document.getElementById("primer_moneda");
const moneda_2 = document.getElementById("segunda_moneda");
const cantidad_1 = document.getElementById("cantidad_1");
const cantidad_2 = document.getElementById("cantidad_2");
const btn_cambio = document.getElementById("cambio");
const cambio_valor = document.getElementById("cambio_valor");

// Fetch API

function convertir() {
  const moneda1 = moneda_1.value;
  const moneda2 = moneda_2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${moneda1}`)
    .then((res) => res.json())
    .then((data) => {
      const cambio_valor = data.rates[moneda2];

      btn_cambio.innerText = `1 ${moneda1} = ${cambio_valor} ${moneda2}`;

      cantidad_2.value = (cantidad_1.value * cambio_valor).toFixed(2);
    });
}

// Event Listeners

moneda_1.addEventListener("change", convertir);
cantidad_1.addEventListener("input", convertir);
moneda_2.addEventListener("change", convertir);
cantidad_2.addEventListener("input", convertir);

cambio_valor.addEventListener("click", () => {
  const temp = moneda_1.value;
  moneda_1.value = moneda_2.value;
  moneda_2.value = temp;
  convertir();
});
