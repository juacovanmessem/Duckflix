function enviarMail() {
  let usuario = document.getElementById("usuario").value
  let mail = document.getElementById("mail").value
  let asunto = document.getElementById("asunto").value
  let mensaje = document.getElementById("texArea").value
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
