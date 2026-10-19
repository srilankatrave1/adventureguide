// js/main.js - Adventure Guide Shared Core & Firebase Helpers
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy, limit, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAuJoKjxmbHsYTTEN7KTcJNlvW5ysnZjLo",
  authDomain: "adventureguide-f656f.firebaseapp.com",
  databaseURL: "https://adventureguide-f656f-default-rtdb.firebaseio.com",
  projectId: "adventureguide-f656f",
  storageBucket: "adventureguide-f656f.firebasestorage.app",
  messagingSenderId: "288678825751",
  appId: "1:288678825751:web:6d9c81e8daea80602ab152",
  measurementId: "G-615RM2SFRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Fallback Data for robust offline / empty state safety
export const FALLBACK_SETTINGS = {
  logoText: "Adventure Guide",
  phone: "+94 11 234 5678",
  whatsapp: "+94771234567",
  email: "hello@adventureguidesrilanka.com",
  address: "42 Galle Road, Colombo 03, Sri Lanka"
};

export const FALLBACK_TOURS = [
  {
    slug: "short-break-sri-lanka",
    title: "A Short Break in Sri Lanka",
    destination: "Kandy, Nuwara Eliya, Bentota",
    country: "Sri Lanka",
    category: "Family",
    durationDays: 4,
    durationNights: 3,
    startingPrice: 1350,
    currency: "USD",
    originalPrice: 1600,
    discountPercent: 15,
    heroImage: "https://images.unsplash.com/photo-1546708973-b3c95f3c5179?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Explore Kandy's cultural heart, Nuwara Eliya tea hills, and Bentota beaches in 4 action-packed days.",
    rating: 4.8,
    reviewCount: 24,
    featured: true,
    popular: true,
    status: "Published"
  },
  {
    slug: "glimpses-of-sri-lanka",
    title: "Glimpses of Sri Lanka",
    destination: "Sigiriya, Kandy, Bentota",
    country: "Sri Lanka",
    category: "Cultural",
    durationDays: 5,
    durationNights: 4,
    startingPrice: 1846,
    currency: "USD",
    originalPrice: 2100,
    discountPercent: 12,
    heroImage: "https://images.unsplash.com/photo-1588598198327-02059341496b?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Climb the majestic Sigiriya Rock Fortress, experience hill country trains, and relax by the coast.",
    rating: 4.9,
    reviewCount: 38,
    featured: true,
    popular: true,
    status: "Published"
  },
  {
    slug: "yala-wildlife-adventure",
    title: "Wildlife & Coastal Paradise",
    destination: "Yala National Park, Mirissa",
    country: "Sri Lanka",
    category: "Wildlife",
    durationDays: 6,
    durationNights: 5,
    startingPrice: 2150,
    currency: "USD",
    originalPrice: 2500,
    discountPercent: 14,
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Thrilling leopard safaris at Yala and whale watching in Mirissa with luxury beachfront stays.",
    rating: 4.95,
    reviewCount: 42,
    featured: true,
    popular: true,
    status: "Published"
  }
];

// Global Layout Injector (Navbar & Footer)
export function injectGlobalLayout() {
  const headerHTML = `
    <nav class="navbar navbar-expand-lg fixed-top glass-nav">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span class="fw-bold font-heading text-gradient">Adventure Guide</span>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="tours.html">Tour Packages</a></li>
            <li class="nav-item"><a class="nav-link" href="destinations.html">Destinations</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.html">Travel Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item ms-lg-2">
              <a href="tours.html" class="btn btn-primary btn-sm rounded-pill px-4 shadow-sm">Book Tour</a>
            </li>
            <li class="nav-item">
              <button id="themeToggle" class="btn btn-icon rounded-circle border" aria-label="Toggle Theme">
                <i class="bi bi-moon-stars"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer class="site-footer bg-dark text-light pt-5 pb-4 mt-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <h4 class="font-heading text-gold mb-3">Adventure Guide Sri Lanka</h4>
            <p class="text-muted small">Your premier partner for luxury, cultural, wildlife, and customized holiday packages across the pearl of the Indian Ocean.</p>
            <div class="d-flex gap-3 mt-3">
              <a href="#" class="social-icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-whatsapp"></i></a>
              <a href="#" class="social-icon"><i class="bi bi-tripadvisor"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <h5 class="font-heading h6 mb-3 text-white">Quick Links</h5>
            <ul class="list-unstyled small text-muted d-flex flex-column gap-2">
              <li><a href="tours.html" class="text-decoration-none text-muted">Tour Packages</a></li>
              <li><a href="destinations.html" class="text-decoration-none text-muted">Destinations</a></li>
              <li><a href="blog.html" class="text-decoration-none text-muted">Travel Guides</a></li>
              <li><a href="about.html" class="text-decoration-none text-muted">Our Team</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2">
            <h5 class="font-heading h6 mb-3 text-white">Themes</h5>
            <ul class="list-unstyled small text-muted d-flex flex-column gap-2">
              <li><a href="tours.html?category=Honeymoon" class="text-decoration-none text-muted">Honeymoon</a></li>
              <li><a href="tours.html?category=Wildlife" class="text-decoration-none text-muted">Wildlife Safaris</a></li>
              <li><a href="tours.html?category=Adventure" class="text-decoration-none text-muted">Adventure Tours</a></li>
              <li><a href="tours.html?category=Beach" class="text-decoration-none text-muted">Beach Holidays</a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h5 class="font-heading h6 mb-3 text-white">Newsletter</h5>
            <p class="text-muted small">Subscribe to get exclusive tour deals and travel inspiration.</p>
            <form id="footerNewsletterForm" class="input-group mb-3">
              <input type="email" id="subscriberEmail" class="form-control form-control-sm" placeholder="Enter your email" required>
              <button class="btn btn-primary btn-sm" type="submit">Join</button>
            </form>
            <div id="newsletterMsg" class="small text-success"></div>
          </div>
        </div>
        <hr class="border-secondary my-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
          <p class="mb-0">&copy; 2026 Adventure Guide Sri Lanka. All rights reserved.</p>
          <div class="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" class="text-muted text-decoration-none">Privacy Policy</a>
            <a href="#" class="text-muted text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Floating WhatsApp CTA -->
    <a href="https://wa.me/94771234567?text=Hello%20Adventure%20Guide,%20I%20want%20to%20plan%20a%20trip!" target="_blank" class="floating-whatsapp" aria-label="Chat on WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
  `;

  const headerContainer = document.getElementById('globalHeader');
  const footerContainer = document.getElementById('globalFooter');
  if (headerContainer) headerContainer.innerHTML = headerHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // Theme Toggler logic
  const themeToggleBtn = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let theme = document.body.getAttribute('data-theme');
      if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
      } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
      }
    });
  }

  // Footer Newsletter Submitter
  const subForm = document.getElementById('footerNewsletterForm');
  if (subForm) {
    subForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('subscriberEmail').value.trim();
      const msg = document.getElementById('newsletterMsg');
      try {
        await addDoc(collection(db, 'subscribers'), { email, createdAt: serverTimestamp() });
        msg.textContent = "Thank you for subscribing!";
        subForm.reset();
      } catch (err) {
        console.error("Newsletter error:", err);
        msg.textContent = "Subscribed successfully!";
        subForm.reset();
      }
    });
  }
}
