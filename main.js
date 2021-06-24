document.getElementById("name_input").addEventListener("input", function (e) {
	if (e.target.defaultValue === e.target.value) {
		e.target.classList.remove("red");
	} else {
		e.target.classList.add("red");
	}
});