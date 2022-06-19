window.onload = function () {
    document.getElementById('open').onclick = function() {
            $(".nav_2").css({
                "visibility": "unset",
                "position": "absolute",
                "margin-right": "0",
                "right": "0",
                "transition": ".5s"
        })
    };

    document.getElementById('exit').onclick = function() {
            $(".nav_2").css({
                "visibility": "unset",
                "position": "absolute",
                "margin-right": "-100%",
                "right": "0",
                "transition": ".5s"
        })
        $(".header").css({
            "background": "rgb(201, 201, 201)",
            "transition": ".9s",
            "margin-top": "-0.5vh",
            "position": "fixed"
        })
    };

    $(document).ready(function(){
 
        $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
        } else {
        $('.scrollup').fadeOut();
        }
        });
         
        $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });
         
        });
}

window.onscroll = function () {
    $(document).scroll(function() {
        var st = $(this).scrollTop();
        if(st > 0) {
            $(".header").css({
                "background": "rgb(201, 201, 201)",
                "transition": ".9s",
                "margin-top": "-0.5vh",
                "position": "fixed"
            })
        } else {
            $(".header").css({
                "background": "white",
                "transition": ".9s",
                "margin-top": "0",
                "position": "relative"
            })
        }
    });
};