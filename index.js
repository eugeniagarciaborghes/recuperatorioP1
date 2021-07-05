window.onload = function (){

    var apiKey = 'cc55526ed6d9221ada36a41066b7c9ea'
    var imagen = 'https://image.tmdb.org/t/p/w500'
   
    
    var popularShows = document.querySelector(".tv-show");
    
   popularShows.innerHTML =''
    fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=cc55526ed6d9221ada36a41066b7c9ea") 
    .then(function(response){
       return response.json(); 
      })
   
    .then(function(data){
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];
   
            popularShows.innerHTML += `
            <article class="single-card-tv">
            <img src="${imagen + element.poster_path}" class="card-img-top"
                alt="...">
            <div class="cardBody">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.overview}</p>
                <a href="movie.html" id=${element.id}class="btn btn-secondary">Ver más</a>
            </div>
        </article>`
   
        }
   
       }) 
       
       
    .catch(function(error){
       console.log('El error fué: ' + error); })
   
    }