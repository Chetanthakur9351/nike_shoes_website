  // Toggle button logic
  const toggleButton = document.getElementById('toggle-button');
  const navLinks = document.getElementById('cntr-nav');
  
  toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Scroll threshold logic
  const scrollThreshold = 50; // Change this value to the scroll distance you want

  window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });


 const shoeGrid = document.querySelector('.shoe-grid');
 const cardWidth = document.querySelector('.shoe-card').offsetWidth + 20; // Including margin

 function scrollToLeft() {
     shoeGrid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
 }

 function scrollToRight() {
     shoeGrid.scrollBy({ left: cardWidth, behavior: 'smooth' });
 }

// GSAP ScrollTrigger logic
ScrollTrigger.matchMedia({
    // For screens smaller than 768px
    "(max-width: 768px)": function() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
                // markers: true,
            }
        });
  
        tl.to("#shoes", {
            top: "100%",        
            left: "25%",
            width: "50%",
            rotate: "380deg",
        }, 'sho');
  
        tl.to("#tick", {
            top: "110%",
            rotate: "374deg",
            left: "42%",  
            opacity:0,
        }, 'sho');
  
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "20% 50%",
                scrub: true,
                // markers: true,
            }
        });
  
        tl2.to("#shoes", {
            width: "40%",
            top: "156%",
            left: "31%",
            rotate: "350deg",
        }, 'ca');
  
  
    },
  
    // For screens larger than 768px (default)
    "(min-width: 768px)": function() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
                // markers: true,
            }
        });
  
        tl.to("#shoes", {
            top: "120%",
            left: "0%",
        }, 'sho');
  
        tl.to("#tick", {
            top: "126%",
            rotate: "335deg",
            left: "270px",
            opacity: 0,
        }, 'sho');
  
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "20% 50%",
                scrub: true,
                // markers: true,
            }
        });
  
        tl2.to("#shoes", {
            width: "34%",
            top: "205%",
            left: "33%",
        }, 'ca');
  
    }
  });