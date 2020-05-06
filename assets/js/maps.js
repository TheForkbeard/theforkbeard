function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 52.413496, lng: 0.056014}
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 52.462491, lng: 0.536267},
        {lat: 52.410018, lng: 0.251744},
        {lat: 52.066604, lng: 1.279071},
        {lat: 52.629857, lng: 1.288284},
        {lat: 51.670452, lng: -0.051654},
        {lat: 57.736844, lng: 0.400273},
        {lat: 52.676321, lng: 1.220145}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markeCluster = new MarkerClusterer(map, markers,
        {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}
    );                

}