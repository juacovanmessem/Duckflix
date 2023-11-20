const showTable=async ()=> {


  let result = await fetch ('http://localhost:3000/users')
  let content = await result.json ()
  let tbody = document.getElementById("cuerpoTablaUsuarios")
  let tr = document.createElement ('tr')
  content.forEach (user =>{
    tr.innerHTML = `<th scope="row" id=${user.id}>${user.id}</th>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.role}</td>
    <td><button type="button" class="btn btn-link link-dark" onclick="deleteUser(this)" id=${user.id}><i class="bi bi-trash3-fill"></i></button><button type="button" class="btn btn-link link-dark" onclick="edit(this)" id=${user.id}><i class="bi bi-pencil-fill"></i></td>`
    tbody.insertBefore (tr, tbody.children [0])
    console.log(user.id)
  })
}

const deleteUser= async (user) => { 
  let result = await fetch ('http://localhost:3000/users')
  let content = await result.json ()
  let idLine = content.find (para => para.id == user.id)
  let id = idLine.id
    
  await fetch (`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
  });
}

const editRoleUser = async (user) => {
  let result = await fetch ('http://localhost:3000/users')
  let content = await result.json ()
  let object = content.find (para => para.id == user.id)

  if (object.role == admin) {
    await fetch (`http://localhost:3000/users/${object.id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      role:"client"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  } else{
    await fetch (`http://localhost:3000/users/${object.id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        role:"admin"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }
  alert("Rol modificado con exito")
};