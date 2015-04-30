/**
 * Created by Prime on 4/30/15.
 */
$(document).ready(function(){

    $('#get-info-btn').on('click', function(){
        $.get('location.html', function(data){
            console.log("first request");
            $('#more-stuff').append(data);
        });

        $.get('data.json', function(data){
            console.log("second request");
            var firstCity = data.locations[0].location;
            $('#more-stuff').children().children().append("<p>" + firstCity + "</p>");
        });
    });
});