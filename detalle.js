window.onload = function (){

    console.log('hola')

    var apiKey = 'cc55526ed6d9221ada36a41066b7c9ea'
    var imagen = 'https://image.tmdb.org/t/p/w500'

    var queryString = location.search;
    var queryStringObj = new URLSearchParams(queryString);
    queryStringObj = queryStringObj.get('Detalle');
    console.log(queryStringObjDetalle)
     
    
    var verMas = document.querySelector(".alert");

    verMas.innerHTML =''
    fetch(`https://api.themoviedb.org/3/tv/${querySrtingObj}?api_key=cc55526ed6d9221ada36a41066b7c9ea`) 
    .then(function(response){
       return response.json(); 
      })
   
    .then(function(data){
        console.log(data);
        for (let i = 0; i < data.results.length; i++) {
            const element = data.results[i];

            verMas.innerHTML += `

         <h2 class="alert alert-primary">${element.name}</h2>
            <section class="row">
            <section class="col-md-6 info">
                <h3>Descripción </h3>
                <p class="description">${element.overwiew}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> </p>
                <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> </p>
                <p class="mt-0 seasons"><strong>Temporadas:</strong> </p>
            </section>
            <img class="col-md-6" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/mzQf0QAs4jz0fDMrzFlZxQvC9KT.jpg" alt="">
            </section>
            
        `}
   
       }) 
       
       
    .catch(function(error){
       console.log('El error fué: ' + error); })
   
}