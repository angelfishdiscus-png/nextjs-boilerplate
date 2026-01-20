export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933", backgroundColor: "#ffffff" }}>

      {/* ================= HEADER ================= */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/logo-angelfish.png"
            alt="Angelfish Discus Logo"
            style={{
              height: "58px",
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.2))",
            }}
          />
          <strong style={{ fontSize: "1.25rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            padding: "10px 20px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1e6091)",
          color: "#ffffff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Escalares Premium en Colombia
        </h1>

        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.25rem", lineHeight: "1.6" }}>
          Criadores especializados en peces ángel con genética seleccionada,
          excelente salud y asesoría profesional real.
        </p>

        <p style={{ marginTop: "18px", opacity: 0.9 }}>
          📍 Mosquera – Cundinamarca, Colombia
        </p>
      </section>

      {/* ================= QUIÉNES SOMOS ================= */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62", marginBottom: "20px" }}>
          🐠 ¿Quiénes somos?
        </h2>
        <p>
          En <strong>Angelfish Discus</strong> nos dedicamos a la cría responsable
          de peces ornamentales, enfocados principalmente en
          <strong> escalares</strong> de alta calidad y próximamente
          <strong> discos</strong>.
        </p>
        <p>
          Nuestros peces son criados con parámetros estables, alimentación
          especializada y manejo profesional, garantizando ejemplares sanos,
          fuertes y bien adaptados.
        </p>
      </section>

      {/* ================= BÚLGARO BLACK ================= */}
      <section style={{ backgroundColor: "#f8fafc", padding: "90px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ color: "#0a3d62", textAlign: "center", marginBottom: "15px" }}>
            🖤 Escalar Búlgaro Black
          </h2>

          <p style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 55px" }}>
            Variedad premium de color negro intenso, genética seleccionada y
            crianza profesional en Colombia. Ideal para acuarios de exhibición
            y proyectos de cría.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <img
              src="/bulgaro-black-1.png"
              alt="Escalar Búlgaro Black adulto"
              style={{
                width: "100%",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
              }}
            />

            <div style={{ textAlign: "center" }}>
              <img
                src="/bulgaro-black-2.png"
                alt="Escalar Búlgaro Black juvenil"
                style={{
                  width: "100%",
                  borderRadius: "18px",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
                  marginBottom: "28px",
                }}
              />

              <a
                href="https://wa.me/573208880555"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "30px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENVIOS ================= */}
      <section style={{ backgroundColor: "#eef4f8", padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Realizamos envíos seguros a toda Colombia.
          El costo depende de la ciudad, cantidad de peces y transportadora.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "#ffffff",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>

    </div>
  );
}
