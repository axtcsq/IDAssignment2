/* 
Title: Working w/ APIs
Author: Yam, Malcolm
Date: 2020
Code version: 1
Availability: https://mel.np.edu.sg/webapps/blackboard/content/listContent.jsp?course_id=_46751_1&content_id=_3583784_1  
*/

$(document).ready(function() {
    // @params settings
    var params = {
        // YYYY-MM-DD[T]HH:mm:ss (SGT)
        "date_time": "2021-01-09T00:00:00", "date": "2021-01-09" // YYYY-MM-DD
    };
    
    $.ajax({
        type: "GET",
        dataType: 'json',
        contentType: "text/plain",
        url: "https://api.data.gov.sg/v1/environment/psi",
        headers: {},
        data: {"date_time": "2021-01-09T00:00:00", "date":"2021-01-09"},

        // crossDomain: true,
        // @data returning JSON data
        success: function(data) {
            var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
            var content = "";
            
            $.each(reading_twenty_four, function(key, obj) {
            content += key + ": " + obj + "<br/>";
            });
            
            $("#psi").html(content);
            
            // Store info as local storage
            localStorage.setItem("three_hourly",JSON.stringify(reading_twenty_four));
        }
    })
})