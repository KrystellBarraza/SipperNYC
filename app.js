$(document).ready(() => {
    $('#toggleText').click(() => {
      $('.menuToggle').toggleClass('placeHolder');
      $('#menu').toggle('slide',{direction:'up'}, 1000);
      $('#menu-container').toggle('fade',{direction: 'down'}, 500);
    });
  });

  $(document).ready(function(){
    $('.venobox').venobox({
        spinner:'three bounce',
        closeBackground: 'transparent'
    }); 
});