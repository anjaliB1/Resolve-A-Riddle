const riddle = document.getElementById("riddle");
const answer = document.getElementById("answer");
const btn = document.getElementById("btn");
const url = "https://riddles-api.vercel.app/random";

function getRiddle() {
    fetch(url).then(Response=>Response.json().then(result=> {
        riddle.innerText = result.riddle;
        answer.innerText = result.answer;
    }));
}

window.addEventListener("load", getRiddle);
btn.addEventListener("click", getRiddle);