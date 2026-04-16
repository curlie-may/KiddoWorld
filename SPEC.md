# Kiddo World — Website Spec

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Images:** Cloudinary (existing account)
- **Forms:** Formspree
- **Deployment:** Vercel
- **Fonts:** Roboto (all weights via Google Fonts — 300, 400, 500, 700, 900)

---

## Brand Colors
```
--kw-red:    #f28b82   (primary CTA, labels, accents — pastel red)
--kw-orange: #f9b784   (accent — pastel orange)
--kw-yellow: #fde293   (step numbers, stars, badges — pastel yellow)
--kw-green:  #81c784   (accent, reviews section — pastel green)
--kw-blue:   #7eb8f7   (featured card, accent — pastel blue)
--kw-purple: #c3a0d8   (accent — pastel purple)
--kw-cream:  #fffdf8   (page background)
--kw-dark:   #1a1a1a   (body text, footer)
```

---

## Sitemap — 9 Pages

| Page | URL |
|---|---|
| Home | / |
| About | /about |
| Characters | /characters |
| Packages | /packages |
| Pricing | /pricing |
| Order Form — Character Party | /order |
| Order Form — Costume Rental | /order-rental |
| Order Form — Corporate Events | /order-corporate |
| Contact | /contact |

Nav links: **Characters · Packages · Pricing · About Us · Order Form · Contact**
Nav CTA button (red): **Book a Party** → links to /order

---

## Page-by-Page Spec

---

### 1. Home (`/`)

**Section 1 — Hero**
- Left side:
  - Badge pill (yellow): "✦ SF Bay Area's #1 Party Characters"
  - H1 (Roboto 900, 52px): "Make Their Birthday **Magical**" — "Magical" in red
  - Subtext (Roboto 300): "Professional costumed character parties with music, games, dancing, and party favors — creating memories that last a lifetime."
  - Two buttons: "Book Your Party" (red, filled) and "View Characters" (outline)
