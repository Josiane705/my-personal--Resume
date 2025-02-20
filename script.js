// Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent!";
        formMessage.style.color = "green";
        form.reset();
    }
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});
document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

// Modal
const modal = document.getElementById('modal');
const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('close');
modalOpen.addEventListener('click', () => modal.style.display = 'flex');
modalClose.addEventListener('click', () => modal.style.display = 'none');


// Image slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
