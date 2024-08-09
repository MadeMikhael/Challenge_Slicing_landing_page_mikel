
const swiper = new Swiper(".mySwiper",{
   
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 10,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
     
    },
    breakpoints:{
      640:{
        slidesPerView: 2,
        centeredSlides:false,
        spaceBetween:25
  
      },
  
      768:{
        slidesPerView: 2,
        centeredSlides:false,
        spaceBetween:30
  
      },
  
      1280:{
       slidesPerView: 3,
       centeredSlides:false,
       spaceBetween:40
  
     },
      
    }
  
  });
  
  const swipers = new Swiper(".mySwipers", {
   grabCursor:true,
   slidesPerView: 3,
   spaceBetween: 25,
   freeMode: true,
   
  
   breakpoints:{
     
  
     768:{
       slidesPerView: 4,
       spaceBetween: 30,
       centeredSlides:false,
     },
     
    
     
   }
  });
  
  const swiperss = new Swiper(".mySwiperss", {
   grabCursor:true,
   slidesPerView: 1,
   spaceBetween: 30,
   freeMode: true,
   scrollbar: {
     el: ".swiper-scrollbar",
     hide: true,
   },
  
   breakpoints:{
     
    640:{
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides:false,
    },
  
     768:{
       slidesPerView: 2.5,
       spaceBetween: 40,
       centeredSlides:false,
     },
     
     1024:{
       slidesPerView: 3,
       spaceBetween: 30,
       centeredSlides:false,
     },
  
     1280:{
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides:false,
    },
     
   }
  });
  
  const swipersss = new Swiper(".mySwipersss", {
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
   
    breakpoints:{
      
     640:{
       slidesPerView: 2,
       spaceBetween: 40,
       centeredSlides:false,
     },
   
      768:{
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides:false,
      },
      
      1024:{
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides:false,
      },
   
      1280:{
       slidesPerView: 3,
       spaceBetween: 20,
       centeredSlides:false,
     },
      
    }
   });
  
  
  
  
  
   var prevScrollpos = window.pageYOffset;
   const navbar = document.querySelector('#navbar');
   
   window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;
     
     // Check if window is scrolled to the top
     if (currentScrollPos === 0) {
       navbar.classList.add('bg-transparent');
       navbar.classList.remove('bg-[#FFF8F8]');
     } else if (prevScrollpos > currentScrollPos) {
       document.getElementById("navbar").style.top = "0";
       navbar.classList.remove('bg-transparent');
       navbar.classList.add('bg-[#FFF8F8]');
     } else {
       document.getElementById("navbar").style.top = "-200px";
     }
     
     prevScrollpos = currentScrollPos;
   }
   
   
   // window.onscroll = function () {
   //   const header = document.querySelector('#navbar');
   //   const fixedNav = header.offsetTop;
   
   //   if (window.pageYOffset > fixedNav) {
   //     header.classList.add('navbar-fixed');
   //   } else {
   //     header.classList.remove('bg-[#FFF8F8]');
   //   }
   // }
   
     
     // Hamburger
     const hamburger = document.querySelector('#hamburger');
     const hamburgers = document.querySelector('#hamburgers');
     const navMenu = document.querySelector('.nav');
     const sidebarOverlay = document.querySelector('.sidebar-overlay')
     
     
     hamburger.addEventListener('click', function () {
       sidebarOverlay.classList.toggle('hidden')
       navMenu.classList.toggle('-translate-y-0')
       sidebarOverlay.classList.toggle('bg-black-50')
       navMenu.classList.toggle('-translate-y-full')
     });
   
   
     hamburgers.addEventListener('click', function () {
       navMenu.classList.toggle('-translate-y-full')
       sidebarOverlay.classList.toggle('hidden')
       sidebarOverlay.classList.toggle('bg-black-50')
     });
     
    
     // Klik di luar hamburger
     window.addEventListener('click', function (e) { 
       if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
         navMenu.classList.add('-translate-y-full')
         sidebarOverlay.classList.add('hidden')
         // navMenu.classList.add('hidden');
       }
       
     });