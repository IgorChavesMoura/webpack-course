import style from "./clearButton.scss";

const button = document.createElement('button');
button.innerHTML = "Clear";
button.classList.add(style['clear-button']);
button.onclick = function() {
    alert("Clear clicked");
}

document.body.appendChild(button);