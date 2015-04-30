/**
 * Created by Prime on 4/30/15.
 */
var cityData = null;
var cityHtml = null;

$(document).ready(function(){

    $('#get-info-btn').on('click', function(){
        if(cityHtml === null){
            $.get('location.html', function(data){
                cityHtml = data;
                console.log("it worked");
                $('#more-stuff').append(data);
            });
        } else{
            console.log("You already got the HTML");
        }

        if(cityData === null){
            $.get('data.json', function(data){
                console.log("second request");
                cityData = data;
                var firstCity = data.locations[0].location;
            });
        }else {
            console.log(cityData.locations[0].population);
            console.log("you already got the city data");
        }
    });

    $('#more-stuff').on('click', 'button', function(){
       $(this).parent().append(cityData.locations[0].population);
    });
});