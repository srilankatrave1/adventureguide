// Fallback posts dataset (ensures instant rendering even via file:// protocol)
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
    content: "<h2>Why Sigiriya is Unmissable</h2><p>Rising dramatically 200 meters above the central emerald jungle plains of Sri Lanka, the ancient rock fortress of Sigiriya—often dubbed the Eighth Wonder of the World—was built by King Kashyapa in the 5th century AD. Topped by a royal palace complex, cascading water gardens, and vibrant frescoes, it remains the crown jewel of Sri Lanka's Cultural Triangle.</p><blockquote>Pro Tip: Arrive at the ticket counter at 6:30 AM sharp. You will beat both the tropical midday heat and the tour bus queues.</blockquote><h2>Step-by-Step Climb Experience</h2><p>The ascent takes roughly 45 to 75 minutes via 1,200 well-maintained stone and iron steps:</p><ul><li><strong>The Symmetrical Water Gardens:</strong> Walk past ancient hydraulic fountains that still operate during the rainy season.</li><li><strong>The Mirror Wall & Frescoes:</strong> Admire the world-famous painted damsels preserved inside a sheltered rock depression.</li><li><strong>The Giant Lion's Paws:</strong> Rest on the wide terrace flanked by colossal sculpted paws before ascending the final staircase to the summit.</li></ul><h2>Sigiriya vs. Pidurangala Rock</h2><p>While Sigiriya gives you up-close archaeological wonder, neighboring <strong>Pidurangala Rock</strong> (just 2 km north) costs a fraction of the entry ticket and rewards hikers with the iconic postcard view looking directly at Sigiriya Lion Rock at sunset.</p><h2>Practical Visitor Tips for 2026</h2><p>Carry at least 1.5 liters of water per person, wear grippy sneakers, and avoid bringing plastic food wrappers as mischievous toque macaques patrol the lower terraces.</p>"
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
    content: "<h2>The Magic of Sri Lanka's Hill Country Railway</h2><p>Winding through rolling Ceylon tea estates, cloud forests, rushing waterfalls, and colonial viaducts, the 6-to-7-hour train journey from Kandy to Ella is a bucket-list experience for every traveller visiting Sri Lanka.</p><h2>Which Class Should You Book?</h2><ul><li><strong>First Class Observation / A/C:</strong> Comfortable plush seating with panoramic windows, though windows do not open for photography.</li><li><strong>Second Class Reserved:</strong> The sweet spot! You get a guaranteed seat, ceiling fans, and open windows to feel the cool mountain breeze.</li><li><strong>Third Class Reserved:</strong> Budget-friendly and great for mingling with friendly local families and tea-samosa vendors.</li></ul><blockquote>Sit on the <strong>right side</strong> of the train from Kandy to Nuwara Eliya (Nanu Oya), and move to the <strong>left side</strong> from Nanu Oya to Ella for the most dramatic valley views.</blockquote><h2>Top Adventures Once You Arrive in Ella</h2><p>Spend at least three nights in Ella to hike <strong>Little Adam's Peak</strong> at sunrise, watch the blue train cross the colonial <strong>Nine Arch Bridge</strong> in Demodara, and cool off at Ravana Falls.</p>"
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
    content: "<h2>Where Jungle Meets the Indian Ocean</h2><p>Few places on the planet let you photograph wild leopards and Asian elephants at dawn and swim alongside sea turtles in warm turquoise bays by afternoon. Southern Sri Lanka delivers this rare combination effortlessly.</p><h2>Days 1–2: Yala National Park Safari</h2><p>Yala Block 1 boasts one of the highest densities of leopards in the world, alongside sloth bears, mugger crocodiles, and peacocks. Book a private 4x4 safari jeep entering at 6:00 AM when big cats are most active along the sandy tracks.</p><blockquote>Want fewer jeeps? Ask your driver to take you into Yala Block 5 or neighboring Udawalawe National Park for extraordinary elephant sightings.</blockquote><h2>Days 3–4: Mirissa & Weligama Surf Coast</h2><p>Head west along the palm-fringed coast to Mirissa. Climb Coconut Tree Hill at golden hour, take a beginner surf lesson on the gentle sandy break of Weligama Bay, and join a responsible morning cruise to spot mighty blue whales offshore.</p><h2>Day 5: Galle Dutch Fort</h2><p>Wrap up your southern adventure walking the 17th-century ramparts of UNESCO-listed Galle Fort, browsing boutique spice shops, and watching sunset by the iconic Galle Lighthouse.</p>"
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

