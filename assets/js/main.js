// Mobile menu trigger
const mobileMenu = document.getElementById("mobileMenu");

function handleMenuTrigger() {
  if (mobileMenu.classList.contains('mobile-menu--visible')) {
    mobileMenu.classList.remove('mobile-menu--visible');
  } else {
    mobileMenu.classList.add('mobile-menu--visible');
  }
}

window.onresize = function(){
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  if (width > 767) {
    mobileMenu.classList.remove('mobile-menu--visible');
  }
};

// Job list item trigger
const acc = document.getElementsByClassName("jobs__job-title");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.parentNode.classList.toggle("jobs__post--active");
  });
}
