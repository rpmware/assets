/***************************************************
      THUMB PORTFOLIO HOVER
***************************************************/
jQuery(document).ready(function($) {
  $(".portfolio-item-thumb").hover(function(){
    $(this).find(".item-links").stop(true, true).animate({ opacity: 'show' }, 400);
  }, function() {
    $(this).find(".item-links").stop(true, true).animate({ opacity: 'hide' }, 400);   
  });
});

/***************************************************
    ADDITIONAL CODE FOR FILTER NAVIGATION
***************************************************/
jQuery.noConflict()(function($){
  $(document).ready(function($){
    $('ul#filterable a').click(function() {
      $(this).css('outline','none');
      $('ul#filterable .current').removeClass('current');
      $(this).parent().addClass('current');

      return false;
    });
  });
});

/***************************************************
    PORTFOLIO IMAGE HOVER
***************************************************/
jQuery.noConflict()(function($){
  $(document).ready(function() {  
    $('.portfolio-img').each(function() {
      $(this).hover(
        function() {
        $(this).stop().animate({ opacity: 0.5 }, 400);
      },
      function() {
        $(this).stop().animate({ opacity: 1.0 }, 400);
      })
    });
  });
});
jQuery.noConflict()(function($){
  $(document).ready(function() {  
    $('.portfolio-img-fancy').each(function() {
      $(this).hover(
        function() {
        $(this).stop().animate({ opacity: 0.7 }, 400);
      },
      function() {
        $(this).stop().animate({ opacity: 1.0 }, 400);
      })
    });
  });
});

/*----------------------------------------------------------------------*/
    /*PORTFOLIO FILTERABLE CODE*/
/*----------------------------------------------------------------------*/
jQuery.noConflict()(function($){
  jQuery(document).ready(function($){
    var 
    speed = 700,   // animation speed
    $wall = $('#portfolio').find('.portfolio-container ul')
    ;
    $wall.masonry({
      singleMode: true,
      // only apply masonry layout to visible elements
      itemSelector: '.one-fourth:not(.invis)',
      animate: true,
      animationOptions: {
        duration: speed,
        queue: false
      }
    });
    $('#filterable a').click(function(){
      var colorClass = '.' + $(this).attr('class');
      if(colorClass=='.all') {
        // show all hidden boxes
        $wall.children('.invis')
        .toggleClass('invis').fadeIn(speed);
      } else {  
        // hide visible boxes 
        $wall.children().not(colorClass).not('.invis')
        .toggleClass('invis').fadeOut(speed);
        // show hidden boxes
        $wall.children(colorClass+'.invis')
        .toggleClass('invis').fadeIn(speed);
      }
      $wall.masonry();
      return false;
    });
  });
});


jQuery.noConflict()(function($){
  jQuery(document).ready(function($){
    var 
    speed = 700,   // animation speed
    $wall = $('#portfolio').find('.portfolio-container ul')
    ;
    $wall.masonry({
      singleMode: true,
      // only apply masonry layout to visible elements
      itemSelector: '.one-third:not(.invis)',
      animate: true,
      animationOptions: {
        duration: speed,
        queue: false
      }
    });
    $('#filterable a').click(function(){
      var colorClass = '.' + $(this).attr('class');
      if(colorClass=='.all') {
        // show all hidden boxes
        $wall.children('.invis')
        .toggleClass('invis').fadeIn(speed);
      } else {  
        // hide visible boxes 
        $wall.children().not(colorClass).not('.invis')
        .toggleClass('invis').fadeOut(speed);
        // show hidden boxes
        $wall.children(colorClass+'.invis')
        .toggleClass('invis').fadeIn(speed);
      }
      $wall.masonry();
      return false;
    });
  });
});

jQuery.noConflict()(function($){
  jQuery(document).ready(function($){
    var 
    speed = 700,   // animation speed
    $wall = $('#portfolio').find('.portfolio-container ul')
    ;
    $wall.masonry({
      singleMode: true,
      // only apply masonry layout to visible elements
      itemSelector: '.one-half:not(.invis)',
      animate: true,
      animationOptions: {
        duration: speed,
        queue: false
      }
    });
    $('#filterable a').click(function(){
      var colorClass = '.' + $(this).attr('class');
      if(colorClass=='.all') {
        // show all hidden boxes
        $wall.children('.invis')
        .toggleClass('invis').fadeIn(speed);
      } else {  
        // hide visible boxes 
        $wall.children().not(colorClass).not('.invis')
        .toggleClass('invis').fadeOut(speed);
        // show hidden boxes
        $wall.children(colorClass+'.invis')
        .toggleClass('invis').fadeIn(speed);
      }
      $wall.masonry();
      return false;
    });
  });
});
