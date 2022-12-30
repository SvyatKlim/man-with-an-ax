const gallery = () => {
    const wrapper = document.querySelector('.gallery-wrapper');
    const galleryThumb = document.querySelector('.gallery-thumb');
    const galleryFullElement = document.querySelector('.gallery-full');
    const galleryThumbPrev = galleryThumb.querySelector('.swiper-prev-button');
    const galleryThumbNext = galleryThumb.querySelector('.swiper-next-button');

    if (wrapper) {
        const galleryThumbs = new Swiper('.gallery-thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery-thumb .swiper-next-button',
                prevEl: '.gallery-thumb .swiper-prev-button',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                414: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 10
                }
            },
            on: {
                init: function () {
                    let containerThumbWidth = document.querySelector('.gallery-thumb').offsetWidth;
                    const slides = [...document.querySelectorAll('.gallery-thumb .swiper-slide')];
                    let totalThumbWidth = 0;

                    slides.forEach(function (el, index) {
                        let thumbWidth = el.offsetWidth;
                        totalThumbWidth += thumbWidth
                    });


                    if (totalThumbWidth < containerThumbWidth) {
                        galleryThumbPrev.classList.add('hide');
                        galleryThumbNext.classList.add('hide');
                    } else {
                        galleryThumbPrev.classList.remove('hide');
                        galleryThumbNext.classList.remove('hide');
                    }
                }
            }
        });

        const galleryFull = new Swiper('.gallery-full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
                stopOnLastSlide: false
            },
            keyboard: {
                enabled: true,
            },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery-full .swiper-next-button',
                prevEl: '.gallery-full .swiper-prev-button',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            on: {
                slideChangeTransitionStart: function () {
                    [...galleryFullElement.querySelectorAll('.swiper-slide .overlay')].map((el) => el.classList.remove('show') );
                },
                slideChangeTransitionEnd: function () {
                    galleryFullElement.querySelector('.swiper-slide-active .overlay').classList.add('show');
                }
            }
        });
    }
}
export default gallery;