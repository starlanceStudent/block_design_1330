// call
const menu_btn = document.querySelector("#mobile_menu_btn");
const main_menu = document.querySelector("#main_menu");


// listen event
menu_btn.addEventListener('click', function(event) {
	main_menu.classList.toggle('visible');
});