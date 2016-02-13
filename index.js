//TABS

$(document).ready(function() {

	$(".tab_content").hide();
	$(".tab_content:first").show();
	$("ul.tabs li").on('click', function() {
		if ($(this).hasClass('active')) {
			return;
		}
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
	});

	//POP-UP

	$('.youtube-popup').magnificPopup({
		items: {
			src: 'http://www.youtube.com/watch?v=klModGpSKtc'
		},
		type: 'iframe'
	});

 	//USA States
	
	$('#country').on('change', function() {
		if ($('#usa').is(':selected')) {
			$('#state-list').show()
		} else {
			$('#state-list').hide()
		}
	});

});
