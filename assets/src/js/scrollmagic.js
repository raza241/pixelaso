$(document).ready(function(){
    var Controller = new ScrollMagic.Controller();
    var OurScene = new ScrollMagic.Scene({
        triggerElement : '.heading'
    })
    .setClassToggle('#introduction','fadeInUp')
    .addTo(Controller);
});