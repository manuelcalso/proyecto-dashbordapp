import Chart from "chart.js/auto";

export const inflationData = async () => {
  let url = "https://www.alphavantage.co/query?function=INFLATION&apikey=demo";

  const response = await fetch(url);
  console.log("response", response);
  const dataInflation = await response.json();
  console.log("data", dataInflation);

  const rawData = dataInflation.data;

  document.querySelector("#chartinfo").innerHTML = `
  <div>
  <p class="chartp">${dataInflation.name}</p>
  <canvas id="inflachart"></canvas>
  </div>
  `;

  const inflaChart = document.querySelector("#inflachart");
  new Chart(inflaChart, {
    type: "bar",
    data: {
      labels: rawData.map((row) => row.date),
      datasets: [
        {
          label: "inflation by year",
          data: rawData.map((row) => row.value),
          backgroundColor: "rgb(253, 141, 20)",
        },
      ],
    },
  });
};
