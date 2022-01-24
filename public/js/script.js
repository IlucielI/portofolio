$(".card-img-top").tilt({
    scale: 1.1,
    glare: true,
    maxGlare: 0.1,
});

//glide init
document.addEventListener("DOMContentLoaded", function () {
    const gliders = document.querySelectorAll(".glide");
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
    gliders.forEach((item) => {
        new Glide(item, conf).mount();
    });
    const splider = document.querySelectorAll(".splide");
    const config = {
        type: "slide",
        gap: 10,
        rewind: true,
        startAt: 0,
        perPage: 3,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },
    };
    splider.forEach((item) => {
        new Splide(item, config).mount();
    });
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
