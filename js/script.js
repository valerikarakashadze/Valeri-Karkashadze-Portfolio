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

  const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});

// ---------------  window title changer

let pageTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hire Me";
});
window.addEventListener("focus", () => {
    document.title = pageTitle;
})


// ------- Slider

const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;
const size = slide[0].clientWidth;
let isMouseDown = false;
let mouseDownX = 0;

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

slides.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  mouseDownX = event.clientX;
  slides.style.transition = "none";
});

slides.addEventListener("mouseup", () => {
  isMouseDown = false;
});

slides.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    const deltaX = event.clientX - mouseDownX;
    slides.style.transform = `translateX(${-(counter * size) + deltaX}px)`;
  }
});

slides.addEventListener("touchstart", (event) => {
  isMouseDown = true;
  mouseDownX = event.touches[0].clientX;
  slides.style.transition = "none";
});

slides.addEventListener("touchend", () => {
  isMouseDown = false;
});

slides.addEventListener("touchmove", (event) => {
  if (isMouseDown) {
    const deltaX = event.touches[0].clientX - mouseDownX;
    slides.style.transform = `translateX(${-(counter * size) + deltaX}px)`;
  }
});

// ----- scroll animation

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// --------- navigation button 

$('.round').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});

// ------------- animation fill
const bars = document.querySelectorAll('.bars-box');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelector('.html-bar').classList.add('fill-html');
      observer.unobserve(entry.target);
    }
  });
}, options);

bars.forEach(function(bar) {
  observer.observe(bar);
});

// emailjs contact 

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.send("service_23qbwa1", "template_5vd4ypv", {
      "from_name": document.getElementById("contact-form").elements.namedItem("Name").value,
      "from_email": document.getElementById("contact-form").elements.namedItem("Email").value,
      "message_html": document.getElementById("contact-form").elements.namedItem("Message").value
  })
  .then(function(response) {
      if (response.status === 200) {
        var alertElement = document.querySelector('.alert');
        alertElement.innerHTML = "Thank you for contacting me! I have received your message and I will get back to you as soon as possible!";
        alertElement.classList.add('show');
        setTimeout(function() {
          alertElement.classList.remove('show');
        }, 5000); // 10000 ms = 10 seconds
      } else {
        alert("Oops! Something went wrong and I couldn't send your message. Please try again later.");
      }
      console.log("SUCCESS. Status: %d, Text: %s", response.status, response.text);
  }, function(err) {
      console.log("FAILED. Error: ", err);
  });
});



