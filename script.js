const jokeText = document.querySelector("#joke_text");
const jokeBtn = document.querySelector("#joke_btn");

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                jokeText.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeText.innerHTML = "Woops! There was an error. No joke for you!"
            }
        } else {
            jokeText.innerHTML = "Request not sent";
        }
    }
    xhr.send();
    document.body.style.backgroundColor = getRandomColor();
};


jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded',getJoke());