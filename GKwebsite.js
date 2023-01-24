$(document).ready(function (){
    //makes the up button appear disappear
    $(window).scroll(function (){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scrollupbtn').addClass("show");
        }else {
            $('.scrollupbtn').removeClass("show")
        }
    });

    $('.scrollupbtn').click(function (){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function (){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menubtn').click(function (){
        $('.navbar .menu').toggleClass("active");
        $('.menubtn i').toggleClass("active");
    });
});