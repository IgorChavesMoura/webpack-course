import _ from "lodash";

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    const el = document.querySelector("#heading");
    el.innerHTML = "JS updated the code";

    const listItems = ["Apple", "Orange", "Banana"];
    const ul = document.querySelector("#list");

    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});

