Pansab — Bakery Website

Purpose
- A small informational site for Pansab showcasing bakery products, cakes, prices and contact information.

Features
- Semantic, accessible HTML5 structure: `header`, `nav`, `main`, `section`, `figure`, `figcaption`, `footer`.
- Central stylesheet in `style.css` for all visual styling.
- Dynamic pricing table and packages generated from JavaScript data in `script.js`.
- Product gallery using images from the `images/` folder.

How it was made
- Markup: plain HTML5 files (`main.html`, `prices.html`, `details.html`, `contact.html`).
- Styling: `style.css` — all styles are centralized (no inline or embedded CSS).
- Behaviour: `script.js` provides the product data model, renders the pricing table and package list dynamically, and calculates the total value of listed products.
- Assets: `images/` contains product photos and `logo.png`.

Files of interest
- `main.html` — homepage and presentation.
- `prices.html` — pricing table (populated by `script.js`) and packages.
- `details.html` — product details and gallery.
- `contact.html` — contact form and contact info.
- `style.css` — all styling rules.
- `script.js` — data and rendering logic for the prices page.

Run / Preview
- Since this is static HTML/CSS/JS, open any page (for example `main.html`) in a browser.
- If you use XAMPP, put the folder under `htdocs` (already there) and visit `http://localhost/labs/P2/main.html`.

Edit & Maintain
- Update product/pricing data: edit the `products` and `packages` arrays in `script.js`.
- Change styling: edit `style.css`.
- Replace product images: put new files into `images/` and update `details.html` figcaptions if needed.

Next improvements (ideas)
- Add quantity inputs per product and live cart totals.
- Load product data from a JSON file or an API endpoint.
- Add simple form handling for the contact form (server endpoint or mailto link).

If you want, I can implement quantities and live total calculation next.
