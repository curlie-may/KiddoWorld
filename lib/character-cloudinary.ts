/**
 * Maps a display name to the Cloudinary public ID at account root:
 * hyphenated slug + `.jpg` (e.g. "Toy Astronaut" → toy-astronaut.jpg).
 */
export function characterNameToCloudinarySrc(characterName: string): string {
  const slug = characterName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug}.jpg`;
}
