
//ADD CONTENT BUTTON
const addContent = async () => {
  let title = document.getElementById('titleInput').value
  let category = document.getElementById('categoryInput').value
  let sinopsis = document.getElementById('sinopsisInput').value
  let type = document.getElementById('typeInput').value
  let time = document.getElementById('timeInput').value
  let year = document.getElementById('yearInput').value
  let image = document.getElementById('imageInput').value
  
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
      status: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  alert ('Contenido agregado con exito')
  loadTable ()
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
    <td><button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></button></td>
    <td><button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button></td>
    <td><button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg></button></td>
    `
    tableBody.insertBefore (tr, tableBody.children [0])
    console.log(film.id)
  })
};

//TABLE FUNCTIONS
const publish = async (film) => {
  console.log(film)
  let result = await fetch ('http://localhost:3000/films')
  let content = await result.json ()
  let idLine = content.find (para => para.id == film.id)
  let id = idLine.id
  
  await fetch(`http://localhost:3000/films/${id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      status: !film.status
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  alert ('Contenido publicado con exito')
};

window.onload = loadTable ();