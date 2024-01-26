const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "Light Mode";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "Dark Mode";
	}
});