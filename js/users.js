
const createUser = () => {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(' http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({
      name,
      lastname,
      email,
      password,
      role: 'client'
    }),
    headers: {
      'Content-type' : 'application/json; charset=UTF-8',
    }
  })
  window.location.href = '../../index.html';
  alert("Usuario creado");
};


const loginUser = async () => {
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const result = await fetch(' http://localhost:3000/users');
  const users = await result.json();

  const user = users.find(usuario => usuario.email === email)
  if(!user){
    alert("Los datos ingresados son incorrectos");
  }
  if(user.password === password){
    localStorage.setItem("id", user.id);
    localStorage.setItem("role", user.role);

    if (user.role == 'admin') {
      window.location.href = '../pages/adminFilm.html';
    } else {
      window.location.href = '../../index.html';
    }

    alert("Ingreso Exitoso");
  }else{
    alert("Constraseña incorrecta");
  }
};

const showUser = async () => {

  let name = document.getElementById("userName"); 
  let id = localStorage.getItem ('id');

  const result = await fetch(`http://localhost:3000/users`);
  const info = await result.json();
  const userFind = info.find (e => e.id == id)

  name.innerHTML = `<span class="nav-link active text-white"> Hola ${userFind.name}!</span>`
};
showUser()

const changePassword = async () => {
  const email = document.getElementById('emailRecovery').value;
  const password = document.getElementById('PasswordRecovery').value;
  const passwordNew = document.getElementById('newPassword').value;
  const passwordConfirm = document.getElementById('confirmPassword').value;

  const result = await fetch('http://localhost:3000/users');
  const users = await result.json();

  const user = users.find(usuario => usuario.email === email && usuario.password === password)

  const id = user.id;

  if(user){
    if(passwordNew === passwordConfirm){
      fetch(`http://localhost:3000/users/${id}`,{
      method:'PATCH',
      body: JSON.stringify({
        password: passwordNew
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      }
    })
    window.location.href = "../index.html"
    alert('Modificacion Contraseña Exitosa');
    }else{
      alert('Las Contraseñas no coinciden')
    }
    
  }else{
    alert('Email/usuario incorrectos')
  } 
};

const lostPassword = async () => {
  const email = document.getElementById('emailRecovery').value;
  const passwordNew = document.getElementById('newPassword').value;
  const passwordConfirm = document.getElementById('confirmPassword').value;

  const result = await fetch('http://localhost:3000/users');
  const users = await result.json();

  const user = users.find(usuario => usuario.email === email)
  const id = user.id;

  
  if(user){
    if(passwordNew === passwordConfirm){
      fetch(`http://localhost:3000/users/${id}`,{
      method:'PATCH',
      body: JSON.stringify({
        password: passwordNew
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      }
    })
    window.location.href = "../index.html"
    alert('Modificacion Contraseña Exitosa');
    }else{
      alert('Las Contraseñas no coinciden')
    }
    
  } else if(!user){
    alert("Los datos ingresados son incorrectos");
  }
};

const logOut = () => {
  localStorage.removeItem('role');
  localStorage.removeItem('id');
  window.location.href = '../pages/login.html'
};

const adminButton = async () => {
  let div = document.getElementById("adminButton"); 
  let role = localStorage.getItem ('role');

  if (role == 'admin') {
    div.innerHTML = `<a class="nav-link active text-white" href="../../pages/adminFilm.html">Ver tabla de contenido</a>
    `
  }
};
adminButton()

const checkLogIn = () => {
  let id = localStorage.getItem ('id');
  if (!id) {
    window.location.href = '../pages/login.html'
  }
};
checkLogIn()
