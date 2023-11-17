

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
  /*userInfo();
  descripcionusuario();*/
  window.location.href = '../../index.html';
  alert("Usuario creado");
}


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
    localStorage.setItem("role", user.role);
    window.location.href = '../pages/adminFilm.html';

    alert("Ingreso Exitoso");
    window.location.href = '../../index.html';
  }else{
    alert("Constraseña incorrecta");
  }
};

function obtenerNombreYsaludar() {

  var nombre = document.getElementById("name").value; 
}


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
}

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
}

const logOut = () => {
  localStorage.removeItem('role');
  window.location.href = '../pages/login.html'
}


/*
const userInfo = async () => {
  const id = localStorage.getItem("name")
  const result = await fetch(`http://localhost:3000/users/${id}`);
  const info = await result.json();
  return info ;
}


const descripcionusuario = async () => {
  const usuario = await userInfo();
  const text = document.getElementById("nombreusuario");
  const nombreusuario = (`
  <p>Hola ${usuario.name}!</p>
  `)
  text.innerHTML = nombreusuario;
}

 descripcionusuario();
 userInfo(); */