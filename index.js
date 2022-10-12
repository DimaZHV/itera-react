const button = document.getElementById("myButton");
const cancel = document.getElementById("cancel");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirm1 = document.getElementById("confirm");
const hideBlock = document.querySelector(".hide");
const forma = document.querySelector(".forma");
const myText = document.querySelector(".text");

function myClick(e) {
	email.value !== "" && pass.value !== ""
		? (e.preventDefault(),
		  (hideBlock.style.display = "flex"),
		  (document.getElementById(
				"someText"
		  ).innerHTML = `Please confirm account creation for ${email.value}`))
		: false;
}
button.addEventListener("click", myClick);

cancel.addEventListener("click", () => (hideBlock.style.display = "none"));
confirm1.addEventListener("click", () => {
	hideBlock.style.display = "none";
	forma.style.display = "none";
	myText.style.display = "flex";
	document.getElementById(
		"someText1"
	).innerHTML = `Hello, user with email: ${email.value}`;
});
