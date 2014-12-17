var work = {

    "jobs": [
	     {
            "employer": "Freelance",
            "title": "Web Developer",
            "dates": "Jan 2012- Present",
            "city": "Washington, DC",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ."
        } ,  {
            "employer": "USAID Child Health Integrated Program (MCHIP)",
            "title": "Communication & Social Media Assistant",
            "dates": "Jan 2010- November 2011",
			 "city": "Atlanta, GA",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ."
        } ,  {
            "employer": "Administrative Assistant",
            "title": "Communication and PR Assistant",
            "dates": "Feb 2008 - Dic 2009",
			 "city": "Miami, Fl",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ."
        }
    ]
};


work.showJobsMap = function(work_obj) {   
  
    // Creating a variable that will hold the InfoWindow object
	var geocoder;  
    // Creating a LatLngBounds object
	var bounds = new google.maps.LatLngBounds();
	var map;
	var marker;
	 // to have only one InfoWindow open at a time, we need to declare a global variable that will hold the InfoWindow object. This waym you can reuse it over and over again. 
	var infowindow;
  	var cities = [];  // array to hold work location data
	


			 
    function init() {
		// Creating an object literal containing the properties  we want to pass to the map --  https://developers.google.com/maps/documentation/javascript/controls
		var options = {  
		     zoom: 6,  
		     center: new google.maps.LatLng(37.09, -95.71) , // usa coordinates		
		     mapTypeId: google.maps.MapTypeId.ROADMAP  ,
			 disableDefaultUI: true ,
			 scrollwheel:false ,
			 //draggable:false,
			// panControl: true,
			 panControlOptions: {
				position: google.maps.ControlPosition.TOP_RIGHT			
			} ,
			zoomControl: true,
			 zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
				,position: google.maps.ControlPosition.TOP_LEFT
			} ,
			mapTypeControl: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_CENTER
			}
		};     
		 // Creating the map  
		 map = new google.maps.Map(document.getElementById('map'), options);

	 }

    //  load the map when the document is loaded
	google.maps.event.addDomListener(window, 'load', init() );

}
work.showJobsMap(work);