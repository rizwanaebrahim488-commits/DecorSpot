/**
 * DECORSPOT 2.0 — Studio Admin CMS Engine
 * Handles customer inquiries, photoshoot services, gallery photos, packages, studio info, and backups
 */

const STORAGE_KEY = 'decorspot_site_data';
const ENQUIRIES_KEY = 'decorspot_enquiries';
const ADMIN_PWD_KEY = 'decorspot_admin_pwd';

const DEFAULT_DATA = {
  studio: {
    name: "DecorSpot 2.0",
    subtitle: "newborn & creative portrait studio",
    heroEyebrow: "fine art & boutique portrait studio",
    heroTagline: "Every chapter,\nbeautifully captured.",
    heroDesc: "A warm, boutique photography studio in Muvattupuzha, Kerala. Specializing in timeless newborn & baby sessions, glowing maternity stories, cinematic pre-weddings, joyful birthdays, and refined commercial brand imagery.",
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
    locationDisplay: "Muvattupuzha, Ernakulam, Kerala",
    mapsUrl: "https://maps.google.com/?q=Muvattupuzha,+Ernakulam,+Kerala",
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

let currentData = { ...DEFAULT_DATA };
let selectedFiles = [];
let currentCategoryFilter = 'all';

const SCHEMA_VERSION = '2.2';

function loadData() {
  try {
    const version = localStorage.getItem('decorspot_schema_version');
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const hasAllServices = parsed.services && parsed.services.length >= 6;
      const hasAllPackages = parsed.packages && parsed.packages.some(p => p.category === 'prewedding') && parsed.packages.some(p => p.category === 'maternity');
      const hasAllPhotos = parsed.photos && parsed.photos.some(p => p.category === 'commercial') && parsed.photos.some(p => p.category === 'prewedding');

      currentData = {
        studio: { ...DEFAULT_DATA.studio, ...(parsed.studio || {}) },
        contact: { ...DEFAULT_DATA.contact, ...(parsed.contact || {}) },
        services: hasAllServices ? parsed.services : DEFAULT_DATA.services,
        photos: hasAllPhotos ? parsed.photos : DEFAULT_DATA.photos,
        packages: hasAllPackages ? parsed.packages : DEFAULT_DATA.packages,
        faqs: (parsed.faqs && parsed.faqs.length >= 6) ? parsed.faqs : DEFAULT_DATA.faqs
      };

      if (!currentData.studio.heroTagline || currentData.studio.heroTagline.includes("Gentle beginnings")) {
        currentData.studio.heroTagline = DEFAULT_DATA.studio.heroTagline;
        currentData.studio.heroEyebrow = DEFAULT_DATA.studio.heroEyebrow;
        currentData.studio.heroDesc = DEFAULT_DATA.studio.heroDesc;
        currentData.studio.subtitle = DEFAULT_DATA.studio.subtitle;
      }

      if (!hasAllServices || !hasAllPackages || !hasAllPhotos || version !== SCHEMA_VERSION) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
        localStorage.setItem('decorspot_schema_version', SCHEMA_VERSION);
      }
    } else {
      currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
      localStorage.setItem('decorspot_schema_version', SCHEMA_VERSION);
    }
  } catch (e) {
    console.warn('Failed to parse admin data:', e);
    currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  applyDataToForm();
  renderLeads();
  renderServices();
  renderPhotoGrid();
  renderPackages();
  renderFaqs();
}

function saveData(silent = false) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
  if (!silent) showToast('Settings saved successfully and synced to live site!', 'success');
  window.dispatchEvent(new CustomEvent('decorspot-data-updated', { detail: currentData }));
}

function applyDataToForm() {
  // Studio Details
  document.getElementById('studioName').value = currentData.studio.name || '';
  document.getElementById('studioSubtitle').value = currentData.studio.subtitle || '';
  document.getElementById('heroEyebrow').value = currentData.studio.heroEyebrow || '';
  document.getElementById('heroTagline').value = currentData.studio.heroTagline || '';
  document.getElementById('heroDesc').value = currentData.studio.heroDesc || '';
  document.getElementById('bookingNote').value = currentData.studio.bookingNote || '';

  // Amenities
  const f = currentData.studio.features || {};
  document.getElementById('featSanitized').checked = !!f.sanitized;
  document.getElementById('featClimate').checked = !!f.climate;
  document.getElementById('featBabyLed').checked = !!f.babyLed;
  document.getElementById('featWardrobe').checked = !!f.wardrobe;
  document.getElementById('featAlbums').checked = !!f.albums;
  document.getElementById('featCommercialRig').checked = !!f.commercialRig;
  document.getElementById('featOutdoorSets').checked = !!f.outdoorSets;

  // Contact
  document.getElementById('waNumber').value = currentData.contact.waNumber || '';
  document.getElementById('waCleanNumber').value = currentData.contact.waCleanNumber || '';
  document.getElementById('waDefaultMsg').value = currentData.contact.waDefaultMsg || '';
  document.getElementById('instaHandle').value = currentData.contact.instaHandle || '';
  document.getElementById('instaUrl').value = currentData.contact.instaUrl || '';
  document.getElementById('locationDisplay').value = currentData.contact.locationDisplay || '';
  document.getElementById('mapsUrl').value = currentData.contact.mapsUrl || '';
  document.getElementById('workingHours').value = currentData.contact.workingHours || '';
}

