# Gracious Schools Lanet — Website

A five-page website for Gracious Schools Lanet, a mixed day and boarding primary school in Lanet, Nakuru County, Kenya.

Built with plain HTML, CSS, and JavaScript. No frameworks, no backend.

---

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, highlights, about snippet, facilities preview, boarding preview, visit-us banner |
| About Us | `about.html` | Who we are, motto, mission, vision, values, story, head teacher's message |
| Academics & Facilities | `academics.html` | CBE curriculum, grades, subjects, co-curricular, facilities (labs) |
| Boarding Life & Gallery | `boarding.html` | Boarding info, day scholars, photo gallery with lightbox |
| Contact Us | `contact.html` | Phone numbers, location, visiting hours, map, social media, big tap-to-call buttons |

Shared files:

- `css/styles.css` — all styling, with colour variables in `:root`
- `js/main.js` — header/footer injection, mobile menu, gallery lightbox, auto-updating copyright year
- `public/images/logo.svg` — school crest logo (SVG placeholder)

---

## How to Replace Placeholders

### 1. `[TO BE ADDED]` text placeholders

Search the HTML files for `[TO BE ADDED` to find every spot that needs real content. Each one is clearly labelled with what to provide, for example:

```
[TO BE ADDED: Visiting hours]
[TO BE ADDED: Exact street address / directions]
[TO BE ADDED: Email address]
```

Simply replace the placeholder text with the real information.

### 2. Photo placeholders

All photos currently show a gray box with "Photo coming soon: ..." text. To add a real photo:

1. Save the photo file in the `public/images/` folder using the expected filename
2. Open the relevant HTML file and find the gray placeholder `<div>`
3. Replace the placeholder `<div>` with an `<img>` tag

For example, to add the hero photo:

**Before (placeholder):**
```html
<div class="img-placeholder">
  <span>Photo coming soon:<br>School building or assembly</span>
</div>
```

**After (real photo):**
```html
<img src="/images/about.jpg" alt="School building or assembly" loading="lazy" />
```

### Expected photo filenames

| File | Used on | Description |
|---|---|---|
| `logo.svg` | Header, footer | School crest (already created as SVG) |
| `hero.jpg` | Home hero | Wide shot of school compound or happy pupils |
| `about.jpg` | About, Home | School building or assembly |
| `head-teacher.jpg` | About | Head teacher portrait |
| `science-lab.jpg` | Academics, Home | Science laboratory |
| `computer-lab.jpg` | Academics, Home | Computer laboratory |
| `home-science-lab.jpg` | Academics, Home | Home science laboratory |
| `boarding-1.jpg` to `boarding-3.jpg` | Boarding | Dormitories, dining, boarding activities |
| `gallery-1.jpg` to `gallery-12.jpg` | Gallery | General school life |

### 3. Gallery photos

The gallery on `boarding.html` has 12 items. For each one:

1. Save the photo as `gallery-1.jpg`, `gallery-2.jpg`, etc. in `public/images/`
2. Find the corresponding `gallery-item` div
3. Replace the inner `<div class="img-placeholder">` with:
```html
<img src="/images/gallery-1.jpg" alt="Science Lab" loading="lazy" />
```
4. Update the `data-caption` attribute on the `gallery-item` div to match the photo

### 4. Google Maps embed

On `contact.html`, replace the `.map-placeholder` div with a Google Maps embed:

1. Go to Google Maps, search for the school location
2. Click "Share" → "Embed a map" → copy the `<iframe>` code
3. Replace the `<div class="map-placeholder">...</div>` with the copied `<iframe>`

### 5. Social media links

Search for `[TO BE ADDED: Facebook URL]` and `[TO BE ADDED: Instagram URL]` and replace with the real links.

### 6. Phone numbers and school info

Phone numbers are managed in `js/main.js` at the top in the `SCHOOL` object. Update them there and they will update everywhere (header, footer, mobile bar, contact page).

### 7. Colours

All colours are defined as CSS variables in `css/styles.css` at the top in `:root`. To change any colour, edit the variable value.

---

## Running the website

This project uses Vite as a local dev server and build tool.

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview the build:** `npm run preview`

The built site is plain static HTML/CSS/JS and can be hosted on any web server or static hosting service.

---

## Structure

```
project/
  index.html              Home page
  about.html              About Us
  academics.html          Academics & Facilities
  boarding.html           Boarding Life & Gallery
  contact.html            Contact Us
  vite.config.js          Vite multi-page config
  package.json
  public/
    css/
      styles.css          All styling (CSS variables for colours)
    js/
      main.js             Header/footer, mobile menu, lightbox
    images/
      logo.svg            School crest (SVG placeholder)
```

---

© Gracious Schools Lanet. All rights reserved.
