	// Sticky Navbar
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
     
    // Dark Mode
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

    

// Get the "Load More" button, the "Load Less" button, and the services content container
const loadMoreBtn = document.getElementById("load-more");
const loadLessBtn = document.getElementById("load-less");
const servicesContent = document.querySelector(".services-content");

// Get all the services boxes
const servicesBoxes = servicesContent.querySelectorAll(".services-box");

// Set the initial number of visible boxes to 3
let visibleBoxes = 3;

// Show/hide boxes based on the number of visible boxes
function showHideBoxes() {
  // Hide all boxes first
  servicesBoxes.forEach((box) => {
    box.classList.add("hidden");
  });

  // Show the specified number of boxes
  for (let i = 0; i < visibleBoxes; i++) {
    servicesBoxes[i].classList.remove("hidden");
  }

  // If all boxes are visible, hide the "Load More" button and show the "Load Less" button
  if (visibleBoxes >= servicesBoxes.length) {
    loadMoreBtn.classList.add("hidden");
    loadLessBtn.classList.remove("hidden");
  } else {
    loadMoreBtn.classList.remove("hidden");
    loadLessBtn.classList.add("hidden");
  }

  // If no boxes are visible, hide the "Load Less" button
  if (visibleBoxes <= 3) {
    loadLessBtn.classList.add("hidden");
  } else if (visibleBoxes >=13){
    loadLessBtn.classList.remove("hidden");
  }
}

// Call the function initially to show the first 3 boxes
showHideBoxes();

// When the "Load More" button is clicked, increase the number of visible boxes
loadMoreBtn.addEventListener("click", () => {
  visibleBoxes += 3;
  showHideBoxes();
  
  // Hide the "Load More" button and show the "Load Less" button if all boxes are visible
  if (visibleBoxes >= servicesBoxes.length) {
    loadMoreBtn.classList.add("hidden");
    loadLessBtn.classList.remove("hidden");
  }
});

// When the "Load Less" button is clicked, show only the initial 3 boxes
loadLessBtn.addEventListener("click", ()=> {
  visibleBoxes = 3;
  showHideBoxes();
  
  // Hide the "Load Less" button and show the "Load More" button
  loadLessBtn.classList.add("hidden");
  loadMoreBtn.classList.remove("hidden");
});

// Hide all boxes except for the initial 3 on page load
for (let i = 3; i < servicesBoxes.length; i++) {
  servicesBoxes[i].classList.add("hidden");
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
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// send to github

const githubBtn = document.getElementById('github-btn');

  githubBtn.addEventListener('click', function() {
    window.open('https://github.com/valerikarakashadze?tab=repositories', '_blank');
  });

  // cursor
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

// Page title changer

let pageTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hire Me";
});
window.addEventListener("focus", () => {
    document.title = pageTitle;
})
