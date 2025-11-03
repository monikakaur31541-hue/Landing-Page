// Modal for program details
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

const servicesData = {
  1: {
    title: "Mindfulness Workshop",
    desc: "Learn guided breathing, focus techniques, and mindfulness practices to achieve inner calm and positivity."
  },
  2: {
    title: "Stress Management",
    desc: "Discover how to manage work-life pressure through stress-relief exercises and relaxation strategies."
  },
  3: {
    title: "Therapy Sessions",
    desc: "One-on-one therapy with certified professionals to help you navigate emotional challenges safely."
  }
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-service");
    modalTitle.textContent = servicesData[id].title;
    modalDesc.textContent = servicesData[id].desc;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Testimonials rotation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}

setInterval(showNextTestimonial, 4000);
// Countdown Timer Script
const eventDate = new Date("Dec 10, 2025 09:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `
    <div><span>${days}</span><small>Days</small></div>
    <div><span>${hours}</span><small>Hours</small></div>
    <div><span>${minutes}</span><small>Minutes</small></div>
    <div><span>${seconds}</span><small>Seconds</small></div>
  `;
}, 1000);
// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');
  });
});
// Add glow on click
document.querySelectorAll('img').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('glow');
    setTimeout(() => icon.classList.remove('glow'), 500); // glow lasts 0.5 sec
  });
});
// About Me Modal
const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.querySelector(".close-about");

aboutBtn.addEventListener("click", () => {
  aboutModal.style.display = "flex";
});

closeAbout.addEventListener("click", () => {
  aboutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});
// Smooth Page Transitions
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  // When clicking internal links, fade out before navigation
  document.querySelectorAll('a[href]').forEach(link => {
    const url = link.getAttribute('href');
    if (url && !url.startsWith('#') && !url.startsWith('mailto')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = url;
        }, 400); // delay for animation
      });
    }
  });
});
// Add this to script.js
document.body.addEventListener('mousemove', (e) => {
  let light = document.querySelector('.cursor-light');
  if (!light) {
    light = document.createElement('div');
    light.classList.add('cursor-light');
    document.body.appendChild(light);
  }
  light.style.left = `${e.pageX}px`;
  light.style.top = `${e.pageY}px`;
});
// Newsletter Form Functionality
document.querySelectorAll('.newsletter').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload

    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();

    if (email === "" || !email.includes("@")) {
      showSubscribeMessage("Please enter a valid email address 💌", "error", form);
    } else {
      // Simulate successful subscription
      showSubscribeMessage("Thank you for subscribing! 🌸", "success", form);
      input.value = ""; // clear field
    }
  });
});

function showSubscribeMessage(text, type, form) {
  let msg = form.nextElementSibling;
  if (!msg || !msg.classList.contains('subscribe-message')) {
    msg = document.createElement('div');
    msg.classList.add('subscribe-message');
    form.insertAdjacentElement('afterend', msg);
  }

  msg.textContent = text;
  msg.style.color = (type === "error") ? "#ff3366" : "#009933";
  msg.style.opacity = "1";

  // Fade out message after 3 seconds
  setTimeout(() => {
    msg.style.opacity = "0";
  }, 3000);
}
