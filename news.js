//https://api.markets.sh/api/v1/clusters?api_token=373cb3eecc9ed9a4a2ae9c63e3b41400

export const getData = async () => {
  //generar datos
  const response = await fetch(`http://localhost:3000/News`);
  console.log(response);

  const data = await response.json();
  console.log(data);

  //vista inicial
  document.querySelector("#newsapp").innerHTML =
    /*HTML*/
    `<div>
      <div class="brandnews">
        
        ${data
          .map((e) => {
            return `
        <div class="newsbanner">
          <h3>${e.topic_class}</h3>
          <br> 
          <h6>${e.last_appearance}</h6>
          <br>
          <h1>${e.description}</h1>
          <br>
          <p>${e.summary}</p> 
          <br>
          <img src="${e.image_url}" alt="Imagen de noticia">
        </div>
        
        `;
          })
          .join("")}
        
      </div>
    </div>
    `;
};
