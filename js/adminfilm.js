
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
}
