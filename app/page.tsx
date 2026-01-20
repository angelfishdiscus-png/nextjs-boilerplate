export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#1f2933",
        backgroundColor: "#f4f8fb",
      }}
    >
      {/* ================= HEADER ================= */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "#ffffff",
          borderBottom: "3px solid #1e6091",
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
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.25))",
            }}
          />
          <strong style={{ fontSize: "1.3rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            padding: "10px 22px",
            background: "linear-gradient(135deg, #25D366, #1ebe5d)",
            color: "#ffffff",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0a3d62 0%, #1e6091 70%, #3fa9f5 100%)",
          color: "#ffffff",
          padding: "110px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.2rem", marginBottom: "22px" }}>
          Escalares Premium en Colombia
        </h1>

        <p
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            fontSize: "1.3rem",
            lineHeight: "1.7",
            opacity: 0.95,
          }}
        >
          Criadores especializados en peces ángel con genética seleccionada,
          excelente salud y asesoría profesional real.
        </p>

        <p style={{ marginTop: "20px", fontSize: "1.05rem", opacity: 0.9 }}>
          📍 Mosquera – Cundinamarca, Colombia
        </p>
      </section>

      {/* ================= SOBRE NOSOTROS ================= */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2 style={{ color: "#0a3d62", marginBottom: "22px" }}>
          🐠 ¿Quiénes somos?
        </h2>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
          En <strong>Angelfish Discus</strong> nos dedicamos a la cría responsable
          de peces ornamentales, enfocados principalmente en{" "}
          <strong>escalares</strong> de alta calidad y próximamente{" "}
          <strong>discos</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
          Nuestros peces son criados con parámetros estables, alimentación
          especializada y manejo profesional, garantizando ejemplares sanos,
          fuertes y bien adaptados.
        </p>
      </section>

      {/* ================= VARIEDADES ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "90px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2
            style={{
              color: "#0a3d62",
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            Variedades Destacadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "38px",
            }}
          >
            {[
              {
                img: "/red-devil.jpg",
                title: "Escalar Red Devil",
                text: "Color rojo intenso, genética seleccionada y gran demanda.",
              },
              {
                img: "/albino.jpg",
                title: "Escalar Albino",
                text: "Elegante, luminoso y perfecto para acuarios de exhibición.",
              },
              {
                img: "/full-black.jpg",
                title: "Escalar Full Black",
                text: "Negro profundo y uniforme, ideal para proyectos premium.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f4f8fb",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.18)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "24px" }}>
                  <h3 style={{ color: "#0a3d62", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p>{item.text}</p>

                  <a
                    href="https://wa.me/573208880555"
                    target="_blank"
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      color: "#1e6091",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Consultar disponibilidad →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENVIOS ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #eef4f8 0%, #d9eaf7 100%)",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "18px auto",
            fontSize: "1.05rem",
          }}
        >
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
          padding: "26px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>
    </div>
  );
}
