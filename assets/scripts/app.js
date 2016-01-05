$(document).foundation();


jQuery(document).ready(function() {
  jQuery('#carousel').slippry();
});
//Product with thumbnails
var thumbs = jQuery('#thumbnails').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="slippry_box thumbnails" />',
  // options
  transition: 'horizontal',
  pager: false,
  auto: false,
  onSlideBefore: function(el, index_old, index_new) {
    jQuery('.thumbs a img').removeClass('active');
    jQuery('img', jQuery('.thumbs a')[index_new]).addClass('active');
  }
});
jQuery('.thumbs a').click(function() {
  thumbs.goToSlide($(this).data('slide'));
  return false;
});

// Mega Menu
jQuery("#cesar").cesar({
  align: "right",
  scrollable: true
});


//Page Sidebar
var stickySidebar = $('.sticky');
if (stickySidebar.length > 0) {
  var stickyHeight = stickySidebar.height(),
    sidebarTop = stickySidebar.offset().top;
}
// on scroll move the sidebar
$(window).scroll(function() {
  if (stickySidebar.length > 0) {
    var scrollTop = $(window).scrollTop();

    if (sidebarTop < scrollTop) {
      stickySidebar.css('top', scrollTop - sidebarTop);

      // stop the sticky sidebar at the footer to avoid overlapping
      var sidebarBottom = stickySidebar.offset().top + stickyHeight,
        stickyStop = $('.main-content').offset().top + $('.main-content').height();
      if (stickyStop < sidebarBottom) {
        var stopPosition = $('.main-content').height() - stickyHeight;
        stickySidebar.css('top', stopPosition);
      }
    } else {
      stickySidebar.css('top', '0');
    }
  }
});
$(window).resize(function() {
  if (stickySidebar.length > 0) {
    stickyHeight = stickySidebar.height();
  }
});
