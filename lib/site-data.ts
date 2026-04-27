export const characters = [
  "Red Monster",
  "Blue Monster",
  "White Kitty",
  "Beagle with Black Spots",
  "Cop Canine",
  "Airplane Pilot Canine",
  "German Shepherd Cop Dog",
  "Dalmatian Firefighter Dog",
  "Orange Cockapoo Airplane Dog",
  "Unicorn",
  "Blue Spotted Canine",
  "Blue Heeler Dog",
  "Red Heeler Dog",
  "Boy Mouse",
  "Girl Mouse",
  "Pink Girl Mouse",
  "Red Girl Mouse",
  "Cute Cuddly Bear",
  "Yellow Shark",
  "Poppy from Trolls",
  "Blue Hedgehog",
  "Toy Astronaut",
  "Toy Cowboy",
  "Pink Pig",
  "Melon Baby",
  "Red Italian Brother",
  "Green Italian Brother",
  "Curly Haired Latina",
  "Cat Boy",
  "Easter Bunny",
  "Santa",
] as const;

export const orderCharacters = characters;

export const partyPricing = {
  "1 Hour": { 1: 225, 2: 350, 3: 500 },
  "1½ Hours": { 1: 265, 2: 425, 3: 570 },
  "2 Hours": { 1: 345, 2: 525, 3: null },
  "2½ Hours": { 1: 425, 2: 625, 3: null },
  "3 Hours": { 1: 505, 2: 725, 3: null },
} as const;

export const packages = [
  {
    name: "Character-Themed Party",
    description:
      "Let Kiddo World provide the character fun and games for your party! Your character arrives in full costume with a custom soundtrack, party games, dancing, and party favors for up to 30 kids.",
    buttonLabel: "Book This Package",
    accentClass: "bg-kw-red/10 text-kw-red",
  },
  {
    name: "Costume Rental",
    description:
      "Want to host your own themed party? Choose from our library of 20+ professional character costumes. Perfect for parents who want to be the star of the show!",
    buttonLabel: "Get a Quote",
    accentClass: "bg-kw-blue/10 text-kw-blue",
  },
  {
    name: "Corporate Events",
    description:
      "Add fun to your company event, school carnival, or community gathering with a professional costumed character. We entertain the kids — and the adults!",
    buttonLabel: "Get a Quote",
    accentClass: "bg-kw-green/10 text-kw-green",
  },
] as const;