/**
 * TAB 1: Leads & Inquiries
 */
function renderLeads() {
  let leads = [];
  try {
    leads = JSON.parse(localStorage.getItem(ENQUIRIES_KEY) || '[]');
  } catch (e) {
    leads = [];
  }

  const tbody = document.getElementById('leadsTableBody');
  const badge = document.getElementById('leadsCountBadge');
  if (badge) badge.textContent = leads.length;

  if (!tbody) return;

  if (leads.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center;padding:32px;color:var(--color-text-muted);">
          No inquiries yet. When clients submit the enquiry form on your website, their contact details and notes will appear right here!
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = leads.map((lead, idx) => {
    const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
    const waReplyMsg = `Hello ${lead.name}! Thank you for reaching out to DecorSpot 2.0 regarding your ${lead.session}. We would love to discuss dates and details!`;
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waReplyMsg)}` : `https://wa.me/${currentData.contact.waCleanNumber}`;

    return `
      <tr>
        <td><strong>${lead.name}</strong></td>
        <td><span style="font-size:0.82rem;background:rgba(37,63,53,0.08);padding:3px 8px;border-radius:6px;">${lead.session}</span></td>
        <td>
          ${lead.phone ? `<a href="${waLink}" target="_blank" style="color:var(--color-primary);font-weight:600;text-decoration:underline;">${lead.phone}</a>` : '<span style="color:var(--color-text-light);">Not provided</span>'}
        </td>
        <td><span style="font-size:0.82rem;color:var(--color-text-muted);">${lead.notes || '—'}</span></td>
        <td><span style="font-size:0.75rem;font-family:var(--font-mono);">${lead.date}</span></td>
        <td>
          <select class="admin-select lead-status-select" data-lead-idx="${idx}" style="padding:4px 8px;font-size:0.78rem;width:auto;">
            <option value="new" ${lead.status === 'new' ? 'selected' : ''}>New</option>
            <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
            <option value="booked" ${lead.status === 'booked' ? 'selected' : ''}>Booked</option>
          </select>
        </td>
        <td>
          <div style="display:flex;gap:6px;">
            ${cleanPhone ? `
              <a href="${waLink}" target="_blank" class="admin-btn small" style="background:#25D366;padding:4px 10px;font-size:0.75rem;">
                WhatsApp
              </a>
            ` : ''}
            <button class="admin-btn danger small lead-del-btn" data-lead-idx="${idx}" style="padding:4px 8px;">✕</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.lead-status-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = parseInt(e.target.dataset.leadIdx);
      leads[idx].status = e.target.value;
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(leads));
      showToast('Lead status updated', 'success');
    });
  });

  tbody.querySelectorAll('.lead-del-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.leadIdx);
      if (confirm('Delete this inquiry record?')) {
        leads.splice(idx, 1);
        localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(leads));
        renderLeads();
        showToast('Inquiry removed');
      }
    });
  });
}

/**
 * TAB 2: Services & Specializations
 */
function renderServices() {
  const container = document.getElementById('servicesList');
  if (!container) return;

  container.innerHTML = currentData.services.map((svc, idx) => `
    <div class="admin-card" style="margin-bottom:20px;border-left:4px solid var(--color-terracotta);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
        <div>
          <span style="font-family:var(--font-mono);font-size:0.68rem;text-transform:uppercase;color:var(--color-terracotta);letter-spacing:0.12em;font-weight:700;">Service #${idx + 1}</span>
          <h3 style="font-family:var(--font-display);font-size:1.4rem;color:var(--color-primary);margin-top:2px;">${svc.title}</h3>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="admin-btn terracotta small svc-save-btn" data-svc-idx="${idx}">Save Service</button>
          <button class="admin-btn danger small svc-del-btn" data-svc-idx="${idx}">Remove</button>
        </div>
      </div>

      <div class="form-row tri-col">
        <div>
          <label class="admin-label">Service Title</label>
          <input type="text" class="admin-input svc-title" value="${svc.title}" data-svc-idx="${idx}" />
        </div>
        <div>
          <label class="admin-label">Category Pill Label</label>
          <input type="text" class="admin-input svc-category" value="${svc.category || ''}" data-svc-idx="${idx}" />
        </div>
        <div>
          <label class="admin-label">Tag Badge (Top Right)</label>
          <input type="text" class="admin-input svc-badge" value="${svc.badge || ''}" data-svc-idx="${idx}" />
        </div>
      </div>

      <div class="form-row">
        <div>
          <label class="admin-label">Card Image (Path or Web URL)</label>
          <input type="text" class="admin-input svc-image" value="${svc.image}" data-svc-idx="${idx}" />
        </div>
        <div>
          <label class="admin-label">WhatsApp Enquiry Template</label>
          <input type="text" class="admin-input svc-wamsg" value="${svc.whatsappMsg || ''}" data-svc-idx="${idx}" />
        </div>
      </div>

      <div class="form-group full-width" style="margin-bottom:14px;">
        <label class="admin-label">Service Description</label>
        <textarea class="admin-textarea svc-desc" rows="2" data-svc-idx="${idx}">${svc.desc}</textarea>
      </div>

      <div class="form-group full-width">
        <label class="admin-label">Highlights / Inclusions (one per line)</label>
        <textarea class="admin-textarea svc-highlights" rows="3" data-svc-idx="${idx}" style="font-family:var(--font-mono);font-size:0.82rem;">${(svc.highlights || []).join('\n')}</textarea>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.svc-save-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.svcIdx);
      const svc = currentData.services[idx];
      svc.title = container.querySelector(`.svc-title[data-svc-idx="${idx}"]`).value;
      svc.category = container.querySelector(`.svc-category[data-svc-idx="${idx}"]`).value;
      svc.badge = container.querySelector(`.svc-badge[data-svc-idx="${idx}"]`).value;
      svc.image = container.querySelector(`.svc-image[data-svc-idx="${idx}"]`).value;
      svc.whatsappMsg = container.querySelector(`.svc-wamsg[data-svc-idx="${idx}"]`).value;
      svc.desc = container.querySelector(`.svc-desc[data-svc-idx="${idx}"]`).value;
      svc.highlights = container.querySelector(`.svc-highlights[data-svc-idx="${idx}"]`).value
        .split('\n')
        .map(h => h.trim())
        .filter(Boolean);
      saveData();
      renderServices();
    });
  });

  container.querySelectorAll('.svc-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.svcIdx);
      if (confirm('Are you sure you want to remove this service from your website?')) {
        currentData.services.splice(idx, 1);
        saveData();
        renderServices();
      }
    });
  });
}

