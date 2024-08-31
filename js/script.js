$(document).ready(function(){

    // counter plugin

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Aos plugin

    AOS.init({
        delay: 5000,
        duration:2000,
        offset: 50
    });

});
