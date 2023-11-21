const logOut = () => {
  localStorage.removeItem('role');
  localStorage.removeItem('id');
  window.location.href = '../pages/login.html';
}

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

function enviarMail() {
  let usuario = document.getElementById("usuario").value
  let mail = document.getElementById("mail").value
  let asunto = document.getElementById("asunto").value
  let mensaje = document.getElementById("textArea").value
  console.log(mail);
  if ('' === usuario, '' === mail, '' === asunto, '' === mensaje) {
    alert('Complete el formulario')
  } else {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "maxikarsvnie@gmail.com",// La cuenta dada de alta
    Password : "1B15125DCB5D69BA34B87F5233F50A6AB9CF",
    To : 'duckflix4@gmail.com',//Mail a donde va dirigido 
    From : "maxikarsvnie@gmail.com",//De donde se envia
    Subject : "Gracias por contactarnos!",
    Body : `Formulario recibido desde la página de contacto
    Nombre de usuario = ${ usuario}, Correo electronico = ${ mail}, Asunto = ${ asunto}, Mensaje = ${mensaje}`
    })
    alert('Formulario enviado con exito');  
  }
 }
