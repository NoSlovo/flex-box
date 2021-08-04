$(document).ready(function(){
    $('.slider_two').slick({
        arrows:false,
        adaptiveHeight:true,
        slidesToShow:3,
        centerMode:true,
        rows:1,
        sliderPerRow:1,
        Infinity:true,
        autoplay:true,
        autoplaySpeed:1000,
        responsive:[
            {
              breakpoint:1300,
              settings :{
                slidesToShow:2
              } 
            },{
                breakpoint:1000,
                settings :{
                slidesToShow:1

            }
        }
        ]

    });
});