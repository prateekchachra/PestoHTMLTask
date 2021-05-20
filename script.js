




const form = document.querySelector('form');


	let contactFormData = localStorage.getItem('contactFormData');

	if (contactFormData && contactFormData !== "" && contactFormData !== "{}"){
		form.innerHTML = 'Your details have been successfully submitted! We will get back at you shortly'
	}


const nav = document.querySelector('nav');


var prevScrollPos = window.pageYOffset;
function fixNavBar (){
	var currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		nav.style.top = "0";
  } else {
    nav.style.top = "-100px";
  }
 prevScrollPos = currentScrollPos;
}


window.addEventListener('scroll', fixNavBar)

form.addEventListener('submit', (event) => {

	event.preventDefault();
	var formData = new FormData(document.querySelector('form'))
	let formObj = {}
	
		for (var [key, value] of formData.entries()) { 
		  formObj[key] = value;
		}

		localStorage.setItem('contactFormData', JSON.stringify(formObj));

		const {name, country} = formObj;

	document.cookie=`name=${name}`;
	document.cookie=`country=${country}`;
	alert('Form has been submitted successfully! Thank you')
});

