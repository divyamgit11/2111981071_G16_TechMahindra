// fetch api 
const url = "https://api.chucknorris.io/jokes/categories";

async function fetchAPI(url){
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch {
        return new Error("failed to fetch api");
    }
}

const data = fetchAPI(url);

// Set an eventListener to searchbox and search the data using filter

function debounce(search){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout()
    }
}

document.getElementById("searchbox").addEventListener((e)=>{
    debounce(e.data);
});
