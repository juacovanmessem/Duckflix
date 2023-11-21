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