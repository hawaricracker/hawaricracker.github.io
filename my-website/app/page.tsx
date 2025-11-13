'use client';
import { useState } from 'react';
import '../src/style.css';

export default function HomePage() {
  // State for search box toggle
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // State for mascots
  const mascots = [
    { name: 'Kirara', image: '/Kirara.png' },
    { name: 'Ayaka', image: '/Ayaka.png' },
    { name: 'March 7th', image: '/Mitsuki.png' }
  ];
  const [currentMascotIndex, setCurrentMascotIndex] = useState(0);

  // Function to go to next mascot
  function nextMascot() {
    setCurrentMascotIndex((prev) => (prev + 1) % mascots.length);
  }

  return (
    <div className="main-div">
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/Akai.png" alt="logo" />
        </div>

        <div className="menu">
          <ul className="list-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`search-container ${isSearchOpen ? 'open' : ''}`}
        >
          <input
            id="search-form"
            type="text"
            name="query"
            placeholder="Search"
          />
          <button
            id="search-button"
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <img src="/search-logo.png" alt="search" />
          </button>
        </form>
      </nav>

      <div className="section1">
        <div className="main-title">
          <h1>
            Unit Kegiatan Mahasiswa <br /> Atarashii Sekai ITERA
          </h1>
          <p>UKM buat para wibu, anomali dan orang gangguan mental</p>
          <button>Join Us</button>
        </div>
      </div>

      <div className="section2">
        <div className="mascot">
          <h1>Our Mascot</h1>
          <img
            id="mascotImage"
            src={mascots[currentMascotIndex].image}
            alt="mascot"
          />
          <h2 id="mascotName">{mascots[currentMascotIndex].name}</h2>
        </div>

        <div className="sec2button">
          <button id="nextButton" onClick={nextMascot}>
            <img src="/Next.png" alt="next" />
          </button>
        </div>

        <div className="activities">
          <h1>Our Activities</h1>
        </div>
      </div>
    </div>
  );
}