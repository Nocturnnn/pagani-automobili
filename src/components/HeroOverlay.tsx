export default function HeroOverlay() {
  return (
    <div className="hero-overlay pointer-events-none">
      <div className="bg-word" aria-hidden="true">
        PAGANI
      </div>

      <header className="topbar pointer-events-auto">
        <div className="brand">
          <span className="brand-small brand-small--delayed">
            Pagani Automobili
          </span>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Gallery</a>
          <a href="https://sketchfab.com/3d-models/pagani-huayra-r-1dd0905daca245cb865a9e5affd61e4b">
            Credits
          </a>
        </nav>
      </header>

      <div className="hero-copy">
        <p className="eyebrow">Automotive Exhibition / 3D Showcase</p>
        <h1>Huayra R</h1>
        <p className="description">
          Sculptural presence. Track-born character.
        </p>
      </div>

      <div className="scroll-indicator">
        <span>Scroll gently</span>
      </div>
    </div>
  );
}
