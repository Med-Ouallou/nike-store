
//! ========== Swiper image code with JavaScript only ================
const swiperWrapper = document.querySelector(".swiper-wrapper");
        const slides = document.querySelectorAll(".swiper-slide");
        const prevButton = document.querySelector(".btn-prev");
        const nextButton = document.querySelector(".btn-next");
        let index = 0;

        function updateSlider() {
            swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        nextButton.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            updateSlider();
        });

        prevButton.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        });
//! ===================================================================

