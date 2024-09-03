// new Typed('#text', {
//   strings: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   delaySpeed: 1000,
//   loop: true
// });

new Typed('#text', {
  strings: ["Web Developer", "Web Designer", "UI/UX Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  delaySpeed: 1000,
  loop: true
});


var bars = document.querySelector('.Bars')

// Form valid //

function data() {
  var a = document.getElementById("n1").value;
  var b = document.getElementById("n2").value;
  var c = document.getElementById("n3").value;
  var d = document.getElementById("n4").value;

  if (a == "" || b == "" || c == "" || d == "") {
    alert("All fields are mendatory");
    return false;
  }
  else {
    true;
  }
}


// Loder animation js type // 

let loeader = document.querySelector("#loader")
setTimeout(function () {
  loeader.style.top = "-100%"
}, 5000)

// Click navbar //

// function myFunction(x) {
//   // Toggle 'change' class on the Bars element
//   x.classList.toggle("change");

//   // Select the navbar element
//   var navbar = document.querySelector('.navbar');

//   // Toggle the display of the navbar
//   navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
// }

function myFunction(x) {
  // Toggle 'change' class on the Bars element
  x.classList.toggle("change");

  // Select the navbar element
  var navbar = document.querySelector('.navbar');

  // Toggle 'show' class to trigger the scale effect
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
    // Delay setting display to none to allow transition to complete
    setTimeout(function () {
      navbar.style.display = 'none';
    }, 1000); // Match transition duration
  } else {
    navbar.style.display = 'block';
    setTimeout(function () {
      navbar.classList.add('show');
    }, 10); // Slight delay to ensure display block is applied
  }
}


// Header is-sticky top //

const header = document.querySelector(".header_section");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 75) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});