	//  -------------------  Sticky Navbar
  
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // ------------------  Dark Mode

    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

// -------------------  Scroll back to top

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#0f0c27 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// --------------- send to github

const githubBtn = document.getElementById('github-btn');

  githubBtn.addEventListener('click', function() {
    window.open('https://github.com/valerikarakashadze?tab=repositories', '_blank');
  });

  // ----------- cursor

  const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// ---------------  window title changer

let pageTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hire Me";
});
window.addEventListener("focus", () => {
    document.title = pageTitle;
})


// -------------- Hammer.js

let isDragging = false;
let startPosition;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselWidth = carouselWrapper.offsetWidth;
const slideWidth = carouselSlides[0].offsetWidth;
const numSlides = carouselSlides.length;
const maxTranslate = (numSlides - 1) * slideWidth;

const onTouchStart = (event) => {
  if (event.touches.length === 1) {
    startPosition = event.touches[0].clientX;
    isDragging = true;
    cancelAnimationFrame(animationID);
  }
};

const onTouchMove = (event) => {
  if (isDragging) {
    const currentPosition = event.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
};

const onTouchEnd = () => {
  if (isDragging) {
    isDragging = false;
    prevTranslate = currentTranslate;
    requestAnimationFrame(slide);
  }
};

const slide = () => {
  carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(slide);
};

// Add the touch event listeners to the carousel
if ('ontouchstart' in window) {
  carouselWrapper.addEventListener('touchstart', onTouchStart);
  carouselWrapper.addEventListener('touchmove', onTouchMove);
  carouselWrapper.addEventListener('touchend', onTouchEnd);
} else {
  carouselWrapper.addEventListener('mousedown', (event) => {
    event.preventDefault();
    startPosition = event.clientX;
    isDragging = true;
    cancelAnimationFrame(animationID);
  });

  carouselWrapper.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (isDragging) {
      const currentPosition = event.clientX;
      currentTranslate = prevTranslate + currentPosition - startPosition;
    }
  });

  carouselWrapper.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      prevTranslate = currentTranslate;
      requestAnimationFrame(slide);
    }
  });
}

function moveCarousel(direction) {
  let currentSlide = Math.round(-currentTranslate / slideWidth);
  
  if (direction === 'next') {
    currentSlide++;
    if (currentSlide > numSlides - 1) {
      currentSlide = 0; // reset to first slide
    }
  } else {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = numSlides - 1; // reset to last slide
    }
  }

  currentTranslate = -currentSlide * slideWidth;

  carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

let currentSlide = 0;
const totalSlides = 15; // total number of slides
const slideWidths = document.querySelector('.carousel-slide').offsetWidth;

function moveCarousel(direction) {
  if (direction === 'next') {
    currentSlide++;
    if (currentSlide > totalSlides - 1) {
      currentSlide = 0; // reset to first slide
    }
  } else {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1; // reset to last slide
    }
  }

  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const maxTranslate = (totalSlides - 1) * slideWidths;
  let currentTranslate = -currentSlide * slideWidths;

  if (currentTranslate > 0) {
    currentTranslate = -(maxTranslate % carouselWidth);
  } else if (currentTranslate < -(maxTranslate % carouselWidth)) {
    currentTranslate = 0;
  }

  carouselWrapper.style.transform = `translateX(${currentTranslate}px)`;
}




// --------------- auto slider

let intervalID;

function startAutoSlider() {
  intervalID = setInterval(function() {
    moveCarousel('next');
  }, 5000); // change the interval time as desired
}

function stopAutoSlider() {
  clearInterval(intervalID);
}

// start auto slider when the page loads
window.addEventListener('load', function() {
  startAutoSlider();
});

// stop auto slider when the user interacts with the carousel
carouselWrapper.addEventListener('mousedown', stopAutoSlider);
carouselWrapper.addEventListener('touchstart', stopAutoSlider);

// restart auto slider when the user stops interacting with the carousel
carouselWrapper.addEventListener('mouseup', startAutoSlider);
carouselWrapper.addEventListener('touchend', startAutoSlider);

// ------------- RESET

const resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', () => {
  // Reset the carousel to the first slide
  currentTranslate = 0;
  prevTranslate = 0;
  slide();
});
