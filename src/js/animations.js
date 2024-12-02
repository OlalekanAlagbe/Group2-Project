import AOS from "aos"
import "aos/dist/aos.css"

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up", "opacity-100")
      entry.target.classList.remove("opacity-0")
    }
  })
}, observerOptions)

// Initialize all animations
const initAnimations = () => {
  createScrollProgress()

  // Add hover effect for cards
  const cards = document.querySelectorAll(".hover-card")
  cards.forEach((card) => {
    card.addEventListener("mousemove", handleCardHover)
  })
}

// Run initialization after DOM is loaded
document.addEventListener("DOMContentLoaded", initAnimations)

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav")
  // if (window.scrollY > 0) {
  //   navbar.classList.add('shadow-lg', 'backdrop-blur-sm', 'bg-white/90');
  //   navbar.classList.remove('bg-white');
  // } else {
  //   navbar.classList.remove('shadow-lg', 'backdrop-blur-sm', 'bg-white/90');
  //   navbar.classList.add('bg-white');
  // }
})

// Add parallax effect
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax")
  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5
    const yPos = -(window.pageYOffset * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Scroll Progress Indicator
const createScrollProgress = () => {
  const progressBar = document.createElement("div")
  progressBar.className =
    "fixed top-0 left-0 h-1 bg-green-900 z-50 transition-all duration-300"
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    progressBar.style.width = scrolled + "%"
  })
}

// Smooth Scroll with Offset
const smoothScroll = (target, offset = 100) => {
  const element = document.querySelector(target)
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })
}
