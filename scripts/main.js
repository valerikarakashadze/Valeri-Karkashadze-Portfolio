let pageTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hire Me";
});
window.addEventListener("focus", () => {
    document.title = pageTitle;
})


document.addEventListener("DOMContentLoaded", function(){
  const ageDisplay = document.getElementById("age");

  function calculateAge() {
    const birthday = new Date("2002-05-06");
    const ageInMilliseconds = Date.now() - birthday.getTime();
    const ageInYears = ageInMilliseconds / 31536000000;
    ageDisplay.innerHTML = Math.floor(ageInYears);
  }

  calculateAge();
  setInterval(calculateAge, 31536000000);
});



$(document).ready(function() {
  AOS.init( {
   
  }); 
});


$('a.smooth-scroll')
.click(function(event) {
 
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
    if (target.length) {
      
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
});

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

