"use client";
import { useState } from "react";

/* ================= FAQ ITEM ================= */
function FaqItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#1e6091",
          color: "#ffffff",
          padding: "16px 20px",
          borderRadius: "12px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
        }}
      >
        {title}
        <span
          style={{
            fontSize: "1.4rem",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "0.25s",
          }}
        >
          ❯
        </span>
      </div>

      {open && (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "18px 20px",
            borderRadius: "0 0 12px 12px",
            lineHeight: "1.7",
            border: "1px solid #e5e7eb",
            borderTop: "none",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ================= HOME ================= */
export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f8fb" }}>
      
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src="/logo-angelfish.png" alt="Logo" style={{ height: "58px" }} />
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
            color: "#fff",
            borderRadius: "30px",
            fontWeight: "bold",
            textDecoration: "none",
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
        <h1 style={{ fontSize: "3rem" }}>Escalares Premium en Colombia</h1>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "1.2rem" }}>
          Criadores especializados en peces ángel con genética seleccionada,
          excelente salud y asesoría profesional.
        </p>
        <p>📍 Mosquera – Cundinamarca</p>
      </section>

      {/* ================= QUIENES SOMOS ================= */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>🐠 ¿Quiénes somos?</h2>
        <p style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
          En <strong>Angelfish Discus</strong> nos dedicamos a la cría responsable
          de peces ornamentales, especializados en <strong>escalares</strong> de
          alta calidad y próximamente <strong>discos</strong>.
        </p>
        <p style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
          Trabajamos con parámetros estables, alimentación especializada y
          manejo profesional, garantizando peces sanos y fuertes.
        </p>
      </section>

      {/* ================= BULGARO BLACK ================= */}
      <section style={{ padding: "90px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            Bulgáro Black
          </h2>
          <p style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}>
            Variedad exclusiva de escalar negro profundo, ideal para acuarios
            premium.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            <img src="/bulgaro-black-1.png" style={{ width: "100%", borderRadius: "18px" }} />
            <img src="/bulgaro-black-2.png" style={{ width: "100%", borderRadius: "18px" }} />
          </div>
        </div>
      </section>

      {/* ================= VARIEDADES ================= */}
      <section style={{ padding: "90px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            Variedades Destacadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {[
              { img: "/red-devil.jpg", title: "Escalar Red Devil" },
              { img: "/albino.jpg", title: "Escalar Albino" },
              { img: "/full-black.jpg", title: "Escalar Full Black" },
            ].map((v, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
              >
                <img src={v.img} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "20px" }}>
                  <h3>{v.title}</h3>
                  <a
                    href="https://wa.me/573208880555"
                    target="_blank"
                    style={{ fontWeight: "bold", color: "#1e6091" }}
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ backgroundColor: "#e6f0f8", padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            Preguntas Frecuentes
          </h2>

          <FaqItem title="⏱️ Tiempos de entrega">
            Entregas entre <strong>24 y 48 horas</strong> según ciudad y
            transportadora.
          </FaqItem>

          <FaqItem title="🚚 Garantía de envío">
            Los peces viajan con oxígeno y aislamiento térmico.
          </FaqItem>

          <FaqItem title="📍 Punto físico">
            Mosquera, Cundinamarca. Visitas solo con cita previa.
          </FaqItem>
        </div>
      </section>

      {/* ================= ENVIOS ================= */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p>Envíos seguros a toda Colombia.</p>
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
