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

          typeSpeed = 500;
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