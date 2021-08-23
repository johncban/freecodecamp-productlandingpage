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



$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 30) {
            $("nav").removeClass("black");
            $("nav").addClass("transparent");
            $("#logo").addClass("blue-text");
            $("#m-one").addClass("blue-text");
        }
        else {
            $("nav").removeClass("transparent");
            $("nav").addClass("black");
            $("#logo").removeClass("blue-text");
            $("#m-one").removeClass("blue-text");
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


