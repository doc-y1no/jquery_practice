$(document).ready(function() {
  $('.dropdwn > li').hover(function() {
    $(this).find('.dropdwn_menu').stop(true, true).slideDown(600);
  }, function() {
    $(this).find('.dropdwn_menu').stop(true, true).slideUp(600);
  });
});
