
const createUser = async (event) => {
  event.preventDefault(); 
     const name = document.getElementById("name").value;
     const lastname = document.getElementById("lastname").value;
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
     const confirmpassword = document.getElementById('confirmPassword').value;

  if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmpassword.trim() === '' ){
    alert('Por favor, complete todos los campos')
    return
  } 
  
  if(password !== confirmpassword){
     alert('Las constraseñas ingresadas no coinciden')
     return
  } 
  else{
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
        'Content-Type' : 'application/json; charset=UTF-8',
      }
    })
     alert('Usuario creado exitosamente')
     window.location.href = '../pages/login.html'
  }
}

document.getElementById('registerForm').addEventListener('submit', createUser);