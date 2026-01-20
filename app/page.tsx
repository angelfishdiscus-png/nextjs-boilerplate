export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933" }}>
      
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo-angelfish.png"
            alt="Angelfish Discus Logo"
            style={{
              height: "55px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
            }}
          />
          <strong style={{ fontSize: "1.2rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            padding: "10px 18px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e6091)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "15px" }}>
          Escalares de Alta Calidad en Colombia
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          Nuestra meta es entregar la mejor variedad de peces ángel (escalares) y discos,
          con salud garantizada, genética seleccionada y asesoría profesional.
        </p>

        <p style={{ marginTop: "15px", fontSize: "1rem", opacity: 0.9 }}>
          📍 Mosquera – cerca de Bogotá, Colombia
        </p>
      </section>

      {/* SOBRE NOSOTROS */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 ¿Quiénes somos?</h2>
        <p>
          En <strong>Angelfish Discus</strong> nos especializamos en la cría responsable
          de peces ornamentales. Nuestro enfoque principal son los
          <strong> escalares</strong> y próximamente <strong>discos</strong>,
          criados con parámetros controlados y excelente alimentación.
        </p>
        <p>
          No solo vendemos peces, acompañamos a nuestros clientes con asesoría real
          antes y después de la compra.
        </p>
      </section>

      {/* ESCALARES */}
      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2 style={{ color: "#0a3d62" }}>🐟 Escalares disponibles</h2>

          <ul>
            <li>Red Devil</li>
            <li>Búlgaro Avatar</li>
            <li>Full Black Blushing</li>
            <li>Albino</li>
            <li>Red Devil Albino</li>
          </ul>

          <p>
            <strong>Tamaños:</strong><br />
            • 2 – 3 cm (juveniles)<br />
            • 4 – 6 cm (medianos)<br />
            • Ejemplares grandes: <em>solo por WhatsApp</em>
          </p>

          <p>
            <strong>Precios:</strong><br />
            • Escalares comunes: <strong>desde $5.000 COP</strong><br />
            • Variedades especiales: <strong>desde $10.000 COP</strong><br />
            <em>Descuentos por cantidad (mayoristas).</em>
          </p>
        </div>
      </section>

      {/* CUIDADOS */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>💧 Cuidados básicos</h2>
        <ul>
          <li>Filtración constante y eficiente</li>
          <li>Iluminación moderada</li>
          <li>pH ideal: 6.5 – 7.2</li>
          <li>Temperatura: 26 – 28 °C</li>
          <li>Cambios parciales de agua semanales</li>
        </ul>
      </section>

      {/* ENVIOS */}
      <section
        style={{
          backgroundColor: "#eef4f8",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p>
          Realizamos envíos en toda Colombia.  
          El valor depende de la ciudad, cantidad de peces y transportadora.
        </p>
        <p>
          Escríbenos por WhatsApp y te cotizamos sin compromiso.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>
    </div>
  );
}
<section className="section">
  <h2>Variedades Destacadas</h2>

  <div className="cards">
    <div className="card">
      <img src="/red-devil.jpg" alt="Escalar Red Devil" />
      <div className="card-content">
        <h3>Escalar Red Devil</h3>
        <p>
          Variedad premium de intenso color rojo, crianza selectiva y excelente
          genética.
        </p>
        <a
          href="https://wa.me/573208880555"
          target="_blank"
        >
          Consultar disponibilidad
        </a>
      </div>
    </div>

    <div className="card">
      <img src="/albino.jpg" alt="Escalar Albino" />
      <div className="card-content">
        <h3>Escalar Albino</h3>
        <p>
          Escalar elegante de tonos claros, ideal para acuarios de exhibición.
        </p>
        <a
          href="https://wa.me/573208880555"
          target="_blank"
        >
          Consultar disponibilidad
        </a>
      </div>
    </div>

    <div className="card">
      <img src="/full-black.jpg" alt="Escalar Full Black" />
      <div className="card-content">
        <h3>Escalar Full Black</h3>
        <p>
          Color negro profundo, muy solicitado por criadores y aficionados.
        </p>
        <a
          href="https://wa.me/573208880555"
          target="_blank"
        >
          Consultar disponibilidad
        </a>
      </div>
    </div>
  </div>
</section>
