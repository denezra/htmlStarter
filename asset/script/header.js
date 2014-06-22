//Jquery Instantie
jQuery(function($) {
	var files = {
		extension	: '.html',
		pageFolder	: 'page/',
		path		: '/asset/html/'
	};

	var items 	= $('div.header > div.navbar > ul.nav > li'),
		content = $('section.contentSection > div.content');
		//Loop and assign the click event on each items
		items.click(function(e) {
			var itemTarget = e.currentTarget.textContent;
			content.load(files.path + files.pageFolder + itemTarget + files.extension);
		});
});