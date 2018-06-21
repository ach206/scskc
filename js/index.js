    // Last Edited By: A. Camille Hall
    // Created By: A. Camille Hall
    // Date: 05.08.2018
    // Filename: index.js

		// shows or hides the drawer depending on the navIcon
		$(".fa-bars").click(function(event){
			$("#navLinks").attr("class", "showDrawer");
			$(".menuLinks").attr("class", "showMenuLinks");
			event.stopPropagation();
		});

		$("body").click(function(){
			$("#navLinks").removeClass("showDrawer");
			$(".showMenuLinks").attr("class", "menuLinks");

		});

// --------------function to loop through the images and hide them by default--------
var slideIndex = 0;
slideshow();

function slideshow() {
var i;
var slide = document.getElementsByClassName("slideImg");
var dial = document.getElementsByClassName("dial");
for(i = 0; i < slide.length; i++) {
	// hide slides one by one
	slide[i].style.display = "none";
	}

slideIndex++;
if (slideIndex > slide.length) {
slideIndex = 1
}

for( i = 0; i < dial.length; i++) {
	dial[i].className = dial[i].className.replace(" active", "");
	// temporairly disables active styling until loop activates it
}

    slide[slideIndex-1].style.display = "block";
    dial[slideIndex-1].className += " active";
    setTimeout(slideshow, 4000); /*Change image every 4 seconds*/
}// --------close slideshow function------

// changes the icon when the drawer opens
// $("#navIcon").on("click", function switchIcon(){
// 	$("#navIcon").toggleClass("fa-bars fa-times");
// });
