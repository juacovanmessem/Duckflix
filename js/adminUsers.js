function mostrarUsuarios() {
  const usuarios = [
    { id: 1, nombre: 'Usuario1', email: 'usuario1@example.com', rol: 'Admin' },
    { id: 2, nombre: 'Usuario2', email: 'usuario2@example.com', rol: 'Usuario' },
    { id: 3, nombre: 'Usuario3', email: 'usuario3@example.com', rol: 'Usuario' }
    // Puedes agregar más usuarios según sea necesario
  ];

  const cuerpoTablaUsuarios = document.getElementById('cuerpoTablaUsuarios');

  // Limpiar la tabla antes de mostrar nuevos usuarios
  cuerpoTablaUsuarios.innerHTML = '';

  // Mostrar cada usuario en la tabla
  usuarios.forEach(usuario => {
    const fila = `
      <tr>
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        <td>${usuario.rol}</td>
        <td>
          <button class="btn btn-light" onclick="editarUsuario(${usuario.id})"><i class="bi bi-pencil-fill"></i></button>
          <button class="btn btn-light" onclick="eliminarUsuario(${usuario.id})"><i class="bi bi-trash3-fill"></i></button>
        </td>
      </tr>
    `;
    cuerpoTablaUsuarios.innerHTML += fila;
  });
}

function editarUsuario(id) {
  // Supongamos que tienes una función para obtener los datos del usuario desde tu backend
  obtenerDatosUsuario(id)
    .then(usuario => {
      if (usuario) {
        // Cargar los datos del usuario en los campos del modal de edición
        document.getElementById('editNombre').value = usuario.nombre;
        document.getElementById('editEmail').value = usuario.email;
        document.getElementById('editRol').value = usuario.rol;

        // Mostrar el modal de edición
        const modalEditarUsuario = new bootstrap.Modal(document.getElementById('modalEditarUsuario'));
        modalEditarUsuario.show();
      } else {
        alert('Usuario no encontrado'); // Manejo de caso en que el usuario no se encuentre
      }
    })
    .catch(error => {
      console.error('Error al obtener los datos del usuario', error);
      alert('Error al obtener los datos del usuario');
    });
}

// Función para obtener los datos del usuario desde el backend
function obtenerDatosUsuario(id) {
  // Esta es una simulación de una solicitud asíncrona
  return new Promise((resolve, reject) => {
    // Supongamos que obtienes los datos del usuario a través de una API o una función asíncrona
    // Aquí puedes simular la obtención de los datos del usuario, como una solicitud fetch a tu servidor
    setTimeout(() => {
      const usuarios = [
        { id: 1, nombre: 'Usuario1', email: 'usuario1@example.com', rol: 'Admin' },
        { id: 2, nombre: 'Usuario2', email: 'usuario2@example.com', rol: 'Usuario' },
        { id: 3, nombre: 'Usuario3', email: 'usuario3@example.com', rol: 'Usuario' }
        // ... más usuarios
      ];

      const usuarioEncontrado = usuarios.find(usuario => usuario.id === id);
      resolve(usuarioEncontrado); // Devolver el usuario encontrado
    }, 1000); // Simulando una solicitud asíncrona con un retardo de 1 segundo (simulación de red)
  });
}

function eliminarUsuario(id) {
// Mostrar el modal de confirmación de eliminación
  const modalEliminarUsuario = new bootstrap.Modal(document.getElementById('confirmarEliminarUsuario'));
  modalEliminarUsuario.show();

// Guardar el ID del usuario a eliminar en un atributo data- del botón de confirmación
  const botonConfirmarEliminar = document.querySelector('#confirmarEliminarUsuario .btn-danger');
  botonConfirmarEliminar.dataset.userId = id;
}

function eliminarUsuarioConfirmado() {
// Obtener el ID del usuario a eliminar desde el botón de confirmación
  const botonConfirmarEliminar = document.querySelector('#confirmarEliminarUsuario .btn-danger');
  const userId = botonConfirmarEliminar.dataset.userId;
  const modalEliminarUsuario = new bootstrap.Modal(document.getElementById('confirmarEliminarUsuario'));
  modalEliminarUsuario.hide();

// Ejemplo de acción a realizar después de la eliminación
  alert(`Usuario con ID ${userId} eliminado`);
}