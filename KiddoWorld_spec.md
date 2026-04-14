Kiddo World — Website Spec
Tech Stack

Framework: Next.js (App Router)
Styling: Tailwind CSS
Images: Cloudinary (existing account)
Forms: Formspree
Deployment: Vercel
Fonts: Roboto (all weights via Google Fonts — 300, 400, 500, 700, 900)


Brand Colors
--kw-red:    #e63030   (primary CTA, labels, accents)
--kw-orange: #f07820   (accent)
--kw-yellow: #f5c800   (step numbers, stars, badges)
--kw-green:  #3ab54a   (accent, reviews section)
--kw-blue:   #2e7dd6   (featured card, accent)
--kw-purple: #8b3fa8   (accent)
--kw-cream:  #fffdf8   (page background)
--kw-dark:   #1a1a1a   (body text, footer)

Sitemap — 6 Pages
PageURLHome/About/aboutCharacters/charactersServices/servicesOrder Form/orderContact/contact
Nav links: Characters · Services · About Us · Order Form · Contact
Nav CTA button (red): Book a Party → links to /order

Page-by-Page Spec

1. Home (/)
Section 1 — Hero

Left side:

Badge pill (yellow): "✦ SF Bay Area's #1 Party Characters"
H1 (Roboto 900, 52px): "Make Their Birthday Magical" — "Magical" in red
Subtext (Roboto 300): "Professional costumed character parties with music, games, dancing, and party favors — creating memories that last a lifetime."
Two buttons: "Book Your Party" (red, filled) and "View Characters" (outline)


Right side: 2×2 grid of colored category cards with labels

Red card: "Princess Party"
Blue card: "Superhero Party"
Green card: "Music & Dance"
Purple card: "Cartoon Favorites"


