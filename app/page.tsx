export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933" }}>
      
      {/* ================= HEADER ================= */}
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

      {/* ================= HERO ================= */}
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
          Criadores especializados en escalares premium con genética seleccionada
          y asesoría profesional real.
        </p>

        <p style={{ marginTop: "15px", opacity: 0.9 }}>
          📍 Mosquera – cerca de Bogotá, Colombia
        </p>
      </section>

      {/* ================= SOBRE NOSOTROS ================= */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 ¿Quiénes somos?</h2>
        <p>
          En <strong>Angelfish Discus</strong> nos especializamos en la cría
          responsable de peces ornamentales, enfocados principalmente en
          <strong> escalares</strong> y próximamente <strong>discos</strong>.
        </p>
        <p>
          Criamos peces fuertes, sanos y bien adaptados, con acompañamiento real
          antes y después de la compra.
        </p>
      </section>

      {/* ================= BÚLGARO BLACK ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2
            style={{
              color: "#0a3d62",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            🖤 Escalar Búlgaro Black
          </h2>

          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            Variedad premium de color negro intenso, genética seleccionada y
            crianza profesional en Colombia.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <img
              src="/bulgaro-black-1.png"
              alt="Escalar Búlgaro Black"
              style={{
                width: "100%",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            />

            <div>
              <img
                src="/bulgaro-black-2.png"
                alt="Escalar Búlgaro Black juvenil"
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  marginBottom: "20px",
                }}
              />

              <a
                href="https://wa.me/573208880555"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "14px 28px",
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
      <section
        style={{
          backgroundColor: "#eef4f8",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p>
          Envíos seguros a toda Colombia.  
          El valor depende de la ciudad y cantidad de peces.
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>
    </div>
  );
}
