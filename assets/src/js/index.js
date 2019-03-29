$(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    nav: true,
    navText: [''],
    items: 1
});
var onloadCallback = function () {
    alert("grecaptcha is ready!");
};

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar-me").addClass("fixed-me");
    } else {
        $(".navbar-me").removeClass("fixed-me");
    }
});
$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".scroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
});

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

if (isIOS) {
    $(".fullscreen-bg__video").addClass("for-safari");
}else {
    // Use HTML5 video
    $(".fullscreen-bg__video").removeClass("for-safari");

}   
