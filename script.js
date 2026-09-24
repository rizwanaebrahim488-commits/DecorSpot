/**
 * DECORSPOT 2.0 — Newborn & Baby Portrait Studio
 * Studio Configurations & Interactivity Scripts
 */

// 1. Central Studio Configuration (Customizable)
const DECORS_CONFIG = {
  studioName: "DecorSpot 2.0",
  whatsappNumber: "+918891236399", // Studio WhatsApp Number with Country Code
  whatsappCleanNumber: "918891236399",
  instagramUrl: "https://www.instagram.com/decorspot2.0?stkn=cG9yaDgxZTJtbzA1&utm_source=qr",
  instagramTag: "@decorspot2.0",
  city: "Muvattupuzha, Ernakulam, Kerala",
  googleMapsUrl: "https://maps.google.com/?q=Muvattupuzha,+Ernakulam,+Kerala",
  defaultWhatsAppMessage: "Hello decorspot, I'd love to know more about a newborn session."
};

/**
 * Builds a valid WhatsApp redirection link with optional custom encoded text
 */
function getWhatsAppRedirectUrl(customMessage) {
  const msg = customMessage || DECORS_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${DECORS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(msg)}`;
}

// Initialize interactive elements when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupFAQAccordion();
  setupGalleryFiltersAndLightbox();
  setupEnquiryForm();
  setupInstagramCopy();
  setupHeaderScroll();
});

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
      // Toggle menu icon
      const icon = menuBtn.querySelector("svg");
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

    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Optional: close other open items for neatness
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
    });
  });
}

/**
 * Gallery Categorization & Lightbox
 */
function setupGalleryFiltersAndLightbox() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxCloseBtn");

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Lightbox opening
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector(".gallery-img");
      const caption = item.querySelector(".gallery-caption span");
      if (img && modal && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        if (modalCaption && caption) {
          modalCaption.textContent = caption.textContent;
        }
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Lightbox closing
  const closeModal = () => {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * Interactive Enquiry Form with WhatsApp Direct Hand-off
 */
function setupEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  const successState = document.getElementById("enquirySuccessState");
  const sendAnotherBtn = document.getElementById("sendAnotherBtn");
  const whatsappSubmitBtn = document.getElementById("whatsappSubmitBtn");

  if (!form) return;

  // Handle "Submit & Send via WhatsApp" button
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = document.getElementById("parentName").value.trim();
      const session = document.getElementById("sessionType").value;
      const notes = document.getElementById("parentNotes") ? document.getElementById("parentNotes").value.trim() : "";

      if (!name) {
        alert("Please enter your name to connect on WhatsApp.");
        document.getElementById("parentName").focus();
        return;
      }

      // Format custom message for DecorSpot Studio
      let message = `Hello DecorSpot Studio! 👋 My name is ${name}. I am inquiring about a "${session}".`;
      if (notes) {
        message += ` Note: ${notes}`;
      }

      const waUrl = getWhatsAppRedirectUrl(message);
      window.open(waUrl, "_blank", "noopener,noreferrer");

      // Show friendly success confirmation in the UI
      form.style.display = "none";
      if (successState) successState.style.display = "flex";
    });
  }

  // Handle standard "Start the conversation" form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("parentName").value.trim();
    const session = document.getElementById("sessionType").value;
    const notes = document.getElementById("parentNotes") ? document.getElementById("parentNotes").value.trim() : "";

    // Show friendly success confirmation in the UI
    form.style.display = "none";
    if (successState) successState.style.display = "flex";

    // Auto-prompt or offer WhatsApp option
    const confirmWa = confirm(`Thank you, ${name}! Would you also like to open WhatsApp directly now to start your conversation with DecorSpot 2.0?`);
    if (confirmWa) {
      const message = `Hello DecorSpot Studio! My name is ${name}. I am inquiring about a "${session}". ${notes ? `Note: ${notes}` : ""}`;
      window.open(getWhatsAppRedirectUrl(message), "_blank", "noopener,noreferrer");
    }
  });

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener("click", () => {
      form.reset();
      form.style.display = "block";
      if (successState) successState.style.display = "none";
    });
  }
}

/**
 * Instagram Tag Clipboard & Redirection
 */
function setupInstagramCopy() {
  const instaPills = document.querySelectorAll(".insta-tag-pill, .copy-insta-trigger");
  const toast = document.getElementById("toastNotice");

  instaPills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      // If clicked on tag, copy handle and show feedback
      navigator.clipboard.writeText(DECORS_CONFIG.instagramTag).then(() => {
        showToast(`Copied Instagram Tag: ${DECORS_CONFIG.instagramTag}`);
      }).catch(() => {
        showToast(`Instagram: ${DECORS_CONFIG.instagramTag}`);
      });
    });
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
