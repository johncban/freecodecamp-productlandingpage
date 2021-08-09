$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
            $("nav").removeClass("black");
            $("nav").addClass("transparent");
            $("#logo").addClass("blue-text");
            $("#m-one").addClass("blue-text");
        }
        else{
            $("nav").removeClass("transparent");
            $("nav").addClass("black");
            $("#logo").removeClass("blue-text");
            $("#m-one").removeClass("blue-text");
        }

    })
});


