
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const psw1 = document.querySelector("password1")
const psw2 = document.querySelector("password2")

if (psw1 === psw2) {
	alert("Passwords Match!")
}
else {
	alert("Passwords Don't Match")
}