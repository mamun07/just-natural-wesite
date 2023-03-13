export default function imageLoad({ src, width, quality }) {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`;
}
