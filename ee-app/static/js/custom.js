jQuery(document).ready(function($) {
    $('#scollbar').overlayScrollbars({ className : "os-theme-light" });
    let toggleButton = $('.toggle-button'),
        menuWrap = $('.menu-wrap');

    toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        menuWrap.toggleClass('menu-show');
    });

});