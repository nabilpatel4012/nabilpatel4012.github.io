function updateIcons(isDarkMode) {
  const homeIcon = document.getElementById("homeIcon");
  const heartIcon = document.getElementById("heartIcon");
  const loveIcon = document.getElementById("loveIcon");
  const hamburgerIcon = document.getElementById("hamburgerImage");
  const closeIcon = document.getElementById("closeImage");
  const downloadIcon = document.getElementById("downloadImage");
  const arrowIcon = document.getElementById("arrowImage");
  const curvedLineIcon = document.getElementById("curvedLineImage");

  if (isDarkMode) {
    homeIcon.src = "assets/favicon-light.svg";
    heartIcon.src = "assets/heart-light.svg";
    loveIcon.src = "assets/love-light.svg";
    hamburgerIcon.src = "assets/hamburger-light.svg";
    closeIcon.src = "assets/cross-light.svg";
    downloadIcon.src = "assets/download-light.svg";
    arrowIcon.src = "assets/arrow-light.svg";
    curvedLineIcon.src = "assets/curved-underline-light.svg";
  } else {
    homeIcon.src = "assets/favicon.svg";
    heartIcon.src = "assets/heart.svg";
    loveIcon.src = "assets/love.svg";
    hamburgerIcon.src = "assets/hamburger.svg";
    closeIcon.src = "assets/cross.svg";
    downloadIcon.src = "assets/download.svg";
    arrowIcon.src = "assets/arrow.svg";
    curvedLineIcon.src = "assets/curved-underline.svg";
  }
}
function toggleTheme() {
  const html = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const mobileThemeButton = document.querySelector(".mobile-theme-toggle");

  // Toggle dark mode class
  html.classList.toggle("dark-mode");

  // Update button text based on current theme
  if (html.classList.contains("dark-mode")) {
    themeButton.textContent = "light mode (blinding!!)";
    mobileThemeButton.textContent = "light mode (blinding!!)";
    // Store preference in localStorage
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "dark mode (why not?)";
    mobileThemeButton.textContent = "dark mode (why not?)";
    // Store preference in localStorage
    localStorage.setItem("theme", "light");
  }
  const isDarkMode = html.classList.contains("dark-mode");
  updateIcons(isDarkMode);
}
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (event) {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll effect to project cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".project-card, .experience-item, .skill-category")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // Mobile Navigation Toggle
  window.toggleMobileNav = function () {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
  };

  // Close mobile nav when clicking on overlay
  document.getElementById("mobileNav").addEventListener("click", function (e) {
    if (e.target === this) {
      toggleMobileNav();
    }
  });

  const heartImages = document.querySelectorAll(".heart-image");
  let currentIndex = 0;

  function cycleHearts() {
    heartImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % heartImages.length;
    heartImages[currentIndex].classList.add("active");
  }

  // Cycle every 2 seconds
  setInterval(cycleHearts, 2000);

  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const mobileThemeButton = document.querySelector(".mobile-theme-toggle");

  if (savedTheme === "dark") {
    const homeIcon = document.getElementById("homeIcon");
    const heartIcon = document.getElementById("heartIcon");
    const loveIcon = document.getElementById("loveIcon");
    const hamburgerIcon = document.getElementById("hamburgerImage");
    const closeIcon = document.getElementById("closeImage");
    const downloadIcon = document.getElementById("downloadImage");
    const arrowIcon = document.getElementById("arrowImage");
    const curvedLineIcon = document.getElementById("curvedLineImage");
    html.classList.add("dark-mode");
    themeButton.textContent = "light mode (blinding!!)";
    homeIcon.src = "assets/favicon-light.svg";
    heartIcon.src = "assets/heart-light.svg";
    loveIcon.src = "assets/love-light.svg";
    hamburgerIcon.src = "assets/hamburger-light.svg";
    closeIcon.src = "assets/cross-light.svg";
    downloadIcon.src = "assets/download-light.svg";
    arrowIcon.src = "assets/arrow-light.svg";
    curvedLineIcon.src = "assets/curved-underline-light.svg";
    mobileThemeButton.textContent = "light mode (blinding!!)";
  } else {
    html.classList.remove("dark-mode");
    themeButton.textContent = "dark mode (why not?)";
    mobileThemeButton.textContent = "dark mode (why not?)";
  }
});

function openContactModal() {
  document.getElementById("contactModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function handleContactForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const feedback = formData.get("feedback");

  // Create mailto link with form data
  const subject = encodeURIComponent("Portfolio Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${feedback}`
  );
  const mailtoLink = `mailto:nabilpatel4012@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  // Close modal and reset form
  closeContactModal();
  event.target.reset();
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target == modal) {
    closeContactModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeContactModal();
  }
});
