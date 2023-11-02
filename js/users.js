

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
  alert("Usuario creado");
}

const loginUser = async () => {
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const result = await fetch(' http://localhost:3000/users');
  const users = await result.json();

  const user = users.find(usuario => usuario.email === email)
  if(!user){
    alert("Los datos no coinciden");
  }
  if(user.password === password){
    //localStorage.setItem("role", user.role);
    //window.location.href = '../pages/admin.html';
    alert("Los datos coinciden e ingreso");
  }else{
    alert("Constraseña incorrecta");
  }
};




const changePassword = async () => {
  const email = document.getElementById('emailRecovery').value;
  const password = document.getElementById('PasswordRecovery').value;
  const passwordNew = document.getElementById('newPassword').value;
  const passwordConfirm = document.getElementById('confirmPassword').value;

  const result = await fetch('  http://localhost:3000/users');
  const users = await result.json();

  const user = users.find(usuario => usuario.email === email && usuario.password === password)

  const id = user.id;

  if(user){
    if(passwordNew === passwordConfirm){
      fetch(`   http://localhost:3000/users/${id}`,{
      method:'PATCH',
      body: JSON.stringify({
        password: passwordNew
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      }
    })
    alert('Cambiaste la Contraseña');
    }else{
      alert('las constraseñas no coinciden')
    }
    
  }else{
    alert('usuario no encontrado')
  }

  
}