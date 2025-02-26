var reviewsSwiper = new Swiper(".reviews-swiper", {
    speed: 600,
    allowTouchMove: !0,
    grabCursor: !0,
    loop: 1,
    slidesPerView: '1',
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumVelocityRatio: .3,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: !0
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: !0,
    mousewheel: {
        forceToAxis: !0
    }
});

var reviewsVideoSwiper = new Swiper(".reviews-video-swiper", {
    speed: 600,
    allowTouchMove: !0,
    grabCursor: !0,
    loop: 1,
    slidesPerView: 'auto',
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumVelocityRatio: .3,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: !0
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: !0,
    mousewheel: {
        forceToAxis: !0
    }
});

var $bestSellerCarousel = $('.best-seller .best-seller__carousel');
$bestSellerCarousel.flickity({
    wrapAround: true,
    contain: true,
    imagesLoaded: true,
    cellAlign: 'center',
    pageDots: false,
});

// AOS.init();
$(window).on(
    'load',
    function () {
        setTimeout(() => {
            $('.flickity-enabled').flickity('resize');
        }, 200);
}); 

// trigger a resize event once the window is loaded, it refresh the Flickity slider on resize
window.onload = function(){
    window.dispatchEvent(new Event('resize'));
}

jQuery(document).ready(function(){
	setTimeout(function() { 
        jQuery('.vinylize-contact-form').css('display', 'block');
      	jQuery('.cfu-register-form').css('display', 'block');
    }, 1000);

    if(jQuery("body").hasClass('product')){ 
      setInterval(function(){
         if(jQuery('#product_detailpage_sendusyourphoto').find('.ets_cf_thank_msg').length > 0){
           window.location.replace("https://vinylize.com/pages/consultation-confirmation");
         }
      },1000);
    }
});


jQuery(document).ready(function(){
  jQuery(document).bind('DOMSubtreeModified', function () {
    setTimeout(function() { 
      if(jQuery('.cfu-register-form .ets_cf_box ').hasClass('ets_cf_only_thank')){
        window.location.replace("https://vinylize.com/pages/register-thankyou");
      }
      if(jQuery('.vinylize-contact-form .ets_cf_box ').hasClass('ets_cf_only_thank')){
        window.location.replace("https://vinylize.com/pages/consultation-confirmation");
      }
    }, 50);
  });
});