- Right side: Auto-playing slideshow/carousel of party photos (use placeholder colored boxes for now, swap in real Cloudinary photos later). Slideshow should auto-advance every 3-4 seconds with a smooth fade or slide transition. No visible prev/next arrows needed — keep it clean.
- Background: cream (#fffdf8)

**Section 2 — How It Works**
- Section label (red, caps): "HOW IT WORKS"
- H2: "A complete party in 4 easy steps"
- Subtext: "From booking to birthday cake, we handle the entertainment so you can enjoy every moment."
- 4 cards in a row, each with: large step number (yellow, 900 weight), Lucide icon, bold title, description
  - 01 [Lucide: Smile] Pick Your Character — "Choose from 20+ beloved characters your child will love."
  - 02 [Lucide: CalendarDays] Book Online — "Select your date, duration, and number of characters in minutes."
  - 03 [Lucide: Music] Party Time! — "Your character arrives with a custom soundtrack, games, and favors for all kids."
  - 04 [Lucide: Camera] Photo Memories — "We end every show with a group Happy Birthday song and photo time."
- Background: light blue tint (#f0f8ff)

**Section 3 — Services Preview**
- Section label (red, caps): "PACKAGES"
- H2: "Everything you need for an unforgettable party"
- 3 cards:
  - [Lucide: Star] Character-Themed Party — "Let Kiddo World provide the character fun and games for your party!" → links to /packages
  - [Lucide: Shirt] Costume Rental — "Choose from a variety of costumes to host your own themed party!" → links to /packages
  - [Lucide: Building2] Corporate Events — "Add fun to your company's event with a costumed character to entertain the kids...and adults!" → links to /packages
- Background: white

**Section 4 — Reviews**
- Section label (red, caps): "REVIEWS"
- H2: "Families love us"
- Subtext: "Trusted by hundreds of Bay Area families for over a decade."
- 3 review cards, each with: yellow stars, italic quote text, avatar initials circle, reviewer name + city
  - JM / Jennifer M., San Jose CA — "My son's birthday party was truly magical, thanks to Kiddo World and the incredible performance of Mickey and Minnie Mouse. The moment they arrived, the children's faces lit up with pure joy."
  - RL / Ricardo L., Fremont CA — "My son was freaking over the moon that Chase came to his bday party (and even had birthday cake together!). He's been talking about it non stop after the party. Definitely a core memory made."
  - AP / Anita P., Santa Clara CA — placeholder or third real review if available
- Background: light green tint (#f5fff6)

**Section 5 — CTA Banner**
- Full-width red background
- H2 (white): "Ready to make their birthday magical?"
- Subtext (white, light): "Serving San Jose and the greater SF Bay Area."
- Button (white, red text): "Book a Party"

---

### 2. About (`/about`)

- Section label: "OUR STORY"
- H1: "Meet Roxy"
- Full about text (from Wix site, verbatim):
  > "Hey there, I'm Roxy, the mastermind behind Kiddo World, your go-to for epic kids' parties. Picture this: two decades ago, my family and I landed in the USA, unknowingly setting the stage for a wild ride. Back in the day, my Dad, on the hunt for extra cash, stumbled upon a Craigslist gig that sparked my joy-filled journey into kids' parties. Fast forward 20 years, and we're still cruising the Bay Area, delivering smiles to kiddos. In 2018, I took the helm of Kiddo World after spending 18 years rocking stages for others. Little did I know, what started as a side hustle would become my full-time gig. Now with over 20 character costumes, Kiddo World isn't just a business — it's my dream come true. Ready to sprinkle some magic at your event? We are here to make that magic come alive!"
- Right side: Roxy's photo (image from Cloudinary — placeholder box until photo is uploaded)
- CTA below text: "Book a Party" button → /order

---

### 3. Characters (`/characters`)

- Section label: "CHARACTERS"
- H1: "Find the perfect character for your party"
- Subtext: "We have 20+ costumes. Browse our roster and pick your child's favorite."
- Grid layout: 4 columns, each character card has:
  - Square placeholder box (colored, with character initial) until real Cloudinary image is added
  - Character name below
  - Hover state: slight scale up
  - Special case: Easter Bunny card shows "Contact for pricing" in muted text below the character name
- CTA at bottom: "Don't see your character? Contact us." → /contact

**Character List (29 characters — all placeholder images for now):**
1. Red Monster
2. White Kitty *(formerly Hello Kitty)*
3. Beagle with Black Spots
4. Cop Canine
5. German Shepherd Cop Dog
6. Dalmatian Firefighter Dog
7. Orange Cockapoo Airplane Dog
8. Unicorn
9. Blue Spotted Canine
10. Blue Heeler Dog
11. Red Heeler Dog
12. Boy Mouse
13. Girl Mouse
14. Pink Girl Mouse
15. Red Girl Mouse
16. Cute Cuddly Bear
17. Yellow Shark
18. Poppy from Trolls
19. Blue Hedgehog
20. Toy Astronaut
21. Toy Cowboy
22. Pink Pig
23. Melon Baby
24. Red Italian Brother
25. Green Italian Brother
26. Blue Monster
27. Curly Haired Latina
28. Easter Bunny *(show "Contact for pricing" in muted text below name on character card)*
29. Santa *(show "Rentals only" in muted text below name on character card)*

---

### 4. Packages (`/packages`)

Three package detail sections, each with image + text side by side (alternating layout):

**Package 1 — Character-Themed Party**
- Image: placeholder box (Cloudinary image to be added)
- H2: "Character-Themed Party"
- Description: "Let Kiddo World provide the character fun and games for your party! Your character arrives in full costume with a custom soundtrack, party games, dancing, and party favors for up to 30 kids."
- Video embed placeholder: add a labeled placeholder box below the description that says "Video goes here" — will be replaced with a real embed URL later
- Buttons: "See Pricing" → /pricing and "Book This Package" → /order

**Package 2 — Costume Rental**
- Image: placeholder box (Cloudinary image to be added)
- H2: "Costume Rental"
- Description: "Want to host your own themed party? Choose from our library of 20+ professional character costumes. Perfect for parents who want to be the star of the show!"
- Buttons: "See Pricing" → /pricing and "Get a Quote" → /order-rental

**Package 3 — Corporate Events**
- Image: placeholder box (Cloudinary image to be added)
- H2: "Corporate Events"
- Description: "Add fun to your company event, school carnival, or community gathering with a professional costumed character. We entertain the kids — and the adults!"
- Buttons: "See Pricing" → /pricing and "Get a Quote" → /order-corporate

---

### 5. Pricing (`/pricing`)

- Section label: "PRICING"
- H1: "Simple, transparent pricing"
- Subtext: owner to provide — use placeholder text for now: "Pricing details coming soon. Contact us for a custom quote."
- Pricing content: placeholder for now — owner will provide full pricing details
- CTA at bottom: "Book a Party" button → /order

---

### 6. Order Form — Character Party (`/order`)

- H1: "Order Form for Character Party"
- Form fields (via Formspree), in this logical flow order:

  **About You**
  - First Name (text field, required)
  - Last Name (text field, required)
  - Email Address (text field, required)

  **Your Party**
  - Character(s) (multi-select dropdown with tags — full list of 29 characters, required. User can select multiple characters.)
  - Duration (dropdown: 1 hour / 90 minutes / 2 hours / 3 hours, required)
  - Event Date (date picker, required)
  - Party Start Time (text field, required)
  - Number of Children (number field, required)

  **Event Location**
  - Event Venue — home, park, restaurant, school, other (text field)
  - Name of Event Venue — e.g. name of restaurant, park (text field)
  - Event Address (text field, required)
  - Event Zip Code (text field, required)

  **Anything Else**
  - How Did You Hear About Us? (text field, optional)
  - Other Details (textarea, optional)

- Submit button (red): "Send"
- Below the submit button, display this message exactly:
  > "Please fill out the Order Form, press Send and someone will contact you within 24 hours to confirm. There will be a $75 deposit to secure the party date. Payment can be made through PayPal, Venmo or Zelle.
  >
  > We're so excited to host your party!"
- Form submits to: info@kiddoworld.com via Formspree

---

### 7. Order Form — Costume Rental (`/order-rental`)

- H1: "Order Form for Costume Rental"
- Placeholder: use the same form fields as /order for now
- Character(s) field: multi-select dropdown with tags — full list of 29 characters
- Submit button (red): "Send"
- Same confirmation message as /order
- Form submits to: info@kiddoworld.com via Formspree
- Note: form fields will be customized in a future update

---

### 8. Order Form — Corporate Events (`/order-corporate`)

- H1: "Order Form for Corporate Events"
- Placeholder: use the same form fields as /order for now
- Character(s) field: multi-select dropdown with tags — full list of 29 characters
- Submit button (red): "Send"
- Same confirmation message as /order
- Form submits to: info@kiddoworld.com via Formspree
- Note: form fields will be customized in a future update

---

### 9. Contact (`/contact`)

- H1: "Get in Touch"
- Left side — contact info:
  - Email: info@kiddoworld.com
  - Phone: (669) 444-0941
  - Yelp link
  - Instagram link (@kidd0w0rld)
  - Note: "To ensure delivery, please add info@kiddoworld.com to your address book."
- Right side — contact form (Formspree):
  - First Name, Last Name, Email, Subject, Message
  - Submit button (red): "Send Message"

---

### Footer (all pages)
- Rainbow "Kiddo World" logo text (matching logo colors: K=red, i=orange, d=yellow, d=green, o=blue, W=purple, o=red, r=orange, l=yellow, d=green)
- Tagline: "SF Bay Area's favorite party characters"
- Nav links: Characters · Packages · Pricing · About · Order Form · Contact
- Social icons: Yelp (link: https://www.yelp.com/biz/kiddo-world-san-jose), Instagram (@kidd0w0rld), Google Reviews (placeholder URL for now)
- Copyright: "© 2026 Kiddo World · San Jose, CA · (669) 444-0941"

---

## Notes for Cursor

- All images served via Cloudinary — use `next/image` with Cloudinary loader. All images are placeholders for now — colored boxes with character initials until real photos are uploaded to Cloudinary.
- Formspree handles both the Order Form and Contact form — no backend needed
- Mobile-first responsive: nav collapses to hamburger on mobile
- The Order Form character dropdown must include all 29 characters from the character list above. Easter Bunny and Santa should be included in the dropdown.
- The Order Form fields are grouped into 4 sections: About You, Your Party, Event Location, Anything Else — render each group with a small section label above it
- The Pricing page content is a placeholder — owner will provide real pricing details later
- The mockup prototype built in Claude.ai is the visual reference for design decisions
