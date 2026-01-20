"use client";
import { useState } from "react";

/* ====== AQUÍ VA FaqItem ====== */
function FaqItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#3b73d1",
          color: "#ffffff",
          padding: "16px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          fontSize: "1.05rem",
        }}
      >
        {title}
        <span
          style={{
            fontSize: "1.4rem",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
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
            borderRadius: "0 0 10px 10px",
            color: "#111827",
            lineHeight: "1.7",
            fontSize: "1rem",
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
            background: "#25D366",
            color: "#fff",
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
        <h1>Escalares Premium en Colombia</h1>
        <p>📍 Mosquera – Cundinamarca</p>
      </section>

      {/* ================= FAQ ================= */}
      <section
        style={{
          backgroundColor: "#f2f4f7",
          padding: "70px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#2f5ec4",
              fontSize: "2.2rem",
              fontWeight: "800",
              marginBottom: "35px",
              textTransform: "uppercase",
            }}
          >
            Preguntas Frecuentes ?
          </h2>

          <FaqItem title="⏱️ Tiempos de entrega y forma de envío">
            Realizamos envíos a nivel nacional dentro de Colombia. El tiempo de
            entrega depende de la ciudad y la transportadora, generalmente entre{" "}
            <strong>24 y 48 horas</strong> después del despacho.
          </FaqItem>

          <FaqItem title="🚚 Envío de peces y garantía">
            Los peces se envían con empaque especializado, oxígeno y aislamiento
            térmico. Garantizamos que los peces salen vivos y en óptimas
            condiciones.
          </FaqItem>

          <FaqItem title="📍 ¿Tienen punto físico?">
            Estamos ubicados en <strong>Mosquera, Cundinamarca</strong>.
            Las visitas se realizan únicamente con cita previa.
          </FaqItem>
        </div>
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
