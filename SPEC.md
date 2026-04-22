# Kiddo World — Website Spec

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Images:** Cloudinary (cloud name: dbiu1de8j)
- **Forms:** Formspree
- **Deployment:** Vercel
- **Fonts:** Roboto (all weights via Google Fonts — 300, 400, 500, 700, 900)

---

## Brand Colors
```
--kw-red:    #e82b2b
--kw-orange: #f47c20
--kw-yellow: #f9c01e
--kw-green:  #3aaa35
--kw-blue:   #1e88d4
--kw-cream:  #fffdf8
--kw-dark:   #1a1a1a
```

---

## Logo
- The "Kiddo World" wordmark is a crayon-textured image stored in Cloudinary
- URL: `https://res.cloudinary.com/dbiu1de8j/image/upload/kiddo-world-logo.jpg`
- Use this image in the nav and footer — do not render "Kiddo World" as plain text
- The crayon texture is exclusive to the logo — do not use it anywhere else on the site
- All other text uses Roboto in the brand colors above

---

## Sitemap — 6 Pages

| Page | URL |
|---|---|
| Home | / |
| Characters | /characters |
| The Experience | /the-experience |
| About | /about |
| Order Form | /order |
| Contact | /contact |

**Nav links:** Home · Characters · The Experience · About Us · Contact
**Nav CTA button (red):** Book a Party → links to /order

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
- Right side: Auto-playing slideshow of 3 party action photos from Cloudinary:
  - `party-photo-1.jpg`
  - `party-photo-2.jpg`
  - `party-photo-3.jpg`
  - Auto-advances every 3-4 seconds with smooth fade transition
  - No prev/next arrows
