"use strict";
/* ======================== GSAP Start ======================== */

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++ GSAP Configuration Start +++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
// GSAP plugin registration with checks
if (typeof Flip !== 'undefined' && typeof gsap !== 'undefined') {
  gsap.registerPlugin(Flip);
}

if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
gsap.config({ nullTargetWarn: false });




// const lenis = new Lenis({
//   duration: 2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++ GSAP Configuration End +++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// function raf(time) {
//   lenis.raf(time);
//   ScrollTrigger.update();
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

function initScrollbar() {
  // Initialize scrollbar
const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
  damping: 0.1
});

// Connect to ScrollTrigger
ScrollTrigger.scrollerProxy("#scroll-container", {
  scrollTop(value) {
    if (arguments.length) scrollbar.scrollTop = value;
    return scrollbar.scrollTop;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: "#scroll-container" });
ScrollTrigger.refresh();

// Update ScrollTrigger when scrollbar moves
scrollbar.addListener(ScrollTrigger.update);

// Refresh ScrollTrigger when resize occurs
ScrollTrigger.defaults({ scroller: "#scroll-container" });
ScrollTrigger.refresh();
}
// -------------------------
// -------------------------
const elasticBounceAnimation = () => {
  const targetElement = document.querySelector(".electroBounce");

  if (!targetElement) {
    return;
  }

  const animation = gsap.fromTo(
    targetElement,
    {
      scale: 1.5,
      transformOrigin: "center",
    },
    {
      scale: 1,
      duration: 1.6,
      ease: "elastic.out(3.5, 0.3)",
      delay: 1.5,
    }
  );
};
// -------------------------
// -------------------------
function animateHeader() {
  const header = document.querySelector("header.header");

  // Validate if the header element exists
  if (!header) {
    return;
  }

  // GSAP animation for header from top to its actual position
  gsap.fromTo(
    header,
    { y: -400 },
    { y: 0, duration: 1, ease: "power2.out", delay: 1 }
  );
}
// -------------------------
// -------------------------
function animateHeroElements() {
  // Ensure the DOM is fully loaded before executing the animation
  const heroSection = document.querySelector(".hero-one"); // The container for the elements
  const scrollElement = heroSection
    ? heroSection.querySelector(".hero-one__scroll")
    : null;
  const socialElement = heroSection
    ? heroSection.querySelector(".hero-one__social")
    : null;
  const socialElement2 = heroSection
    ? heroSection.querySelector(".hero-two__social")
    : null;

  // Validate the required elements
  if (!heroSection) {
    return; // If heroSection doesn't exist, exit
  }

  // Animate hero-one__scroll if available
  if (scrollElement) {
    gsap.fromTo(
      scrollElement,
      { x: -400 },
      { x: 0, duration: 1, ease: "power2.out", delay: 1 }
    );
  }

  // Animate hero-one__social if available
  if (socialElement) {
    gsap.fromTo(
      socialElement,
      { x: 400 },
      { x: 0, duration: 1, ease: "power2.out", delay: 1 }
    );
  }

  // Animate hero-two__social if available
  if (socialElement2) {
    gsap.fromTo(
      socialElement2,
      { x: 400 },
      { x: 0, duration: 1, ease: "power2.out", delay: 1 }
    );
  }
}

function animateHeroElements2() {
  const heroSection = document.querySelector(".hero-two");
  const socialElement = heroSection
    ? heroSection.querySelector(".hero-two__social")
    : null;
  const thumbElement = heroSection
    ? heroSection.querySelector(".hero-two__thumb")
    : null;

  // Validate the required elements
  if (!heroSection || !socialElement || !thumbElement) {
    return;
  }

  gsap.fromTo(
    socialElement,
    { x: 400 },
    { x: 0, duration: 1.5, ease: "power2.out", delay: 1.3 }
  );
  gsap.fromTo(
    thumbElement,
    { scale: 0.3 },
    { scale: 1, duration: 1.5, ease: "power2.out", delay: 1.3 }
  );
}

