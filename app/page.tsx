"use client";
import { useState } from "react";

/* ================= FAQ ITEM ================= */
function FaqItem({ title, children }: { title: string; children: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#3b73d1",
          color: "#ffffff",
          padding: "16px 22px",
          borderRadius: "10px",
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
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          ❯
        </span>
      </div>

      {open && (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "18px 22px",
            borderRadius: "0 0 10px 10px",
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
          backgroundColor: "#ffffff",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "3px solid #1e6091",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src="/logo-angelfish.png" alt="Logo" style={{ height: "60px" }} />
          <strong style={{ color: "#0a3d62", fontSize: "1.3rem" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "10px 22px",
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
            "linear-gradient(135deg, #0a3d62, #1e6091, #3fa9f5)",
          color: "#ffffff",
          padding: "110px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.8rem" }}>Escalares Premium en Colombia</h1>
        <p style={{ fontSize: "1.2rem" }}>
          📍 Mosquera – Cundinamarca
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#2f5ec4" }}>
            Preguntas Frecuentes
          </h2>

          <FaqItem title="⏱️ Tiempos de entrega y envío">
            Envíos a nivel nacional. Entrega entre <strong>24 y 48 horas</strong>
            según ciudad y transportadora.
          </FaqItem>

          <FaqItem title="🚚 Garantía en el transporte">
            Los peces viajan con oxígeno, empaque térmico y monitoreo.
          </FaqItem>

          <FaqItem title="📍 ¿Tienen punto físico?">
            Estamos ubicados en <strong>Mosquera, Cundinamarca</strong>.
            Atención únicamente con cita previa.
          </FaqItem>
        </div>
      </section>

      {/* ================= ENVIOS ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #eef4f8, #d9eaf7)",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a toda Colombia</h2>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Envíos seguros y coordinados según clima y ciudad.
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
