document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-up");
    
    // Force all sections to be visible immediately
    function forceInitialReveal() {
      revealElements.forEach((el) => {
        el.classList.add("active");
      });
      
      // Ensure specific sections are visible
      document.querySelectorAll("#about, #projects, #contact").forEach(section => {
        section.querySelectorAll(".reveal-left, .reveal-right, .reveal-up").forEach(el => {
          el.classList.add("active");
        });
      });
    }
    
    // Call this function immediately
    forceInitialReveal();
    
    // Rest of your existing code...
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    function checkReveal() {
      const triggerBottom = window.innerHeight
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < triggerBottom) {
          element.classList.add("active")
        }
      })
    }
  
    // Initial reveal check on page load
    checkReveal()
  
    window.addEventListener("scroll", checkReveal)
  
    const skillSection = document.querySelector(".skills")
    const skillBars = document.querySelectorAll(".skill-per")
  
    function animateSkills() {
      if (!skillSection) return
  
      const sectionPos = skillSection.getBoundingClientRect().top
      const screenPos = window.innerHeight / 1.3
  
      if (sectionPos < screenPos) {
        skillBars.forEach((skill) => {
          const skillPer = skill.getAttribute("per")
          skill.style.width = skillPer
        })
      }
    }
  
    animateSkills()
    window.addEventListener("scroll", animateSkills)
  
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        if (name && email && subject && message) {
          alert("Thank you for your message! I will get back to you soon.")
          contactForm.reset()
        } else {
          alert("Please fill in all fields.")
        }
      })
    }
  
    const typingElement = document.querySelector(".hero-text h1")
  
    if (typingElement) {
      const text = typingElement.textContent
      typingElement.innerHTML = ""
  
      let i = 0
      const speed = 100
  
      function typeWriter() {
        if (i < text.length) {
          typingElement.innerHTML += text.charAt(i)
          i++
          setTimeout(typeWriter, speed)
        }
      }
  
      setTimeout(typeWriter, 500)
    }
  
    const heroSection = document.querySelector(".hero")
  
    if (heroSection) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
      })
    }
  
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll(".nav-links a")
  
    function highlightNavItem() {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight
  
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id")
        }
      })
  
      navItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("href") === "#" + current) {
          item.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", highlightNavItem)
    window.addEventListener("load", highlightNavItem)
  })
  