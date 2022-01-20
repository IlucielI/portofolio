$(".card-img-top").tilt({
    scale: 1.1,
    glare: true,
    maxGlare: 0.1,
});

//glide init
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".glide");
    const conf = {
        type: "slider",
        gap: 10,
        bound: true,
        startAt: 0,
        perView: 3,
        breakpoints: {
            768: {
                perView: 2,
            },
            576: {
                perView: 1,
            },
        },
    };
    sliders.forEach((item) => {
        new Glide(item, conf).mount();
    });
    new Splide(".splide").mount();
});

$(document).scroll(function () {
    100 < $(this).scrollTop()
        ? $(".scroll-to-top").fadeIn()
        : $(".scroll-to-top").fadeOut();
});
$("a.scroll-to-top").click(function (e) {
    $("html, body")
        .stop()
        .animate(
            { scrollTop: $($(this).attr("href")).offset().top },
            1e3,
            "easeInOutExpo"
        ),
        e.preventDefault();
});
