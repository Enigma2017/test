"use strict";

let $searchForm = $('#search-form');

$searchForm.on('submit', function(event){
	event.preventDefault();
	let query = $(this).find('[name="srch-term"]').val().replace(/\n/, '+');
	console.log(query);

	getBooks(query);
});

function getBooks(query){
	let server = 'https://www.googleapis.com/books/v1/volumes';

	$.ajax({
		url: server,
		method: "GET",
		data: `q=${query}`
	}).done(function(response){
		console.log(response);
	}).fail(function(error){
		console.log(error);
	})
};