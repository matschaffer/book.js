$(function() {
  var currentPage = 0,
      $page = $("#page"),
      pages = $page.find('div').length;
  $page.cycle({
    fx:      'scrollHorz',
    speed:    300,
    timeout:  0,
    after: function (curr, next, opts) {
      currentPage = opts.currSlide;
    }
  });
  $page.touchwipe({
    wipeLeft: function() { if (currentPage + 1 < pages) { $page.cycle("next"); } },
    wipeRight: function() { if (currentPage > 0 ) { $page.cycle("prev"); } },
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
  });
});
