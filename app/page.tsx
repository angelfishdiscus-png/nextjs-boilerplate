"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sectionStyle = {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 0.8s ease",
  };

  const visibleStyle = `
    .visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.18);
    }
  `;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933" }}>
      <style>{visibleStyle}</style>

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
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src="/logo-angelfish.png"
            alt="Angelfish Discus"
            style={{
              height: "58px",
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.2))",
            }}
          />
          <strong style={{ fontSize: "1.25rem", color: "#0a3d62" }}>
            Angelfish Discus
          </strong>
        </div>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            padding: "10px 20px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        style={{
          ...sectionStyle,
          background: "linear-gradient(135deg, #0a3d62, #1e6091)",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Escalares Premium en Colombia
        </h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.25rem" }}>
          Criadores especializados en peces ángel con genética seleccionada,
          excelente salud y asesoría profesional real.
        </p>
        <p style={{ marginTop: "18px", opacity: 0.9 }}>
          📍 Mosquera – Cundinamarca, Colombia
        </p>
      </section>

      {/* VARIEDADES */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        style={{
          ...sectionStyle,
          backgroundColor: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2
            style={{
              color: "#0a3d62",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Variedades Destacadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "35px",
            }}
          >
            {[
              {
                img: "/red-devil.jpg",
                title: "Escalar Red Devil",
                text: "Variedad premium de intenso color rojo, genética seleccionada.",
              },
              {
                img: "/albino.jpg",
                title: "Escalar Albino",
                text: "Elegante, exclusivo y llamativo.",
              },
              {
                img: "/full-black.jpg",
                title: "Escalar Full Black",
                text: "Negro profundo para acuarios de exhibición.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
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

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0a3d62",
          color: "white",
          textAlign: "center",
          padding: "22px",
        }}
      >
        © {new Date().getFullYear()} Angelfish Discus · Mosquera, Colombia
      </footer>
    </div>
  );
}
