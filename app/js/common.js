$(function() {
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
  });
});

$(".section_one .section-content .info-item").equalHeights();
$(".s1-bottom .info-item").equalHeights();
$(".section_three .section-content .info-item").equalHeights();
$(".s2-item").equalHeights();
$(".s2-item .img-wrap").equalHeights();
$(".cards .card").equalHeights();
$(".teams .team").equalHeights();
