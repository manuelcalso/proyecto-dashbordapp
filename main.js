import "./style.css";
import { getData } from "./news";
import { criptoFetch } from "./cripto";
import { inflationData } from "./inflation";

///eventos

const newsa = document.querySelector("#newsa");
newsa.addEventListener("click", () => {
  getData();
});

const criptonews = document.querySelector("#criptonews");
criptonews.addEventListener("click", () => {
  criptoFetch();
});

const criptochart = document.querySelector("#criptochart");
criptochart.addEventListener("click", () => {
  inflationData();
});
