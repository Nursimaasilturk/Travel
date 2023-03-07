$(document).ready(function () {
  // Hamburger menu code
  $("#hamburger-icon").click(function () {
    $("#hamburger-links").slideToggle("slow");
    $(".mobile-navbar").toggleClass("active");
    $(".menu-icon .dot").toggleClass("active");
    $(".menu-icon").toggleClass("active");
    $(".fa-location-dot").toggleClass("active");
  });
});
