!function ($) {  
$(function(){
// side bar
    var $window = $(window)

    setTimeout(function () {
      $('.nav-list').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)
    
  });
    
}(window.jQuery)