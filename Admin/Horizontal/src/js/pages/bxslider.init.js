
/**
* Theme:  Zircos - Responsive Bootstrap 4 Admin & Dashboard
* Author: Coderthemes
* File:   bxslider
*/


    $(function(){
        $('.property-slider').bxSlider({
          pagerCustom: '#bx-pager'
        });
      });


    var map = new GMaps({
        el: '#map-property',
        lat: 40.712784,
        lng: -74.005941,
        mapTypeControlOptions: {
            mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm"]
        }
    });
    map.addMarker({
        lat:  40.725015 ,
        lng: -73.881452,
        title: 'Im your custom marker',
        icon: 'assets/images/map-marker.png'
    });
    
