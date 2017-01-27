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

		$('html, body').animate({
			scrollTop: parseInt(scroll)
		}, 1000);
			$(this).css({overflow:'scroll'});
	});

	var screenSize = $( window ).width();
	if(screenSize < 767){
		$("#buttons").css({width: screenSize + 'px'});
		screenSize = screenSize * 3;
		$("#rowSolutions").css({width: screenSize + 'px'});

	}

	$('#messageSend').hide();

});



function moveImgRight(){
	var screenSize = $( window ).width();
	var leftPos = $('#solutions').scrollLeft();
	console.log(leftPos);
  if((leftPos + screenSize)  <= (screenSize*3)){
		$('#solutions').animate({
					scrollLeft: leftPos + screenSize
			}, 800);
	}

}

function moveImgLeft(){
	var screenSize = $( window ).width();
	var leftPos = $('#solutions').scrollLeft();
  console.log(leftPos);
	if(leftPos >= 0){
		$('#solutions').animate({
					scrollLeft: leftPos - screenSize
			}, 800);
	}
}
