


//Form and Navigator references

const contactForm = document.getElementById('contactForm');
const navRef = document.getElementById('navigator');

//Getting the data


$.getJSON('data/albums.json', (data) => console.log(data)).fail((jqXHR, textStatus, error) => console.log(textStatus))

// const wavesAboutSongsData = require('data/wavesaboutsongs.json');
// const countries = require('data/countries.json');
// const wavesAlbumData = require('data/wavesofparamnesia.json');
// const regretsAlbumData = require('data/regretsandgrievances.json');




function onMobileNavClick(){
	let mobileLinksElement = document.getElementById("mob-links");
	  if (mobileLinksElement.style.display === "block") {
	    mobileLinksElement.style.display = "none";
	  } else {
	    mobileLinksElement.style.display = "block";
	  }


}


let contactFormData = localStorage.getItem('contactFormData');

if (contactFormData && contactFormData !== "" && contactFormData !== "{}"){
	contactForm.innerHTML = '<p style="padding: 48px 48px;">Your details have been successfully submitted! We will get back at you shortly</p>'
}

contactForm.addEventListener('submit', (event) => {

	event.preventDefault();
	let formData = new FormData(contactForm)
	let formObj = {}
	
		for (let [key, value] of formData.entries()) { 
		  formObj[key] = value;
		}

		localStorage.setItem('contactFormData', JSON.stringify(formObj));

		const {name, country} = formObj;

	document.cookie=`name=${name}`;
	document.cookie=`country=${country}`;
	alert('Form has been submitted successfully! Thank you')
});


var prevScrollPos = window.pageYOffset;

function fixNavBar (){
	let currentScrollPos = window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		navRef.style.top = "0";
  } else {
    navRef.style.top = "-100px";
  }
 prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', fixNavBar)

