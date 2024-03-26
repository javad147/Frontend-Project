"use strict";

windowOn.on('load', function () {
    $("#loading").fadeOut(500);
});

if ($('.tp-header-height').length > 0) {
    var headerHeight = document.querySelector(".tp-header-height");      
    var setHeaderHeight = headerHeight.offsetHeight;	
    
    $(".tp-header-height").each(function () {
        $(this).css({
            'height' : setHeaderHeight + 'px'
        });
    });
  }