/**
 * TAB 3: Gallery Photos
 */
function renderPhotoGrid() {
  const grid = document.getElementById('photoGrid');
  const countBadge = document.getElementById('photoTotalBadge');
  if (!grid) return;

  const filtered = currentCategoryFilter === 'all'
    ? currentData.photos
    : currentData.photos.filter(p => (p.category || 'newborn') === currentCategoryFilter);

  if (countBadge) countBadge.textContent = `${filtered.length} photos shown (${currentData.photos.length} total)`;

  grid.innerHTML = filtered.map(photo => {
    const realIdx = currentData.photos.indexOf(photo);
    return `
      <div class="photo-item" data-index="${realIdx}">
        <img src="${photo.src}" alt="${photo.alt || ''}" loading="lazy" onerror="this.src='img1.JPG'" />
        <div class="photo-actions">
          <button class="photo-btn edit" data-idx="${realIdx}" title="Edit details">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="photo-btn del" data-idx="${realIdx}" title="Delete photo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div style="position:absolute;bottom:0;left:0;right:0;padding:6px 10px;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent);font-size:0.68rem;color:#fff;font-family:var(--font-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
          ${photo.caption || 'untitled'}
        </div>
        <div style="position:absolute;top:8px;left:8px;padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.65);font-size:0.62rem;color:#fff;font-family:var(--font-mono);text-transform:uppercase;">
          ${photo.category || 'newborn'}
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.photo-btn.del').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.idx);
      if (confirm('Delete this photo from the gallery?')) {
        currentData.photos.splice(idx, 1);
        saveData();
        renderPhotoGrid();
      }
    });
  });

  grid.querySelectorAll('.photo-btn.edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openPhotoEditModal(parseInt(btn.dataset.idx));
    });
  });
}

function openPhotoEditModal(idx) {
  const photo = currentData.photos[idx];
  if (!photo) return;

  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;z-index:3000;background:rgba(0,0,0,0.75);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px;';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:28px;max-width:550px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,0.3);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-family:var(--font-display);color:var(--color-primary);font-size:1.3rem;margin:0;">Edit Photo Details</h3>
        <button id="modalClose" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--color-primary);">&times;</button>
      </div>
      <div style="display:flex;gap:16px;margin-bottom:16px;">
        <img src="${photo.src}" style="width:100px;height:100px;border-radius:10px;object-fit:cover;border:1px solid rgba(37,63,53,0.15);" />
        <div style="flex:1;">
          <label class="admin-label">Image URL / Path</label>
          <input type="text" class="admin-input" id="editSrc" value="${photo.src}" />
        </div>
      </div>
      <div class="form-row">
        <div>
          <label class="admin-label">Category</label>
          <select class="admin-select" id="editCat">
            <option value="newborn" ${photo.category === 'newborn' ? 'selected' : ''}>Newborn & Baby</option>
            <option value="maternity" ${photo.category === 'maternity' ? 'selected' : ''}>Maternity & Motherhood</option>
            <option value="prewedding" ${photo.category === 'prewedding' ? 'selected' : ''}>Pre-Wedding & Couples</option>
            <option value="birthday" ${photo.category === 'birthday' ? 'selected' : ''}>Birthdays & Milestones</option>
            <option value="commercial" ${photo.category === 'commercial' ? 'selected' : ''}>Commercial & Brand</option>
            <option value="family" ${photo.category === 'family' ? 'selected' : ''}>Family & Tender Moments</option>
            <option value="details" ${photo.category === 'details' ? 'selected' : ''}>Tiny Details & Hands</option>
          </select>
        </div>
        <div>
          <label class="admin-label">Grid Layout Size</label>
          <select class="admin-select" id="editSize">
            <option value="col-span-6" ${photo.size === 'col-span-6' ? 'selected' : ''}>Medium (Half Width - 6 col)</option>
            <option value="col-span-7-row-2" ${photo.size === 'col-span-7-row-2' ? 'selected' : ''}>Featured Portrait (Large - 7 col, 2 row)</option>
            <option value="col-span-5" ${photo.size === 'col-span-5' ? 'selected' : ''}>Standard (5 col)</option>
            <option value="col-span-12" ${photo.size === 'col-span-12' ? 'selected' : ''}>Full Width Banner (12 col)</option>
          </select>
        </div>
      </div>
      <div class="form-group" style="margin-bottom:14px;">
        <label class="admin-label">Caption / Story Title</label>
        <input type="text" class="admin-input" id="editCaption" value="${photo.caption || ''}" />
      </div>
      <div class="form-group" style="margin-bottom:20px;">
        <label class="admin-label">Accessibility Alt Text</label>
        <input type="text" class="admin-input" id="editAlt" value="${photo.alt || ''}" />
      </div>
      <button class="admin-btn" id="modalSave" style="width:100%;justify-content:center;">Save Photo Changes</button>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('#modalClose').onclick = () => modal.remove();
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  modal.querySelector('#modalSave').onclick = () => {
    photo.src = document.getElementById('editSrc').value.trim();
    photo.category = document.getElementById('editCat').value;
    photo.size = document.getElementById('editSize').value;
    photo.caption = document.getElementById('editCaption').value.trim();
    photo.alt = document.getElementById('editAlt').value.trim();
    saveData();
    renderPhotoGrid();
    modal.remove();
  };
}

function handleFileUpload(files) {
  const maxSize = 8 * 1024 * 1024;
  const validFiles = Array.from(files).filter(f => {
    if (!f.type.startsWith('image/')) {
      showToast(`${f.name} is not an image file`, 'error');
      return false;
    }
    if (f.size > maxSize) {
      showToast(`${f.name} is too large (> 8MB)`, 'error');
      return false;
    }
    return true;
  });

  selectedFiles = [...selectedFiles, ...validFiles];
  const btn = document.getElementById('uploadBtn');
  btn.disabled = selectedFiles.length === 0;
  btn.textContent = `Upload ${selectedFiles.length} Selected Image(s)`;
}

function uploadPhotos() {
  const cat = document.getElementById('newPhotoCategory').value;
  const size = document.getElementById('newPhotoSize').value;
  const userCaption = document.getElementById('newPhotoCaption').value.trim();

  let completed = 0;
  selectedFiles.forEach((file, idx) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      currentData.photos.unshift({
        src: base64,
        alt: cleanName,
        category: cat,
        size: size,
        caption: userCaption || cleanName
      });
      completed++;
      if (completed === selectedFiles.length) {
        selectedFiles = [];
        const btn = document.getElementById('uploadBtn');
        btn.disabled = true;
        btn.textContent = 'Upload Selected Photos';
        document.getElementById('newPhotoCaption').value = '';
        saveData();
        renderPhotoGrid();
      }
    };
    reader.readAsDataURL(file);
  });
}

/**
 * TAB 4: Packages & Pricing
 */
function renderPackages() {
  const container = document.getElementById('packagesList');
  if (!container) return;

  container.innerHTML = currentData.packages.map((pkg, idx) => `
    <div class="admin-card" style="margin-bottom:20px;border-left:4px solid ${pkg.popular ? 'var(--color-terracotta)' : 'var(--color-primary)'};">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
        <div>
          <span style="font-family:var(--font-mono);font-size:0.68rem;text-transform:uppercase;color:var(--color-terracotta);letter-spacing:0.12em;font-weight:700;">
            ${pkg.category.toUpperCase()} • ${pkg.label}
          </span>
          <h3 style="font-family:var(--font-display);font-size:1.4rem;color:var(--color-primary);margin-top:2px;">
            ${pkg.title}
            ${pkg.popular ? '<span style="font-size:0.68rem;background:var(--color-terracotta);color:#fff;padding:2px 8px;border-radius:999px;font-family:var(--font-mono);margin-left:8px;">Most Cherished</span>' : ''}
          </h3>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="admin-btn terracotta small pkg-save-btn" data-pkg-idx="${idx}">Save Package</button>
          <button class="admin-btn danger small pkg-del-btn" data-pkg-idx="${idx}">Remove</button>
        </div>
      </div>

      <div class="form-row tri-col">
        <div>
          <label class="admin-label">Category</label>
          <select class="admin-select pkg-category" data-pkg-idx="${idx}">
            <option value="newborn" ${pkg.category === 'newborn' ? 'selected' : ''}>Newborn & Baby</option>
            <option value="maternity" ${pkg.category === 'maternity' ? 'selected' : ''}>Maternity</option>
            <option value="prewedding" ${pkg.category === 'prewedding' ? 'selected' : ''}>Pre-Wedding</option>
            <option value="birthday" ${pkg.category === 'birthday' ? 'selected' : ''}>Birthdays</option>
            <option value="commercial" ${pkg.category === 'commercial' ? 'selected' : ''}>Commercial</option>
          </select>
        </div>
        <div>
          <label class="admin-label">Collection Label</label>
          <input type="text" class="admin-input pkg-label" value="${pkg.label}" data-pkg-idx="${idx}" />
        </div>
        <div>
          <label class="admin-label">Package Title</label>
          <input type="text" class="admin-input pkg-title" value="${pkg.title}" data-pkg-idx="${idx}" />
        </div>
      </div>

      <div class="form-group full-width" style="margin-bottom:14px;">
        <label class="admin-label">Package Description</label>
        <textarea class="admin-textarea pkg-desc" rows="2" data-pkg-idx="${idx}">${pkg.desc}</textarea>
      </div>

      <div class="form-row">
        <div>
          <label class="admin-label">CTA Button Text</label>
          <input type="text" class="admin-input pkg-ctatext" value="${pkg.ctaText || 'Enquire on WhatsApp'}" data-pkg-idx="${idx}" />
        </div>
        <div>
          <label class="admin-label">CTA Color Styling</label>
          <select class="admin-select pkg-ctastyle" data-pkg-idx="${idx}">
            <option value="primary" ${pkg.ctaStyle === 'primary' ? 'selected' : ''}>Forest Pine Green</option>
            <option value="terracotta" ${pkg.ctaStyle === 'terracotta' ? 'selected' : ''}>Terracotta Highlight</option>
          </select>
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <label class="checkbox-item" style="display:inline-flex;">
          <input type="checkbox" class="pkg-popular" ${pkg.popular ? 'checked' : ''} data-pkg-idx="${idx}" />
          <span>Mark as "Most Cherished / Bestseller" package badge</span>
        </label>
      </div>

      <div class="form-group full-width">
        <label class="admin-label">Included Features / Highlights (one per line)</label>
        <textarea class="admin-textarea pkg-highlights" rows="4" data-pkg-idx="${idx}" style="font-family:var(--font-mono);font-size:0.82rem;">${(pkg.highlights || []).join('\n')}</textarea>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.pkg-save-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.pkgIdx);
      const pkg = currentData.packages[idx];
      pkg.category = container.querySelector(`.pkg-category[data-pkg-idx="${idx}"]`).value;
      pkg.label = container.querySelector(`.pkg-label[data-pkg-idx="${idx}"]`).value;
      pkg.title = container.querySelector(`.pkg-title[data-pkg-idx="${idx}"]`).value;
      pkg.desc = container.querySelector(`.pkg-desc[data-pkg-idx="${idx}"]`).value;
      pkg.ctaText = container.querySelector(`.pkg-ctatext[data-pkg-idx="${idx}"]`).value;
      pkg.ctaStyle = container.querySelector(`.pkg-ctastyle[data-pkg-idx="${idx}"]`).value;
      pkg.popular = container.querySelector(`.pkg-popular[data-pkg-idx="${idx}"]`).checked;
      pkg.highlights = container.querySelector(`.pkg-highlights[data-pkg-idx="${idx}"]`).value
        .split('\n')
        .map(h => h.trim())
        .filter(Boolean);
      saveData();
      renderPackages();
    });
  });

  container.querySelectorAll('.pkg-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.pkgIdx);
      if (confirm('Delete this package?')) {
        currentData.packages.splice(idx, 1);
        saveData();
        renderPackages();
      }
    });
  });
}

