import { loadComponent } from "./utils/loadComponents"
import "./animations.js" // Import animations
import AOS from "aos"
import "aos/dist/aos.css"
import { initializeTheme } from "./darkMode.js"

// Initialize app only
document.addEventListener("DOMContentLoaded", async function () {
  try {
    await initApp()
    
    // Initialize AOS with specific settings
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      delay: 100,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: 'mobile' // Enable on desktop only
    })

    // Refresh AOS after a short delay to ensure all components are loaded
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  } catch (error) {
    console.error("Error during initialization:", error)
    const loader = document.getElementById("loader")
    if (loader) loader.remove()
  }
})

async function initApp() {
  try {
    const app = document.getElementById("app")
    if (!app) throw new Error("App container not found")

    // Define components in order
    const components = [
      "Loader",
      "Navbar",
      "Hero",
      // "Features"
      "Rectangles",
      "Process",
      "Strategies",
      "Pricing",
      "Testimonials",
      "CTA",
      "Footer"
    ]

    // Load components first
    for (const component of components) {
      const content = await loadComponent(component)
      if (!content) {
        console.error(`Failed to load ${component} component`)
        continue
      }
      const fixedContent = content.replace(/\.\.\//g, "/")
      app.innerHTML += fixedContent
    }

    // Initialize theme AFTER components are loaded
    initializeTheme()

    // Remove loader with proper error handling
    const loader = document.getElementById("loader")
    if (loader) {
      setTimeout(() => {
        loader.classList.add("opacity-0")
        setTimeout(() => {
          loader.remove()
        }, 300)
      }, 300)
    }
  } catch (error) {
    console.error("Error initializing app:", error)
    const loader = document.getElementById("loader")
    if (loader) {
      loader.remove()
    }
  }
}
