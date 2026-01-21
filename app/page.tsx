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
        Criadores especializados en peces ángel con genética seleccionada,
        excelente salud y asesoría profesional real.
      </p>
      <p>📍 Mosquera – Cundinamarca</p>
    </section>
  );
}

/* ================= VARIEDADES ================= */
function Variedades() {
  const peces = [
    { img: "/red-devil.jpg", nombre: "Escalar Red Devil" },
    { img: "/albino.jpg", nombre: "Escalar Albino" },
    { img: "/full-black.jpg", nombre: "Escalar Full Black" },
  ];

  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#f4f8fb" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#0a3d62",
          fontSize: "2.4rem",
          marginBottom: "50px",
        }}
      >
        Variedades Disponibles
      </h2>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}
      >
        {peces.map((pez, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 14px 35px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={pez.img}
              alt={pez.nombre}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "22px", textAlign: "center" }}>
              <h3 style={{ color: "#1e6091", marginBottom: "16px" }}>
                {pez.nombre}
              </h3>

              <a
                href="https://wa.me/573208880555"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  backgroundColor: "#1e6091",
                  color: "#ffffff",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= QUIÉNES SOMOS ================= */
function AboutCards() {
  const cards = [
    {
      icon: "🐠",
      title: "Cría Responsable",
      text: "Cría ética de escalares premium, priorizando el bienestar animal.",
    },
    {
      icon: "🧬",
      title: "Genética Seleccionada",
      text: "Líneas de alta calidad, colores definidos y peces bien conformados.",
    },
    {
      icon: "🏆",
      title: "Manejo Profesional",
      text: "Parámetros estables y alimentación especializada.",
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

/* ================= FAQ ================= */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      title: "⏱️ Tiempos de entrega",
      text: (
        <>
          Realizamos envíos a nivel nacional dentro de Colombia. El tiempo de
          entrega depende de la ciudad y la transportadora, generalmente entre{" "}
          <strong>24 y 48 horas</strong> después del despacho. Cada envío se
          coordina previamente para garantizar la seguridad de los peces.
        </>
      ),
    },
    {
      title: "🚚 Garantía de envío",
      text: (
        <>
          Los peces se envían con empaque especializado, oxígeno y aislamiento
          térmico. Garantizamos que los peces salen vivos y en óptimas
          condiciones. Cualquier novedad debe reportarse inmediatamente al
          recibir el envío.
        </>
      ),
    },
    {
      title: "📍 Punto físico",
      text: (
        <>
          Estamos ubicados en <strong>Mosquera, Cundinamarca</strong>. Angelfish
          Discus es un <strong>hobby especializado</strong> enfocado en la cría
          responsable de escalares. Visitas solo con cita previa.
        </>
      ),
    },
  ];

  return (
    <section style={{ backgroundColor: "#e6f0f8", padding: "90px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
          Preguntas Frecuentes
        </h2>

        {items.map((item, i) => (
          <div key={i} style={{ marginTop: "20px" }}>
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                backgroundColor: "#1e6091",
                color: "#fff",
                padding: "18px 22px",
                borderRadius: "14px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {item.title}
            </div>

            {open === i && (
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "0 0 14px 14px",
                  lineHeight: "1.7",
                }}
              >
                {item.text}
              </div>
            )}
          </div>
        ))}
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
      <Variedades />
      <AboutCards />
      <FAQ />
      <Footer />
    </div>
  );
}
