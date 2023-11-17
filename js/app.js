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
  <button type="button" class="btn btn-light"><a href="./pages/aboutFilm.html" class="nav-link active">
  Mas información
  </a></button>
  <button type="button" class="btn btn-light"><a href="./pages/404.html" class="nav-link active">
  <i class="bi bi-play-fill"></i>Reproducir
  </a></button>
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
categoryContent ();

const contentSerie = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let divContent = document.getElementById ('content')
  divContent.innerHTML='<h3 class="display-6 text-uppercase">Todas las series</h3>'
  content.forEach (element => {
    if (element.type == 'Serie') {
      divContent.innerHTML += 
      `<div class="position-relative  d-inline hover">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
      </div>`
    } 
  })
};

const contentMovie = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let divContent = document.getElementById ('content')
  divContent.innerHTML='<h3 class="display-6 text-uppercase">Todas las películas</h3>'
  content.forEach (element => {
    if (element.type == 'Película') {
      divContent.innerHTML += 
      `<div class="position-relative  d-inline hover text-center">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
      </div>`
    } 
  })
};

const searchContent = async () => {
  let searchInput = document.getElementById ('searchInput')
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let searchedElement = content.find (para => para.title.toLowerCase() == searchInput.value.toLowerCase())
   console.log(searchedElement)
  if (searchedElement == undefined) {
    alert ('Lo sentimos no tenemos lo que estas buscando :(')
  } else {
    localStorage.setItem ('title', searchedElement.title)
  }
}