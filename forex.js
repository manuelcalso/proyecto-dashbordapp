import { Chart } from "chart.js";

//www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=MXN&apikey=339OSPZEM86MC2JK

export const forexData = async () => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=MXN&apikey=339OSPZEM86MC2JK`
    );
    console.log(response);
    const forData = await response.json();
    console.log("data", forData);

    const fromCurrencyName =
      forData["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
    const ToCurrencyName =
      forData["Realtime Currency Exchange Rate"]["4. To_Currency Name"];

    const exchangeRate =
      forData["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

    let exchangeFormat = parseFloat(exchangeRate).toLocaleString("es-US", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    document.querySelector("#forexid").innerHTML = /*HTML*/ `
    <section id="forexcontainer">
      <div id="forexMXN">
        <p>${fromCurrencyName}</p>
        <br/>
        <br/>   
        <p>${ToCurrencyName}</p>
        <br/>
        <br/>
        <p>${exchangeFormat}</p>
      </div>
    </section>
    `;
  } catch (error) {
    console.log(error);
  }
};
