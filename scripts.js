// ---------------------------- MENU TOGGLE
$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $("header nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("change-bg");
  });
});
// ---------------------------- NAV STICK TO TOP
$(window).bind('scroll', function() {
  var navHeight = $(window).height() - 50;
  if ($(window).scrollTop() > navHeight) {
    $('nav').addClass('fixed');
    $('.logo').addClass('shrink');
  } else {
    $('nav').removeClass('fixed');
    $('.logo').removeClass('shrink');
  }
});
// ----------------------------- SMOOTH SCROLL
$(".frmbtn").click(function() {
  $('html, body').animate({
    scrollTop: $("#form").offset().top - 100
  }, 650);
});
$(".aboutscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#about-me").offset().top - 50
  }, 650);
});
$(".goalscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#goals").offset().top - 50
  }, 650);
});
$(".planscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#plans").offset().top
  }, 650);
});
$(".faqscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#faq").offset().top + 100
  }, 650);
});
$(".contactscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#form").offset().top - 100
  }, 650);
});
$(".logo").click(function() {
  $('html, body').animate({
    scrollTop: $('html').offset().top
  }, 650);
});
// ---------------------------- ACCORDIAN
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ------------------------------- WAYPOINTS
var $goals = $('.gymnasts');
var $plans = $('.plan-icons');
var $reviews = $('.reviewers');
var $helping = $('.helping-hands');
var $about = $('.about-text');
var $faq = $('.faq-wrap');

$goals.waypoint(function() {
  $goals.addClass('fade-in-up');
}, {
  offset: '50%'
});
$plans.waypoint(function() {
  $plans.addClass('fade-in-up');
}, {
  offset: '50%'
});
$reviews.waypoint(function() {
  $reviews.addClass('fade-in-up');
}, {
  offset: '50%'
});
$helping.waypoint(function() {
  $helping.addClass('fade-in-up');
}, {
  offset: '50%'
});
$about.waypoint(function() {
  $about.addClass('fade-in-up');
}, {
  offset: '50%'
});
$faq.waypoint(function() {
  $faq.addClass('fade-in-up');
}, {
  offset: '50%'
});
var $food = $('.food');
$food.waypoint(function() {
  $food.addClass('rotate');
}, {
  offset: '50%'
});