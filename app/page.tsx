"use client";
import { useState } from "react";

export default function Home() {
  return (
    <h1 style={{ color: "red", fontSize: "50px" }}>
      SI VES ESTO, ESTE ES EL ARCHIVO CORRECTO
    </h1>
  );
}


/* ================= FAQ ITEM ================= */
function FaqItem({ title, children }) {
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
            padding: "18px 22px",
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
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f2f4f7" }}>
      
      {/* ================= FAQ ================= */}
      <section style={{ padding: "70px 20px" }}>
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
            Preguntas Frecuentes
          </h2>

          <FaqItem title="⏱️ Tiempos de entrega y forma de envío">
            Realizamos envíos a nivel nacional dentro de Colombia. El tiempo de
            entrega depende de la ciudad y la transportadora, generalmente entre{" "}
            <strong>24 y 48 horas</strong> después del despacho. Cada envío se
            coordina previamente para garantizar la seguridad de los peces.
          </FaqItem>

          <FaqItem title="🚚 Envío de peces y garantía">
            Los peces se envían con empaque especializado, oxígeno y aislamiento
            térmico. Garantizamos que los peces salen vivos y en óptimas
            condiciones. Cualquier novedad debe reportarse inmediatamente al
            momento de recibir el envío.
          </FaqItem>

          <FaqItem title="📍 ¿Tienen punto físico?">
            Estamos ubicados en <strong>Mosquera, Cundinamarca</strong>.
            Angelfish Discus es un <strong>hobby especializado</strong> enfocado
            en la cría responsable de escalares. Las visitas se realizan
            únicamente con cita previa.
          </FaqItem>
        </div>
      </section>

    </div>
  );
}
