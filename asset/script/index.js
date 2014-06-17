//Jquery Instantie
jQuery(function($) {
	//Global variable
	var extension = '.html';
	var path      = '/asset/html/';
	//Window load
	$(window).load(function(){
		//Header div load
		$('section.headerSection>div').load(path + 'header' + extension);
	});

});