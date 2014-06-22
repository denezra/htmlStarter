//Jquery Instantie
jQuery(function($) {
	//Global variable
	var files = {
		extension	: '.html',
		pageFolder	: 'page/',
		path		: '/asset/html/'
	};
	//Window load
	$(window).load(function(){
		//Header div load
		$('section.headerSection > div').load(files.path + 'header' + files.extension);
		//Content div load
		$('section.contentSection > div').load(files.path + files.pageFolder + 'home' + files.extension);
		//Footer div load
		$('section.footerSection > div').load(files.path + 'footer' + files.extension);
	});

});