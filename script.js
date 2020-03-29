// /*****************
//  RESPONSIVE NAVIGATION 
// ******************/

//     function myFunction() {
//         var x = document.getElementById("nav-bar");
//         if (x.className === "navigation") {
//           x.className += " responsive";
//         } else {
//           x.className = "navigation";
//         }
//       }
  
//         // Look for .hamburger
//       var hamburger = document.querySelector(".hamburger");
//       // On click
//       hamburger.addEventListener("click", function() {
//         // Toggle class "is-active"
//         hamburger.classList.toggle("is-active");
//       });
  


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {};
const appearOnScroll = new IntersectionObserver( function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if( !entry.isIntersecting ) {
            return;
        }

        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserver(entry.target);
        }
    })
}, appearOptions);



faders.forEach( fader => {
    appearOnScroll.observer(fader);
})


$(document).ready(function(){
    var win_w = $(window).width();
    var current_top = 0;

    // SIDE NAV 
    $(window).on('scroll',function(e){
        var whs = $(window).scrollTop();
        if(win_w>415){
            if ($('.project-content').offset().top - whs < 0){
                $(".project-aside").addClass('project-aside-float');
            } else {
                $(".project-aside").removeClass('project-aside-float');
            }
            // if($('.top-nav').css('opacity')>0 || whs < 200){
            //     $('.top-nav').css('opacity',(60-whs)/60);
            //     $('.top-nav').show();
            // }else{$('.top-nav').hide();}
        }
        toggleSelect(whs);

        // if( whs >= current_top ){ 
        //     if (!$('.float-nav').hasClass('float-nav-hide')) {
        //         $('.float-nav').addClass('float-nav-hide');
        //     }
        //     current_top = whs;
        // }else{
        //     if ($('.float-nav').hasClass('float-nav-hide')) {
        //         $('.float-nav').removeClass('float-nav-hide');
        //     }
        //     current_top = whs;
        // }
    });

    if ($(window).width() < 990){
        console.log('hello');
        $('.left-page').hide();
        $('.right-page').toggleClass("col-12");

        
        $('#pfp-img').parent().prependTo('.row.main').removeClass('col-5');
        $('#about').removeClass('col-5').addClass('new-margin');
        $('.col-10.right-side.about-body').toggleClass("updated-row");
    }
    console.log('nope');    


  });
/*****************
 TYPEWRITER EFFECT FOR 
 HOME PAGE HEADER
******************/

      /* TYPE WRITER HEADER */
      const typeWriter = function(element, words, waitTime = 1500) {
        this.element = element;
        this.words = words;
        this.wordIndex = 0;
        this.txt = '';
        this.waitTime = parseInt(waitTime, 10); 
        this.type();
        this.isDeleting = false;
      }
  
      // Type Method 
      typeWriter.prototype.type = function(){
        const current = this.wordIndex % this.words.length;
        const fullText = this.words[current];
  
        //check if deleting 
        if(this.isDeleting) {
          this.txt = fullText.substring( 0, this.txt.length - 1 );
        }
        else{
          this.txt = fullText.substring( 0, this.txt.length + 1 );
  
        }
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;
  
        // Initial type speed
        let typeSpeed = 300; //want it to be dynamic
  
        if(this.isDeleting) {
          typeSpeed /= 2;
        }
  
        // Check word is complete
        if(!this.isDeleting && this.txt === fullText) {
          typeSpeed = this.waitTime; //want it to pause
          this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt == '') {
          this.isDeleting = false;
  
          this.wordIndex++;

          typeSpeed = 80;
        }
  
  
        setTimeout(() => this.type(), typeSpeed)
  
      }
  
      // Initialize On DOM Load
      document.addEventListener("DOMContentLoaded", init);
      // Initialize App
      function init(){
        const element = document.querySelector('.txt-type');
        const words = JSON.parse(element.getAttribute('data-words')); //use JSON.parse() to convert text into a JS object
        const waitTime = element.getAttribute('data-wait');
  
        new typeWriter(element, words, waitTime); 
      }

