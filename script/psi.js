$(document).ready(function() {
    // @params settings
    var params = {
        // YYYY-MM-DD[T]HH:mm:ss (SGT)
        "date_time": "2020-12-26T07:00:00", "date": "2020-12-26" // YYYY-MM-DD
    };
    
    $.ajax({
        type: "GET",
        dataType: 'json',
        contentType: "text/plain",
        url: "https://api.data.gov.sg/v1/environment/psi",
        headers: {},
        data: {"date_time": "2020-12-26T07:00:00", "date":"2020-12-26"},

        // crossDomain: true,
        // @data returning JSON data
        success: function(data) {
            var reading_twenty_four =
            data.items[0].readings.psi_twenty_four_hourly;
            var content = "";
            
            $.each(reading_twenty_four, function(key, obj) {
            content += key + ": " + obj + "<br/>";
            });
            
            $("#psi-twenty-four").html(content);
            
            // Store info as local storage
            localStorage.setItem("three_hourly",JSON.stringify(reading_twenty_four));
        }
    })
})