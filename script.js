$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });
});

$(document).ready(function () {
  $(".slider_second").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });
});

function myMap() {
  let mapCanvas = document.getElementById("map");
  let mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 10,
  };
  let map = new google.maps.Map(mapCanvas, mapOptions);
}
