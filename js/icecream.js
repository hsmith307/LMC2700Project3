
var document = "index.html";
var mintIceCream = document.querySelector('#mint');
mintIceCream.addEventListener('click', function () {
    "use strict";
    if (mintIceCream.getAttribute('src') === "img/mintchoc.jpg") {
        mintIceCream.setAttribute('src', "img/strawberry.jpg");
    } else {
        mintIceCream.setAttribute('src', "img/mintchoc.jpg");
    }
});

var coffeeIceCream = document.querySelector("#coffee");
coffeeIceCream.addEventListener('click', function () {
    "use strict";
    if (coffeeIceCream.getAttribute('src') === "img/coffeecropped.png") {
        coffeeIceCream.setAttribute('src', "img/mintchoc.jpg");
    } else {
        coffeeIceCream.setAttribute('src', "img/coffeecropped.png");
    }
});

var supermanIceCream = document.querySelector("#superman");
supermanIceCream.addEventListener('click', function () {
    "use strict";
    if (supermanIceCream.getAttribute('src') === "img/superman.jpg") {
        supermanIceCream.setAttribute('src', "img/oreo.jpeg");
    } else {
        supermanIceCream.setAttribute('src', "img/superman.jpg");
    }
});

var donut = document.querySelector("#donut");
donut.addEventListener('click', function () {
    "use strict";
    if (donut.getAttribute('radius') === ".6") {
        donut.setAttribute('radius', ".8");
    } else {
        donut.setAttribute('radius', ".6");
    }
});
