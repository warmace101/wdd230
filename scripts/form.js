
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// const psw1 = document.querySelector("password1")
// const psw2 = document.querySelector("password2")

// if (passwrodMatch() = true) {

// }
// else{
// 	alert("Passwords Don't Match")
// }


// function passwrodMatch(psw1, psw2){
// bool = false;
// 	if (psw1 != psw2) {
// 		bool = false;
// 	}
// 	else {
// 		bool=true
// 	}
// }


document.getElementById("form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form submission
	var password = document.getElementById("password1").value;
	var confirmPassword = document.getElementById("password2").value;
	
	if (password == confirmPassword){
		alert("Passwords do match")
		window.location.href=record.html;
		
	}

	if (password !== confirmPassword) {
	  alert("Passwords do not match.");
	  return;
	}

	if (!validatePassword(password)) {
	  alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
	  return;
	}
  });

  function validatePassword(password) {
	// Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	return regex.test(password);
  }