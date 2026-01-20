export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>

      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#ffffff",
          borderBottom: "1px solid #eaeaea",
          padding: "12px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/next.svg" alt="Angelfish Discus" style={{ height: "45px" }} />
          <strong style={{ fontSize: "1.2rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "10px 18px",
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
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #eaf6ff, #ffffff)",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", color: "#0a3d62" }}>
          Angelfish Discus
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "800px", margin: "20px auto" }}>
          Especialistas en la cría responsable de peces ángel (escalares) de alta
          calidad, con asesoría profesional y envío seguro a nivel nacional.
        </p>
        <p style={{ fontWeight: "bold" }}>
          📍 Mosquera – Cundinamarca, Colombia
        </p>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "14px 30px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Contáctanos por WhatsApp
        </a>
      </section>

      {/* QUIÉNES SOMOS */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 Quiénes somos</h2>
        <p>
          En <strong>Angelfish Discus</strong> somos un emprendimiento colombiano
          dedicado a la cría y selección de peces ornamentales, enfocados
          principalmente en <strong>escalares de línea genética cuidada</strong>.
        </p>
        <p>
          Nuestro objetivo es ofrecer peces sanos, bien formados y adaptados,
          acompañados de asesoría real antes y después de la compra.
        </p>
      </section>

      {/* ESCALARES */}
      <section
        style={{
          background: "#f8f9fb",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ color: "#0a3d62" }}>🐟 Escalares disponibles</h2>

          <ul style={{ columns: 2, maxWidth: "600px" }}>
            <li>Red Devil</li>
            <li>Búlgaro Avatar</li>
            <li>Full Black Blushing</li>
            <li>Albino</li>
            <li>Red Devil Albino</li>
          </ul>

          <p>
            <strong>Tamaños:</strong><br />
            • Juveniles (2–3 cm)<br />
            • Medianos (4–6 cm)<br />
            • Ejemplares grandes: consultar
          </p>

          <p>
            <strong>Precios:</strong><br />
            • Escalares comunes desde <strong>$5.000 COP</strong><br />
            • Variedades especiales desde <strong>$10.000 COP</strong>
          </p>
        </div>
      </section>

      {/* VALOR DIFERENCIAL */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>⭐ ¿Por qué elegirnos?</h2>
        <ul>
          <li>Cría controlada y responsable</li>
          <li>Peces adaptados y bien alimentados</li>
          <li>Asesoría personalizada</li>
          <li>Experiencia real en acuariofilia</li>
          <li>Envíos seguros en Colombia</li>
        </ul>
      </section>

      {/* CUIDADOS */}
      <section
        style={{
          background: "#f8f9fb",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ color: "#0a3d62" }}>💧 Cuidados básicos</h2>
          <ul>
            <li>Temperatura ideal: 26–28°C</li>
            <li>pH recomendado: 6.5 – 7.2</li>
            <li>Filtración constante</li>
            <li>Cambios de agua semanales</li>
          </ul>
        </div>
      </section>

      {/* ENVIOS */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos</h2>
        <p>
          Realizamos envíos a nivel nacional dentro de Colombia. El costo depende
          de la ciudad, cantidad de peces y transportadora.
        </p>
        <p>
          Escríbenos por WhatsApp para cotizar tu pedido.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#0a3d62",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus – Mosquera, Colombia
      </footer>
    </div>
  );
}
