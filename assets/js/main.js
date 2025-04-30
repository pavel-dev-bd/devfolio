
function initPreloader() {
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      // Add fade-up animation class
      preloader.classList.add("fade-up");

      // Handle close button if it exists
      const preloaderCls = document.querySelector(".preloaderCls");
      if (preloaderCls) {
        preloaderCls.addEventListener("click", function (e) {
          e.preventDefault();
          preloader.style.display = "none";
        });
      }
    }
  });
}
function setBackgroundImages() {
  var elements = document.querySelectorAll("[data-bg-src]");
  if (elements?.length > 0) {
    elements.forEach(function (element) {
      var src = element.getAttribute("data-bg-src");
      element.style.backgroundImage = "url(" + src + ")";
      element.classList.add("background-image");
      element.removeAttribute("data-bg-src");
    });
  }
}
function disableInspectTools() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Right-click has been disabled!");
  });

  document.addEventListener("keydown", (event) => {
    // Disable F12 (DevTools)
    if (event.key === "F12") {
      event.preventDefault();
    }

    // Disable Ctrl+Shift+I (DevTools)
    if (
      (event.ctrlKey && event.shiftKey && event.key === "I") ||
      (event.ctrlKey && event.shiftKey && event.key === "i")
    ) {
      event.preventDefault();
    }

    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === "U") {
      event.preventDefault();
    }

    // Disable Ctrl+Shift+U (View Source in some browsers)
    if (event.ctrlKey && event.shiftKey && event.key === "U") {
      event.preventDefault();
    }
  });
}
const brandSliderOptions = {
  loop: true,
  speed: 2000,
  autoplay: {
      delay: 1,
  },
  effect: "slide",
  navigation: false,
  slidesPerView: 1,
  breakpoints: {
      // When the viewport width is 320px or more
      320: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      // When the viewport width is 480px or more
      480: {
          slidesPerView: 3,
          spaceBetween: 15,
      },
      // When the viewport width is 768px or more
      768: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
      // When the viewport width is 1024px or more
      1024: {
          slidesPerView: 5,
          spaceBetween: 100,
      },

  },
};

const testimonialSliderOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  effect: "slide",
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  autoplay:false,
  navigation: {
      nextEl: ".testimonial__next",
      prevEl: ".testimonial__prev",
  },
  breakpoints: {
      // When the viewport width is 768px or more
      768: {
          slidesPerView: 1.5,
          spaceBetween: 15,
      },
      992: {
          slidesPerView: 1.5,
          spaceBetween: 20,
      },
      // When the viewport width is 1024px or more
      1300: {
          slidesPerView: 2.5,
          spaceBetween: 30,
      },
  },
};

function initializeSwiper(containerSelector, options) {
  // Check if the container exists
  const container = document.querySelector(containerSelector);
  if (!container) {
      return;
  }

  // Pagination: If 'pagination' is true or a custom class, enable pagination
  if (options.pagination) {
      options.pagination = {
          el: options.pagination === true
              ? `${containerSelector} .swiper-pagination`
              : options.pagination,
          clickable: true,
      };
  } else {
      delete options.pagination; // If false, remove pagination
  }

  // Navigation: If 'navigation' is true or a custom class, enable navigation
  if (options.navigation) {
      options.navigation = {
          nextEl: options.navigation === true
              ? `${containerSelector} .swiper-button-next`
              : options.navigation.nextEl,
          prevEl: options.navigation === true
              ? `${containerSelector} .swiper-button-prev`
              : options.navigation.prevEl,
      };
  } else {
      delete options.navigation; // If false, remove navigation
  }
  // Initialize Swiper with the final options
  return new Swiper(containerSelector, options);
}

