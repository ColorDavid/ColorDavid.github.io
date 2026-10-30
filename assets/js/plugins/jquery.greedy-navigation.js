/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  if (!$nav.length) return;

  // Re-measure all links after a resize or font load. Cached breakpoints can
  // leave desktop links hidden after visiting a narrow viewport.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');
  var availableSpace = $nav.width();

  while ($vlinks.width() > availableSpace) {
    var $lastLink = $vlinks.children('*:not(.masthead__menu-item--lg)').last();
    if (!$lastLink.length) break;
    $lastLink.prependTo($hlinks);
    $btn.removeClass('hidden');
    availableSpace = $nav.width() - $btn.outerWidth(true) - 30;
  }

  if (!$hlinks.children().length) {
    $btn.addClass('hidden').removeClass('close');
    $hlinks.addClass('hidden');
  }
  $btn.attr("count", $hlinks.children().length);
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateNav);
}