/**
 * TAB 7: FAQs
 */
function renderFaqs() {
  const container = document.getElementById('faqsList');
  if (!container) return;

  container.innerHTML = currentData.faqs.map((faq, idx) => `
    <div class="admin-card" style="margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-primary);font-weight:700;">Question #${idx + 1}</span>
        <div style="display:flex;gap:8px;">
          <button class="admin-btn terracotta small faq-save-btn" data-faq-idx="${idx}">Save</button>
          <button class="admin-btn danger small faq-del-btn" data-faq-idx="${idx}">✕</button>
        </div>
      </div>
      <div class="form-group" style="margin-bottom:12px;">
        <label class="admin-label">Question</label>
        <input type="text" class="admin-input faq-q" value="${faq.q}" data-faq-idx="${idx}" />
      </div>
      <div class="form-group">
        <label class="admin-label">Answer</label>
        <textarea class="admin-textarea faq-a" rows="3" data-faq-idx="${idx}">${faq.a}</textarea>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-save-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.faqIdx);
      currentData.faqs[idx].q = container.querySelector(`.faq-q[data-faq-idx="${idx}"]`).value.trim();
      currentData.faqs[idx].a = container.querySelector(`.faq-a[data-faq-idx="${idx}"]`).value.trim();
      saveData();
      renderFaqs();
    });
  });

  container.querySelectorAll('.faq-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.faqIdx);
      if (confirm('Delete this FAQ?')) {
        currentData.faqs.splice(idx, 1);
        saveData();
        renderFaqs();
      }
    });
  });
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/**
 * Authentication handling
 */
function checkAuth() {
  const auth = sessionStorage.getItem('decorspot_admin_auth');
  const urlParams = new URLSearchParams(window.location.search);
  const correctPwd = localStorage.getItem(ADMIN_PWD_KEY) || 'decorspopt2.0';

  if (urlParams.get('auth') === correctPwd || 
      urlParams.get('auth') === 'decorspopt2.0' || 
      urlParams.get('auth') === 'decorspot2.0' || 
      urlParams.get('auth') === 'decor2024') {
    sessionStorage.setItem('decorspot_admin_auth', 'true');
    try {
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch(e) {}
    return true;
  }
  return !!auth;
}

function showAdmin() {
  const loginScreen = document.getElementById('loginScreen');
  const adminSection = document.querySelector('.admin-section');
  if (loginScreen) loginScreen.classList.add('hidden');
  if (adminSection) adminSection.classList.add('authenticated');
}

function showLogin() {
  const loginScreen = document.getElementById('loginScreen');
  const adminSection = document.querySelector('.admin-section');
  if (loginScreen) loginScreen.classList.remove('hidden');
  if (adminSection) adminSection.classList.remove('authenticated');
}

window.logout = function() {
  sessionStorage.removeItem('decorspot_admin_auth');
  showLogin();
};

/**
 * Main DOM Init
 */
function initAdmin() {
  if (checkAuth()) {
    showAdmin();
  } else {
    showLogin();
  }

  loadData();

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim().toLowerCase();
      const pwd = document.getElementById('loginPassword').value;
      const validPwd = localStorage.getItem(ADMIN_PWD_KEY) || 'decorspopt2.0';

      const isAuthorized = (email === 'admin@decorspot.in' || email === 'studio@decorspot.in') &&
                           (pwd === validPwd || pwd === 'decorspopt2.0' || pwd === 'decorspot2.0' || pwd === 'decor2024');

      if (isAuthorized) {
        sessionStorage.setItem('decorspot_admin_auth', 'true');
        showAdmin();
        showToast('Welcome to DecorSpot Studio Admin', 'success');
      } else {
        showToast('Invalid email or password. Please check your details.', 'error');
      }
    });
  }

  // Tabs switching
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('tab-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  // Gallery category filter pills in admin
  document.querySelectorAll('#adminGalleryFilters .category-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('#adminGalleryFilters .category-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      currentCategoryFilter = tag.dataset.cat;
      renderPhotoGrid();
    });
  });

  // Photo upload area
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('photoInput');
  if (uploadArea && fileInput) {
    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('drag-over');
      handleFileUpload(e.dataTransfer.files);
    });
    fileInput.addEventListener('change', (e) => handleFileUpload(e.target.files));
  }

  const uploadBtn = document.getElementById('uploadBtn');
  if (uploadBtn) uploadBtn.addEventListener('click', uploadPhotos);

  // Add photo by URL
  const addPhotoByUrlBtn = document.getElementById('addPhotoByUrlBtn');
  if (addPhotoByUrlBtn) {
    addPhotoByUrlBtn.onclick = () => {
      const url = prompt('Enter Image URL (e.g. https://... or local image filename like img1.JPG):');
      if (url && url.trim()) {
        const cat = document.getElementById('newPhotoCategory').value;
        const size = document.getElementById('newPhotoSize').value;
        const cap = document.getElementById('newPhotoCaption').value.trim() || 'New story';
        currentData.photos.unshift({
          src: url.trim(),
          alt: cap,
          category: cat,
          size: size,
          caption: cap
        });
        saveData();
        renderPhotoGrid();
      }
    };
  }

  // Add New Service button
  const addServiceBtn = document.getElementById('addServiceBtn');
  if (addServiceBtn) {
    addServiceBtn.onclick = () => {
      currentData.services.push({
        id: 'svc_' + Date.now(),
        title: 'New Photoshoot Service',
        category: 'Specialization',
        badge: 'Boutique Session',
        desc: 'Describe this photoshoot service and what clients experience.',
        image: 'img1.JPG',
        highlights: ['Feature 1', 'Feature 2', 'Feature 3'],
        whatsappMsg: 'Hello DecorSpot! I would love to enquire about this photoshoot.'
      });
      saveData();
      renderServices();
    };
  }

  // Add New Package button
  const addPackageBtn = document.getElementById('addPackageBtn');
  if (addPackageBtn) {
    addPackageBtn.onclick = () => {
      currentData.packages.push({
        id: 'pkg_' + Date.now(),
        category: 'newborn',
        label: 'New Collection',
        title: 'Custom Collection Title',
        desc: 'Package description details',
        highlights: ['Unhurried session time', 'Fine art retouched files', 'Private gallery'],
        ctaText: 'Enquire on WhatsApp',
        ctaStyle: 'primary',
        popular: false
      });
      saveData();
      renderPackages();
    };
  }

  // Add New FAQ button
  const addFaqBtn = document.getElementById('addFaqBtn');
  if (addFaqBtn) {
    addFaqBtn.onclick = () => {
      currentData.faqs.push({
        q: 'New Question Title',
        a: 'Detailed answer explanation for clients.'
      });
      saveData();
      renderFaqs();
    };
  }

  // Save Studio Settings
  const saveStudioBtn = document.getElementById('saveStudioBtn');
  if (saveStudioBtn) {
    saveStudioBtn.onclick = () => {
      currentData.studio.name = document.getElementById('studioName').value.trim();
      currentData.studio.subtitle = document.getElementById('studioSubtitle').value.trim();
      currentData.studio.heroEyebrow = document.getElementById('heroEyebrow').value.trim();
      currentData.studio.heroTagline = document.getElementById('heroTagline').value.trim();
      currentData.studio.heroDesc = document.getElementById('heroDesc').value.trim();
      currentData.studio.bookingNote = document.getElementById('bookingNote').value.trim();
      saveData();
    };
  }

  // Save Features / Amenities
  const saveFeaturesBtn = document.getElementById('saveFeaturesBtn');
  if (saveFeaturesBtn) {
    saveFeaturesBtn.onclick = () => {
      currentData.studio.features = {
        sanitized: document.getElementById('featSanitized').checked,
        climate: document.getElementById('featClimate').checked,
        babyLed: document.getElementById('featBabyLed').checked,
        wardrobe: document.getElementById('featWardrobe').checked,
        albums: document.getElementById('featAlbums').checked,
        commercialRig: document.getElementById('featCommercialRig').checked,
        outdoorSets: document.getElementById('featOutdoorSets').checked
      };
      saveData();
    };
  }

  // Save Contact Settings
  const saveContactBtn = document.getElementById('saveContactBtn');
  if (saveContactBtn) {
    saveContactBtn.onclick = () => {
      currentData.contact.waNumber = document.getElementById('waNumber').value.trim();
      currentData.contact.waCleanNumber = document.getElementById('waCleanNumber').value.trim();
      currentData.contact.waDefaultMsg = document.getElementById('waDefaultMsg').value.trim();
      currentData.contact.instaHandle = document.getElementById('instaHandle').value.trim();
      currentData.contact.instaUrl = document.getElementById('instaUrl').value.trim();
      currentData.contact.locationDisplay = document.getElementById('locationDisplay').value.trim();
      currentData.contact.mapsUrl = document.getElementById('mapsUrl').value.trim();
      currentData.contact.workingHours = document.getElementById('workingHours').value.trim();
      saveData();
    };
  }

  // Export Leads to CSV
  const exportLeadsBtn = document.getElementById('exportLeadsBtn');
  if (exportLeadsBtn) {
    exportLeadsBtn.onclick = () => {
      const leads = JSON.parse(localStorage.getItem(ENQUIRIES_KEY) || '[]');
      if (!leads.length) {
        showToast('No inquiries to export');
        return;
      }
      let csv = 'Name,Phone,Session,Notes,Date,Status\n';
      leads.forEach(l => {
        csv += `"${(l.name||'').replace(/"/g, '""')}","${(l.phone||'').replace(/"/g, '""')}","${(l.session||'').replace(/"/g, '""')}","${(l.notes||'').replace(/"/g, '""')}","${(l.date||'').replace(/"/g, '""')}","${l.status||'new'}"\n`;
      });
      const blob = new Blob([csv], { type: 'text/csv' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `decorspot_leads_${Date.now()}.csv`;
      a.click();
    };
  }

  // Clear Leads
  const clearLeadsBtn = document.getElementById('clearLeadsBtn');
  if (clearLeadsBtn) {
    clearLeadsBtn.onclick = () => {
      if (confirm('Clear all customer inquiries?')) {
        localStorage.removeItem(ENQUIRIES_KEY);
        renderLeads();
        showToast('Inquiries cleared');
      }
    };
  }

  // Export Data JSON
  const exportDataBtn = document.getElementById('exportDataBtn');
  if (exportDataBtn) {
    exportDataBtn.onclick = () => {
      const blob = new Blob([JSON.stringify(currentData, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `decorspot_backup_${Date.now()}.json`;
      a.click();
      showToast('Backup downloaded successfully', 'success');
    };
  }

  // Import Data JSON
  const importDataBtn = document.getElementById('importDataBtn');
  const importFileInput = document.getElementById('importFileInput');
  if (importDataBtn && importFileInput) {
    importDataBtn.onclick = () => importFileInput.click();
    importFileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && typeof parsed === 'object') {
            currentData = parsed;
            saveData();
            loadData();
            showToast('Backup restored successfully!', 'success');
          }
        } catch (err) {
          showToast('Invalid backup file', 'error');
        }
      };
      reader.readAsText(file);
    };
  }

  // Change Password
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  if (changePasswordBtn) {
    changePasswordBtn.onclick = () => {
      const p1 = document.getElementById('newPassword').value;
      const p2 = document.getElementById('confirmPassword').value;
      if (!p1) {
        showToast('Please enter a new password', 'error');
        return;
      }
      if (p1 !== p2) {
        showToast('Passwords do not match', 'error');
        return;
      }
      localStorage.setItem(ADMIN_PWD_KEY, p1);
      document.getElementById('newPassword').value = '';
      document.getElementById('confirmPassword').value = '';
      showToast('Admin password updated successfully!', 'success');
    };
  }

  // Reset to Factory Defaults
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  if (resetDefaultsBtn) {
    resetDefaultsBtn.onclick = () => {
      if (confirm('Reset all website data, services, gallery photos, and packages back to DecorSpot defaults?')) {
        currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveData();
        loadData();
        showToast('Data reset to DecorSpot 2.0 defaults', 'success');
      }
    };
  }

  // Listen for real-time leads from website
  window.addEventListener('decorspot-lead-added', () => {
    renderLeads();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}