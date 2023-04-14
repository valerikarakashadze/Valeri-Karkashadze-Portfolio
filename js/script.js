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
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;
const size = slide[0].clientWidth;

slides.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= slide.length - 1) return;
  slides.style.transition = "transform 0.3s ease-in-out";
  counter++;
  slides.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slides.style.transition = "transform 0.3s ease-in-out";
  counter--;
  slides.style.transform = "translateX(" + -size * counter + "px)";
});

slides.addEventListener("transitionend", () => {
  if (slide[counter].classList.contains("last-clone")) {
    slides.style.transition = "none";
    counter = slide.length - 2;
    slides.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (slide[counter].classList.contains("first-clone")) {
    slides.style.transition = "none";
    counter = slide.length - counter;
    slides.style.transform = "translateX(" + -size * counter + "px)";
  }
});



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


// ---------- Scroll
// create a new script element
var srScript = document.createElement('script');
// set the source of the script to the ScrollReveal library
srScript.src = 'https://unpkg.com/scrollreveal';
// append the script to the document body
document.body.appendChild(srScript);
ScrollReveal().reveal('.cbp_tmlabel', {
  reset: true,
  duration: 1000,
  origin: 'left',
  distance: '50px',
  viewFactor: 0.5
});


// --------- button 

$('.round').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});