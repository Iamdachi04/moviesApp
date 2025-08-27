const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ed10cc0b0082ae1de993727d8619446d'


const image_path = "https://image.tmdb.org/t/p/w1280";


const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=ed10cc0b0082ae1de993727d8619446d&query=="'

const form = document.getElementById('form');
const search =document.getElementById('search');

async function getMovies(url){
    const response =await fetch(url);
    console.log(response)
    const data = await response.json();
    console.log(data);
    console.log(data.results);
}
getMovies(API_URL);

form.addEventListener('submit',(e)=>{
    e.preventDefault();


    const searchTerm = search.value;
    if(searchTerm && searchTerm!==''){
          getMovies(search_url+searchTerm);
          search.value=''
    }else{
        window.location.reload();
    }
})