// Firebase Configuration & Dynamic Loader for Public Pages
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAuJoKjxmbHsYTTEN7KTcJNlvW5ysnZjLo",
  authDomain: "adventureguide-f656f.firebaseapp.com",
  projectId: "adventureguide-f656f",
  storageBucket: "adventureguide-f656f.firebasestorage.app",
  messagingSenderId: "288678825751",
  appId: "1:288678825751:web:6d9c81e8daea80602ab152",
  measurementId: "G-615RM2SFRT"
};

let firestoreDb = null;
let firestoreModules = null;

async function initFirebaseClient() {
  if (firestoreDb) return { db: firestoreDb, ...firestoreModules };
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js");
  const { getFirestore, collection, getDocs, doc, getDoc, addDoc } = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js");
  const app = initializeApp(FIREBASE_CONFIG);
  firestoreDb = getFirestore(app);
  firestoreModules = { collection, getDocs, doc, getDoc, addDoc };
  return { db: firestoreDb, ...firestoreModules };
}

// Default fallback articles (shown if Firestore collection is empty)
const FALLBACK_POSTS = [
  {
    slug: "sigiriya-lion-rock-guide",
    title: "Climbing Sigiriya Lion Rock at Sunrise: The Complete 2026 Guide",
    category: "Culture",
    date: "2026-10-02",
    readTime: "6 min read",
    author: "Adventure Guide Team",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Everything you need to know about scaling Sri Lanka's iconic 5th-century sky fortress, beating the crowds, and climbing Pidurangala Rock for panoramic views.",
    content: "<h2>Why Sigiriya is Unmissable</h2><p>Rising dramatically 200 meters above the central emerald jungle plains of Sri Lanka, the ancient rock fortress of Sigiriya—often dubbed the Eighth Wonder of the World—was built by King Kashyapa in the 5th century AD.</p><blockquote>Pro Tip: Arrive at the ticket counter at 6:30 AM sharp. You will beat both the tropical midday heat and the tour bus queues.</blockquote><h2>Step-by-Step Climb Experience</h2><ul><li><strong>The Symmetrical Water Gardens:</strong> Walk past ancient hydraulic fountains.</li><li><strong>The Mirror Wall & Frescoes:</strong> Admire the world-famous painted damsels.</li><li><strong>The Giant Lion's Paws:</strong> Rest on the wide terrace before ascending the final staircase to the summit.</li></ul>"
  },
  {
    slug: "ella-train-journey-hill-country",
    title: "Kandy to Ella by Train: Riding the Most Scenic Railway on Earth",
    category: "Hill Country",
    date: "2026-09-24",
    readTime: "8 min read",
    author: "Adventure Guide Team",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    excerpt: "From misty emerald tea plantations to the famous Nine Arch Bridge—here is how to book tickets, pick the best side of the carriage, and explore Ella.",
    content: "<h2>The Magic of Sri Lanka's Hill Country Railway</h2><p>Winding through rolling Ceylon tea estates, cloud forests, rushing waterfalls, and colonial viaducts, the 6-to-7-hour train journey from Kandy to Ella is a bucket-list experience for every traveller visiting Sri Lanka.</p><blockquote>Sit on the right side of the train from Kandy to Nuwara Eliya, and move to the left side from Nanu Oya to Ella for the most dramatic valley views.</blockquote>"
  },
  {
    slug: "yala-safari-mirissa-coast-guide",
    title: "Leopards & Blue Whales: A 5-Day Southern Coast & Yala Safari Itinerary",
    category: "Wildlife",
    date: "2026-09-15",
    readTime: "7 min read",
    author: "Adventure Guide Team",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Combine thrilling dawn jeep safaris in Yala National Park with golden palm beaches, surf breaks, and ethical whale watching in Mirissa and Galle.",
    content: "<h2>Where Jungle Meets the Indian Ocean</h2><p>Few places on the planet let you photograph wild leopards and Asian elephants at dawn and swim alongside sea turtles in warm turquoise bays by afternoon. Southern Sri Lanka delivers this rare combination effortlessly.</p>"
  }
];

