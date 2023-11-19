// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// emailjs contact 

const contactForm = document.getElementById("contact-form");
  const alertBox = document.querySelector(".alert");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    emailjs.sendForm("service_23qbwa1", "template_5vd4ypv", contactForm)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alertBox.innerHTML = "Your message has been sent.";
        alertBox.classList.add("alert--success");
        contactForm.reset();
      }, (error) => {
        console.log("FAILED...", error);
        alertBox.innerHTML = "An error occurred while sending your message.";
        alertBox.classList.add("alert--error");
      });
  });

// -------------------  Scroll back to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
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

// --------------- send to github

const githubBtn = document.getElementById('github-btn');

  githubBtn.addEventListener('click', function() {
    window.open('https://github.com/valerikarakashadze?tab=repositories', '_blank');
  });



     // Age calculator 
// Get the birthdate from the HTML
const birthdateStr = "2002-06-05";

// Calculate the age
const birthdate = new Date(birthdateStr);
const ageDiffMs = Date.now() - birthdate.getTime();
const ageDate = new Date(ageDiffMs);
const age = Math.abs(ageDate.getUTCFullYear() - 1970);

// Update the HTML with the age
document.querySelector('#age').textContent = age;
