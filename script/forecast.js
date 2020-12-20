$(document).ready(function() {
    // @params settings
    var params = {
        // YYYY-MM-DD[T]HH:mm:ss (SGT)
        "date_time": "2016-06-27T23:00:00", "date": "2016-06-27" // YYYY-MM-DD
    };
    
    $.ajax({
        type: "GET",
        dataType: 'json',
        contentType: "text/plain",
        url: "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
        headers: {},
        data: {"date_time": "2016-06-27T23:00:00", "date":"2016-06-27"},

        // crossDomain: true,
        // @data returning JSON data
        success: function(data) {
            var periods_twenty_four =
            data.items[3].periods.regions;
            var content = "";
            
            $.each(periods_twenty_four, function(key, obj) {
            content += key + ": " + obj + "<br/>";
            });
            
            $("#regions").html(content);
            
            // Store info as local storage
            localStorage.setItem("twenty_four_hourly",JSON.stringify(periods_twenty_four));
        }
    })
})