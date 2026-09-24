# DecorSpot 2.0 — Newborn & Baby Portrait Studio Website

A luxury, boutique newborn and baby portrait studio website created for **DecorSpot 2.0**, inspired by the brand identity from Canva and the aesthetic architecture of the Replit reference site.

---

## 🌟 Key Features

1. **Brand Identity & Logo Integration**:
   - Built around the official brand emblem: `canva_preview.jpg` / `decorspot-logo.svg`.
   - Editorial typography utilizing Google Fonts: `Fraunces` (warm editorial display serif), `DM Sans` (clean modern body), and `Space Mono` (bespoke studio badge monospace).
   - Soothing, high-end organic color palette (Sage `#d8e1d6`, Warm Linen `#f5ecdf`, Biscuit `#e9d7c7`, Terracotta `#c6856d`, Soft Ochre `#eecf79`, Deep Forest Evergreen `#253f35`).

2. **Instagram Tag & Redirection**:
   - Direct Instagram Tag: **`@decorspot2.0`**
   - Clickable Instagram profile link: `https://www.instagram.com/decorspot2.0?stkn=cG9yaDgxZTJtbzA1&utm_source=qr`
   - Integrated across the header, social proof strip, community gallery showcase banner, contact section, footer, and floating bottom-left quick-chip.
   - Built-in 1-click clipboard copy with toast notification.

3. **WhatsApp Redirection & Instant Booking**:
   - WhatsApp Number: **`+91 88912 36399`** (`wa.me/918891236399`)
   - Pre-formatted, welcoming inquiry messages:
     - Header "Enquire" & Hero CTA: *"Hello decorspot, I'd love to know more about a newborn session."*
     - Package inquiries: automatically specifies package name (*"Little Dreamer"*, *"Cherished Miracle"*, *"The Heirloom Story"*).
     - Interactive Form: dynamically takes parent's name, chosen session, and notes to compose a personalized WhatsApp chat handoff.
   - Persistent, animated Floating WhatsApp Button with pulse ring and live online indicator.

4. **Google Maps Redirection**:
   - Direct Google Maps Location: [Muvattupuzha, Ernakulam, Kerala](https://maps.google.com/?q=Muvattupuzha,+Ernakulam,+Kerala)
   - Clickable in the footer navigation, social proof strip, and footer bottom bar with interactive hover elevation.

5. **Curated Sections**:
   - **Hero Section**: Editorial headline *"Little moments, beautifully held"*, organic rounded photo arch frame, and floating badges.
   - **Our Approach ("The DecorSpot Way")**: 3-step baby-led process cards, plus studio safety & climate-controlled suite guarantees.
   - **Bento Gallery & Lightbox**: Filterable by categories (*All Stories*, *Fresh Newborn*, *Tiny Details*, *Family & Bonding*) with full-screen zoom modal.
   - **Curated Collections / Packages**: Transparent 3-tier collections (*Little Dreamer*, *Cherished Miracle*, *The Heirloom Story*) with direct WhatsApp booking links.
   - **Good to Know (FAQ)**: Interactive accordion resolving essential questions regarding timing, baby-led pauses, props, and family inclusion.
   - **Enquiry Form**: Thoughtful contact form with both standard submission confirmation and instant 1-click WhatsApp handoff.

---

## 🚀 How to Launch and View

1. **Directly in your Browser**:
   - Navigate to `c:\Users\User_PC\OneDrive\Desktop\DecorSpot\`
   - Double-click **`index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge / Brave**.
   - The website loads instantly with zero dependencies and works 100% offline or online.

2. **Using a Local Server (Optional)**:
   - If you have Python installed:
     ```bash
     python -m http.server 3000
     ```
   - Open `http://localhost:3000` in your browser.

---

## ⚙️ Customization Settings

To update contact details, phone numbers, or Instagram handles in the future, open `script.js` and modify the top configuration object:

```javascript
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
```