// Fetch posts helper
async function fetchPostsIndex() {
  try {
    const res = await fetch('posts/posts.json');
    if (!res.ok) throw new Error('Fallback to embedded posts');
    return await res.json();
  } catch (e) {
    return FALLBACK_POSTS;
  }
}

async function fetchSinglePost(slug) {
  try {
    const res = await fetch(`posts/${slug}.json`);
    if (!res.ok) throw new Error('Fallback to embedded post');
    return await res.json();
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
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 350);
  }

  // 2. Dark / Light Theme Toggle
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ag_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeBtn) {
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ag_theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  // 3. Sticky Navbar & Back to Top & Reading Progress
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('back-to-top');
  const progressBar = document.getElementById('reading-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar && !navbar.classList.contains('solid-nav')) {
      navbar.classList.toggle('scrolled', scrollY > 60);
    }
    if (backToTop) {
      backToTop.classList.toggle('show', scrollY > 400);
    }
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${pct}%`;
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 4. Mobile Menu
  const hamburger = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 5. Typewriter Effect on Home Hero
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

  // 6. Scroll Reveal Observer & Animated Counters
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

  // 7. Render Featured Destinations (Home & Destinations Page)
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
          <div class="card-footer">
            <a href="destinations.html">Explore ${d.name} →</a>
          </div>
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
            <div class="card-footer">
              <a href="blog.html?q=${encodeURIComponent(d.name)}">Read Guides →</a>
            </div>
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

  // 8. Home Latest Articles
  const homeArticlesGrid = document.getElementById('home-latest-articles');
  if (homeArticlesGrid) {
    const posts = await fetchPostsIndex();
    homeArticlesGrid.innerHTML = posts.slice(0, 3).map(createArticleCardHTML).join('');
  }

  // 9. Photo Gallery Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCap = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

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

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
  }

  // 10. Testimonials Slider
  const testimonials = [
    { quote: "Adventure Guide planned our entire 2-week route from Sigiriya to Mirissa. The sunrise tip for Lion Rock saved us hours!", author: " Sarah & Liam — Melbourne, Australia" },
    { quote: "The Kandy to Ella train guide was spot-on. Sitting on the right side of the carriage gave us views we will remember forever.", author: " Elena Rostova — Berlin, Germany" },
    { quote: "We spotted two leopards in Yala and blue whales in Mirissa using the 5-day Southern Coast itinerary. Pure magic!", author: " Rohan Mehta — Mumbai, India" }
  ];
  let tIdx = 0;
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const renderTestimonial = () => {
    if (quoteEl && authorEl) {
      quoteEl.textContent = `"${testimonials[tIdx].quote}"`;
      authorEl.textContent = testimonials[tIdx].author;
    }
  };
  document.getElementById('prev-testimonial')?.addEventListener('click', () => {
    tIdx = (tIdx - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  document.getElementById('next-testimonial')?.addEventListener('click', () => {
    tIdx = (tIdx + 1) % testimonials.length;
    renderTestimonial();
  });

  // 11. Blog Listing Page (Filter, Search, Pagination)
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
        const matchesCat = activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase();
        const matchesQ = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQ;
      });

      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      if (currentPage > totalPages) currentPage = 1;
      const slice = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

      blogGrid.innerHTML = slice.length
        ? slice.map(createArticleCardHTML).join('')
        : `<p>No articles matched your filter. Try clearing the search box.</p>`;

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
      if (btn.dataset.blogCat.toLowerCase() === activeCategory.toLowerCase()) {
        document.querySelectorAll('[data-blog-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
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

  // 12. Single Article Renderer (article.html)
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

    // Auto Table of Contents
    const tocList = document.getElementById('toc-list');
    const headings = articleBody.querySelectorAll('h2, h3');
    if (tocList && headings.length) {
      tocList.innerHTML = Array.from(headings).map((h, idx) => {
        const id = `section-${idx}`;
        h.id = id;
        return `<li><a href="#${id}">${h.textContent}</a></li>`;
      }).join('');
    }

    // Share Buttons
    const shareUrl = window.location.href;
    document.getElementById('share-copy')?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl);
      alert('Article link copied to clipboard!');
    });
    document.getElementById('share-wa')?.addEventListener('click', () => {
      window.open(`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`, '_blank');
    });

    // Related Posts
    const relatedGrid = document.getElementById('related-posts-grid');
    if (relatedGrid) {
      const allPosts = await fetchPostsIndex();
      const related = allPosts.filter(p => p.slug !== post.slug).slice(0, 2);
      relatedGrid.innerHTML = related.map(createArticleCardHTML).join('');
    }

    // Comments Section (LocalStorage interactive demo)
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');
    const storageKey = `ag_comments_${slug}`;
    const renderComments = () => {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (commentsList) {
        commentsList.innerHTML = saved.length
          ? saved.map(c => `<div style="padding:14px 0;border-bottom:1px solid var(--border-color);"><strong>${c.name}</strong> <span style="font-size:0.8rem;color:var(--text-muted);">• ${c.date}</span><p style="margin-top:6px;">${c.text}</p></div>`).join('')
          : `<p style="color:var(--text-muted);">Be the first traveller to leave a comment on this guide!</p>`;
      }
    };
    renderComments();
    commentForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('comment-name').value.trim();
      const text = document.getElementById('comment-text').value.trim();
      if (!name || !text) return;
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      saved.unshift({ name, text, date: new Date().toLocaleDateString() });
      localStorage.setItem(storageKey, JSON.stringify(saved));
      commentForm.reset();
      renderComments();
    });
  }

  // 13. Admin Article Generator (admin.html)
  const adminForm = document.getElementById('admin-article-form');
  if (adminForm) {
    const titleIn = document.getElementById('adm-title');
    const slugIn = document.getElementById('adm-slug');
    titleIn?.addEventListener('input', () => {
      slugIn.value = titleIn.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    });

    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const slug = slugIn.value.trim();
      const postObj = {
        slug,
        title: titleIn.value.trim(),
        category: document.getElementById('adm-category').value,
        date: new Date().toISOString().split('T')[0],
        readTime: document.getElementById('adm-readtime').value.trim() || '5 min read',
        author: document.getElementById('adm-author').value.trim() || 'Adventure Guide Team',
        image: document.getElementById('adm-image').value.trim(),
        excerpt: document.getElementById('adm-excerpt').value.trim(),
        content: document.getElementById('adm-content').value.trim()
      };

      const indexEntry = {
        slug: postObj.slug,
        title: postObj.title,
        category: postObj.category,
        date: postObj.date,
        readTime: postObj.readTime,
        author: postObj.author,
        image: postObj.image,
        excerpt: postObj.excerpt
      };

      document.getElementById('output-single-json').textContent = JSON.stringify(postObj, null, 2);
      document.getElementById('output-index-json').textContent = JSON.stringify(indexEntry, null, 2);
      document.getElementById('output-filename').textContent = `posts/${slug}.json`;
      document.getElementById('admin-output-wrap').style.display = 'block';

      // Download button
      const dlBtn = document.getElementById('download-json-btn');
      dlBtn.onclick = () => {
        const blob = new Blob([JSON.stringify(postObj, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${slug}.json`;
        a.click();
      };
    });
  }

  // 14. Newsletter Signup
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome aboard! You are now subscribed to Adventure Guide Sri Lanka updates.');
      form.reset();
    });
  });
});