function initializeVideoPlayers(videoSelector, playBtnSelector) {
    const videos = document.querySelectorAll(videoSelector);
    const playBtns = document.querySelectorAll(playBtnSelector);
  
    videos.forEach((video, index) => {
      const playBtn = playBtns[index];
      if (video && playBtn) {
        video.pause();
  
        playBtn.addEventListener("click", () => {
          if (video.paused) {
            video.play();
            playBtn.classList.add("disabled");
            video.classList.add("pointer");
          } else {
            video.pause();
            playBtn.classList.remove("disabled");
            video.classList.remove("pointer");
          }
        });
  
        video.addEventListener("click", () => {
          if (playBtn.classList.contains("disabled")) {
            video.pause();
            playBtn.classList.remove("disabled");
            video.classList.remove("pointer");
          }
        });
      }
    });
  }
 function mobileMenu() {
    if ($("#navbarNav").length && $("#mobile-nav").length) {
      let mobileNavContainer = $("#mobile-nav");
      mobileNavContainer.html($("#navbarNav").clone());
      let arrow = $("#mobile-nav .has-menu > a");

      arrow.each(function () {
        let self = $(this);
        let arrowBtn = document.createElement("BUTTON");
        arrowBtn.classList.add("dropdown-toggle-btn");
        arrowBtn.innerHTML = "<i class='fa-solid fa-angle-down '></i>";

        self.append(function () {
          return arrowBtn;
        });

        self.on("click", function (e) {
          e.preventDefault();
          let self = $(this);
          self.toggleClass("dropdown-opened");

          self.parent().children(".sub-menu").toggleClass("expanded");
         
         
          //  self.parent().children(".sub-menu").slideToggle();
        });
      });
    }

    var menu = $(".toggle-sidebar");
    menu.on("click", function (e) {
      e.preventDefault();
      $(".mobile-menu").toggleClass("visible");
    });
    $(".menu-backdrop").on("click", function () {
      $(".mobile-menu").toggleClass("visible");
    });
}; 
function portfolioHover() {
  const portfolio_animation_wrap =
    document.querySelectorAll(".portfolio__item");
  const portfolio_titles = document.querySelector(".portfolio__titles");
//  console.log(portfolio_animation_wrap, portfolio_titles);
 
  if (portfolio_titles) {
  
    
    portfolio_animation_wrap.forEach((element) => {
      element.addEventListener("mousemove", (e) => {
        let title = element.getAttribute("data-title");
        let category = element.getAttribute("data-category");
        if (title) {
          
          portfolio_titles.classList.add("visible");
          portfolio_titles.innerHTML = `<span>${category}</span><p>${title}</p>`;
        }
        portfolio_titles.style.left = `${e.clientX + 15}px`; // Adjust offset as needed
        portfolio_titles.style.top = `${e.clientY + 15}px`; // Adjust offset as needed
      });

      element.addEventListener("mouseleave", () => {
        portfolio_titles.classList.remove("visible");
      });
    });
  }
};
function backToTop() {
  // Get the SVG path element for the progress indicator
  const progressPath = document.querySelector(".progress-wrap path");
  const pathLength = progressPath.getTotalLength();
  
  // Set up initial stroke properties for the path
  progressPath.style.transition = "none";
  progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  progressPath.style.strokeDashoffset = pathLength;
  
  // Force a reflow to ensure transitions work properly
  progressPath.getBoundingClientRect();
  
  // Set up the transition for smooth animation
  progressPath.style.transition = "stroke-dashoffset 10ms linear";
  
  // Function to update progress indicator as user scrolls
  const updateProgress = function() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progressOffset = pathLength - (scrollPosition * pathLength / scrollHeight);
      progressPath.style.strokeDashoffset = progressOffset;
  };
  
  // Initialize and set up scroll event listener
  updateProgress();
  window.addEventListener("scroll", updateProgress);
  
  // Show/hide progress button based on scroll position
  window.addEventListener("scroll", function() {
      const progressWrap = document.querySelector(".progress-wrap");
      if (window.scrollY > 50) {
          progressWrap.classList.add("active-progress");
      } else {
          progressWrap.classList.remove("active-progress");
      }
  });
  
  // Click handler for smooth scroll to top
  document.querySelector(".progress-wrap").addEventListener("click", function(event) {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      event.preventDefault();
  });

}
function filterNav() {
  const filterBtns = document.querySelectorAll('.filter-nav__item');
  const filterMaker = document.querySelector('.filter-nav__marker');
  const filterNav = document.querySelector('.filter-nav__nav');
  
  filterBtns.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      filterBtns.forEach((item)=>item.classList.remove('active'));
      item.classList.add('active');
      filterMaker.style.width = `${item.offsetWidth}px`;
      filterMaker.style.transform = `translateX(${item.offsetLeft}px)`;
    });
  });
}
initPreloader();

function TemplateHeaderFooter(params) {

    // Load header
    fetch('templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            setActiveLink();
        });

    // Load footer
    fetch('templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
          // Load footer
    fetch('templates/footer-copy.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-copy').innerHTML = data;
    });


// Helper function to highlight current page in nav
function setActiveLink() {
    const currentPage = location.pathname.split('/').pop();
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
}


document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper(".brand-slider", brandSliderOptions);
  initializeVideoPlayers('.video-player' ,'video-player__play-btn')
  backToTop();
  mobileMenu();
  portfolioHover();
  setBackgroundImages();
  // filterNav();
  // disableInspectTools()
});