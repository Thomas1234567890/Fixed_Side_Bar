$(document).ready(function() {
  //slide_state_options = ['closed', 'slide_page_1', 'slide_page_2'];
  slide_state = 'closed';
  numberOfPages = 7;
  $('.slide_trgger_1').on('click', function() {
    slide(1);
    set_Active(1);
  });
  $('.slide_trgger_2').on('click', function() {
    slide(2);
    set_Active(2);
  });
  $('.slide_trgger_3').on('click', function() {
    slide(3);
    set_Active(3);
  });
    $('.slide_trgger_4').on('click', function() {
    slide(4);
    set_Active(4);
  });

  $('.overview').on('click', function() {
    close_all_slides();
    unselect_All();
  });

  function slide(x) {
    if (slide_state == 'closed') {
      open_slide(x);
    } else if (slide_state == 'slide_state_' + x) {
      close_slide(x);
    } else {
      close_all_slides();
      unselect_All();
      open_slide(x);
    }
  }

  function open_slide(x) {
    $('.slide_page_' + x).removeClass('slide_page_close_animation');
    $('.slide_page_' + x).addClass('slide_page_open_animation');
    slide_state = 'slide_state_' + x;
  }

  function close_slide(x) {
    $('.slide_page_' + x).removeClass('slide_page_open_animation');
    $('.slide_page_' + x).addClass('slide_page_close_animation');
    slide_state = 'closed slide_state_' + x;
  }

  function close_all_slides() {
    for (i = 0; i < numberOfPages; i++) {
      $('.slide_page_' + i).removeClass('slide_page_open_animation');
      $('.slide_page_' + i).addClass('slide_page_close_animation');
      slide_state = 'closed';
    }
  }

  function set_Active(x) {
    for (i = 0; i < numberOfPages; i++) {
      if (i !== x) {
        $('.slide_trgger_' + i + ' a:first-child').removeClass('active');
      } else {
        $('.slide_trgger_' + i + ' a:first-child').addClass('active');
      }
    }
  }
  function unselect_All()
  {
     for (i = 0; i < numberOfPages; i++) {
        $('.slide_trgger_'+i+' a:first-child').removeClass('active');
      }
  }

});
