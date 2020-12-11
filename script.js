$(function(){

  $('#top-btn').click(function(){
   $('html').animate({
     'scrollTop': 0
   }, 'slow');
 });

  $('.container_about').hover(function() {
    $('.about_hover').fadeIn();
    $('.profile').fadeIn();
  });


  $('.container_skill').hover(function() {
    $('.skill_hover').fadeIn();
    $('.skill').fadeIn();
  });

  $('.container_service').hover(function(){
    $('#service_active').fadeIn();
    $('.active_service').fadeIn();
  });

});
