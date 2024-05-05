import "./style.css";
import { criptoFetch } from "./cripto";
import { inflationData } from "./inflation";
import { forexData } from "./forex";

forexData();

///eventos

const criptonews = document.querySelector("#criptonews");
criptonews.addEventListener("click", () => {
  criptoFetch();
});

const criptochart = document.querySelector("#inflchart");
criptochart.addEventListener("click", () => {
  inflationData();
});
