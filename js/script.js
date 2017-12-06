var link = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".modal-search");
var form = popup.querySelector(".search-form-content");

var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adultsNumb = popup.querySelector("[name=adults-numb]");
var kidsNumb = popup.querySelector("[name=kids-numb]");

var adultsMinus = popup.querySelector(".search-minus.adults-minus");
var adultsPlus = popup.querySelector(".search-plus.adults-plus");
var kidsMinus = popup.querySelector(".search-minus.kids-minus");
var kidsPlus = popup.querySelector(".search-plus.kids-plus");

if (!popup.classList.contains("modal-hide") || !popup.classList.contains("modal-open")) {
	popup.classList.add("modal-hide");
	arrivalDate.required = false;
	leavingDate.required = false;
	adultsCount.required = false;
	childCount.required = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (popup.classList.contains("modal-hide")) {
		popup.classList.remove("modal-hide");
		popup.classList.add("modal-open");
	} else {
		popup.classList.remove("modal-open");
		popup.classList.add("modal-hide");
	}
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!dateIn.value || !dateOut.value || !adultsNumb.value || !kidsNumb.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		if (!dateIn.value) {
			dateIn.focus();
		} else if (!dateOut.value) {
			dateOut.focus();
		} else if (!adultsNumb.value) {
			adultsNumb.focus();
		} else if (!kidsNumb.value.value) {
			kidsNumb.focus();
		}
	} else {
		localStorage.setItem("adultsNumb", adultsNumb.value);
		localStorage.setItem("kidsNumb", kidsNumb.value);
	}
});

adultsMenus.addEventListener("click", function(evt) {
	if (!adultsNumb.value) {
		adultsNumb.value = 0;
	} else if (adultsNumb.value > 0) {
		adultsNumb.value = parseInt(adultsNumb.value) - 1;
	}
});

adultsPlus.addEventListener("click", function(evt) {
	if (!adultsNumb.value) {
		adultsNumb.value = 0;
		adultsNumb.value = parseInt(adultsNumb.value) + 1;
	} else {
		adultsCount.value = parseInt(adultsNumb.value) + 1;
	}
});

kidsMinus.addEventListener("click", function(evt) {
	if (!kidsNumb.value) {
		kidsNumb.value = 0;
	} else if (kidsNumb.value > 0) {
		kidsNumb.value = parseInt(kidsNumb.value) - 1;
	}
});

kidsPlus.addEventListener("click", function(evt) {
	if (!kidsNumb.value) {
		kidsNumb.value = 0;
		kidsNumb.value = parseInt(kidsNumb.value) + 1;
	} else {
		kidsNumb.value = parseInt(kidsNumb.value) + 1;
	}
});
