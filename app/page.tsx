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
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo-angelfish.png"
            alt="Angelfish Discus"
            style={{
              height: "55px",
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
            backgroundColor: "#f97316",
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
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
          Escalares Premium en Colombia
        </h1>

        <p style={{ fontSize: "1.2rem", maxWidth: "750px", margin: "0 auto" }}>
          Nuestra meta es entregar la mejor variedad de peces ángel (escalares) y discos,
          con genética seleccionada, excelente salud y asesoría profesional.
        </p>

        <p style={{ marginTop: "15px", opacity: 0.9 }}>
          📍 Mosquera · Cerca de Bogotá
        </p>
      </section>

      {/* GALERÍA / VARIEDADES */}
      <section style={{ padding: "70px 20px", backgroundColor: "#f8fafc" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62", fontSize: "2.2rem" }}>
          Variedades Destacadas
        </h2>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >

          {/* CARD */}
          {[
            {
              img: "/red-devil.jpg",
              title: "Escalar Red Devil",
              text: "Variedad premium de color intenso, crianza selectiva y alta demanda.",
            },
            {
              img: "/albino.jpg",
              title: "Escalar Albino",
              text: "Ejemplares elegantes, muy exclusivos y de gran impacto visual.",
            },
            {
              img: "/full-black.jpg",
              title: "Escalar Full Black",
              text: "Negro profundo, ideal para acuarios de exhibición.",
            },
          ].map((fish, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.3s",
              }}
            >
              <img
                src={fish.img}
                alt={fish.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3 style={{ color: "#0a3d62" }}>{fish.title}</h3>
                <p style={{ fontSize: "0.95rem", marginBottom: "15px" }}>
                  {fish.text}
                </p>

                <a
                  href="https://wa.me/573208880555"
                  target="_blank"
                  style={{
                    display: "inline-block",
                    padding: "10px 16px",
                    backgroundColor: "#0a3d62",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>
    </div>
  );
}
