// Right (next) arrow
$("#right-jumbotron-arrow").click(function() {
    var currentSlide = $(".slide.active");
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass("active");
    nextSlide.fadeIn(300).addClass("active");

    if(nextSlide.length == 0) {
        $(".slide").first().fadeIn(300).addClass("active");
    }
});

//Left previous arrow
$("#left-jumbotron-arrow").click(function() {
    var currentSlide = $(".slide.active");
    var previousSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass("active");
    prevSlide.fadeIn(300).addClass("active");

    if(prevSlide.length == 0) {
        $(".slide").last().fadeIn(300).addClass("active");
    }
});