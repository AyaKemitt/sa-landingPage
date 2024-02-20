
const col1 = document.querySelector(".left-box .col-1");
const col2 = document.querySelector(".left-box .col-2");
const col3 = document.querySelector(".left-box .col-3");

const section = document.querySelector('.info');
const sectionTop = section.getBoundingClientRect().top;
const sectionMiddle = sectionTop + section.offsetHeight / 2;
const windowHeight = window.innerHeight;

function handleScroll() {
    let scroll = window.scrollY;
    if (scroll > sectionTop) {
        let translateY = scroll - (sectionMiddle - windowHeight / 2);
        col1.style.transform = `translateY(${-translateY -105}px)`;
        col2.style.transform = `translateY(${-translateY - 30}px)`;
        col3.style.transform = `translateY(${-translateY -300}px)`;
    }
}

window.addEventListener("scroll", handleScroll);

// Check on page load
handleScroll();