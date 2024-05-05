//datos tomados de esta api
//https://api.markets.sh/api/v1/clusters?api_token=373cb3eecc9ed9a4a2ae9c63e3b41400

export const getData = async () => {
  try {
    // Obtener los datos
    const response = await fetch("./db.json");
    const data = await response.json();
    console.log("data", data);

    const newsApp = document.querySelector("#newsapp");

    const html = data.News.map(
      (e) => `
      <section id="newscontainer">
        <div class="brandnews">
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
        </div>
      </section>
    `
    ).join("");

    newsApp.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
