$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show")  
        }
    );
        $("#loginButton").click(function(){
            $("#loginModal").modal("show")    
        }
    );
});


    function initMap() {
        var location = {lat: 39.290386, lng: -76.612190};
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

    