"use client";
import { useState } from "react";

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
            style={{ height: "58px" }}
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
        <h1 style={{ fontSize: "3.2rem" }}>
          Escalares Premium en Colombia
        </h1>
        <p style={{ maxWidth: "820px", margin: "20px auto" }}>
          Criadores especializados en peces ángel con genética seleccionada.
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #f4f8fb 0%, #e6f0f8 100%)",
          padding: "90px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#0a3d62",
              fontSize: "2.4rem",
              marginBottom: "50px",
            }}
          >
            Preguntas Frecuentes
          </h2>

          {[
            {
              title: "⏱️ Tiempos de entrega y forma de envío",
              content:
                "Envíos nacionales en Colombia. Entrega entre 24 y 48 horas.",
            },
            {
              title: "🚚 Envío de peces y garantía",
              content:
                "Empaque profesional con oxígeno y aislamiento térmico.",
            },
            {
              title: "📍 ¿Tienen punto físico?",
              content:
                "Estamos en Mosquera, Cundinamarca. Visitas con cita previa.",
            },
          ].map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </section>

      {/* ================= BULGARO BLACK ================= */}
      <section style={{ padding: "90px 20px" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
          Bulgáro Black
        </h2>
        <p style={{ textAlign: "center" }}>
          Escalar negro premium, elegante y exclusivo.
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
        © {new Date().getFullYear()} Angelfish Discus
      </footer>
    </div>
  );
}

/* ================= COMPONENTE FAQ ================= */
function FaqItem({ item }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "22px 26px",
        marginBottom: "20px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0, color: "#1e6091" }}>{item.title}</h3>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          ⌄
        </span>
      </div>

      {open && (
        <p style={{ marginTop: "15px", color: "#334155" }}>
          {item.content}
        </p>
      )}
    </div>
  );
}
