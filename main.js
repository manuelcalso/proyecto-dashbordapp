import "./style.css";
import { getData } from "./news";
import { criptoFetch } from "./cripto";
import { inflationData } from "./inflation";
import { forexData } from "./forex";

forexData();

///eventos

const newsa = document.querySelector("#newsa");
newsa.addEventListener("click", () => {
  getData();
});

const criptonews = document.querySelector("#criptonews");
criptonews.addEventListener("click", () => {
  criptoFetch();
});

const criptochart = document.querySelector("#inflchart");
criptochart.addEventListener("click", () => {
  inflationData();
});
