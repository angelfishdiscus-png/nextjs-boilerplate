"use client";
import { useState } from "react";

/* ================= HEADER ================= */
function Header() {
  return (
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
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
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
        Cría responsable, genética seleccionada y peces de alta calidad.
      </p>
      <p>📍 Mosquera – Cundinamarca</p>
    </section>
  );
}

/* ================= QUIENES SOMOS (CARDS) ================= */
function AboutCards() {
  const cards = [
    {
      icon: "🐠",
      title: "Cría Responsable",
      text: "Nos dedicamos a la cría ética y controlada de escalares premium, priorizando el bienestar animal.",
    },
    {
      icon: "🧬",
      title: "Genética Seleccionada",
      text: "Trabajamos con líneas de alta calidad, colores definidos y peces bien conformados.",
    },
    {
      icon: "🏆",
      title: "Manejo Profesional",
      text: "Parámetros estables, alimentación especializada y peces fuertes y adaptados.",
    },
  ];

  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#0a3d62",
          fontSize: "2.4rem",
          marginBottom: "50px",
        }}
      >
        🐠 ¿Quiénes somos?
      </h2>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              padding: "36px 28px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "18px" }}>
              {c.icon}
            </div>
            <h3 style={{ color: "#1e6091", marginBottom: "14px" }}>
              {c.title}
            </h3>
            <p style={{ lineHeight: "1.7", color: "#334155" }}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= FAQ ITEM PREMIUM ================= */
function FaqItem({ title, children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#1e6091",
          color: "#ffffff",
          padding: "18px 22px",
          borderRadius: "14px",
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
            transition: "0.3s ease",
          }}
        >
          ❯
        </span>
      </div>

      <div
        style={{
          maxHeight: open ? "300px" : "0",
          overflow: "hidden",
          transition: "0.35s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "0 0 14px 14px",
            lineHeight: "1.7",
            border: "1px solid #e5e7eb",
            borderTop: "none",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ================= FAQ ================= */
function FAQ() {
  return (
    <section style={{ backgroundColor: "#e6f0f8", padding: "90px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
          Preguntas Frecuentes
        </h2>

        <FaqItem title="⏱️ Tiempos de entrega y forma de envío">
          Envíos a nivel nacional en Colombia. Entregas entre <strong>24 y 48 horas</strong>,
          coordinadas previamente para garantizar la seguridad de los peces.
        </FaqItem>

        <FaqItem title="🚚 Envío de peces y garantía">
          Empaque profesional con oxígeno y aislamiento térmico. Garantizamos
          peces vivos y en óptimas condiciones al despacho.
        </FaqItem>

        <FaqItem title="📍 ¿Tienen punto físico?">
          Estamos ubicados en Mosquera, Cundinamarca. Visitas únicamente con cita previa.
        </FaqItem>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
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
  );
}

/* ================= PAGE ================= */
export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f8fb" }}>
      <Header />
      <Hero />
      <AboutCards />
      <FAQ />
      <Footer />
    </div>
  );
}
