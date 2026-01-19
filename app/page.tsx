export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f6f8" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e90ff)",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Angelfish Discus
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "800px", margin: "0 auto" }}>
          Escalares de alta calidad en Mosquera – Bogotá  
          Envíos a toda Colombia
        </p>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 35px",
            backgroundColor: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          📲 Asesoría por WhatsApp
        </a>
      </section>

      {/* CONTENEDOR */}
      <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
        
        {/* SOBRE NOSOTROS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>🐠 Sobre nosotros</h2>
          <p>
            Somos un emprendimiento ubicado en <strong>Mosquera, cerca de Bogotá</strong>,
            especializado en la cría y comercialización de peces ornamentales,
            especialmente <strong>escalares</strong> y próximamente <strong>discos</strong>.
          </p>
          <p>
            Trabajamos con peces saludables, bien alimentados y adaptados,
            brindando asesoría personalizada antes y después de la compra.
          </p>
        </section>

        {/* ESCALARES */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>🐟 Escalares disponibles</h2>
          <ul>
            <li>Red Devil</li>
            <li>Búlgaro Avatar</li>
            <li>Full Black Blushing</li>
            <li>Albino</li>
            <li>Red Devil Albino</li>
          </ul>

          <p><strong>Tamaños:</strong></p>
          <ul>
            <li>Juveniles: 2 – 3 cm</li>
            <li>Medianos: 4 – 6 cm</li>
            <li>Grandes: consultar</li>
          </ul>

          <p>
            <strong>Precios:</strong><br />
            Escalares comunes: <strong>desde $5.000 COP</strong><br />
            Variedades especiales: <strong>desde $10.000 COP</strong>
          </p>

          <a href="https://wa.me/573208880555" target="_blank" style={btnStyle}>
            Consultar disponibilidad
          </a>
        </section>

        {/* INSUMOS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>🧪 Insumos para acuarios</h2>
          <ul>
            <li>Alimento especializado para escalares</li>
            <li>Filtros tipo pulmón</li>
          </ul>
          <p>
            Te asesoramos según el tamaño y tipo de acuario.
          </p>
        </section>

        {/* CUIDADOS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>💧 Cuidados básicos</h2>
          <ul>
            <li>Temperatura: 26°C – 28°C</li>
            <li>pH: 6.5 – 7.2</li>
            <li>Filtración constante</li>
            <li>Cambios parciales de agua semanales</li>
          </ul>
        </section>

        {/* ENVIOS */}
        <section style={cardStyle}>
          <h2 style={titleStyle}>🚚 Envíos a Colombia</h2>
          <p>
            Realizamos envíos a nivel nacional.  
            El costo depende de la ciudad, cantidad de peces y transportadora.
          </p>

          <a href="https://wa.me/573208880555" target="_blank" style={btnStyle}>
            Cotizar envío
          </a>
        </section>

      </div>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus – Colombia
      </footer>
    </main>
  );
}

/* ESTILOS REUTILIZABLES */
const cardStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  marginBottom: "30px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const titleStyle = {
  color: "#0a3d62",
  marginBottom: "15px",
};

const btnStyle = {
  display: "inline-block",
  marginTop: "15px",
  padding: "10px 25px",
  backgroundColor: "#25D366",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "25px",
  fontWeight: "bold",
};
