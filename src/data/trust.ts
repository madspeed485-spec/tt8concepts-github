// trust.ts: testimonial, "About Tony" and starting price, in ONE place.
//
// Each piece shows on the site ONLY when you fill it in. Leave a value as ''
// and that piece stays hidden. Please use real words only (no made-up quotes).
export const trust = {
  // A short quote from a real client, e.g. the Zs at the Gap organizers.
  // Shows after the Featured project once quote AND name are filled in.
  testimonial: {
    quote: '', // the client's words, without quote marks
    name: '',  // who said it
    role: '',  // optional, e.g. 'Organizer, Zs at the Gap'
  },
  // "About Tony" block, shown before Contact once bio is filled in.
  founder: {
    name: 'Tony',
    photo: '', // a file in public/images, e.g. 'images/tony.jpg'
    bio: '',   // 2 or 3 sentences about you, in your own words
  },
  // Shown in the Contact section as "Projects start from ...", e.g. '$500'.
  startingPrice: '',
};