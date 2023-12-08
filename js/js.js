$( document ).ready(function() {
    $(".tabSwitchers p").on("click", function(){
        tabs = $(".tabSwitchers p");
        cont = $(".tabs .tab");
        tabs.removeClass("active");
        cont.slideUp();
        $(this).addClass("active");
        cont.eq($(this).index()).slideDown();
        return false;
    });
    $(".studying .items p").first().on("click", function(){
        $('.studying .items p').removeClass("active");
        $(this).addClass("active");
        $('.till').hide();
        $('.to').show();
        return false;
    });
    $(".studying .items p").last().on("click", function(){
        $('.studying .items p').removeClass("active");
        $(this).addClass("active");
        $('.to').hide();
        $('.till').show();
        $('.to .dd').slideUp();
        return false;
    });
    $(".levels p").on("click", function(){
        $('.levels p').removeClass("active");
        $(this).addClass("active");
        return false;
    });
    $(".studying .from, .studying .to").on("click", function(){
        $(this).children('.dd').slideToggle().addClass('scroll');
        return false;
    });
    $(".studying .button").on("click", function(){
        $('.studying form').slideToggle();
        return false;
    });
});