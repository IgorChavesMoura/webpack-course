import _ from "lodash";

import style from "./index.css";

import "./clearButton";

import logo from './assets/webpack-logo.png';
import "./assets/fonts/Rubik-Regular.ttf";

const btn = document.querySelector("#btn");
const img = document.querySelector("#logo");

btn.addEventListener("click", function () {
    const el = document.querySelector("#heading");
    el.innerHTML = "JS updated the code";
    el.id = style.heading;

    const listItems = ["Apple", "Orange", "Banana"];
    const ul = document.querySelector("#list");

    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});


img.src = logo;
