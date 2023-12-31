//FUNCTIONS EJECUTION

// SPOTLIGHT CONTENT
const spotLightContent = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let findSpotLight = content.find (para => para.spotLight == true)
  
  let div = document.getElementById ('spotLight')
  div.innerHTML = `<div class="carousel-inner">
  <div class="carousel-item active" data-bs-interval="10000">
  <img src=${findSpotLight.image} class="d-block img-fluid spotLight" alt="${findSpotLight.title}">
  <div class="carousel-caption d-none d-md-block">
  <h5 class="text-light display-4 text-uppercase bgGradient">${findSpotLight.title}</h5>
  <p class="text-light bgGradient bgText">${findSpotLight.sinopsis}</p>
  <button type="button" class="btn btn-light bgGradient" onclick="aboutThisFilm(this)" id="${findSpotLight.id}">
  Mas información
  </a></button>
  <button type="button" class="btn btn-light bgGradient"><a href="./pages/404.html" class="nav-link active">
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
        actionDiv.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative  d-inline hover"  id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
        break;
        case 'Ciencia Ficción': 
        cifiDiv.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative  d-inline hover"  id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
        break;
        case 'Romance': 
        romanceDiv.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative  d-inline hover"  id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
        break;
        case 'Terror': 
        hororDiv.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative  d-inline hover"  id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
        break;
        case 'Comedia': 
        comediDiv.innerHTML += `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative  d-inline hover"  id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
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
      if (element.status == true) {
        divContent.innerHTML += 
        `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative d-inline hover" id=${element.id} onclick="aboutThisFilm(this)">
          <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
          <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
        </div></div>`
      } 
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
      if (element.status == true) {
        divContent.innerHTML += 
        `<div class=" col-lg-3 col-md-4 col-sm-6 col-12"><div class="position-relative d-inline hover" id=${element.id} onclick="aboutThisFilm(this)">
        <p class="position-absolute top-50 start-50 translate-middle w-100 p-2 d-inline-block">${element.title}</p>
        <img src=${element.image} class="img-fluid img-thumbnail rounded content m-1 my-2" alt="${element.title}"></img>
      </div></div>`
      }
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
    window.location.href = '../pages/aboutFilm.html';

  }
};

const aboutThisFilm = async (film) => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let thisFilm = content.find (para => para.id == film.id)
  localStorage.setItem ('title', thisFilm.title)
  window.location.href = '../pages/aboutFilm.html';

}