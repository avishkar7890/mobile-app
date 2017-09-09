document.getElementById("createCalEntry").addEventListener("click",createCalendarEntry);
document.getElementById("navigateToCalendarCreatePageButton").addEventListener("click",navigateToCalendarCreatePage);

function navigateToCalendarCreatePage(){
	alert("calling next page");
	//window.location = "calendarUI.html";
}
function createCalendarEntry(){
					var startDate = new Date(2017,10,23,0,0,0,0,0); // beware: month 0 = january, 11 = december
					var endDate = new Date(2017,10,24,0,0,0,0,0);
					var title = "Skype meeting With Lead";
					var eventlocation = "Seasons Mall";
					var notes = "Need to do a skype meeting with the lead.";
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					window.plugins.calendar.createEventInteractively(title,eventlocation,notes,startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}
			
function createCalendarEntry2(){
					
					var startDate = new Date(2017,10,23,0,0,0,0,0); // beware: month 0 = january, 11 = december
					var endDate = new Date(2017,10,24,0,0,0,0,0);
					var title = "Calendar entry in new calendar";
					var eventlocation = "Seasons Mall";
					var notes = "Calendar entry in new calendar 1234567890";
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					var calOptions = window.plugins.calendar.getCalendarOptions();
					calOptions.calendarName = "My Calendar";
					var calendarName = "MAD Calendar";
					//window.plugins.calendar.createCalendar(calOptions,success,error);
					window.plugins.calendar.deleteCalendar(calendarName,success,error);
					// window.plugins.calendar.listEventsInRange(startDate,endDate,success,error);
				   // window.plugins.calendar.createCalendar(calendarName,success,error);
					//window.plugins.calendar.createEventInteractively(title,eventlocation,notes,startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}
				

			
function createCalendarEntry3(){
					
					var startDate = new Date(2017,10,19,0,0,0,0,0); // beware: month 0 = january, 11 = december
					var endDate = new Date(2017,10,19,23,59,0,0,0);
					var title = "Calendar entry in new calendar";
					var eventlocation = "Seasons Mall";
					var notes = "Calendar entry in new calendar 1234567890";
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					//var calOptions = window.plugins.calendar.getCalendarOptions();
					//calOptions.calendarName = "My Calendar";
					//window.plugins.calendar.createCalendar(calOptions,success,error);
					// window.plugins.calendar.listEventsInRange(startDate,endDate,success,error);
				    // window.plugins.calendar.createCalendar(calendarName,success,error);
					window.plugins.calendar.createEvent(title,eventlocation,notes,startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}	

function createCalendarEntry4(){
					
					var startDate = new Date(2017,10,19,0,0,0,0,0); // beware: month 0 = january, 11 = december
					var endDate = new Date(2017,10,19,23,59,0,0,0);
					var title = "Calendar entry in new calendar";
					var eventlocation = "Seasons Mall";
					var notes = "Calendar entry in new calendar 1234567890";
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					
					window.plugins.calendar.listEventsInRange(startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}			
