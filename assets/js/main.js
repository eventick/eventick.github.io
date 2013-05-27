!function ($) {  
    'use strict';
$(function(){
// side bar
    var $window = $(window)

    setTimeout(function () {
      $('.nav-list').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 260 : 210 }
        , bottom: 300
        }
      })
    }, 100);
    
  });
    
}(window.jQuery);