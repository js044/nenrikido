window.addEventListener('load', function() {
	grid.refreshItems().layout()
// Buggy on Mozilla
grid.layout(function (items, hasLayoutChanged) {});
});

var grid = new Muuri('.grid', {
	dragEnabled: true,
	dragHandle: '.cardsHeader',
	showDuration: 600,
	showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	visibleStyles: {
		opacity: '1',
		transform: 'scale(1)'
	},
	hiddenStyles: {
		opacity: '0',
		transform: 'scale(0.5)'
	},
	layout: {
		fillGaps: true,
	}
});


//=== sort button setting
$('.sort-btn li').on('click', function() { //After clicking the sort button
	$(".sort-btn .active").removeClass("active"); //Remove all active classes assigned to sort buttons
	var className = $(this).attr("class"); // Get class name
	className = className.split(' '); //Split the class name of 「sortXX active」 into an array
	$("." + className[0]).addClass("active"); //Give the active class to the button with the same class name given to the sort button and the class name of the list in the gallery
	if (className[0] == "sort00") { //If the class name is a button with sort00 (all),
		grid.filter('*'); // show all elements
	} else { // else
		grid.filter("." + className[0]); //run the filter
	}
});