- Background: cream (#fffdf8)

**Section 2 — How It Works**
- Section label (red, caps): "HOW IT WORKS"
- H2: "A complete party in 4 easy steps"
- Subtext: "We handle the entertainment so you can enjoy every moment."
- 4 cards in a row, each with: large step number (yellow, 900 weight), bold title, description
- No icons
  - 01 Pick a Package — "Choose the party experience that's right for your child."
  - 02 Choose Your Character — "Pick from 20+ beloved characters your child will love."
  - 03 Book Online — "Select your date, duration, and number of characters in minutes."
  - 04 Party Time! — "Your character arrives with a custom soundtrack, games, and favors for all kids."
- Background: light blue tint (#e3f2fd)

**Section 3 — Character Party Feature**
- Section label (red, caps): "CHARACTER PARTY"
- H2: "The ultimate birthday party experience"
- Description: "Our costumed character parties bring music, games, and dancing to your child's birthday. Your child's favorite character arrives ready to entertain up to 30 kids with a full party package including soundtrack, games, and party favors."
- Two buttons: "Learn More" (outline) → /the-experience and "Book a Party" (red, filled) → /order
- Background: white

**Section 4 — Rentals & Corporate**
- No cards, no buttons
- Simple centered text: "Kiddo World also offers character costume rentals and corporate event entertainment. Please use the [Contact Form] for more information." — "Contact Form" is an active link → /contact
- Background: cream (#fffdf8)

**Section 5 — Reviews**
- Section label (red, caps): "REVIEWS"
- H2: "Families love us"
- Subtext: "Trusted by hundreds of Bay Area families for over a decade."
- 3 review cards, each with: yellow stars, italic quote text, avatar initials circle, reviewer name + city
  - JM / Jennifer M., San Jose CA — "My son's birthday party was truly magical, thanks to Kiddo World and the incredible performance of Mickey and Minnie Mouse. The moment they arrived, the children's faces lit up with pure joy."
  - RL / Ricardo L., Fremont CA — "My son was freaking over the moon that Chase came to his bday party (and even had birthday cake together!). He's been talking about it non stop after the party. Definitely a core memory made."
  - AP / Anita P., Santa Clara CA — "Wonderful experience from start to finish — the team was responsive, punctual, and the kids had an absolute blast. We will definitely book again!"
- Background: light green tint (#e8f5e9)

**Section 6 — CTA Banner**
- Full-width red background (#e82b2b)
- H2 (white): "Ready to make their birthday magical?"
- Subtext (white, light): "Serving San Jose and the greater SF Bay Area."
- Button (white, red text): "Book a Party" → /order

---

### 2. Characters (`/characters`)

- Section label (red, caps): "CHARACTERS"
- H1: "Find the perfect character for your party"
- Subtext: "We have 20+ costumes. Browse our roster and pick your child's favorite."
- Grid layout: 4 columns
- Each character card has:
  - Square image from Cloudinary (public ID = character slug + .jpg)
  - If no image available, show colored placeholder box with character initials
  - Character name below
  - Hover state: slight scale up
  - Easter Bunny: show "Contact for pricing" in muted text below name
  - Santa: show "Rentals only" in muted text below name
- CTA at bottom: "Don't see your character? Contact us." → /contact

**Character List (31 characters):**
1. Red Monster
2. Blue Monster
3. White Kitty
4. Beagle with Black Spots
5. Cop Canine
6. Airplane Pilot Canine
7. German Shepherd Cop Dog
8. Dalmatian Firefighter Dog
9. Orange Cockapoo Airplane Dog
10. Unicorn
11. Blue Spotted Canine
12. Blue Heeler Dog
13. Red Heeler Dog
14. Boy Mouse
15. Girl Mouse
16. Pink Girl Mouse
17. Red Girl Mouse
18. Cute Cuddly Bear
19. Yellow Shark
20. Poppy from Trolls
21. Blue Hedgehog
22. Toy Astronaut
23. Toy Cowboy
24. Pink Pig
25. Melon Baby
26. Red Italian Brother
27. Green Italian Brother
28. Curly Haired Latina
29. Cat Boy
30. Easter Bunny
31. Santa

---

### 3. The Experience (`/the-experience`)

- Section label (red, caps): "THE EXPERIENCE"
- H1: "A party your child will never forget"

**Section: What to Expect**
- H2: "What to Expect"
- Full description:
  > "Our costumed character parties bring an interactive music, games & dance experience designed to make your child's birthday truly unforgettable. Perfect for kids of all ages, the show is tailored to a younger audience's attention span and filled with familiar music, engaging games, and nonstop fun.
  >
  > Whether kids prefer to sit and watch or jump right in and play, the experience is designed for everyone to enjoy. Our characters arrive with a complete party package, including a portable audio system with a high-energy party soundtrack, pre-recorded instructions that guide the kids through activities, and plenty of music, games, and party favors.
  >
  > Children will enjoy classic favorites like the march, limbo, 'If You're Happy and You Know It,' Hokey Pokey, tunnel games, pass the bean bag, basketball toss, sticky-ball dart board, and parachute play. Every moment is interactive, energetic, and designed to keep the party moving and fun from start to finish."

**Section: Pricing**
- H2: "Pricing"
- Intro line: "Simple, transparent pricing. Travel fees apply to parties held outside a 25-mile radius of San Jose."
- Pricing table:

| Duration | One Character | Two Characters | Three Characters |
|---|---|---|---|
| 1 Hour | $215 | $335 | $480 |
| 1½ Hours | $265 | $435 | $550 |
| 2 Hours | $335 | $510 | Contact Us |
| 2½ Hours | $405 | $600 | Contact Us |
| 3 Hours | $475 | $880 | Contact Us |

- "Contact Us" cells should link to /contact
- Note below table: "*From our location in San Jose, travel fees are applied to parties held outside a 25-mile radius."

**CTA at bottom:**
- Two buttons: "Book a Party" (red, filled) → /order and "Contact Us" (outline) → /contact

---

### 4. About (`/about`)

- Section label (red, caps): "OUR STORY"
- H1: "Meet Roxy"
- Left side — full about text:
  > "Hey there, I'm Roxy, the mastermind behind Kiddo World, your go-to for epic kids' parties. Picture this: two decades ago, my family and I landed in the USA, unknowingly setting the stage for a wild ride. Back in the day, my Dad, on the hunt for extra cash, stumbled upon a Craigslist gig that sparked my joy-filled journey into kids' parties. Fast forward 20 years, and we're still cruising the Bay Area, delivering smiles to kiddos. In 2018, I took the helm of Kiddo World after spending 18 years rocking stages for others. Little did I know, what started as a side hustle would become my full-time gig. Now with over 20 character costumes, Kiddo World isn't just a business — it's my dream come true. Ready to sprinkle some magic at your event? We are here to make that magic come alive!"
- Right side: Roxy's photo from Cloudinary — `about-roxy.jpg`
- CTA below text: "Book a Party" button (red) → /order

---

### 5. Order Form (`/order`)

- H1: "Book a Character Party"
- Form fields via Formspree, grouped into 4 sections:

  **About You**
  - First Name (required)
  - Last Name (required)
  - Email Address (required)

  **Your Party**
  - Character(s) (multi-select dropdown with tags — full list of 31 characters, required)
  - Duration (dropdown: 1 Hour / 1½ Hours / 2 Hours / 2½ Hours / 3 Hours, required)
  - Event Date (date picker, required)
  - Party Start Time (text field, required)
  - Number of Children (number field, required)

  **Event Location**
  - Event Venue type — home, park, restaurant, school, other (text field)
  - Name of Event Venue (text field)
  - Event Address (text field, required)
  - Event Zip Code (text field, required)

  **Anything Else**
  - How Did You Hear About Us? (text field, optional)
  - Other Details (textarea, optional)

- Submit button (red): "Send"
- Below submit button display exactly:
  > "Please fill out the Order Form, press Send and someone will contact you within 24 hours to confirm. There will be a $75 deposit to secure the party date. Payment can be made through PayPal, Venmo or Zelle.
  >
  > We're so excited to host your party!"
- Form submits to: info@kiddoworld.com via Formspree

---

### 6. Contact (`/contact`)

- H1: "Get in Touch"
- Left side — contact info:
  - Email: info@kiddoworld.com
  - Phone: (669) 444-0941
  - Yelp: https://www.yelp.com/biz/kiddo-world-san-jose
  - Instagram: @kidd0w0rld
  - Note: "To ensure delivery, please add info@kiddoworld.com to your address book."
- Right side — contact form via Formspree:
  - First Name, Last Name, Email, Subject, Message
  - Submit button (red): "Send Message"
- Form submits to: info@kiddoworld.com via Formspree

---

### Footer (all pages)
- Logo image (Cloudinary): `kiddo-world-logo.jpg` — links to /
- Tagline: "SF Bay Area's favorite party characters"
- Nav links: Home · Characters · The Experience · About · Contact
- Social icons: Yelp, Instagram (@kidd0w0rld), Google Reviews (placeholder URL)
- Copyright: "© 2026 Kiddo World · San Jose, CA · (669) 444-0941"

---

## Cloudinary Assets

| Asset | Public ID |
|---|---|
| Logo | kiddo-world-logo.jpg |
| Roxy photo | about-roxy.jpg |
| Party photo 1 | party-photo-1.jpg |
| Party photo 2 | party-photo-2.jpg |
| Party photo 3 | party-photo-3.jpg |
| Character images | [character-slug].jpg |

---

## Notes for Cursor

- Cloudinary cloud name: `dbiu1de8j`
- Custom Cloudinary loader is in `lib/cloudinary-loader.ts`
- All image public IDs are at the root level — no folder prefix needed
- Use `next/image` with the Cloudinary loader for all images
- Formspree handles all forms — no backend needed
- Mobile-first responsive — nav collapses to hamburger on mobile
- No Lucide icons or any other icons anywhere on the site
- Colors are vibrant — use the brand palette above, not pastel versions
- The crayon logo image is the only place the crayon texture appears
- Pages to remove: /packages, /pricing, /order-rental, /order-corporate
- The character list in `lib/site-data.ts` should have 31 characters including Cat Boy
- Duration dropdown on order form should match pricing table: 1 Hour / 1½ Hours / 2 Hours / 2½ Hours / 3 Hours
