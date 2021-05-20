function submitContactForm(event){
	//Cookie storage

	event.preventDefault();
	const data = new FormData(event.target);
	console.log(data);

	alert('Details submitted successfully!')


}