function redirect() {
  location.href = "www.youtube.com";
}

function workCarousel() {
  alert("Carousel will work");
}

$('input[type="checkbox"]').on("change", function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
});
