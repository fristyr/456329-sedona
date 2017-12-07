var link = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".modal-search");

popup.classList.add("modal-off");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-off");
});
