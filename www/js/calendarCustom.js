document.getElementById("createCalEntry").addEventListener("click",createCalendarEntry);

function createCalendarEntry(){
					var startDate = new Date(document.getElementById('apptTimeStart').value); 
					
					var endDate = new Date(document.getElementById('apptTimeEnds').value);
					
					var title = "Appointment with Jane Doe";
					alert("start: "+startDate+" end: "+endDate+" title: "+title+" location: "+eventlocation+" notes: "+notes);
					var eventlocation = document.getElementById('location').value;
					alert("start: "+startDate+" end: "+endDate+" title: "+title+" location: "+eventlocation+" notes: "+notes);
					var notes = document.getElementById('notes').value;
					alert("start: "+startDate+" end: "+endDate+" title: "+title+" location: "+eventlocation+" notes: "+notes);
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					window.plugins.calendar.createEventInteractively(title,eventlocation,notes,startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}
			
