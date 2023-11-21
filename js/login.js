const loginUser = async (event) => {
  event.preventDefault(); 
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const result = await fetch(' http://localhost:3000/users');
  const users = await result.json();
  const user = users.find(usuario => usuario.email == email)
  if(email.trim() === '' || password.trim() === ''){
    alert('Por favor, complete todos los campos')
    return
  }
  if(user === undefined){
    alert('El email ingresado no existe en nuestra base de datos')
    return
  }
 if(password !== user.password){
  alert('La constraseña ingresada no existe en nuestra base de datos')
  return
 }

localStorage.setItem('role', user.role);
localStorage.setItem("id", user.id);


if(user.role === 'admin'){
  alert('Ingreso Exitoso');
  window.location.href = '../pages/adminFilm.html';
}else{
  alert('Ingreso Exitoso');
  window.location.href = '../index.html';
}
}

document.getElementById('loginForm').addEventListener('submit', loginUser);