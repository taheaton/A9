function clock ( )
    {
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Zeroes for mins and secs
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Convert to 12  instead of 24 hrs
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Convert midnight to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
    
    
    $("#clock").html(currentTimeString);
        }

$(document).ready(function()
{
   setInterval('clock()', 1000);

   //from above
var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Convert to 12  instead of 24 hrs
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Convert midnight to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
var hex = '#' + currentHours + currentMinutes + currentSeconds;
console.log(hex);

var color = function (){
        $('.container').css('background-color', hex);
      };
      console.log(color);

     });