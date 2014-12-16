
var bio = {
    "name": "Yozaira Rojas",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "yozaira@exampte.com",
        "github": "www.github.com",
        "twitter": "www.twitter.com",
        "location": "Atlanta, GA"
         } ,
    "welcome4essage": "torem ipsun dolor sit anet etc etc etc.torem ipsun dolor sit anet etc etc etc torem ipsun dolor sit anet etc etc etc",
    "skills": [
        "awesomeness",
        "delivering things",
        "saving the universe"
    ] ,
    "projects": [
        "project1",
        "project2",
        "project3",
        "project4"
    ],
    "bioPic": "inages/fry.Jpg"
};


var services = {
       "service" : [ 
			{
			"title": "Backend Development",
			"description":  "torem ipsun dolor sit anet etc etc etc.torem ipsun dolor sit anet etc etc etc torem ipsun dolor sit anet etc etc etc",
			}, {
			"title": "Web Design",
			"description":  "torem ipsun dolor sit anet etc etc etc.torem ipsun dolor sit anet etc etc etc torem ipsun dolor sit anet etc etc etc",
			}, {
			"title": "Frontend Development",
			"description":  "torem ipsun dolor sit anet etc etc etc.torem ipsun dolor sit anet etc etc etc torem ipsun dolor sit anet etc etc etc",
			}, {
			"title": "Digital Marketing",
			"description":  "torem ipsun dolor sit anet etc etc etc.torem ipsun dolor sit anet etc etc etc torem ipsun dolor sit anet etc etc etc"
			}
		]
};


var work = {

    "jobs": [
        {
            "employer": "Employer1",
            "title": "Administrative Assistant",
            "dates": "April 2005- November 2008",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ."
        } , {
            "employer": "Employer2",
            "title": "Communication and PR Assistant",
            "dates": "August 2010 - January 2011",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ."
        }
    ]
};


var projects = {
    "projects": [
        {
            "title": "CMS",
            "date": "2013",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore ",
            "images": [
                "images1",
                "images2",
                "images3"
             ] 
        } ,  {
            "title": "WP Theme",
            "date": "2013",
            "description": "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};

 
 // function literal 
projects.display = function (project_obj){

    if(project_obj.projects.length > 0) {	
	
		for (var key in project_obj.projects) {

			 var formattedTitle = HTMLprojectTitle.replace("%data%", project_obj.projects[key].title);
			 var formattedDates = HTMLprojectDates.replace("%data%", project_obj.projects[key].date);
			 var formattedDescription = HTMLprojectDescription.replace("%data%", project_obj.projects[key].description);
					
			 $('#projects').append( HTMLprojectStart );
			 // $('#projects').append( formattedTitle );
			 // $('#projects').append( formattedDates );
			 // $('#projects').append( formattedDescription );
			
			 $('.project-entry:last').append( formattedTitle );
			 $('.project-entry:last').append( formattedDates);
			 $('.project-entry:last').append(formattedDescription );
			
			if (project_obj.projects[key].images.length > 0) {
			   for (image in project_obj.projects[key].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", project_obj.projects[key].images[ image]);
				$('.project-entry:last').append( formattedImage);
				}	   
			}	
		}	
	}
	
}
projects.display (projects);


// function declaration
function displayProjects (){
    
	for (var key in projects.projects) {

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].date);
         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
        	    
		 $('#projects').append( HTMLprojectStart );
		 // $('#projects').append( formattedTitle );
		 // $('#projects').append( formattedDates );
		 // $('#projects').append( formattedDescription );
		
		 $('.project-entry:last').append( formattedTitle );
		 $('.project-entry:last').append( formattedDates);
		 $('.project-entry:last').append(formattedDescription );
		
		if (projects.projects[key].images.length > 0) {
		   for (image in projects.projects[key].images) {
		    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[ image]);
			$('.project-entry:last').append( formattedImage);
		   }
		   
		}	
	
	}
	
}
displayProjects();





