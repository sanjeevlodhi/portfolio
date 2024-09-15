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
  x.classList.toggle("change");

  var navbar = document.querySelector('.navbar');

  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
    setTimeout(function () {
      navbar.style.display = 'none';
    }, 1000);
  } else {
    navbar.style.display = 'block';
    setTimeout(function () {
      navbar.classList.add('show');
    }, 10);
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


// Form post valid
// Form valid

// const scriptURL = ''

// const form = document.forms['contact-form']

// fprm.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => alert("Thank you! your form is submitted successfully."))
//     .then(() => { winsow.location.reload(); })
//     .catch(error => console.error('Error!', error.message))
// })
