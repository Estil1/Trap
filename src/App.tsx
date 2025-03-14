import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [audio] = useState(new Audio('/Otra.wav'));
  const [hasInteracted, setHasInteracted] = useState(false);

  const playAudio = () => {
    if (!hasInteracted) {
      audio.play().catch(error => console.log("Audio playback failed:", error));
      setHasInteracted(true);
    }
  };

  const handleTouch = (event: React.TouchEvent) => {
    const container = event.currentTarget;
    container.classList.toggle('touched');
    setIsFlipped(prev => !prev);
    playAudio();
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
    playAudio();
  };

  return (
    <div className="app" style={{ 
      backgroundColor: isFlipped ? '#034dea' : '#046bfa',
      transition: 'background-color 0.8s ease'
    }}>
      <div className="background-elements">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <img src="/Background/Bigoblin.png" alt="" className={`bg-element bg-bigoblin-${i}`} />
            <img src="/Background/corazones.png" alt="" className={`bg-element bg-corazones-${i}`} />
            <img src="/Background/cruz.png" alt="" className={`bg-element bg-cruz-${i}`} />
            <img src="/Background/Estrella2.png" alt="" className={`bg-element bg-estrella2-${i}`} />
            <img src="/Background/Smile.png" alt="" className={`bg-element bg-smile-${i}`} />
            <img src="/Background/star.png" alt="" className={`bg-element bg-star-${i}`} />
            <img src="/Background/vacaderecha.png" alt="" className={`bg-element bg-vacaderecha-${i}`} />
            <img src="/Background/vacaezquina.png" alt="" className={`bg-element bg-vacaezquina-${i}`} />
          </React.Fragment>
        ))}
      </div>
      <main className="container">
        <div className="album-container" onTouchStart={handleTouch}>
          <div 
            className="album-cover-inner"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsFlipped(false)}>
            <div className="album-cover-front">
              <img src="/Albumcover.jpg" alt="Album Cover Front" className="album-cover" />
            </div>
            <div className="album-cover-back">
              <img src="/coverartatras.jpg" alt="Album Cover Back" className="album-cover" />
            </div>
          </div>
        </div>
        
        <div className="streaming-section">
          <h3 className="section-title"></h3>
          <div className="streaming-platforms">
            <a href="https://open.spotify.com/prerelease/4BZmdFJxc4sxUmnCtqgjtq?si=_X-0BQM7RK-2SxOt6f5hlA" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Spotify_Full_Logo_RGB_White.png" alt="Spotify" className="platform-logo" />
            </a>
            <a href="https://music.apple.com/us/album/aЯt-ep/1802222655" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Apple_Music_logo.svg" alt="Apple Music" className="platform-logo" />
            </a>
            <a href="https://www.youtube.com/watch?v=O6OjFeAwN1c&list=OLAK5uy_kfOsSyxZU4i807eeda3BAqhylGvAPkHCk" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Youtube.webp" alt="YouTube" className="platform-logo" />
            </a>
            <a href="https://music.amazon.com/albums/B0F1C3LNF3" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Amazon_Music_Cyan.png" alt="Amazon Music" className="platform-logo" />
            </a>
            <a href="https://www.deezer.com/mx/album/726528241" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Deezer_logo_2019.svg" alt="Deezer" className="platform-logo" />
            </a>
            <a href="https://tidal.com/browse/album/423606934" target="_blank" rel="noopener noreferrer" className="platform-link">
              <img src="/Tidal_(service)_logo.svg" alt="Tidal" className="platform-logo" />
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <a href="privacy" target="_blank" rel="noopener noreferrer" className="footer-link">Política de Privacidad</a>
      </footer>
    </div>
  );
}

export default App;
