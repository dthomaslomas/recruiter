(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };

    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */
    $('#contact-form').submit(function(e){
        e.preventDefault();
    }).validate({
        onsubmit: true,
        rules: {
            name: {
                required: true, minlength: 4
            }, 
            email: {
                required: true, email: true
            }, 
            telephone: {
                required: true,
            }, 
            location: {
                required: false,
            }, 
            message: {
                required: true,
            }
        }, 
        messages: {
            user_name: {
                required: "Come on, you have a name don't you?", minlength: "Your name must consist of at least 2 characters"
            }, 
            email: {
                required: "Please put your email address above",
            }, 
            telephone: {
                required: "Please put your telephone number above",
            }, 
            message: {
                required: "Put some messages here?", minlength: "Your name must consist of at least 2 characters"
            }
        }, 
        submitHandler: function(form) {
            var rawData = $(form).serializeArray();
            var cleanData = {
                name: rawData[1].value,
                email: rawData[2].value,
                telephone: rawData[3].value,
                location: rawData[4].value,
                message: rawData[5].value
            };
            if(!document.getElementById("filter").value.length > 0 ){
                $.ajax( {
                    type:"POST", 
                    data: JSON.stringify(cleanData), 
                    contentType:"application/json; charset=utf-8",
                    dataType:"json",
                    url:"https://dva23vxcsl.execute-api.eu-west-1.amazonaws.com/prod", success: function(data, status) {
                        document.getElementById("name").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("telephone").value = "";
                        document.getElementById("location").value = "";
                        document.getElementById("message").value = "";
                        $('#contact-form #success').fadeIn();
                    }
                    , error: function(status) {
                        $('#contact-form #error').fadeIn();
                    }
                });
            } else {
                return false;
            }
            return false;
        }
    });


}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});




$(document).ready(function(){

    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
        }
    });

    $("#clients-logo").owlCarousel({
 
        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

    });


});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});






 




