function initMap() {
  var manila = {lat: 14.5995, lng: 120.9842};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: manila,
    zoom: 6
  });
  var marker = new google.maps.Marker({
    position: manila,
    map: map
  });
}