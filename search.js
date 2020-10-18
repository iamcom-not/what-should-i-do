const searchForm = document.querySelector(".js-searchForm"),
searchInput = searchForm.querySelector("input"),
searchLink =searchForm.querySelector("a");


function handleSearch(e){
    e.preventDefault();
    console.log("here");
    const currentValue = searchInput.value;
    //~~~~함수
    window.open(`https://www.google.com/search?q=${currentValue}&oq=${currentValue}&aqs=chrome..69i57.2440j0j1&sourceid=chrome&ie=UTF-8`);
}
function init(){
    searchForm.addEventListener("submit", handleSearch);
}
init();