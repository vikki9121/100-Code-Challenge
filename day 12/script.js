// set map

function initialize() {
    var mapOptions = {

        // centre on start chennai
        center: new google.maps.LatLng(13.067439, 80.237617),
        // zoom of the map

        zoom: 10,

        // type of map (ROaddmap, satellite, hybrid)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        minZoom: 2
    };

    // create a new map instance using provided options 
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create an infowindow to display the loaction info 

    var infowindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(13.114656,  80.089645),
        map: map,
        title: 'avadi'
    });

    // add click event tp marker

    marker.addListener('click', function () {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
    });

    // adjust map center when the window is resized

    google.maps.event.addDomListener(window, 'resize', function () {
        map.setCenter(mapOptions.center);
    })

    
}

// 11initilaise the map when  window is loading
google.maps.event.addDomListener(window, 'load', initialize);