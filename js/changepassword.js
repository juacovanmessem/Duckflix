

const changePassword = async (event) => {
  event.preventDefault(); 
  const email = document.getElementById('emailRecovery').value;
  const password = document.getElementById('passwordRecovery').value;
  const passwordNew = document.getElementById('newPassword').value; 
  const passwordConfirm = document.getElementById('confirmPassword').value;

  const result = await fetch('http://localhost:3000/users');
  const users = await result.json();
  const user = users.find(usuario => usuario.email === email && usuario.password === password);
  const id = user.id; 

  if(email.trim() === '' || password.trim() === '' || passwordNew.trim() === ''  || passwordConfirm.trim() === '' ){
    alert('Por favor, complete todos los campos')
    return
  }
  if(user === undefined){
    alert('El email ingresado no existe en nuestra base de datos')
    return
  }
  if(user.password !== password){
    alert('La constraseña ingresada no existe en nuestra base de datos')
    return
  }
  if(passwordNew !== passwordConfirm){
    alert('Las constraseñas ingresadas no coinciden')
    return
  } 
  else{
    fetch(`http://localhost:3000/users/${id}`,{
    method:'PATCH',
    body: JSON.stringify({
    password: passwordNew
  }),
   headers: {
  'Content-Type' : 'application/json; charset=UTF-8',
   }
      }) 
    window.location.href = "../pages/login.html"
    alert(' Contraseña Modificada Exitosamente'); }
}

document.getElementById('changepasswordForm').addEventListener('submit', changePassword);

