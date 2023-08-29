const mostrar = document.querySelector("#app");

export const criptoFetch = async () => {
  const url = "https://api.coincap.io/v2/assets";

  try {
    const response = await fetch(url);
    const criptodata = await response.json();
    imprimir(criptodata.data);

    console.log(criptodata);
  } catch (error) {
    console.log(error);
  }
};

function imprimir(arreglo) {
  mostrar.innerHTML = arreglo
    .map((cripto) => {
      let precioCripto = Number(cripto.priceUsd);
      let precioFormateado = precioCripto.toLocaleString("es-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return /*HTML*/ `
    <a> <div class="content"> 
    <h1 class="criptoname">${cripto.id}</h1>
    <h3 class="criptosymbol">${cripto.symbol}</h3>
    <h2>today price: ${precioFormateado}</h2>
    </div></a>
    `;
    })
    .join("");
}
