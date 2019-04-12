jquery(document).ready(function() {

   "use strict";
     $('#slider-carousel').caroufredsel({
         responsive:true,
		 width:'100%',
		 circular:true,
		 scroll:{
			 items:1,
			 duration:500,
			 pauseOnHover:true
			 
		 };
		 auto:true,
		 items:
		 {
			 visible:{
				 min:1,
				 max:1
		 },
		     height:"variable"
		 },
		 pagination:{
		     container:".slider-pager",
			 pageAnchorBuilder:false
         }
  });

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
});
