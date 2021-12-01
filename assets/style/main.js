
let toggle = document.querySelector("#header .toggle-button");

let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"))
});


// swiper libary initialization start
new Swiper('.swiper',{
    direction:'horizontal',
    loop:true,
    slidesPerView:5,
    autoplay:{
        delay:3000
    },
    //responsive breakpoints start
    breakpoints:{

        '@0':{
            slidesPerView:2
        },

        //888px
        '@1.00':{
            slidesPerView:3
        },

        //1110px
        '@1.25':{
            slidesPerView:4
        },

        //1330px
        '@1.50':{
            slidesPerView:5
        }

    }

    //responsive breakpoints end

});
// swiper libary initialization end