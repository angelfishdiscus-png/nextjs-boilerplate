"use client";
import { useState } from "react";

/* ================= FAQ ITEM ================= */
function FaqItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#1e6091",
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
            padding: "18px 22px",
            borderRadius: "0 0 10px 10px",
            border: "1px solid #e5e7eb",
            borderTop: "none",
            lineHeight: "1.7",
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
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933" }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/images/logo-angelfish.png"
            alt="Angelfish Discus"
            style={{ height: "56px" }}
          />
          <strong style={{ fontSize: "1.3rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "#ffffff",
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
        <h1 style={{ fontSize: "2.8rem" }}>
          Escalares Premium en Colombia
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "12px" }}>
          Genética seleccionada · Crianza responsable
        </p>
        <p style={{ marginTop: "10px", opacity: 0.9 }}>
          📍 Mosquera – Cundinamarca
        </p>
      </section>

      {/* ================= VARIEDADES ================= */}
      <section style={{ padding: "90px 20px", backgroundColor: "#f4f8fb" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            Variedades Destacadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "36px",
              marginTop: "40px",
            }}
          >
            {[
              {
                img: "/images/red-devil.jpg",
                title: "Escalar Red Devil",
                text: "Color rojo intenso y genética premium.",
              },
              {
                img: "/images/albino.jpg",
                title: "Escalar Albino",
                text: "Elegante, luminoso y muy solicitado.",
              },
              {
                img: "/images/full-black.jpg",
                title: "Escalar Full Black",
                text: "Negro profundo y uniforme.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "22px" }}>
                  <h3 style={{ color: "#0a3d62" }}>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BULGARO BLACK ================= */}
      <section style={{ padding: "90px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ color: "#0a3d62", fontSize: "2.5rem" }}>
            Bulgáro Black
          </h2>
          <p style={{ maxWidth: "800px", margin: "20px auto" }}>
            Variedad exclusiva de escalar negro profundo, criada bajo
            parámetros controlados y excelente salud.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            <img
              src="/images/bulgaro-black-1.png"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
              }}
            />
            <img
              src="/images/bulgaro-black-2.png"
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ padding: "80px 20px", backgroundColor: "#f2f4f7" }}>
        <div style={{ maxWidth: "900px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
            Preguntas Frecuentes
          </h2>

          <FaqItem title="⏱️ Tiempos de entrega">
            Envíos a nivel nacional, normalmente entre 24 y 48 horas.
          </FaqItem>

          <FaqItem title="🚚 Garantía de envío">
            Los peces se despachan vivos, con empaque profesional.
          </FaqItem>

          <FaqItem title="📍 Punto físico">
            Estamos ubicados en Mosquera, visitas solo con cita previa.
          </FaqItem>
        </div>
      </section>

      {/* ================= ENVIOS ================= */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #eef4f8 0%, #d9eaf7 100%)",
        }}
      >
        <h2 style={{ color: "#0a3d62" }}>🚚 Envíos a nivel nacional</h2>
        <p>
          Realizamos envíos seguros a toda Colombia según ciudad y cantidad.
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