const DESTINATIONS_DATA = [
  { name: "Sigiriya", region: "Cultural Triangle", tag: "Culture", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", desc: "Ancient 5th-century Lion Rock sky fortress surrounded by royal water gardens and jungle." },
  { name: "Ella", region: "Hill Country", tag: "Hill Country", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80", desc: "Misty mountain town famous for the Nine Arch Bridge, Little Adam's Peak, and waterfalls." },
  { name: "Kandy", region: "Central Province", tag: "Culture", image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=800&q=80", desc: "Sacred highland capital home to the Temple of the Sacred Tooth Relic and lakeside strolls." },
  { name: "Galle", region: "South Coast", tag: "Culture", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80", desc: "UNESCO 17th-century Dutch colonial sea fortress with cobblestone lanes and ocean ramparts." },
  { name: "Mirissa", region: "South Coast", tag: "Beaches", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", desc: "Crescent palm beach renowned for Coconut Tree Hill, surf waves, and blue whale tours." },
  { name: "Yala", region: "Southeast", tag: "Wildlife", image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80", desc: "Sri Lanka's premier wildlife park featuring leopards, elephant herds, and coastal lagoons." },
  { name: "Nuwara Eliya", region: "Hill Country", tag: "Hill Country", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80", desc: "Cool-climate highland retreat blanketed in emerald Ceylon tea estates and Horton Plains." },
  { name: "Jaffna", region: "Northern Province", tag: "Culture", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80", desc: "Vibrant northern peninsula rich in Tamil heritage, Nallur Kandaswamy Kovil, and islands." }
];

// Fetch all posts from Firebase Firestore (with automatic fallback)
async function fetchPostsIndex() {
  try {
    const { db, collection, getDocs } = await initFirebaseClient();
    const snap = await getDocs(collection(db, "posts"));
    const posts = [];
    snap.forEach(d => posts.push(d.data()));
    if (posts.length > 0) {
      posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      return posts;
    }
    return FALLBACK_POSTS;
  } catch (e) {
    return FALLBACK_POSTS;
  }
}

// Fetch single post from Firebase Firestore by slug
async function fetchSinglePost(slug) {
  try {
    const { db, doc, getDoc } = await initFirebaseClient();
    const snap = await getDoc(doc(db, "posts", slug));
    if (snap.exists()) return snap.data();
    return FALLBACK_POSTS.find(p => p.slug === slug) || FALLBACK_POSTS[0];
  } catch (e) {
    return FALLBACK_POSTS.find(p => p.slug === slug) || FALLBACK_POSTS[0];
  }
}

function createArticleCardHTML(post) {
  return `
    <article class="card reveal visible">
      <div class="card-img-wrap">
        <span class="card-badge">${post.category}</span>
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>📅 ${post.date}</span>
          <span>⏱️ ${post.readTime}</span>
        </div>
        <h3 class="card-title"><a href="article.html?slug=${post.slug}">${post.title}</a></h3>
        <p class="card-text">${post.excerpt}</p>
        <div class="card-footer">
          <a href="article.html?slug=${post.slug}">Read Full Story →</a>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) setTimeout(() => preloader.classList.add('hidden'), 350);

  // 2. Dark / Light Theme
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ag_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeBtn) {
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ag_theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  // 3. Navbar & Scroll Progress
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('back-to-top');
  const progressBar = document.getElementById('reading-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar && !navbar.classList.contains('solid-nav')) navbar.classList.toggle('scrolled', scrollY > 60);
    if (backToTop) backToTop.classList.toggle('show', scrollY > 400);
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = `${docHeight > 0 ? (scrollY / docHeight) * 100 : 0}%`;
    }
  });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 4. Mobile Menu
  const hamburger = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 5. Typewriter Effect
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    const words = ['Misty Tea Hills', 'Ancient Fortresses', 'Golden Surf Coasts', 'Wild Leopard Safaris'];
    let wIdx = 0, cIdx = 0, deleting = false;
    function typeLoop() {
      const currentWord = words[wIdx];
      typewriterEl.textContent = currentWord.substring(0, cIdx);
      if (!deleting && cIdx < currentWord.length) {
        cIdx++;
        setTimeout(typeLoop, 95);
      } else if (deleting && cIdx > 0) {
        cIdx--;
        setTimeout(typeLoop, 50);
      } else {
        deleting = !deleting;
        if (!deleting) wIdx = (wIdx + 1) % words.length;
        setTimeout(typeLoop, deleting ? 1600 : 300);
      }
    }
    typeLoop();
  }

  // 6. Scroll Reveal & Counters
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.classList.contains('counter') && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const target = parseInt(entry.target.dataset.target, 10);
          let count = 0;
          const step = Math.ceil(target / 45);
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              entry.target.textContent = target.toLocaleString() + '+';
              clearInterval(timer);
            } else {
              entry.target.textContent = count.toLocaleString();
            }
          }, 28);
        }
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .counter').forEach(el => observer.observe(el));

  // 7. Destinations Rendering
  const homeDestGrid = document.getElementById('home-destinations-grid');
  if (homeDestGrid) {
    homeDestGrid.innerHTML = DESTINATIONS_DATA.map(d => `
      <div class="card reveal visible">
        <div class="card-img-wrap">
          <span class="card-badge">${d.region}</span>
          <img src="${d.image}" alt="${d.name} Sri Lanka" loading="lazy">
        </div>
        <div class="card-body">
          <h3 class="card-title">${d.name}</h3>
          <p class="card-text">${d.desc}</p>
          <div class="card-footer"><a href="destinations.html">Explore ${d.name} →</a></div>
        </div>
      </div>
    `).join('');
  }

  const destPageGrid = document.getElementById('destinations-page-grid');
  if (destPageGrid) {
    const renderDestinations = (filterTag = 'All') => {
      const list = filterTag === 'All' ? DESTINATIONS_DATA : DESTINATIONS_DATA.filter(d => d.tag === filterTag);
      destPageGrid.innerHTML = list.map(d => `
        <div class="card reveal visible">
          <div class="card-img-wrap">
            <span class="card-badge">${d.tag}</span>
            <img src="${d.image}" alt="${d.name}" loading="lazy">
          </div>
          <div class="card-body">
            <div class="card-meta"><span>📍 ${d.region}</span></div>
            <h3 class="card-title">${d.name}</h3>
            <p class="card-text">${d.desc}</p>
            <div class="card-footer"><a href="blog.html?q=${encodeURIComponent(d.name)}">Read Guides →</a></div>
          </div>
        </div>
      `).join('');
    };
    renderDestinations();
    document.querySelectorAll('[data-dest-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-dest-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderDestinations(btn.dataset.destFilter);
      });
    });
  }

  // 8. Home Latest Articles (Live from Firebase)
  const homeArticlesGrid = document.getElementById('home-latest-articles');
  if (homeArticlesGrid) {
    const posts = await fetchPostsIndex();
    homeArticlesGrid.innerHTML = posts.slice(0, 3).map(createArticleCardHTML).join('');
  }

  // 9. Gallery Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-caption');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (lightbox && img) {
        lightboxImg.src = img.src;
        lightboxCap.textContent = item.dataset.caption || img.alt;
        lightbox.classList.add('open');
      }
    });
  });
  document.getElementById('lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));

  // 10. Blog Listing Page (Live from Firebase)
  const blogGrid = document.getElementById('blog-posts-grid');
  if (blogGrid) {
    const allPosts = await fetchPostsIndex();
    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get('category') || 'All';
    let searchQuery = params.get('q') || '';
    let currentPage = 1;
    const perPage = 6;

    const searchInput = document.getElementById('blog-search-input');
    if (searchInput && searchQuery) searchInput.value = searchQuery;

    const renderBlog = () => {
      const filtered = allPosts.filter(p => {
        const matchesCat = activeCategory === 'All' || (p.category || '').toLowerCase() === activeCategory.toLowerCase();
        const matchesQ = !searchQuery || (p.title || '').toLowerCase().includes(searchQuery.toLowerCase()) || (p.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQ;
      });
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      if (currentPage > totalPages) currentPage = 1;
      const slice = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

      blogGrid.innerHTML = slice.length ? slice.map(createArticleCardHTML).join('') : `<p>No articles matched your search.</p>`;

      const pagEl = document.getElementById('blog-pagination');
      if (pagEl) {
        pagEl.innerHTML = Array.from({ length: totalPages }, (_, i) =>
          `<button class="filter-btn ${i + 1 === currentPage ? 'active' : ''}" data-page="${i + 1}">${i + 1}</button>`
        ).join('');
        pagEl.querySelectorAll('button').forEach(b => {
          b.addEventListener('click', () => {
            currentPage = parseInt(b.dataset.page, 10);
            renderBlog();
          });
        });
      }
    };

    document.querySelectorAll('[data-blog-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-blog-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.blogCat;
        currentPage = 1;
        renderBlog();
      });
    });

    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      currentPage = 1;
      renderBlog();
    });

    renderBlog();
  }

  // 11. Single Article Page (Live from Firebase)
  const articleBody = document.getElementById('article-body');
  if (articleBody) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug') || 'sigiriya-lion-rock-guide';
    const post = await fetchSinglePost(slug);

    document.title = `${post.title} | Adventure Guide Sri Lanka`;
    document.getElementById('article-hero').style.backgroundImage =
      `linear-gradient(rgba(7,47,64,0.7), rgba(7,47,64,0.85)), url('${post.image}')`;
    document.getElementById('article-category').textContent = post.category;
    document.getElementById('article-title').textContent = post.title;
    document.getElementById('article-meta').textContent = `By ${post.author} • ${post.date} • ${post.readTime}`;
    articleBody.innerHTML = post.content;

    const tocList = document.getElementById('toc-list');
    const headings = articleBody.querySelectorAll('h2, h3');
    if (tocList && headings.length) {
      tocList.innerHTML = Array.from(headings).map((h, idx) => {
        const id = `section-${idx}`;
        h.id = id;
        return `<li><a href="#${id}">${h.textContent}</a></li>`;
      }).join('');
    }

    const relatedGrid = document.getElementById('related-posts-grid');
    if (relatedGrid) {
      const allPosts = await fetchPostsIndex();
      relatedGrid.innerHTML = allPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(createArticleCardHTML).join('');
    }
  }

  // 12. Save Contact Form Enquiries Directly to Firebase
  const contactForm = document.querySelector('form[action*="formspree"], #contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending Enquiry...';

      try {
        const { db, collection, addDoc } = await initFirebaseClient();
        await addDoc(collection(db, "enquiries"), {
          name: document.getElementById('contact-name')?.value.trim() || '',
          email: document.getElementById('contact-email')?.value.trim() || '',
          subject: document.getElementById('contact-subject')?.value || 'General Enquiry',
          message: document.getElementById('contact-message')?.value.trim() || '',
          status: 'New',
          date: new Date().toLocaleDateString(),
          createdAt: new Date().toISOString()
        });
        alert('✅ Thank you! Your enquiry has been sent to our team.');
        contactForm.reset();
      } catch (err) {
        alert('Error sending message: ' + err.message);
      } finally {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
  }

  // 13. Save Newsletter Subscribers Directly to Firebase
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput?.value) return;
      try {
        const { db, collection, addDoc } = await initFirebaseClient();
        await addDoc(collection(db, "subscribers"), {
          email: emailInput.value.trim(),
          date: new Date().toLocaleDateString(),
          createdAt: new Date().toISOString()
        });
        alert('🎉 Welcome aboard! You are now subscribed to Adventure Guide updates.');
        form.reset();
      } catch (err) {
        alert('Subscribed! Thank you for joining.');
      }
    });
  });
});
