
//ADD CONTENT BUTTON
const addContent = async () => {
  let title = document.getElementById('titleInput').value
  let category = document.getElementById('categoryInput').value
  let sinopsis = document.getElementById('sinopsisInput').value
  let type = document.getElementById('typeInput').value
  let time = document.getElementById('timeInput').value
  let year = document.getElementById('yearInput').value
  let image = document.getElementById('imageInput').value

  if (title == '', category == '', sinopsis == '', type == '', time == '',year == '',image == '') {
  return
  } else {
    await fetch('http://localhost:3000/films',{
      method: 'POST',
      body: JSON.stringify({
        title,
        category,
        sinopsis,
        type,
        time,
        year,
        image,
        status: false,
        spotLight: false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    alert ('Contenido agregado con éxito')
  }
};

//TABLE
const loadTable = async () => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  content.forEach (film =>{

    let tableBody = document.getElementById ('tbody')
    let tr = document.createElement ('tr')
  
    tr.innerHTML = `<th scope="row" id=${film.id}>${film.id}</th>
    <td>${film.title}</td>
    <td>${film.category}</td>
    <td>${film.sinopsis}</td>
    <td>${film.type}</td>
    <td>${film.time}</td>
    <td>${film.year}</td>
    <td><input type='checkbox' onclick="publish(this)" ${film.status ? 'checked' : ''} id=${film.id}></td>
    <td><button type="button" class="btn btn-link link-dark" onclick="deleteContent(this)" id=${film.id}><i class="bi bi-trash3-fill"></i></button></td>
    <td><button type="button" class="btn btn-link link-dark" onclick="editContent(this)" id=${film.id}><i class="bi bi-pencil-fill"></i></button>
    <td><button type="button" class="btn ${film.spotLight ? 'btn-warning' : 'btn-link link-dark'}" id=${film.id} onclick="spotLight(this)"><i class="bi bi-star-fill"></i></button></td>
    `
    tableBody.insertBefore (tr, tableBody.children [0])
  })
};

//TABLE FUNCTIONS
const publish = async (film) => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let object = content.find (para => para.id == film.id)

  await fetch (`http://localhost:3000/films/${object.id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      status: !object.status
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
};

const deleteContent = async (film) => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let idLine = content.find (para => para.id == film.id)
  let id = idLine.id
  
  await fetch (`http://localhost:3000/films/${id}`, {
    method: 'DELETE',
  });

};

const editContent = async (film) => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let idLine = content.find (para => para.id == film.id)
  let id = idLine.id

  let value = prompt ('Ingrese aquí el tipo de elemento que desea cambiar, siendo las opciones: titulo, categoria, sinopsis, tipo (si es serie o película), duracion, año, imagen')
  let change = prompt ('ingrese aqui el cambio que quiere realizar')
   switch (value) {
    case 'titulo':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          title: change
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'categoria':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          category: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'sinopsis':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          sinopsis: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'tipo':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          type: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
    break;    
    case 'duracion':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          time: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;    
    case 'año':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          year: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;
    case 'imagen':
      await fetch(`http://localhost:3000/films/${id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          image: change
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    break;

    default:
      alert ('ingrese correctamente el tipo de elemento que quiere modificar')
      break;
   }
};

const spotLight = async (film) => {
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let idLine = content.find (para => para.id == film.id)
  let id = idLine.id
  
  let findSpotLight = content.find (para => para.spotLight == true)
  console.log(findSpotLight)

  if (findSpotLight.spotLight == true) {
    await fetch(`http://localhost:3000/films/${findSpotLight.id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      spotLight: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
    await fetch(`http://localhost:3000/films/${id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        spotLight: !film.spotLight
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  } else {
    await fetch(`http://localhost:3000/films/${id}`,{
      method: 'PATCH',
      body: JSON.stringify({
        spotLight: true
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }) 
    alert ('uwu')   
  }
};

//ONLOAD FUNCTIONS EJECUTIONS
window.onload = loadTable ();