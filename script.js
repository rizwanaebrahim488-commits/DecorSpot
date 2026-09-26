/**
 * DECORSPOT 2.0 — Newborn, Maternity, Pre-Wedding, Birthday & Commercial Portrait Studio
 * Studio Configurations & Interactivity Engine
 */

const STORAGE_KEY = 'decorspot_site_data';
const ENQUIRIES_KEY = 'decorspot_enquiries';

const DEFAULT_DATA = {
  studio: {
    name: "DecorSpot 2.0",
    subtitle: "newborn & creative portrait studio",
    heroEyebrow: "fine art & boutique portrait studio",
    heroTagline: "Little moments,\nbeautifully held.",
    heroDesc: "A warm, boutique photography studio located opposite HM College, Randar, Muvattupuzha. Specializing in timeless newborn & baby sessions, glowing maternity stories, cinematic pre-weddings, joyful birthdays, and refined commercial brand imagery.",
    bookingNote: "Now reserving newborn, maternity, pre-wedding & commercial dates",
    features: {
      sanitized: true,
      climate: true,
      babyLed: true,
      wardrobe: true,
      albums: true,
      commercialRig: true,
      outdoorSets: true
    }
  },
  contact: {
    waNumber: "+91 88912 36399",
    waCleanNumber: "918891236399",
    waDefaultMsg: "Hello DecorSpot Studio! I would love to enquire about booking a photoshoot session.",
    instaUrl: "https://www.instagram.com/decorspot2.0?stkn=cG9yaDgxZTJtbzA1&utm_source=qr",
    instaHandle: "@decorspot2.0",
    locationDisplay: "Opp. HM College, Randar, Muvattupuzha – 686673",
    mapsUrl: "https://maps.google.com/?q=Opposite+HM+College,+Randar,+Muvattupuzha,+Kerala+686673",
    workingHours: "Tue – Sun: 9:00 AM – 6:30 PM (Mondays by appointment)"
  },
  services: [
    {
      id: "newborn",
      title: "Newborn & Baby Portraits",
      category: "Signature Sanctuary",
      badge: "Hospital-Grade Clean",
      desc: "Our tranquil, 28°C climate-controlled haven for babies 5 to 21 days old and milestone sitters. Purely baby-led, unhurried, and extraordinarily safe.",
      image: "img1.JPG",
      highlights: [
        "Cozy 28°C climate-controlled newborn suite",
        "Hospital-grade sanitized organic wraps & bonnets",
        "100% baby-led pacing with feeding & cuddling pauses",
        "Includes delicate parent & sibling cuddle portraits"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Newborn / Baby Photoshoot."
    },
    {
      id: "maternity",
      title: "Maternity & Motherhood",
      category: "Motherhood Journey",
      badge: "Designer Gowns",
      desc: "Honoring the beauty, strength, and quiet glow of motherhood. Artful fine-art portraits celebrating your baby bump with your partner and family.",
      image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Curated designer maternity gowns & flowing silk wraps",
        "Artful studio lighting or golden-hour outdoor glow",
        "Recommended between 28 to 34 weeks of pregnancy",
        "Partner & older siblings warmly included in sessions"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Maternity Photoshoot."
    },
    {
      id: "prewedding",
      title: "Pre-Wedding & Couples",
      category: "Love Stories",
      badge: "Cinematic & Candid",
      desc: "Cinematic love stories crafted with genuine laughter, quiet intimacy, and romantic Kerala outdoor landscapes or minimalist editorial studio sets.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Picturesque outdoor scenic spots or editorial studio backdrops",
        "Direction that feels spontaneous, natural, and joyful",
        "Multiple styling & wardrobe changes allowed",
        "High-definition portrait edits & cinematic short reel"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Pre-Wedding / Couple Photoshoot."
    },
    {
      id: "birthday",
      title: "Birthday & Cake Smash",
      category: "Milestone Joy",
      badge: "Custom Theme Sets",
      desc: "First birthday milestone magic, custom theme backdrops, joyful cake smash fun, and lively milestone portraits for your growing little one.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Custom themed floral, balloon & vintage sets",
        "Mess-safe cake smash area & warm splash cleanup",
        "Sibling & family celebratory portraits included",
        "High-res digital gallery delivered within days"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Birthday / Cake Smash Shoot."
    },
    {
      id: "commercial",
      title: "Commercial & Brand Imagery",
      category: "Brand & Fashion",
      badge: "Studio 4K Rig",
      desc: "Impactful visual narratives for brands, fashion labels, jewellery, e-commerce, culinary arts, and professional executive profiles.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Full studio strobe lighting & calibrated color profiles",
        "Lookbook, flat-lay & high-fashion model shoots",
        "High-volume e-commerce catalog turnaround",
        "Full commercial usage rights included"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Commercial / Brand / Product Shoot."
    },
    {
      id: "family",
      title: "Family & Generational Portraits",
      category: "Heirloom Stories",
      badge: "Timeless Keepsake",
      desc: "Generations together under soft light. Documenting parents, children, and grandparents with honesty, warmth, and enduring grace.",
      image: "img4.JPG",
      highlights: [
        "Generations gathered in natural, loving connection",
        "Unhurried family pacing for kids & elders",
        "Handcrafted fine art album options",
        "Archival wall frames ready to hang"
      ],
      whatsappMsg: "Hello DecorSpot! I'd love to enquire about a Family Portrait session."
    }
  ],
  photos: [
    { src: "img1.JPG", alt: "Sleeping newborn wrapped in an oat-colored knit blanket", category: "newborn", size: "col-span-7-row-2", caption: "the quiet hour — newborn" },
    { src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80", alt: "Radiant maternity portrait in soft golden morning light", category: "maternity", size: "col-span-5", caption: "golden bloom — maternity" },
    { src: "img2.JPG", alt: "Newborn tiny feet resting softly on an ivory linen blanket", category: "details", size: "col-span-5", caption: "soft beginnings — tiny toes" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Romantic pre-wedding couple embracing in Kerala nature", category: "prewedding", size: "col-span-12", caption: "forever began here — pre-wedding" },
    { src: "img3.JPG", alt: "Swaddled newborn resting peacefully beside delicate florals", category: "newborn", size: "col-span-5", caption: "small wonder — newborn floral" },
    { src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80", alt: "Joyful 1st birthday cake smash celebration", category: "birthday", size: "col-span-6", caption: "first celebration — cake smash" },
    { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", alt: "Editorial commercial brand & product styling", category: "commercial", size: "col-span-6", caption: "editorial vision — commercial" },
    { src: "img4.JPG", alt: "Parent gently holding a newborn hand", category: "family", size: "col-span-6", caption: "held close — family bond" },
    { src: "img5.JPG", alt: "Baby smiling in gentle dream in organic knit bonnet", category: "newborn", size: "col-span-6", caption: "gentle dream — bonnet portrait" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding cinematic portrait session", category: "prewedding", size: "col-span-6", caption: "golden hour vows — pre-wedding" },
    { src: "img6.JPG", alt: "Mother gently cradling new baby in quiet morning light", category: "family", size: "col-span-6", caption: "motherhood quietude" }
  ],
  packages: [
    {
      id: "pkg_newborn_mini",
      category: "newborn",
      label: "Newborn Mini",
      title: "Little Dreamer",
      desc: "Ideal for parents seeking clean, classic newborn portraits of baby alone.",
      highlights: ["1.5 to 2 unhurried hours in 28°C warm suite", "2 bespoke setups & sanitized organic wraps", "12 high-resolution retouched digital files", "Private online viewing gallery"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "primary",
      popular: false
    },
    {
      id: "pkg_newborn_sig",
      category: "newborn",
      label: "Signature Newborn",
      title: "Cherished Miracle",
      desc: "Our complete family experience capturing baby, parents, and siblings together.",
      highlights: ["2.5 to 3 unhurried hours", "4 bespoke setups + Parent & Sibling portraits", "25 high-resolution fine art retouched files", "Handcrafted premium keepsake photo album", "Priority WhatsApp scheduling"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "terracotta",
      popular: true
    },
    {
      id: "pkg_maternity",
      category: "maternity",
      label: "Maternity Story",
      title: "Bloom & Radiance",
      desc: "Celebrate the maternal glow and the expectant parents' tender anticipation.",
      highlights: ["2 hours indoor studio or outdoor golden hour", "2 designer gown changes & silk wraps provided", "18 fine-art edited digital portraits", "Partner & older siblings included", "Hair & makeup artist styling guidance"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "primary",
      popular: false
    },
    {
      id: "pkg_prewedding",
      category: "prewedding",
      label: "Pre-Wedding Cinematic",
      title: "The Eternal Love Story",
      desc: "A romantic, editorial photo session telling your unique couple journey.",
      highlights: ["Half-day shoot (Studio + Outdoor Scenic)", "3 wardrobe & styling changes", "35 signature retouched portraits", "Short cinematic 4K video teaser reel", "High-res gallery for wedding display"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "terracotta",
      popular: true
    },
    {
      id: "pkg_birthday",
      category: "birthday",
      label: "Birthday & Cake Smash",
      title: "First Milestone Joy",
      desc: "A fun-filled milestone celebration with festive sets and pure infant glee.",
      highlights: ["1.5 hours in festive themed studio set", "Custom theme balloons & floral backdrop styling", "Mess-free cake smash & bubble bath cleanup", "20 retouched high-resolution images", "Family mini-portraits included"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "primary",
      popular: false
    },
    {
      id: "pkg_commercial",
      category: "commercial",
      label: "Commercial & Brand",
      title: "Brand Vision Studio",
      desc: "Professional imagery tailored for e-commerce, lookbooks, and brand campaigns.",
      highlights: ["Full day or half-day studio production", "Calibrated studio strobe lighting & cyclorama", "Product styling, flat-lays & model editorial", "Commercial licensing & 4K retouched deliverables", "Fast 48-hour turnarounds available"],
      ctaText: "Enquire on WhatsApp",
      ctaStyle: "primary",
      popular: false
    }
  ],
  faqs: [
    {
      q: "What types of photoshoots does DecorSpot 2.0 specialize in?",
      a: "While we are widely celebrated for our specialized newborn sanctuary, DecorSpot 2.0 is a comprehensive boutique portrait studio! We specialize in: Newborn & Baby, Maternity & Motherhood, Pre-Wedding & Couples, 1st Birthday & Cake Smash celebrations, Family Portraits, and Commercial / Brand / Product photography."
    },
    {
      q: "When is the best time to book newborn vs maternity sessions?",
      a: "For newborn sessions, we recommend booking during your second or third trimester; sessions are held between day 5 and week 4 for sweet sleepy poses. For maternity shoots, the golden window is between weeks 28 and 34, when your baby bump is beautifully rounded and you still feel energetic."
    },
    {
      q: "How do Pre-Wedding and Couple shoots work?",
      a: "We collaborate with couples to plan both indoor aesthetic studio concepts and outdoor picturesque locations around Kerala. We guide you into effortless, genuine interactions rather than stiff poses, delivering both intimate romance and editorial grandeur."
    },
    {
      q: "What is included in a Birthday or Cake Smash session?",
      a: "Our birthday sessions include custom-designed theme backdrops (balloons, florals, boho setups), clean milestone portraiture, followed by the fun cake smash segment and a warm bubble bath splash! We take care of all sanitization and cleanup."
    },
    {
      q: "Do you undertake commercial and product shoots?",
      a: "Yes! We work with brands, fashion labels, e-commerce stores, jewellery designers, and corporate executives. Our studio is equipped with professional strobe lights, modifiers, product tables, and calibrated color workflows."
    },
    {
      q: "Do you provide wardrobe, gowns, and newborn wraps?",
      a: "Yes! We have an extensive wardrobe of luxury maternity gowns, sanitized baby wraps, handmade mohair bonnets, vintage bowls, and theme props. Everything is sterilized with hospital-grade, hypoallergenic protocols before every single session."
    },
    {
      q: "How and when do we receive our final photos?",
      a: "Within 48 hours of your session, you will receive a private digital proofing gallery to select your favorites. Final retouched high-resolution images are delivered within 10 to 14 days. Handcrafted heirloom albums and fine-art prints are dispatched within 3 to 4 weeks."
    }
  ]
};

let currentPackageFilter = 'all';

const SCHEMA_VERSION = '2.4';

function loadConfigFromStorage() {
  try {
    const version = localStorage.getItem('decorspot_schema_version');
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      let parsed = JSON.parse(stored);
      const hasAllServices = parsed.services && parsed.services.length >= 6;
      const hasAllPackages = parsed.packages && parsed.packages.some(p => p.category === 'prewedding') && parsed.packages.some(p => p.category === 'maternity');
      const hasAllPhotos = parsed.photos && parsed.photos.some(p => p.category === 'commercial') && parsed.photos.some(p => p.category === 'prewedding');

      if (!hasAllServices || !hasAllPackages || !hasAllPhotos || version !== SCHEMA_VERSION) {
        parsed = {
          ...DEFAULT_DATA,
          ...parsed,
          studio: { ...DEFAULT_DATA.studio, ...(parsed.studio || {}) },
          contact: { ...DEFAULT_DATA.contact, ...(parsed.contact || {}) },
          services: hasAllServices ? parsed.services : DEFAULT_DATA.services,
          photos: hasAllPhotos ? parsed.photos : DEFAULT_DATA.photos,
          packages: hasAllPackages ? parsed.packages : DEFAULT_DATA.packages,
          faqs: (parsed.faqs && parsed.faqs.length >= 6) ? parsed.faqs : DEFAULT_DATA.faqs
        };
        // Ensure new multi-photoshoot copy is used if old baby-only copy was stored
        if (!parsed.studio.heroTagline || parsed.studio.heroTagline.includes("Gentle beginnings")) {
          parsed.studio.heroTagline = DEFAULT_DATA.studio.heroTagline;
          parsed.studio.heroEyebrow = DEFAULT_DATA.studio.heroEyebrow;
          parsed.studio.heroDesc = DEFAULT_DATA.studio.heroDesc;
          parsed.studio.subtitle = DEFAULT_DATA.studio.subtitle;
        }
        // Auto-migrate location if old location was stored
        if (!parsed.contact.locationDisplay || parsed.contact.locationDisplay.includes("Thrissur") || parsed.contact.locationDisplay === "Muvattupuzha, Ernakulam, Kerala") {
          parsed.contact.locationDisplay = DEFAULT_DATA.contact.locationDisplay;
          parsed.contact.mapsUrl = DEFAULT_DATA.contact.mapsUrl;
        }
        if (!parsed.studio.heroDesc || parsed.studio.heroDesc.includes("Thrissur") || parsed.studio.heroDesc.includes("in Muvattupuzha, Kerala")) {
          parsed.studio.heroDesc = DEFAULT_DATA.studio.heroDesc;
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
          localStorage.setItem('decorspot_schema_version', SCHEMA_VERSION);
        } catch(e) {}
      }

      return {
        studioName: parsed.studio?.name || DEFAULT_DATA.studio.name,
        studioSubtitle: parsed.studio?.subtitle || DEFAULT_DATA.studio.subtitle,
        heroEyebrow: parsed.studio?.heroEyebrow || DEFAULT_DATA.studio.heroEyebrow,
        heroTagline: parsed.studio?.heroTagline || DEFAULT_DATA.studio.heroTagline,
        heroDesc: parsed.studio?.heroDesc || DEFAULT_DATA.studio.heroDesc,
        bookingNote: parsed.studio?.bookingNote || DEFAULT_DATA.studio.bookingNote,
        whatsappNumber: parsed.contact?.waNumber || DEFAULT_DATA.contact.waNumber,
        whatsappCleanNumber: parsed.contact?.waCleanNumber || DEFAULT_DATA.contact.waCleanNumber,
        defaultWhatsAppMessage: parsed.contact?.waDefaultMsg || DEFAULT_DATA.contact.waDefaultMsg,
        instagramUrl: parsed.contact?.instaUrl || DEFAULT_DATA.contact.instaUrl,
        instagramTag: parsed.contact?.instaHandle || DEFAULT_DATA.contact.instaHandle,
        city: parsed.contact?.locationDisplay || DEFAULT_DATA.contact.locationDisplay,
        googleMapsUrl: parsed.contact?.mapsUrl || DEFAULT_DATA.contact.mapsUrl,
        features: parsed.studio?.features || DEFAULT_DATA.studio.features,
        services: parsed.services && parsed.services.length ? parsed.services : DEFAULT_DATA.services,
        photos: parsed.photos && parsed.photos.length ? parsed.photos : DEFAULT_DATA.photos,
        packages: parsed.packages && parsed.packages.length ? parsed.packages : DEFAULT_DATA.packages,
        faqs: parsed.faqs && parsed.faqs.length ? parsed.faqs : DEFAULT_DATA.faqs
      };
    }
  } catch (e) {
    console.warn('Failed to load config from storage:', e);
  }
  return {
    studioName: DEFAULT_DATA.studio.name,
    studioSubtitle: DEFAULT_DATA.studio.subtitle,
    heroEyebrow: DEFAULT_DATA.studio.heroEyebrow,
    heroTagline: DEFAULT_DATA.studio.heroTagline,
    heroDesc: DEFAULT_DATA.studio.heroDesc,
    bookingNote: DEFAULT_DATA.studio.bookingNote,
    whatsappNumber: DEFAULT_DATA.contact.waNumber,
    whatsappCleanNumber: DEFAULT_DATA.contact.waCleanNumber,
    defaultWhatsAppMessage: DEFAULT_DATA.contact.waDefaultMsg,
    instagramUrl: DEFAULT_DATA.contact.instaUrl,
    instagramTag: DEFAULT_DATA.contact.instaHandle,
    city: DEFAULT_DATA.contact.locationDisplay,
    googleMapsUrl: DEFAULT_DATA.contact.mapsUrl,
    features: DEFAULT_DATA.studio.features,
    services: DEFAULT_DATA.services,
    photos: DEFAULT_DATA.photos,
    packages: DEFAULT_DATA.packages,
    faqs: DEFAULT_DATA.faqs
  };
}

let DECORS_CONFIG = loadConfigFromStorage();

/**
 * Builds a valid WhatsApp redirection link with optional custom encoded text
 */
function getWhatsAppRedirectUrl(customMessage) {
  const msg = customMessage || DECORS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${DECORS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * Navigation & Mobile Drawer
 */
function setupNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const menuDrawer = document.getElementById("mobileMenuDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuDrawer.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      if (isOpen) {
        menuBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>`;
      } else {
        menuBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>`;
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuDrawer.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>`;
      });
    });
  }
}

/**
 * Sticky Header Scroll State
 */
function setupHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * FAQ Accordion Behavior
 */
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question-btn");
    if (!btn) return;

    btn.onclick = () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const toggleCircle = otherItem.querySelector(".faq-toggle-circle");
          if (toggleCircle) toggleCircle.innerHTML = `+`;
        }
      });

      if (isActive) {
        item.classList.remove("active");
        btn.querySelector(".faq-toggle-circle").innerHTML = `+`;
      } else {
        item.classList.add("active");
        btn.querySelector(".faq-toggle-circle").innerHTML = `−`;
      }
    };
  });
}

/**
 * Gallery Categorization & Lightbox
 */
function setupGalleryFiltersAndLightbox() {
  const filterBtns = document.querySelectorAll(".gallery-filters .filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxCloseBtn");

  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue || (filterValue === "family" && (category === "family" || category === "details"))) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    };
  });

  galleryItems.forEach(item => {
    item.onclick = () => {
      const img = item.querySelector(".gallery-img");
      const caption = item.querySelector(".gallery-caption span");
      if (img && modal && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || "DecorSpot Photography";
        if (modalCaption && caption) {
          modalCaption.textContent = caption.textContent;
        }
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    };
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (closeBtn) closeBtn.onclick = closeModal;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * Packages Category Filter setup
 */
function setupPackageFilters() {
  const filterBtns = document.querySelectorAll(".package-filter-btn");
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentPackageFilter = btn.getAttribute("data-pkg-filter");
      renderPackages(DECORS_CONFIG.packages, currentPackageFilter);
    };
  });
}

/**
 * Interactive Enquiry Form with WhatsApp Direct Hand-off & LocalStorage Lead Tracking
 */
function setupEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  const successState = document.getElementById("enquirySuccessState");
  const sendAnotherBtn = document.getElementById("sendAnotherBtn");
  const whatsappSubmitBtn = document.getElementById("whatsappSubmitBtn");

  if (!form) return;

  function recordLead(name, phone, session, notes) {
    try {
      const existing = JSON.parse(localStorage.getItem(ENQUIRIES_KEY) || '[]');
      const newLead = {
        id: 'lead_' + Date.now(),
        name,
        phone: phone || '',
        session,
        notes: notes || '',
        date: new Date().toLocaleString(),
        status: 'new'
      };
      existing.unshift(newLead);
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(existing));
      window.dispatchEvent(new CustomEvent('decorspot-lead-added', { detail: newLead }));
    } catch (e) {
      console.warn('Could not record lead:', e);
    }
  }

  // Handle "Submit & Send via WhatsApp" button
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.onclick = (e) => {
      e.preventDefault();
      const name = document.getElementById("parentName").value.trim();
      const phoneInput = document.getElementById("parentPhone");
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const session = document.getElementById("sessionType").value;
      const notes = document.getElementById("parentNotes") ? document.getElementById("parentNotes").value.trim() : "";

      if (!name) {
        alert("Please enter your name to connect on WhatsApp.");
        document.getElementById("parentName").focus();
        return;
      }

      recordLead(name, phone, session, notes);

      let message = `Hello DecorSpot Studio! 👋 My name is ${name}. I am inquiring about a "${session}".`;
      if (phone) message += ` My contact number is ${phone}.`;
      if (notes) message += ` Note / Preferred Date: ${notes}`;

      const waUrl = getWhatsAppRedirectUrl(message);
      window.open(waUrl, "_blank", "noopener,noreferrer");

      form.style.display = "none";
      if (successState) successState.style.display = "flex";
    };
  }

  // Handle standard "Start the conversation" form submit
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("parentName").value.trim();
    const phoneInput = document.getElementById("parentPhone");
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const session = document.getElementById("sessionType").value;
    const notes = document.getElementById("parentNotes") ? document.getElementById("parentNotes").value.trim() : "";

    recordLead(name, phone, session, notes);

    form.style.display = "none";
    if (successState) {
      successState.style.display = "flex";
      const successWaLink = document.getElementById("successWhatsAppLink");
      if (successWaLink) {
        let message = `Hello DecorSpot Studio! My name is ${name}. I am inquiring about a "${session}".`;
        if (phone) message += ` My contact: ${phone}.`;
        if (notes) message += ` Notes: ${notes}`;
        successWaLink.href = getWhatsAppRedirectUrl(message);
      }
    }
  };

  if (sendAnotherBtn) {
    sendAnotherBtn.onclick = () => {
      form.reset();
      form.style.display = "block";
      if (successState) successState.style.display = "none";
    };
  }
}

/**
 * Instagram Tag Clipboard & Redirection
 */
function setupInstagramCopy() {
  const instaPills = document.querySelectorAll(".insta-tag-pill, .copy-insta-trigger");

  instaPills.forEach(pill => {
    pill.onclick = () => {
      navigator.clipboard.writeText(DECORS_CONFIG.instagramTag).then(() => {
        showToast(`Copied Instagram Tag: ${DECORS_CONFIG.instagramTag}`);
      }).catch(() => {
        showToast(`Instagram: ${DECORS_CONFIG.instagramTag}`);
      });
    };
  });
}

function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/**
 * Renders Studio Services (All Types of Photoshoots)
 */
function renderServices(services) {
  const grid = document.getElementById('servicesGrid');
  if (!grid || !services || !services.length) return;

  grid.innerHTML = services.map(svc => `
    <article class="service-card" data-service-id="${svc.id}">
      <div class="service-card-media">
        <img src="${svc.image}" alt="${svc.title}" class="service-card-img" loading="lazy" onerror="this.src='img1.JPG'" />
        <span class="service-badge-pill">${svc.category || 'Specialization'}</span>
        ${svc.badge ? `<span class="service-tag-pill">${svc.badge}</span>` : ''}
      </div>
      <div class="service-card-content">
        <div>
          <h3 class="service-card-title">${svc.title}</h3>
          <p class="service-card-desc">${svc.desc}</p>
          <ul class="service-card-highlights">
            ${(svc.highlights || []).map(h => `
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <a href="${getWhatsAppRedirectUrl(svc.whatsappMsg || `Hello DecorSpot! I'd love to enquire about ${svc.title}.`)}" target="_blank" rel="noopener noreferrer" class="btn-primary-whatsapp service-card-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span>Enquire for ${svc.title.split(' ')[0]}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </article>
  `).join('');
}

/**
 * Renders Gallery Photos
 */
function renderGallery(photos) {
  const grid = document.querySelector('.gallery-grid');
  if (!grid || !photos || !photos.length) return;

  grid.innerHTML = photos.map(photo => `
    <figure class="gallery-item ${photo.size || 'col-span-6'}" data-category="${photo.category || 'newborn'}">
      <img src="${photo.src}" alt="${photo.alt || 'DecorSpot Photography'}" class="gallery-img" loading="lazy" onerror="this.src='img1.JPG'" />
      <div class="gallery-vignette"></div>
      <figcaption class="gallery-caption">
        <span>${photo.caption || 'untitled story'}</span>
        <svg class="gallery-zoom-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      </figcaption>
    </figure>
  `).join('');

  setupGalleryFiltersAndLightbox();
}

/**
 * Renders Packages with Category Filter
 */
function renderPackages(packages, filter = 'all') {
  const container = document.getElementById('packagesListGrid') || document.querySelector('#packages .process-grid');
  if (!container || !packages || !packages.length) return;

  const filtered = filter === 'all' ? packages : packages.filter(p => (p.category || 'newborn') === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: rgba(255,255,255,0.7); border-radius: 20px; border: 1px dashed rgba(37,63,53,0.2);">
        <p style="font-family: var(--font-display); font-size: 1.4rem; color: var(--color-primary);">Custom Bespoke Collection</p>
        <p style="margin-top: 8px; font-size: 0.92rem; color: var(--color-text-muted);">We create custom tailored packages for this category. Contact us on WhatsApp for a personalized quotation!</p>
        <div style="margin-top: 24px;">
          <a href="${getWhatsAppRedirectUrl(`Hello DecorSpot! I'd love a custom quote for a ${filter} photoshoot session.`)}" target="_blank" rel="noopener noreferrer" class="btn-primary-whatsapp" style="display:inline-flex;">
            <span>Request Custom Quote</span>
          </a>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pkg => `
    <div style="background: ${pkg.popular ? '#fff' : 'rgba(255, 255, 255, 0.85)'}; border: ${pkg.popular ? '2px solid var(--color-terracotta)' : '1px solid rgba(37, 63, 53, 0.12)'}; border-radius: 24px; padding: 36px 30px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: ${pkg.popular ? 'var(--shadow-elevated)' : 'var(--shadow-soft)'}; position: relative;">
      ${pkg.popular ? '<div style="position: absolute; top: -14px; right: 28px; background: var(--color-terracotta); color: #fff; font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; padding: 4px 14px; border-radius: 999px; font-weight: 700;">Most Cherished</div>' : ''}
      <div>
        <span style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; color: ${pkg.ctaStyle === 'terracotta' ? 'var(--color-terracotta)' : 'var(--color-primary)'}; background: ${pkg.ctaStyle === 'terracotta' ? 'rgba(198, 133, 109, 0.12)' : 'rgba(37, 63, 53, 0.08)'}; padding: 4px 12px; border-radius: 999px;">${pkg.label}</span>
        <h3 style="font-family: var(--font-display); font-size: 1.9rem; margin-top: 18px; color: var(--color-primary);">${pkg.title}</h3>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-top: 8px;">${pkg.desc}</p>
        <ul style="margin-top: 24px; display: flex; flex-direction: column; gap: 12px; font-size: 0.88rem; color: var(--color-text-main); list-style: none;">
          ${(pkg.highlights || []).map(h => `<li style="display: flex; align-items: center; gap: 8px;${h.startsWith('✓') ? ' font-weight: 600;' : ''}">${h.startsWith('✓') ? h : '✓ ' + h}</li>`).join('')}
        </ul>
      </div>
      <div style="margin-top: 36px;">
        <a href="${getWhatsAppRedirectUrl(`Hello DecorSpot Studio! I would love to enquire about the ${pkg.title} (${pkg.label}) Package.`)}" target="_blank" rel="noopener noreferrer" class="btn-primary-whatsapp" style="width: 100%; justify-content: center; ${pkg.ctaStyle === 'terracotta' ? 'background: var(--color-terracotta);' : ''} padding: ${pkg.ctaStyle === 'terracotta' ? '13px 20px' : '12px 20px'}; font-size: ${pkg.ctaStyle === 'terracotta' ? '0.88rem' : '0.85rem'};">
          <span>${pkg.ctaText || 'Enquire on WhatsApp'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  `).join('');
}

/**
 * Renders FAQs
 */
function renderFAQs(faqs) {
  const faqList = document.querySelector('.faq-list');
  if (!faqList || !faqs || !faqs.length) return;

  faqList.innerHTML = faqs.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button type="button" class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
        <span class="faq-question-text">${faq.q}</span>
        <span class="faq-toggle-circle">${idx === 0 ? '−' : '+'}</span>
      </button>
      <div class="faq-answer-wrap">
        <p class="faq-answer-text">${faq.a}</p>
      </div>
    </div>
  `).join('');

  setupFAQAccordion();
}

/**
 * Renders Safety & Trust Features
 */
function renderSafetyFeatures(features) {
  const banner = document.querySelector('.safety-highlight-banner');
  if (!banner || !features) return;

  const items = [];
  if (features.sanitized) items.push({ icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', text: 'Hospital-grade sanitized wraps & baby props' });
  if (features.climate) items.push({ icon: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z', text: 'Cozy 28°C climate-controlled newborn suite' });
  if (features.babyLed) items.push({ icon: 'M12 6v6l4 2', text: 'Never rushed — 100% baby-led sessions' });
  if (features.wardrobe) items.push({ icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', text: 'Curated luxury wardrobe & heirloom props' });
  if (features.albums) items.push({ icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20', text: 'Handcrafted premium keepsake albums' });
  if (features.commercialRig) items.push({ icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', text: 'Commercial 4K strobe lighting & cyclorama' });
  if (features.outdoorSets) items.push({ icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', text: 'Romantic outdoor pre-wedding & couple sets' });

  if (items.length > 0) {
    banner.innerHTML = items.map(item => `
      <div class="safety-item">
        <svg class="safety-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="${item.icon}"></path>
        </svg>
        <span>${item.text}</span>
      </div>
    `).join('');
  }
}

/**
 * Applies Global Config to all DOM elements
 */
function applyConfigToDOM() {
  const config = DECORS_CONFIG;

  document.querySelectorAll('.brand-title').forEach(el => el.textContent = config.studioName + ' ');
  document.querySelectorAll('.brand-subtitle').forEach(el => el.textContent = config.studioSubtitle);
  document.querySelectorAll('.footer-brand-title').forEach(el => el.textContent = config.studioName.toLowerCase());
  document.querySelectorAll('.footer-brand-sub').forEach(el => el.textContent = config.studioSubtitle);

  const heroEyebrow = document.querySelector('.hero-eyebrow');
  if (heroEyebrow && config.heroEyebrow) heroEyebrow.textContent = config.heroEyebrow;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && config.heroTagline) {
    let cleanTagline = config.heroTagline.replace(/,([^\s\n])/g, ', $1');
    if (cleanTagline.includes('\n')) {
      heroTitle.innerHTML = cleanTagline.replace(/\n+/g, '<br>');
    } else if (cleanTagline.includes(',')) {
      heroTitle.innerHTML = cleanTagline.replace(/,\s*/, ',<br>');
    } else {
      heroTitle.textContent = cleanTagline;
    }
  }

  const heroBody = document.querySelector('.hero-body');
  if (heroBody) heroBody.textContent = config.heroDesc;

  const bookingNote = document.querySelector('.hero-booking-note span:last-child');
  if (bookingNote) bookingNote.textContent = config.bookingNote;

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.href = getWhatsAppRedirectUrl();
  });

  document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.href = config.instagramUrl;
  });

  document.querySelectorAll('.insta-handle-text, .footer-link[href*="instagram"]').forEach(el => {
    if (el.textContent.includes('@')) el.textContent = config.instagramTag;
  });

  document.querySelectorAll('.footer-location-link span, .social-location-link span, .enquire-maps-text').forEach(el => {
    el.textContent = config.city + ' ↗';
  });

  document.querySelectorAll('a[href*="maps.google.com"], a.footer-location-link, a.social-location-link, #enquireMapsBtn, .footer-maps-bottom-link').forEach(link => {
    link.href = config.googleMapsUrl;
  });

  renderServices(config.services);
  renderGallery(config.photos);
  renderPackages(config.packages, currentPackageFilter);
  renderFAQs(config.faqs);
  renderSafetyFeatures(config.features);
}

// Listen for updates from other tabs
window.addEventListener('storage', (e) => {
  if (e.key === STORAGE_KEY) {
    DECORS_CONFIG = loadConfigFromStorage();
    applyConfigToDOM();
  }
});

// Listen for same-tab updates from Admin Panel
window.addEventListener('decorspot-data-updated', () => {
  DECORS_CONFIG = loadConfigFromStorage();
  applyConfigToDOM();
});

// Document ready initialization
function initDecorSpot() {
  DECORS_CONFIG = loadConfigFromStorage();
  applyConfigToDOM();
  setupNavigation();
  setupPackageFilters();
  setupFAQAccordion();
  setupGalleryFiltersAndLightbox();
  setupEnquiryForm();
  setupInstagramCopy();
  setupHeaderScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDecorSpot);
} else {
  initDecorSpot();
}
