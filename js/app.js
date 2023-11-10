//FUNCTIONS EJECUTION

// SPOTLIGHT CONTENT
const spotLightContent = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let findSpotLight = content.find (para => para.spotLight == true)
  console.log(findSpotLight)
  
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
  content = array.forEach(element => {
    
  });
};
