
class Fichetechnique {
	constructor(data) {
		this.name = data.name;
        this.image = data.image ;
        this.criteres = data.criteres ;
        this.description = data.description ;
}
createhtml() {
	return `
	<div class="bground">
        <div class="content">
          <span class="close"></span>
          <div class="modal-body">
		  	<img src="" alt="">
		  	<h2>Critères</h2>
		  	<span>${this.criteres}</span>
			<h2>Description</h2>
			<span>${this.description}
          </div>
        </div>     
    </div>
	`
	}
}









/*
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".card");
const submitBtn = document.getElementById("submit-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementsByName('reserve');
const confirmationMsg = document.getElementById("confirmation");
/*const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const checkbox = document.getElementById("checkbox1");
const confirm = document.getElementById("confirm-modal");
const closeConfirmMsg = document.querySelector(".closeConfirmationMsg");
const btnConfirmation = document.getElementById("close-btn");
const content = document.querySelector(".content");

	//	EVENTS

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event 

modalClose.addEventListener("click", closeModal);

	//	Display modal

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form when click on cross

function closeModal() {
  modalbg.style.display = "none";
}

// close confirmation msg when click on cross

function closeConfirmationMsg() {
	modalbg.style.display = "none";
}

closeConfirmMsg.addEventListener("click", closeConfirmationMsg);
btnConfirmation.addEventListener("click",closeConfirmationMsg);

// error messages

const errorMessages = {
  	lastError: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstError: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	mailError: "Veuillez entrer une adresse email valide.",
	birthdateError: "Veuillez entrer une date de naissance valide.",
	nbTournamentError: "Veuillez entrer un nombre valide.",
	locationError: "Veuillez choisir une ville.",
	checkboxError: "Veuillez accepter les conditions d'utilisations.",
};

// Regex 

const Regex = {
	 NoNbRegex : /^[0-9]/,
	 mailRegex : /^\S+@\S+\.\S+$/,
	 //birthdateRegex : /^([0-9])/,
	 nbRegex : /^[0-9]+$/,
};

// Show the confirmation message

function isValid() {
	content.style.display = "none";
	confirmationMsg.style.display = "flex";
	if (confirmationMsg.style.display = "flex") {
		modalbg.style.backgroundColor = "unset";
	}
}

// remove error messages

function removeErrors() {
	let invalidInput = document.querySelectorAll('.formData[data-error-visible="true"]');
	for (input of invalidInput) {
		input.setAttribute('data-error-visible', false);
		input.setAttribute('data-error', "");
	}
	
}

// Show error messages 

function isNotvalid(input,message) {
	let target = input.parentNode;
	target.setAttribute('data-error-visible', true);
	target.setAttribute('data-error', message);
} 


// input's validation conditions

function firstValidation() {
	let inputValue = firstName.value.trim();
	if (inputValue !== null && inputValue.length >= 2 && inputValue !== Regex.NoNbRegex ) {
    	return true;
  }
	else {
		return false
  }
}

function lastValidation() {
	let inputValue = lastName.value.trim();
	if (inputValue !== null && inputValue.length >= 2 && inputValue !== Regex.NoNbRegex){
		return true;
	} 
	else {
		return false ;
	} 
}

function emailValidation() {
	let inputValue = mail.value.trim();
	if (Regex.mailRegex.test(inputValue)) {
		return true;
	}
	else {
		return false ;
	}
}

function birthdateValidation() {
	let birthdateValue = new Date(birthdate.value);
	let today = new Date();
	if (birthdateValue.toString() !== "Invalid Date") {
		if (
			birthdateValue.getDate() >= today.getDate() &&
			birthdateValue.getMonth() == today.getMonth() &&
			birthdateValue.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function nbTournamentValidation() {
	if (Regex.nbRegex.test(nbTournament.value) > 0) {
		return true;
	} 
	else {
		return false ;
	}
}

function locationValidation() {
	const locationList = document.querySelectorAll("input[type=radio]:checked"); // On récupère tout les boutons radio cochés
	if (locationList.length > 0){
		return true ;
	}
	else {
		return false ;
	}
	
}

function checkboxValidation() {
  	return checkbox.checked
}

// validation event

submitBtn.addEventListener("click",validation);

// Validation

 function validation(event) {	
	event.preventDefault();
	let isValidInput = true ;
	removeErrors();
	if (!firstValidation()) {
		isValidInput = false
		isNotvalid(firstName, errorMessages.firstError);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isNotvalid(lastName, errorMessages.lastError);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isNotvalid(mail, errorMessages.mailError);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isNotvalid(birthdate, errorMessages.birthdateError);
	}
	if (!nbTournamentValidation()) {
		isValidInput = false;
		isNotvalid(nbTournament, errorMessages.nbTournamentError);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isNotvalid(location1, errorMessages.locationError);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isNotvalid(checkbox, errorMessages.checkboxError);
	}
	if (isValidInput) {
		isValid();
	}
}

*/