// -------------------------
// -------------------------
function animateShapes() {
  const breadcrumbSection = document.querySelector(".breadcrumb__section");
  const shape1 = document.querySelector(".breadcrumb__section .shape-1");
  const shape2 = document.querySelector(".breadcrumb__section .shape-2");

  // Validate the dependencies (elements)
  if (!breadcrumbSection || !shape1 || !shape2) {
    return; // Exit if the section does not exist
  }

  // GSAP animation for shape-1 (coming from the top to its actual position)
  gsap.fromTo(
    shape1,
    { y: -400 }, // Start position (above the section)
    { y: 0, duration: 1, ease: "power2.out", delay: 1.6 }
  );

  // GSAP animation for shape-2 (coming from the bottom to its actual position)
  gsap.fromTo(
    shape2,
    { y: 400 }, // Start position (below the section)
    { y: 0, duration: 1, ease: "power2.out", delay: 1.6 }
  );
}
// -------------------------
// -------------------------
function itemPopup() {
  const items = document.querySelectorAll(".item-popup");

  if (items.length > 0) {
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  }
}

// -------------------------
// -------------------------
if (window.innerWidth >= 992) {
  gsap.utils.toArray(".service__single-item").forEach((card) => {
    const link = card.querySelector(".service__link");
    link.style.transformStyle = "preserve-3d";

    card.addEventListener("mouseenter", () => {
      // On hover, rotate the link
      gsap.to(link, {
        duration: 1,
        rotateX: -180,
        transformStyle: "preserve-3d",
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(link, {
        duration: 1,
        rotateX: 0,
        transformStyle: "preserve-3d",
        ease: "power2.out",
      });
    });
  });
}

// -------------------------
// -------------------------
// GSAP Fade Animation
function initGsapPopAnimations() {
  // Select all elements with the gsap-pop class
  const popElements = document.querySelectorAll(".gsap-pop");
  if (popElements.length > 0) {
    // Process each element
    const popItems = gsap.utils.toArray(".gsap-pop");
    popItems.forEach((item, i) => {

      
      // Default values
      let fade_direction = "bottom";
      let onscroll_value = 1;
      let duration_value = 1.15;
      let fade_offset = 150;
      let delay_value = 0.15;
      let ease_value = "power2.out";

      // Override with data attributes if provided
      if (item.getAttribute("data-offset")) {
        fade_offset = parseFloat(item.getAttribute("data-offset"));
      }
      if (item.getAttribute("data-duration")) {
        duration_value = parseFloat(item.getAttribute("data-duration"));
      }
      if (item.getAttribute("data-direction")) {
        fade_direction = item.getAttribute("data-direction");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = parseFloat(item.getAttribute("data-on-scroll"));
      }
      if (item.getAttribute("data-delay")) {
        delay_value = parseFloat(item.getAttribute("data-delay"));
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }

      // Set initial state based on direction
      let initialX = 0;
      let initialY = 0;

      // Handle all directions including diagonals
      switch (fade_direction) {
        case "top":
          initialY = -fade_offset;
          break;
        case "bottom":
          initialY = fade_offset;
          break;
        case "left":
          initialX = -fade_offset;
          break;
        case "right":
          initialX = fade_offset;
          break;
        case "top-left":
          initialY = -fade_offset;
          initialX = -fade_offset;
          break;
        case "top-right":
          initialY = -fade_offset;
          initialX = fade_offset;
          break;
        case "bottom-left":
          initialY = fade_offset;
          initialX = -fade_offset;
          break;
        case "bottom-right":
          initialY = fade_offset;
          initialX = fade_offset;
          break;
      }
      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      };

      // // Set initial state
      gsap.set(item, {
        y: initialY,
        x: initialX,
        opacity: 0,
      });

      // Create the animation that only triggers once on enter
      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        // start: "top 85%",
        once: true, // Only trigger once
        markers: false,
        onEnter: () => {
          if (onscroll_value === 1) {
            gsap.to(item, {
              y: 0,
              x: 0,
              opacity: 1,
              duration: duration_value,
              delay: delay_value,
              ease: ease_value,
            });
          }
        },
      });

      // // For elements with onscroll_value !== 1, animate immediately
      if (onscroll_value !== 1) {
        gsap.to(item, {
          y: 0,
          x: 0,
          opacity: 1,
          duration: duration_value,
          delay: delay_value,
          ease: ease_value,
        });
      }
    });
  }
}

