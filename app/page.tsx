"use client";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933", backgroundColor: "#ffffff" }}>

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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo-angelfish.png" alt="Angelfish Discus" style={{ height: "55px" }} />
          <strong style={{ color: "#0a3d62" }}>Angelfish Discus</strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            padding: "10px 18px",
            backgroundColor: "#25D366",
            color: "#fff",
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
        <h1 style={{ fontSize: "3rem" }}>Escalares Premium en Colombia</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Criadores especializados en peces ángel con genética seleccionada,
          excelente salud y asesoría profesional.
        </p>
        <p>📍 Mosquera – Cundinamarca</p>
      </section>

      {/* BÚLGARO BLACK */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            🖤 Escalar Búlgaro Black
          </h2>

          <p style={{ textAlign: "center", marginBottom: "50px" }}>
            Variedad premium de color negro intenso, genética seleccionada y
            crianza profesional en Colombia.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <img
              src="/bulgaro-black-1.png"
              alt="Búlgaro Black adulto"
              style={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              }}
            />

            <div style={{ textAlign: "center" }}>
              <img
                src="/bulgaro-black-2.png"
                alt="Búlgaro Black juvenil"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  marginBottom: "25px",
                }}
              />

              <a
                href="https://wa.me/573208880555"
                target="_blank"
                style={{
                  padding: "14px 32px",
                  backgroundColor: "#000",
                  color: "#fff",
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

      {/* FOOTER */}
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
