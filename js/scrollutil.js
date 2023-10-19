$(window).scroll(function () {
    const now = $(window).scrollTop();
    if (now > 200) {
        $('.pagetop').fadeIn("slow");
    } else {
        $('.pagetop').fadeOut('slow');
    }
});
