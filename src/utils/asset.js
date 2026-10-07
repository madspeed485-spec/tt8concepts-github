// asset() builds the correct URL for a file in the public/ folder.
//
// Why? On GitHub Pages this site lives at
//   https://madspeed485-spec.github.io/tt8concepts-github/
// so "images/car.jpg" must become "/tt8concepts-github/images/car.jpg".
// import.meta.env.BASE_URL holds that "/tt8concepts-github" part (set by
// `base` in astro.config.mjs). It may or may not end with "/", so we make
// sure there is exactly one slash between the base and the file name.
//
// Usage:  asset('images/dreams-car.jpg')  ->  '/tt8concepts-github/images/dreams-car.jpg'
export function asset(path) {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
