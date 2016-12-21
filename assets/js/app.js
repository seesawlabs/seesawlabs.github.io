$(function() {

	// Get the form.
	var form = $('#cSectionForm');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});


$(document).ready(function (){


	$(".scroll").click(function (e) {

		e.preventDefault();
		ref= $(this).attr("href");
		if ($(window).width() < 425){
			scroll = parseInt( $(ref).offset().top) -75;
		}
		else {
			scroll = parseInt( $(ref).offset().top) -99;
		}
		$(this).css({overflow:'hidden'});

		$('html, body').animate({
			scrollTop: parseInt(scroll)
		}, 1000);
			$(this).css({overflow:'scroll'});
	});

});
