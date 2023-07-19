const jokes = document.querySelector(".jokes");
const btn = document.querySelector(".btn");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json() )
    .then(item => {
        jokes.textContent=`${item.joke}`;
    });
    
}
btn.addEventListener("click",getJoke);
getJoke();