import './App.css';

function Privacy() {
  return (
    <div className="app">
      <div className="container privacy-container">
        <h1 className="privacy-title">Política de Privacidad</h1>
        
        <section className="privacy-section">
          <h2>Recopilación de Información</h2>
          <p>No recopilamos información personal identificable de los visitantes de nuestro sitio web. Esta página funciona como una landing page para redirigir a plataformas de streaming.</p>
        </section>

        <section className="privacy-section">
          <h2>Enlaces a Terceros</h2>
          <p>Nuestro sitio contiene enlaces a plataformas de streaming externas. No somos responsables de las prácticas de privacidad de estos sitios externos.</p>
        </section>

        <section className="privacy-section">
          <h2>Cookies</h2>
          <p>No utilizamos cookies ni tecnologías de seguimiento en nuestro sitio web.</p>
        </section>

        <section className="privacy-section">
          <h2>Cambios en la Política de Privacidad</h2>
          <p>Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.</p>
        </section>

        <section className="privacy-section">
          <h2>Contacto</h2>
          <p>Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de nuestras redes sociales oficiales.</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