// -------------------------
// -------------------------
function textMoveAnimation() {
let text_animation = gsap.utils.toArray(".move-anim");
if (text_animation) {
  text_animation.forEach((splitTextLine) => {
    var delay_value = 0.1;
    if (splitTextLine.getAttribute("data-delay")) {
      delay_value = splitTextLine.getAttribute("data-delay");
    }
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 85%",
        duration: 1,
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    gsap.set(splitTextLine, {
      perspective: 400,
    });
    const itemSplitted = new SplitType(splitTextLine, {
      type: "lines",
    });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: delay_value,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });
}
}
// -------------------------
// -------------------------
function ButtonHoverMove() {
  const hoverBtnItem = gsap.utils.toArray(".theme-btn");
  hoverBtnItem.forEach((btn) => {
    $(btn).mousemove(function (e) {
      callParallax(e, btn); // Pass the button element into the function
    });

    // Parallax function
    function callParallax(e, btn) {
      parallaxIt(e, btn, 60); // Apply parallax effect to the button
    }

    // Parallax effect
    function parallaxIt(e, target, movement) {
      var $this = $(target);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 1, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }

    // Reset position on mouse leave
    $(btn).mouseleave(function (e) {
      gsap.to(btn, 1, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
}
// -------------------------
// -------------------------
// if (window.innerWidth >= 992) {
//   gsap.to(".hero-slider", {
//     scrollTrigger: {
//       trigger: ".hero-one",
//       start: "50px top",
//       end: "bottom top",
//       pin: true,
//       scrub: 3,
//       markers: false,
//       invalidateOnRefresh: false,
//     },
//     x: "-50%",
//     ease: "power4.out",
//   });
// }
// -------------------------
// -------------------------
gsap.utils.toArray(".process__box").forEach((box) => {
  const shape = box.querySelector(".shape");

  gsap.set(shape, {
    xPercent: 65,
    yPercent: -67,
    scale: 0,
    transformStyle: "preserve-3d",
  });

  box.addEventListener("mouseenter", () => {
    gsap.to(shape, {
      duration: 0.6,
      xPercent: -24,
      yPercent: 17,
      scale: 1,
      ease: "power2.out",
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(shape, {
      duration: 0.6,
      xPercent: 65,
      yPercent: -67,
      scale: 0,
      ease: "power2.out",
    });
  });
});
// -------------------------
// -------------------------
function setupMouseMoveAnimation() {
  const movementWrappers = document.querySelectorAll(".movement-wrapper");

  if (!movementWrappers || movementWrappers.length === 0) {
    return;
  }

  // Maximum movement in pixels
  const maxMovement = 20;

  movementWrappers.forEach((wrapper) => {
    const moveItems = wrapper.querySelectorAll(".move-item");

    if (moveItems.length === 0) {
      return;
    }

    // Set initial position for move-items
    gsap.set(moveItems, { x: 0, y: 0 });

    wrapper.addEventListener("mousemove", (e) => {
      if (!e) return;

      // Get movement wrapper size and position
      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate movement as a percentage of wrapper size
      const moveX = (mouseX / rect.width - 0.5) * 2 * maxMovement;
      const moveY = (mouseY / rect.height - 0.5) * 2 * maxMovement;

      // Animate each move-item inside the current movement-wrapper
      moveItems.forEach((item) => {
        gsap.to(item, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Reset position when mouse leaves the movement-wrapper
    wrapper.addEventListener("mouseleave", () => {
      moveItems.forEach((item) => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  });
}
// -------------------------
// -------------------------
function animateElementRotation(selector) {
  const tl = gsap.timeline({ repeat: -1, yoyo: false, ease: "power1.inOut" });

  // Animation sequence for the image inside .hero-two__thumb img
  tl.to(selector, { rotation: 5, duration: 2 })
    .to(selector, { rotation: 0, duration: 2 })
    .to(selector, { rotation: -5, duration: 2 })
    .to(selector, { rotation: 0, duration: 2 })
    .to(selector, { rotation: 5, duration: 2 })
    .to(selector, { rotation: 0, duration: 2 })
    .to(selector, { rotation: -5, duration: 2 });
}

function horizontalScroll() {
  const slider = document.querySelector(".testimonial-slider");
  const slides = gsap.utils.toArray(".testimonial__slide");
  const container = document.querySelector(".testimonial__wrap");
  if (slider && slides && container) {


  // Calculate dimensions
  const slideWidth = slides[0].offsetWidth;
  const slidesToShow = 3; // Number of slides visible at once
  const slideGap = parseInt(window.getComputedStyle(slides[0]).gap) || 70;
  const totalWidth = (slideWidth + slideGap) * slides.length - slideGap;
  const visibleWidth = (slideWidth + slideGap) * slidesToShow - slideGap;
  const scrollDistance = totalWidth - visibleWidth;
  
  // Set initial slider width
  gsap.set(slider, { width: totalWidth });
  
  // Create the animation timeline
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: container,
          start: "top -180px",
          end: () => `+=${scrollDistance * 2}`, // Double the distance for scroll up
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
      }
  });
  
  // Animation for scroll down
  tl.to(slider, {
      x: -scrollDistance,
      ease: "none"
  });
}
  // // Animation for scroll up (back to start)
  // tl.to(slider, {
  //     x: 0,
  //     ease: "none"
  // });
}
  // -------------------------
  // -------------------------
  // videoSectionAnimation animation
function  videoSectionAnimation() {
  
  const video = document.querySelector('.video-player .video-player__video');
  const playButton = document.querySelector('.video-player .video-player__play-btn');
    if (video && playButton) {
    // Manual play/pause control
    playButton?.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.classList.add('disabled');
      } else {
        video.pause();
        playButton.classList.remove('disabled');
      }
    });
    video?.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playButton.classList.add('disabled');
      } else {
        video.pause();
        playButton.classList.remove('disabled');
      }
    });
    
    // Pause video when it ends (for non-looping videos)
    video?.addEventListener('ended', () => {
      playButton.classList.remove('disabled');
    });
    
    // Create timeline
    let videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".video-player",
        start: "top top",
        // end: "+=200%",
         end:'bottom top',
        scrub: 1,
        pin: true,
        pinSpacing:0,
        anticipatePin: 1,
        markers:false,
        onEnter: () => {
          if (video.currentTime > 0 && video.paused) {
            video.play();
            playButton.classList.add('disabled');
          }
        },
        onLeaveBack: () => {
          video.pause();
          playButton.classList.remove('disabled');
        },
        onUpdate: self => {
          if (video.paused && self.progress > 0.1 && self.progress < 0.9) {
            playButton.classList.remove('disabled');
          }
        }
      }
    });
    
    // Add animations
    videoTimeline
      .to(".video-player__wrap", {
        width: "100%",
        height: "100vh",
        borderRadius: 0,
        ease: "power3.inOut"
      })
      .to(".video-player__wrap video", {
        scale: 1.1,
        ease: "power2.out"
      }, "<0.2")
      .to(".video-player__play-btn", {
        opacity: 0,
        ease: "power1.inOut"
      }, "<");
    }
    
}

  // -------------------------
  // -------------------------
  // MinitTextReveal animation
function initTextReveal() {
  const e = document.querySelectorAll(".reveal-text");

  
  e.forEach((e) => {
    var t = new SplitType(e, {
      types: "words",
    });
    gsap.from(t.words, {
      scrollTrigger: {
        trigger: e,
        start: "top 80%",
        end: "top -10%",
        scrub: !0,
        pin: '.reveal-text-end',
        pinSpacing: 0,
      },
      opacity: 0.2,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  });
}
  // -------------------------
  // -------------------------
  // Mouser cursor animation

function loadCursor(params) {
    
  
const cursor = document.querySelector("#cursor");
 const cursorBorder = document.querySelector("#cursor-border");
 const cursorPos = { x: 0, y: 0 };
 const cursorBorderPos = { x: 0, y: 0 };
 
 document.addEventListener("mousemove", (e) => {
   cursorPos.x = e.clientX;
   cursorPos.y = e.clientY;
 
   cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
 });
 
 requestAnimationFrame(function loop() {
   const easting = 8;
   cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
   cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
 
   cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
   requestAnimationFrame(loop);
 });
}

// Scroll Header fixed 
function scrollHeader(){
  let lastScroll = 0;
  const header = document.getElementById("header");

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const currentScroll = self.scroll();

      // Add sticky class once scrolled a bit
      if (currentScroll > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }

      // Show/hide header on scroll direction
      if (currentScroll > lastScroll && currentScroll > 200) {
        // scrolling down
        header.classList.add("hide");
      } else {
        // scrolling up
        header.classList.remove("hide");
      }

      lastScroll = currentScroll;
    }
  });
}


// Counter Animation 
 // Initialize all counters
 function initCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
      const target = parseFloat(counter.dataset.target) || 0;
      const duration = parseFloat(counter.dataset.duration) || 2;
      const prefix = counter.dataset.prefix || "";
      const suffix = counter.dataset.suffix || "";
      const separator = counter.dataset.separator || "";
      const decimalPlaces = parseInt(counter.dataset.decimal) || 0;
      const delay = parseFloat(counter.dataset.delay) || 0;
  
      
      // Create a data object for GSAP to animate
      const obj = { value: 0 };
      
      gsap.to(obj, {
          value: target,
          duration: duration,
          delay: delay,
          ease: "power1.out",
          scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none none",
             // markers: true // Uncomment to debug trigger positions
          },
          onUpdate: function() {
              // Format the number
              let formattedValue;
              
              if (decimalPlaces > 0) {
                  formattedValue = obj.value.toFixed(decimalPlaces);
              } else {
                  formattedValue = Math.floor(obj.value);
              }
              
              // Add thousand separators
              if (separator) {
                  formattedValue = formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
              }
              
              // Update the element
              counter.innerText = prefix + formattedValue + suffix;
          }
      });
  });
}

 function initTypinganimation() {
  
  const textElement = document.getElementById('typing-text');
  //const phrases=JSON.parse(textElement.dataset.text || '[""]')
   const phrases = ["Web Developer", "Web Designer"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;
  
  function type() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
          // Delete characters
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
      } else {
          // Type characters
          textElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
      }
      
      // Determine typing speed
      let typeSpeed = 150;
      
      if (isDeleting) {
          typeSpeed /= 2; // Faster when deleting
      }
      
      // When word is complete
      if (!isDeleting && charIndex === currentPhrase.length) {
          isEnd = true;
          typeSpeed = 2000; // Pause at end
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typeSpeed = 500; // Pause before typing next
      }
      
      setTimeout(type, typeSpeed);
  }
 }

 function fllterFlipAnimation() {

    const filterBtns = document.querySelectorAll('.filter-nav__item');
    const filterMarker = document.querySelector('.filter-nav__marker');
    // const filterContent = document.querySelector('.filter-content');
    let activeFilter = 'all';
    
    // Initialize marker position
    const activeBtn = document.querySelector('.filter-nav__item.active');
    
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', function() {
       

        const newFilter = this.dataset.filter;
        console.log(newFilter);
        
        if (newFilter === activeFilter) return;
        const contentState = Flip.getState('.filter-item', {targets: true});
        
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeFilter = newFilter;
        console.log(btn.offsetHeight);
        
        filterMarker.style.width = `${btn.offsetWidth}px`;
        filterMarker.style.height = `${btn.offsetHeight}px`;
        filterMarker.style.transform = `translateX(${btn.offsetLeft}px)`;
        // filterMarker.style.transform = `translateY(${btn.offsetTop}px)`;
  
        
        // Filter items
        document.querySelectorAll('.filter-item').forEach(item => {
          item.style.display = (newFilter === 'all' || item.dataset.category === newFilter) 
            ? 'block' 
            : 'none';
        });
        
        // Create timeline for coordinated animations
        const filterTl = gsap.timeline();
        

        // Animate content with Flip
        filterTl.add(
          Flip.from(contentState, {
            targets: '.filter-item',
            duration: 0.6,
            ease: "power1.inOut",
            stagger: 0.05,
            scale: true,
            absolute: true,
            onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1}),
            onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 0.5})
            // onEnter: elements => gsap.from(elements, {opacity: 0, y: 20}),
            // onLeave: elements => gsap.to(elements, {opacity: 0, y: -20})
          }),

        );
      });
    });
  };
  


// Start the typing effect
// setTimeout(type, 1000);

/* ======================== GSAP End ======================== */
// initScrollbar();
// initTypinganimation();
document.addEventListener("DOMContentLoaded", function () {
  // animateHeader();
   loadCursor();
   scrollHeader()
   videoSectionAnimation();
   elasticBounceAnimation();
   fllterFlipAnimation()
//   onLoadGSAPEffect();
//   setCurrentYear();
  
//   initializeBlogHoverEffect(".blog-box", ".blog-box-thumbs img");
//   movementEffect();

//   initServiceToggle();

  // GSAP
   setupMouseMoveAnimation();
//   animateElementRotation(".hero-two__thumb img");
  if (window.innerWidth >= 767){
      horizontalScroll();
  }else{
    initializeSwiper(".testimonial__slider-active", testimonialSliderOptions);
  }
  initTextReveal();
  textMoveAnimation()
  itemPopup();
  initGsapPopAnimations();
  initCounters();
  setTimeout(function () {
    ScrollTrigger.refresh();
  }, 2000);
//   logAsciiArt();
});
function onLoadGSAPEffect() {

  elasticBounceAnimation();
  animateShapes();
  animateHeader();
  animateHeroElements();
  animateHeroElements2();
}
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
