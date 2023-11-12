//FUNCTIONS EJECUTION

// SPOTLIGHT CONTENT
const spotLightContent = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let findSpotLight = content.find (para => para.spotLight == true)
  
  let div = document.getElementById ('spotLight')
  div.innerHTML = `<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
  <img src=${findSpotLight.image} class="d-block img-fluid spotLight" alt="...">
  <div class="carousel-caption d-none d-md-block bgGradient">
  <h5 class="text-light display-4 text-uppercase">${findSpotLight.title}</h5>
  <p class="text-light">${findSpotLight.sinopsis}</p>
  <button type="button" class="btn btn-light">Mas información</button>
  <button type="button" class="btn btn-light">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
  </svg>Reproducir
  </button>
  </div>
  </div>
  </div>`
};
spotLightContent()

//CATEGORIES CREATION
const categoryContent = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()

  let actionDiv = document.getElementById ('actionContent')
  let cifiDiv = document.getElementById ('cifiContent')
  let hororDiv = document.getElementById ('horrorContent')
  let romanceDiv = document.getElementById ('romanceContent')
  let comediDiv = document.getElementById ('comediContent')


  content.forEach(element => {
    if (element.status == true) {
      switch (element.category) {
        case 'Acción': 
        actionDiv.innerHTML += `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div>`
        break;
        case 'Ciencia Ficción': 
        cifiDiv.innerHTML += `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div>`
        break;
        case 'Romance': 
        romanceDiv.innerHTML += `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div>`
        break;
        case 'Terror': 
        hororDiv.innerHTML += `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div>`
        break;
        case 'Comedia': 
        comediDiv.innerHTML += `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div>`
        break;
        default:
          break;
        }
      }
      });
    };
    categoryContent ()