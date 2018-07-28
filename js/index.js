    // Last Edited By: A. Camille Hall
    // Created By: A. Camille Hall
    // Date: 05.08.2018
    // Filename: index.js

		// shows or hides the drawer depending on the navIcon
		(function(){

		drawerIcon = document.querySelector('#navIcon');
		showDrawer = document.querySelector('#navLinks');
		showLinks = document.querySelectorAll('a.menuLinks');
		clicks = 0;
		function open() {
		drawerIcon.addEventListener('click', function(e){
			clicks += 1;
			if(clicks = 1){
				showDrawer.classList.toggle('showDrawer');
				drawerIcon.classList.toggle('fa-bars');
				drawerIcon.classList.toggle('fa-times');

			showLinks.forEach(function(link){
				link.classList.toggle('showMenuLinks');
			});
			} else {
				showDrawer.classList.remove('showDrawer');
				
			showLinks.forEach(function(link){
				link.classList.remove('showMenuLinks');
			});
			}
			clicks = 0;
		});
		}
		open();

// --------------function to loop through the 
//simages and hide them by default--------
let slideIndex = 0;
let i;
let slides = document.querySelectorAll(".slideImg");
let dials = document.getElementsByClassName("dial");
let forward = document.querySelector('.next');
let back = document.querySelector('.prev');

function slideshow() {	
	// hides active styling until it's later added back
for( i = 0; i < dials.length; i++) {
	dials[i].className = dials[i].className.replace(" active", "");
	slides[i].style.display = "none";
}
//increases by 1
slideIndex++;

//
if (slideIndex > slides.length) {
slideIndex = 1;
}

    slides[slideIndex-1].style.display = "block";
    dials[slideIndex-1].className += " active";


const transition = setTimeout(slideshow, 4000); /*Change image every 4 seconds*/
}// --------close slideshow function------
slideshow();

})();


