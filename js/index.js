// Declare transition header container
const headerbanner = document.querySelector('.header-banner');
// Declare transition for 1st row feature section
const rowfeatureone = document.querySelector('.row-feature-one');
const rowfeaturetwo = document.querySelector('.row-feature-two');
const rowfeaturethree = document.querySelector('.row-feature-three');




// Create the header observer, same as before:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headerbanner.classList.add('banner-transition');
            return;
        }
        headerbanner.classList.remove('banner-transition');
    });
});
// Create the row observer, same as before:
const observerRowOne = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rowfeatureone.classList.add('row-transition-one');
            return;
        }
        rowfeatureone.classList.remove('row-transition-one');
    });
});
const observerRowTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rowfeaturetwo.classList.add('row-transition-two');
            return;
        }
        rowfeaturetwo.classList.remove('row-transition-two');
    });
});
const observerRowThree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rowfeaturethree.classList.add('row-transition-three');
            return;
        }
        rowfeaturethree.classList.remove('row-transition-three');
    });
});




document.addEventListener('DOMContentLoaded', function () {
    objectFitImages();


    AOS.init({
      easing: 'ease-in-out-sine'
    });


    /* init Jarallax */
    jarallax(document.querySelectorAll('.jarallax'));

    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      keepImg: true,
    });


    var sidenavs = document.querySelectorAll('.sidenav')
    var para = document.querySelectorAll('.parallax')

    M.Parallax.init(para)
    M.Sidenav.init(sidenavs)



    window.addEventListener("scroll", function () {
        const nav = document.getElementsByTagName("nav")[0]
        const logo = document.getElementById("logo")
        const m_one = document.getElementById("m-one")
        const m_two = document.getElementById("m-two")
        const m_three = document.getElementById("m-three")
        const m_four = document.getElementById("m-four")
        const top = window.pageYOffset
        if (top > 15) {
            nav.classList.add("transparent")
            nav.classList.remove("black")
            logo.classList.add("blue-text")
            m_one.classList.add("blue-text")
            m_two.classList.add("blue-text")
            m_three.classList.add("blue-text")
            m_four.classList.add("blue-text")
        } else {
            nav.classList.remove("transparent")
            nav.classList.add("black")
            logo.classList.remove("blue-text")
            m_one.classList.remove("blue-text")
            m_two.classList.remove("blue-text")
            m_three.classList.remove("blue-text")
            m_four.classList.remove("blue-text")
        }
    })


    // --- BEGIN --- HEADER TRANSITION
    // Remove the transition class
    headerbanner.classList.remove('banner-transition');
    // Create the observer, same as before:
    observer.observe(document.querySelector('.banner-wrapper'));
    // --- END --- HEADER TRANSITION


    rowfeatureone.classList.remove('row-transition-one');
    rowfeaturetwo.classList.remove('row-transition-two');
    rowfeaturethree.classList.remove('row-transition-three');

    

    observerRowOne.observe(document.querySelector('.row-wrapper-one'));
    observerRowTwo.observe(document.querySelector('.row-wrapper-two'));
    observerRowThree.observe(document.querySelector('.row-wrapper-three'));


    
});
