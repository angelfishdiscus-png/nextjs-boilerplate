export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px", lineHeight: "1.6" }}>
      
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#0a3d62" }}>
          Angelfish Discus
        </h1>

        <h2 style={{ fontSize: "1.2rem", color: "#555" }}>
          Escalares de alta calidad en Bogotá y envíos a toda Colombia
        </h2>

        <p style={{ fontSize: "1.1rem", color: "#333", marginTop: "15px" }}>
          Nuestra meta es ofrecer la mejor variedad de peces ángel (escalares) y discos,
          con calidad, salud y asesoría profesional.
        </p>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "14px 28px",
            backgroundColor: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          📲 Asesoría por WhatsApp
        </a>
      </section>

      {/* SOBRE NOSOTROS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 Sobre nosotros</h2>
        <p>
          Somos un emprendimiento ubicado en{" "}
          <strong>Mosquera, cerca de Bogotá, Colombia</strong>,
          dedicado a la cría y comercialización de peces ornamentales,
          especialmente <strong>escalares</strong> y próximamente <strong>discos</strong>.
        </p>
        <p>
          Trabajamos con peces saludables, bien alimentados y adaptados,
          ofreciendo asesoría personalizada antes y después de la compra.
        </p>
      </section>

      {/* ESCALARES */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 Escalares disponibles</h2>

        <ul>
          <li>Escalar Red Devil</li>
          <li>Escalar Búlgaro Avatar</li>
          <li>Escalar Full Black Blushing</li>
          <li>Escalar Albino</li>
          <li>Escalar Red Devil Albino</li>
        </ul>

        <p>
          <strong>Tamaños de venta:</strong><br />
          • Juveniles: 2 – 3 cm<br />
          • Medianos: 4 – 6 cm<br />
          • Ejemplares grandes: <em>consultar por WhatsApp</em>
        </p>

        <p>
          <strong>Precios:</strong><br />
          • Escalares comunes: <strong>Desde $5.000 COP</strong><br />
          • Variedades especiales (albinos, red devil): <strong>Desde $10.000 COP</strong><br />
          <em>El precio final depende del tamaño, variedad y cantidad.</em>
        </p>
      </section>

      {/* INSUMOS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0a3d62" }}>🧪 Insumos para acuarios</h2>
        <ul>
          <li>Comida especializada para escalares</li>
          <li>Filtros tipo pulmón para acuarios</li>
        </ul>
        <p>
          Consulta disponibilidad y recibe asesoría según tu acuario.
        </p>
      </section>

      {/* CUIDADOS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0a3d62" }}>💧 Cuidados básicos del escalar</h2>
        <ul>
          <li>Filtración constante y de buena calidad</li>
          <li>Iluminación moderada</li>
          <li>pH recomendado entre 6.5 y 7.2</li>
          <li>Temperatura entre 26°C y 28°C</li>
          <li>Cambios parciales de agua semanales</li>
        </ul>
        <p>
          Siempre asesoramos a nuestros clientes para garantizar el bienestar del pez.
        </p>
      </section>

      {/* ENVIOS */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p>
          Realizamos envíos dentro de Colombia.
          El costo del envío depende de la ciudad, la cantidad de peces
          y la transportadora seleccionada.
        </p>
        <p>
          Escríbenos por WhatsApp para cotizar tu pedido.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", marginTop: "50px", color: "#666" }}>
        <p>
          © {new Date().getFullYear()} Angelfish Discus – Mosquera, Colombia
        </p>
      </footer>

    </main>
  );
}
