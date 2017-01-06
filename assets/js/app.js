window.onload = function() {
	setTimeout(function() {
		new Image().src = '/assets/images/newNavLogo.png';
		new Image().src = '/assets/images/hero.jpg';
		new Image().src = '/assets/images/mobile/hero.jpg';
		new Image().src = '/assets/images/casestudyLinkNYC1-80.jpg';
		new Image().src = '/assets/images/casestudyKountable1-80.jpg';
		new Image().src = '/assets/images/casestudyLinkNYC2-80.jpg';
		new Image().src = '/assets/images/casestudyKountable2-80.jpg';
		new Image().src = '/assets/images/casestudyLinkNYC1-80.jpg';
		new Image().src = '/assets/images/bubbles.png';
		new Image().src = '/assets/images/sslHambuger.svg';
		new Image().src = '/assets/images/clientCurlmart.png';

		new Image().src = '/assets/images/clientSbdigital.png';
		new Image().src = '/assets/images/clientFlywheel.png';
		new Image().src = '/assets/images/iconsTechAssesmentsStrategy.png';
		new Image().src = '/assets/images/iconsCustomSoftwareDev.png';
		new Image().src = '/assets/images/iconsRapidPrototyping.png';
		new Image().src = '/assets/images/iconsCustomCloudArch.png';
		new Image().src = '/assets/images/iconsMobileSoftware.png';
		new Image().src = '/assets/images/iconsEcommerceSolutions.png';
		new Image().src = '/assets/images/ourProcess.png';
		new Image().src = '/assets/images/jeff_headshot.jpg';
		new Image().src = '/assets/images/ivan_headshot.jpg';
		new Image().src = '/assets/images/matthew_headshot.jpg';
		new Image().src = '/assets/images/teamJose160.jpg';

	}, 1000);
}

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
			console.log('done');
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			//$(formMessages).text(response);
			$('#formFields').hide();
			$('#messageSend').show();
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
			$('#subject').val('');
			$('#phone').val('');


		})
		.fail(function(data) {
			console.log('fail');
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
		$("a").removeClass('currentLink');
		e.preventDefault();
		ref= $(this).attr("href");
		if ($(window).width() < 425){
			scroll = parseInt( $(ref).offset().top) -75;
		}
		else {
			scroll = parseInt( $(ref).offset().top) -99;
		}
		$(this).css({overflow:'hidden'});
		$(this).addClass('currentLink');
		console.log('this: ', $(this));
		$('html, body').animate({
			scrollTop: parseInt(scroll)
		}, 1000);
			$(this).css({overflow:'scroll'});
	});

});
