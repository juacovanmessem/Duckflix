function mailEnviar() {
  let mail = document.getElementById("mail").value
 
  console.log(mail);
  if ( '' === mail) {
    alert('Complete el formulario')
  } else {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "duckflix@gmail.com",// La cuenta dada de alta
    Password : "07AB8BB542CE4379944C2E12AA3492DFB4EA",
    To : mail , //Mail a donde va dirigido 
    From : "duckflix@gmail.com",//De donde se envia
    Subject : "Gracias por contactarnos!",
    Body : `Formulario recibido desde la página de contacto
    Nombre de usuario = ${ usuario}, Correo electronico = ${ mail}, Asunto = ${ asunto}, Mensaje = ${mensaje}`
    })
    alert('Formulario enviado con exito');  
    window.location.href = '../pages/login.html';
  }}