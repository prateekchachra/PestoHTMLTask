
//Form and Navigator references

const contactForm = document.getElementById('contactForm');
const navRef = document.getElementById('navigator');

//Getting the data

$.getJSON('data/albums.json', (data) => {
		let tableContainer = $("#table-container");

		let tableElement = $("<table>").attr("id", "albums-table");

		tableElement.append($("<thead>").append($("<tr>").append($("<th>").html("Name")).append($("<th>").html("Type")).append($("<th>").html("Release Year")).append($("<th>").html("Number Of songs")).append($("<th>").html("Poster")).append($("<th>").html("Spotify Link"))))

		let tableBody = $("<tbody>");

		for(var i = 0; i < data.length; i++){

			let albumTitle = data[i].title;
			let titleCell = $("<td>").html(albumTitle);
			let typeCell = $("<td>").html(data[i].type);
			let yearCell = $("<td>").html(data[i].year);
			let numberCell = $("<td>").html(data[i].numberOfSongs);

			let posterImageElement = $("<img>").attr("src", data[i].image).attr("alt", albumTitle + " Album Art").addClass("album-art-img");
			let posterFigureElement = $("<figure>").append(posterImageElement).append($("<figcaption>").html(albumTitle + " - Album Art"));
			let posterCell = $("<td>").append(posterFigureElement);

			let spotifyLinkElement = $("<a>").attr("href", data[i].link).attr("aria-label", albumTitle + " Spotify").attr("target", "_blank").html(albumTitle);
			let spotifyLinkCell = $("<td>").append(spotifyLinkElement);

			let tableRow = $("<tr>").append(titleCell).append(typeCell).append(yearCell).append(numberCell).append(posterCell).append(spotifyLinkCell);

			tableBody.append(tableRow);
		}
		tableElement.append(tableBody)

		tableContainer.html("");
		tableContainer.append(tableElement);
}).fail((jqXHR, textStatus, error) => console.log(textStatus))


$.getJSON('data/countries.json', (data) => {
	let countriesSelect = document.getElementById('country');
	data.map((item, index) => {
		countriesSelect.innerHTML += '<option value="' + item.value + '">' + item.label + '</option>';
	})



}).fail((jqXHR, textStatus, error) => console.log(error))




$.getJSON('data/wavesaboutsongs.json', (data) => {

	let headerElement = $("<h2>").html('About the songs');
	let mainAboutWaves = $("<main>").append(headerElement);

	for(var i = 0; i < data.length; i++){
	
		let youtubeIframeDiv = $("<div>").addClass("iframe-container").append($("<iframe>").attr("src", data[i].youtubeLink).attr("title", data[i].title).attr("frameborder", "0").attr("allow", "clipboard-write; encrypted-media; gyroscope; picture-in-picture").attr("allowfullscreen", null).addClass("youtube-iframe"));
		let articleElement = $("<article>").append($("<h4>").append(data[i].title)).append($("<p>").attr("role", "text").html(data[i].description)).append(youtubeIframeDiv);

		mainAboutWaves.append(articleElement)
	}

	let wavesAboutSection = $("#about-waves");
	wavesAboutSection.html = "";

	wavesAboutSection.append(mainAboutWaves);

}).fail((jqXHR, textStatus, error) => console.log(textStatus))


$.getJSON('data/wavesofparamnesia.json', (data) => {
	let mainWaves = renderAlbumDetails(data);
	let wavesSection = $("#waves");
	wavesSection.html = "";

	wavesSection.append(mainWaves)

}).fail((jqXHR, textStatus, error) => console.log(textStatus))


$.getJSON('data/regretsandgrievances.json', (data) => {
	let mainRegrets = renderAlbumDetails(data);
	let regretsSection = $("#regrets");
	regretsSection.html = "";

	regretsSection.append(mainRegrets)

}).fail((jqXHR, textStatus, error) => console.log('REGRETS', 'REGRETS'))


function renderAlbumDetails(data){
	let headerElement = $("<h2>").html(data.title);
	let artworkElement = data.artwork ? $("<img>").attr("src", data.artwork).attr("alt",data.title).addClass("artwork-img") : "";

	let detailsListHeader = $("<p>").addClass("list-header").html("What is in this album?")
	let detailsList = $("<ul>");

	for(var i = 0; i < data.inThisAlbum.length; i++){
		detailsList.append($("<li>").append($("<span>").html(data.inThisAlbum[i])))
	}

	let mustListenHeader = $("<p>").addClass("list-header").html("Must Listen Tracks from this Album")
	let mustListenList = $("<ul>");

	for(var i = 0; i < data.mustListen.length; i++){
		mustListenList.append($("<li>").append($("<span>").html(data.mustListen[i])));
	}

	let songsHeader = $("<p>").addClass("list-header").html("Songs in this album");
	let songsList = $("<ol>");

	for(var i = 0; i < data.songsInAlbum.length; i++){
		songsList.append($("<li>").append($("<span>").html(data.songsInAlbum[i])));
	}

	return $("<main>").append(headerElement).append(artworkElement).append(detailsListHeader).append(detailsList).append(mustListenHeader).append(mustListenList).append(songsHeader).append(songsList);
}


function onMobileNavClick(){
	$('#mob-links').toggleClass('active');
}

$('.mob-nav-link').on('click', function(e){
	onMobileNavClick();

})

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