Background: cream (#fffdf8)

Section 2 — How It Works

Section label (red, caps): "HOW IT WORKS"
H2: "A complete party in 4 easy steps"
Subtext: "From booking to birthday cake, we handle the entertainment so you can enjoy every moment."
4 cards in a row, each with: large step number (yellow, 900 weight), icon, bold title, description

01 🎂 Pick Your Character — "Choose from 50+ beloved characters your child will love."
02 📅 Book Online — "Select your date, duration, and number of characters in minutes."
03 🎵 Party Time! — "Your character arrives with a custom soundtrack, games, and favors for all kids."
04 📸 Photo Memories — "We end every show with a group Happy Birthday song and photo time."


Background: light blue tint (#f0f8ff)

Section 3 — Services Preview

Section label (red, caps): "SERVICES"
H2: "Everything you need for an unforgettable party"
3 cards:

🎭 Character-Themed Party — "Let Kiddo World provide the character fun and games for your party!" → links to /services
👗 Costume Rental — "Choose from a variety of costumes to host your own themed party!" → links to /services
🏢 Corporate Events — "Add fun to your company's event with a costumed character to entertain the kids...and adults!" → links to /services


Background: white

Section 4 — Reviews

Section label (red, caps): "REVIEWS"
H2: "Families love us"
Subtext: "Trusted by hundreds of Bay Area families for over a decade."
3 review cards, each with: yellow stars, italic quote text, avatar initials circle, reviewer name + city

JM / Jennifer M., San Jose CA — "My son's birthday party was truly magical, thanks to Kiddo World and the incredible performance of Mickey and Minnie Mouse. The moment they arrived, the children's faces lit up with pure joy."
RL / Ricardo L., Fremont CA — "My son was freaking over the moon that Chase came to his bday party (and even had birthday cake together!). He's been talking about it non stop after the party. Definitely a core memory made."
AP / Anita P., Santa Clara CA — placeholder or third real review if available


Background: light green tint (#f5fff6)

Section 5 — CTA Banner

Full-width red background
H2 (white): "Ready to make their birthday magical?"
Subtext (white, light): "Serving San Jose and the greater SF Bay Area."
Button (white, red text): "Book a Party"


2. About (/about)

Section label: "OUR STORY"
H1: "Meet Roxy"
Full about text (from Wix site, verbatim):

"Hey there, I'm Roxy, the mastermind behind Kiddo World, your go-to for epic kids' parties. Picture this: two decades ago, my family and I landed in the USA, unknowingly setting the stage for a wild ride. Back in the day, my Dad, on the hunt for extra cash, stumbled upon a Craigslist gig that sparked my joy-filled journey into kids' parties. Fast forward 20 years, and we're still cruising the Bay Area, delivering smiles to kiddos. In 2018, I took the helm of Kiddo World after spending 18 years rocking stages for others. Little did I know, what started as a side hustle would become my full-time gig. Now with over 20 character costumes, Kiddo World isn't just a business — it's my dream come true. Ready to sprinkle some magic at your event? We are here to make that magic come alive!"


Right side: Roxy's photo (image from Cloudinary)
CTA below text: "Book a Party" button → /order


3. Characters (/characters)

Section label: "CHARACTERS"
H1: "Find the perfect character for your party"
Subtext: "We have 50+ costumes. Browse our roster and pick your child's favorite."
Grid layout: 3 or 4 columns, each character card has:

Square image (from Cloudinary)
Character name below
Hover state: slight scale up


Images: placeholder cards initially, swap in real Cloudinary images
CTA at bottom: "Don't see your character? Contact us." → /contact


4. Services (/services)
Three service detail sections, each with image + text side by side (alternating layout):
Service 1 — Character-Themed Party

Image: Chase/party photo (Cloudinary)
H2: "Character-Themed Party"
Description: "Let Kiddo World provide the character fun and games for your party! Your character arrives in full costume with a custom soundtrack, party games, dancing, and party favors for up to 30 kids."
Button: "Book This Service" → /order

Service 2 — Costume Rental

Image: Elmo photo (Cloudinary)
H2: "Costume Rental"
Description: "Want to host your own themed party? Choose from our library of 20+ professional character costumes. Perfect for parents who want to be the star of the show!"
Button: "Inquire About Rental" → /contact

Service 3 — Corporate Events

Image: Sonic/event photo (Cloudinary)
H2: "Corporate Events"
Description: "Add fun to your company event, school carnival, or community gathering with a professional costumed character. We entertain the kids — and the adults!"
Button: "Get a Quote" → /order


5. Order Form (/order)

H1: "Book Your Party"
Subtext: "Fill out the form below and we'll contact you within 24 hours to confirm. A $75 deposit secures your date. Payment via PayPal, Venmo, or Zelle."
Form fields (via Formspree):

First Name (required)
Last Name (required)
Email (required)
Phone Number (required)
Character (dropdown — to be populated with character list)
Duration (dropdown: 1 hour / 90 minutes / 2 hours)
Event Date (date picker)
Event Address (text)
Event Zip Code (text)
Additional Notes (textarea)


Submit button (red): "Send My Request"
After submit: success message "We'll be in touch within 24 hours!"
Form submits to: info@kiddoworld.com via Formspree


6. Contact (/contact)

H1: "Get in Touch"
Left side — contact info:

Email: info@kiddoworld.com
Phone: (669) 444-0941
Yelp link
Instagram link (@kidd0w0rld)
Note: "To ensure delivery, please add info@kiddoworld.com to your address book."


Right side — contact form (Formspree):

First Name, Last Name, Email, Subject, Message
Submit button (red): "Send Message"




Footer (all pages)

Rainbow "Kiddo World" logo text (matching logo colors)
Tagline: "SF Bay Area's favorite party characters"
Nav links: Characters · Services · About · Order Form · Contact
Social icons: Yelp, Instagram
Copyright: "© 2026 Kiddo World · San Jose, CA · (669) 444-0941"


Notes for Cursor

All images served via Cloudinary — use next/image with Cloudinary loader
Formspree handles both the Order Form and Contact form — no backend needed
Mobile-first responsive: nav collapses to hamburger on mobile
The mockup prototype built in this chat is the visual reference for design decisions