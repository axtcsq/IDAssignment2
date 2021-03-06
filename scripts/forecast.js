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
        url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
        headers: {},
        data: {"date_time": "2021-01-09T00:00:00", "date":"2021-01-09"},

        // crossDomain: true,
        // @data returning JSON data
        success: function(data) {
            // Regions
            var periods_twenty_four = data.items[0].periods[0].regions;
            var content = "";
            
            // Temperatures
            var temp = data.items[0].general.temperature;
            
            $.each(periods_twenty_four, function(key, obj) {
            content += key + ": " + obj + "<br/>";
            });

            $.each(temp, function(key, obj) {
                content += key + ": " + obj + "<br/>";
                });
            
            $("#forecast").html(content);
            
            // Store info as local storage
            localStorage.setItem("twenty_four_hourly",JSON.stringify(periods_twenty_four));
        }
    })
})