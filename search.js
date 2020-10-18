const searchForm = document.querySelector(".searchForm"), 
searchGoogle = document.querySelector(".js-searchGoogle"),
searchNaver = document.querySelector(".js-searchNaver"),
searchYoutube = document.querySelector(".js-searchYoutube"),
googleInput = searchGoogle.querySelector("input"),
naverInput = searchNaver.querySelector("input"),
youtubeInput = searchYoutube.querySelector("input"),
searchLink =searchForm.querySelector("a");


function handleSearch(e){
    e.preventDefault();
    const which = e.target.classList;
    if(which[0]==='js-searchGoogle'){
        const currentValue =googleInput.value;
        window.open(`https://www.google.com/search?q=${currentValue}&oq=${currentValue}&aqs=chrome..69i57.1030j0j1&sourceid=chrome&ie=UTF-8`);
        googleInput.value= "";
    }else if(which[0]==='js-searchNaver'){
        const currentValue = naverInput.value;
        window.open(`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${currentValue}`);
        naverInput.value= "";
    }else{
        const currentValue = youtubeInput.value;
        window.open(`https://www.youtube.com/results?search_query=${currentValue}`);
        youtubeInput.value= "";
    }}
        
        


function init(){
    searchGoogle.addEventListener("submit", handleSearch);
    searchNaver.addEventListener("submit", handleSearch);
    searchYoutube.addEventListener("submit", handleSearch);
}
init();