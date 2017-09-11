document.getElementById("createCalEntry").addEventListener("click",createCalendarEntry);

function createCalendarEntry(){
					var startDate = new Date(document.getElementById('apptTimeStart').value);
					var endDate = new Date(document.getElementById('apptTimeEnds').value);
					var title = "Advisor appointment with Jane Doe";
					var eventlocation = document.getElementById('location').value;
					var notes = document.getElementById('notes').value;
					var success = function(message) { alert("Success: " + JSON.stringify(message)); };
					var error = function(message) { alert("Error: " + JSON.stringify(message)); };
					window.plugins.calendar.createEventInteractively(title,eventlocation,notes,startDate,endDate,success,error);
					//window.plugins.calendar.openCalendar();
			}
		
document.getElementById("listEvents").addEventListener("click",getListOfEvents);

function getListOfEvents(){

	var startDate = new Date(1990,0,1,0,0,0,0,0);
	var endDate = new Date(2990,11,31,0,0,0,0,0);
	var success = function(message) { 
		alert("Success: " + JSON.stringify(message));
		var jsonString=JSON.parse(JSON.stringify(message));
		alert(jsonString.length);
		var titleArr=[];
		var j=0;
		for(i=0;i<jsonString.length;i++){
			if((jsonString[i].title).includes("Advisor")){
			titleArr[j]=jsonString[i].title;
			j++;
			}
		}
		alert(titleArr.toString());
		};
	var error = function(message) { alert("Error: " + JSON.stringify(message)); };
	window.plugins.calendar.listEventsInRange(startDate, endDate,success,error);
}