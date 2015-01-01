
/**********************************************/
var bio = {
  "name" : "Jill Marr",
  "role" : "Front End Developer",
  "contacts" : {
    "mobile": "303.229.1982",
    "email": "snjmarr@gmail.com",
    "github": "poppypetal",
    "twitter": "jilliebean829",
    "location": "Lakewood"
    },
  "bioPic" : "images/me.JPG",
  "welcomeMessage" : "Thank you for viewing my Resume.",
  "skills" : ["Web Design", "HTML", "CSS", "concrete5", "Bootstrap", "Word", "Excel", "Photoshop", "DreamWeaver"],
  display: function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name)
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
    var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic)
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedName+formattedRole);
    $("#header").append(formattedPicture);
    $("#topContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);
    $("#footerContacts").append(formattedMobile+formattedEmail+formattedGithub+formattedLocation);
    //to display welcomeMessage)
    var welcomeMessage = bio.welcomeMessage;
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (skill in bio.skills){


        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill)};
      };
    }
  };
bio.display();
/**********************************************/
var work = {
  "jobs": [
    {
    "employer" : "PixoInc",
    "title" : "Web Design Intern",
    "location": "Lakewood, CO",
    "dates": "January 15, 2013 - August 1, 2013",
    "description": "Job duties include site migration, SEO, social media, concrete5 theme builds and backlinks."
    },
    {
    "employer" : "PixoInc",
    "title" : "Freelance Web Designer",
    "location": "Lakewood, CO",
    "dates": "August 1, 2013 - Present",
    "description": "Job duties include c5 theme builds, HTML theme updates, SEO, website content updates."
    }
    ],

    display: function(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    };
  }
};
work.display();
/**********************************************/
var projects = {
  "projects":[
    {
    "title": "Project 1",
    "dates": "December 3, 2014-December 7, 2014",
    "description": "Create a website from a mockup and have the code clear with 8% or less margin of error.",
    "images": ["images/mockup-website.png"]
    },
    {
    "title": "Project 2",
    "dates": "December 12, 2014-Present",
    "description": "Create a resume page using javascript.",
    "images": ["images/resume.png"]
    }
  ],
  display: function(){
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%",         projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images){
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};
projects.display();
/**********************************************/
var education = {
    "schools": [
    {
      "name": "CU Boulder",
      "location": "Boulder, CO",
      "degree": "Incomplete BA",
      "major": "Communication",
      "dates": "1998-2001",
      "url": "http://www.colorado.edu/"
    },
    {
      "name": "Red Rocks Community College",
      "location": "Lakewood, CO",
      "degree": "Certificate",
      "major": "Web Design Certificate",
      "dates": 2013,
      "url": "http://www.rrcc.edu/"
    }
    ],
    "onlineCourses":[
    {
      "title": "Front End Web Developer NanoDegree",
      "school": "Udacity",
      "degree": "NanoDegree",
      "dates": "2014-2015",
      "url": "https://www.udacity.com/course/nd001"
    }
    ],
  display: function(){
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    };
      $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      var formattedOnlineCourses = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedOnlineCourses);

      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("%url%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedURL);
      }
  }
};
education.display();
/**********************************************/
//display click locations function
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
logClicks(x,y);
});
console.log("Click");
//end display click locations function

/**********************************************/
$("#mapDiv").append(googleMap);

//end resumebuilder.js
/**********************************************/
/**********************************************/
/**********************************************/
//start additonal code used in the js basics class



//internationalize function

//function inName(name) {
//  var name = "jill marr"
//  name = name.trim().split(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

//return name[0] + " "+name[1];

//}

//$("#main").append("Jill Marr");


//var awesomeThoughts = "I am Jill and I am AWESOME!";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);

//var email = "jill@gmail.com";
//var newEmail = email.replace("gmail", "awesome");

//console.log(email);
//console.log(newEmail);

/*var name = "Jill Marr";
var role = "Web Designer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

//var str1 = "audacity";
//var str2 = str1.slice(-6);
//var str3 = "U" + str2;
//console.log(str3);

//var myArray = ["Euler", 3.14159]
//$("#main").append(myArray.length);

//var s = "audacity";
//s = s[1].toUpperCase() + s.slice(2);
//console.log(s)

//var skills = ["web design", "html", "css", "cross-stitching"];
/**********************************************/










/*experimental function to encapsulate bio
bio.display = function() {

for (bio in bio) {
var name = bio.name
var formattedName = HTMLheaderName.replace("%data%", name)
var role = bio.role
var formattedRole = HTMLheaderRole.replace("%data%", role)
var picture = bio.bioPic
var formattedPicture = HTMLbioPic.replace("%data%", picture)

}
for (bio in bio.contacts) {
var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
}
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

};

if(bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}


bio.display();

*/


//to display bio image:
//var bioPic = bio.bioPic;
//var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
//$("#header").append(formattedBioPic);
//end display bio image


//var mobile = bio.contacts.mobile;
//var formattedMobile = HTMLmobile.replace("%data%", mobile);
//$("#header").prepend(formattedMobile);



//$('#main').append(internationalizeButton);
//end internationalize function
