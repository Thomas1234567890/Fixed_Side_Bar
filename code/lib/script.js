$(document).ready(function() {
  //slide_state_options = ['closed', 'slide_page_1', 'slide_page_2'];
  slide_state = 'closed';

  function open_slide(x) {
    $('.slide_page_' + x).removeClass('slide_close_animation');
    $('.slide_page_' + x).addClass('slide_open_animation');
    slide_state = 'slide_state_' + x;
  }

  function close_slide(x) {
    $('.slide_page_' + x).removeClass('slide_open_animation');
    $('.slide_page_' + x).addClass('slide_close_animation');
    slide_state = 'closed';
  }

  function close_all_slides(){
    $('.slide_page').removeClass('slide_open_animation');
    $('.slide_page').addClass('slide_close_animation');
    slide_state = 'closed';
  } 

  $('.slide_trigger_1').on('click', function() {
    if (slide_state != 'slide_state_1') {
      close_all_slides(); 
      open_slide(1);
    }
     else
    {
      close_slide(1);
      };
  });

  $('.slide_trigger_2').on('click', function() {
    if (slide_state != 'slide_state_2') {
      close_all_slides();
      open_slide(2);
    } else {
      close_slide(2);
    }
  });
});
