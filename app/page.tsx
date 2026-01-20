"use client";
import { useState } from "react";

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

          <FaqItem title="📍 ¿Tienen punto físico?
      </h3>
      <p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#334155" }}>
        Estamos ubicados en <strong>Mosquera, Cundinamarca</strong>.
        Angelfish Discus es un <strong>hobby especializado</strong> enfocado
        en la cría responsable de escalares.
        Las visitas se realizan únicamente con cita previa.
      </p>
    </div>
  </div>
</section>
{/* ================= BULGARO BLACK ================= */}
<section
  style={{
    background: "linear-gradient(135deg, #ffffff 0%, #f4f8fb 100%)",
    padding: "90px 20px",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "auto" }}>
    <h2
      style={{
        textAlign: "center",
        color: "#0a3d62",
        fontSize: "2.6rem",
        marginBottom: "20px",
      }}
    >
      Bulgáro Black
    </h2>

    <p
      style={{
        textAlign: "center",
        maxWidth: "850px",
        margin: "0 auto 50px",
        fontSize: "1.15rem",
        lineHeight: "1.7",
        color: "#334155",
      }}
    >
      Variedad exclusiva de escalar negro con tonalidad profunda y elegante.
      Criados bajo parámetros estables, excelente salud y gran presencia visual,
      ideales para acuarios de exhibición y proyectos premium.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "40px",
      }}
    >
      <img
        src="/bulgaro-black-1.png"
        alt="Bulgáro Black Angelfish"
        style={{
          width: "100%",
          height: "380px",
          objectFit: "cover",
          borderRadius: "18px",
          boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
        }}
      />

      <img
        src="/bulgaro-black-2.png"
        alt="Bulgáro Black Angelfish"
        style={{
          width: "100%",
          height: "380px",
          objectFit: "cover",
          borderRadius: "18px",
          boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
        }}
      />
    </div>

    <div style={{ textAlign: "center", marginTop: "45px" }}>
      <a
        href="https://wa.me/573208880555"
        target="_blank"
        style={{
          display: "inline-block",
          padding: "14px 30px",
          background: "linear-gradient(135deg, #1e6091, #0a3d62)",
          color: "#ffffff",
          borderRadius: "30px",
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        }}
      >
        Consultar disponibilidad
      </a>
    </div>
  </div>
</section>

      {/* ================= VARIEDADES ================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "90px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2
            style={{
              color: "#0a3d62",
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            Variedades Destacadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "38px",
            }}
          >
            {[
              {
                img: "/red-devil.jpg",
                title: "Escalar Red Devil",
                text: "Color rojo intenso, genética seleccionada y gran demanda.",
              },
              {
                img: "/albino.jpg",
                title: "Escalar Albino",
                text: "Elegante, luminoso y perfecto para acuarios de exhibición.",
              },
              {
                img: "/full-black.jpg",
                title: "Escalar Full Black",
                text: "Negro profundo y uniforme, ideal para proyectos premium.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#f4f8fb",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.18)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "24px" }}>
                  <h3 style={{ color: "#0a3d62", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p>{item.text}</p>

                  <a
                    href="https://wa.me/573208880555"
                    target="_blank"
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      color: "#1e6091",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Consultar disponibilidad →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

……………………………………………….

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
