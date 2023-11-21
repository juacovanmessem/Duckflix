const logOut = () => {
  localStorage.removeItem('role');
  localStorage.removeItem('id');
  window.location.href = '../pages/login.html';
}
const checkLogIn = () => {
  let id = localStorage.getItem ('id');
  if (!id) {
    window.location.href = '../pages/login.html'
  }
};
checkLogIn()
const showUser = async () => {

  let name = document.getElementById("userName"); 
  let id = localStorage.getItem ('id');

  const result = await fetch(`http://localhost:3000/users`);
  const info = await result.json();
  const userFind = info.find (e => e.id == id)

  name.innerHTML = `<span class="nav-link active text-white"> Hola ${userFind.name}!</span>`
};
showUser()
const adminButton = async () => {
  let div = document.getElementById("adminButton"); 
  let role = localStorage.getItem ('role');

  if (role == 'admin') {
    div.innerHTML = `<a class="nav-link active text-white" href="../../pages/adminFilm.html">Ver tabla de contenido</a>
    `
  }
};
adminButton()

const aboutFilm = async () => {
    let contentTitle = localStorage.getItem ('title') 
    let result = await fetch ('http://localhost:3000/films')
    let content = await result.json ()
    let movie = content.find (para => para.title == contentTitle)
  
    
    let div = document.getElementById ('info')
    div.innerHTML = ` <div class="col-lg-5 col-md-6 col-12 d-flex align-items-center h-100">
    <div class="position-relative align-middle w-100">
    <img src="${movie.image}" alt="" class="object-fit-contain rounded w-100 ">
    <a class="position-absolute bottom-0 end-0 btn btn-info m-2 rounded-pill" href="../pages/404.html"> <i class="bi bi-play-fill"></i> Reproducir </a>
  </div>
</div>
<div class="col-lg-5 col-md-6 col-12 bg-warning-subtle rounded-4">
  <h1 class="display-5 p-2">${movie.title}</h1>
  <hr class="border border-info border-3 opacity-75">
  <div class="h-auto d-inline-block p-2">
    <span class="lead  p-2"> ${movie.time} </span>
    <div class="vr"></div>
    <span class="lead  p-2"> ${movie.year} </span>
    <div class="vr"></div>
    <span class="lead p-2"> ${movie.category} </span>
  </div>
  <p class="p-2 lead p-2"> ${movie.sinopsis} </p>
</div> `
}
aboutFilm();