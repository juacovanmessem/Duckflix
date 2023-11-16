function fetchMovies() {
  fetch('./database/db.json')
      .then(response => response.json())
      .then(data => {
          const movieList = document.getElementById('movie-list');

          data.films.forEach(movie => {
              const movieCard = document.createElement('div');
              movieCard.className = 'col-md-4';

              movieCard.innerHTML = `
                  <div class="card">
                      <img class="card-img-top" width="300" height="420" src="${movie.image}" alt="${movie.title}">
                      <div class="card-body">
                          <h5 class="card-title">${movie.title}</h5>
                          <p class="card-text">Duración: ${movie.time}</p>
                          <p class="card-text">Categoría: ${movie.category}</p>
                          <p class="card-text">Año: ${movie.year}</p>
                          <p class="card-text">Sinopsis: ${movie.sinopsis}</p>
                          <a class="btn btn-primary" href="../pages/aboutFilm.html?id=${movie.id}">Ver Detalles</a>
                      </div>
                  </div>
              `;

              movieList.appendChild(movieCard);
          });
      })
      .catch(error => console.error(error));
}



function fetchMovieDetails() {
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get('id');

  fetch('../database/db.json')
      .then(response => response.json())
      .then(data => {
          const movie = data.films.find(item => item.id == movieId);

          if (movie) {
              document.getElementById('movie-title').textContent = movie.title;
              document.getElementById('movie-duration').textContent = `Duración: ${movie.time}`;
              document.getElementById('movie-category').textContent = `Categoría: ${movie.category}`;
              document.getElementById('movie-year').textContent = `Año: ${movie.year}`;
              document.getElementById('movie-sinopsis').textContent = `Sinopsis: ${movie.sinopsis}`;

              const moviePoster = document.getElementById('movie-poster');
              moviePoster.src = movie.image;
              moviePoster.alt = movie.title;

              // Nueva lógica para abrir 'Error404.html' al hacer clic en la imagen
              moviePoster.addEventListener('click', function() {
                  window.location.href = '../pages/404.html';
              });
          } else {
              window.location.href = 'error.html';
          }
      })
      .catch(error => console.error(error));
}

