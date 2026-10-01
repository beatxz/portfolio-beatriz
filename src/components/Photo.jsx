import ParallaxImage from "./ParallaxImage.jsx";
import { profile } from "../data/profile.js";

// ============================================================
// // SUBSTITUIR PELA FOTO DA BEATRIZ
// A foto vem de src/data/profile.js -> profile.photo
// O arquivo fica em public/assets/beatriz/foto.jpg
// Se o arquivo não existir, aparece um placeholder listrado.
// ============================================================
export default function Photo({ className = "" }) {
  const { photo } = profile;

  return (
    <figure className={`relative ${className}`}>
      {/* moldura laranja deslocada */}
      <div
        aria-hidden="true"
        className="absolute left-[18px] top-[18px] -bottom-[18px] -right-[18px] border-b-4 border-r-4 border-accent"
      />
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src="/assets/beatriz/foto.jpg"
          alt="Beatriz Rodrigues Martins"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </figure>
  );
}
