export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0b1c26" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a3d62, #1abc9c)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <img
          src="/next.svg"
          alt="Angelfish Discus"
          style={{ width: "260px", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
          Angelfish Discus
        </h1>

        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          Criadero especializado en peces ángel de alta calidad.  
          Escalares saludables, bien formados y con asesoría profesional.
        </p>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          📲 Cotizar por WhatsApp
        </a>
      </section>

      {/* VARIEDADES */}
      <section style={{ padding: "60px 20px", background: "#f5faff" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
          Escalares Disponibles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "40px auto",
          }}
        >
          {[
            "Red Devil",
            "Red Devil Albino",
            "Full Black Blushing",
            "Albino",
            "Búlgaro Avatar",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#1abc9c" }}>{item}</h3>
              <p>Calidad premium · Crianza controlada</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
          ¿Por qué Angelfish Discus?
        </h2>

        <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li>✔️ Peces sanos y bien adaptados</li>
          <li>✔️ Alimentación de alta calidad</li>
          <li>✔️ Asesoría antes y después de la compra</li>
          <li>✔️ Ubicados en Mosquera – Cundinamarca</li>
          <li>✔️ Envíos responsables (según condiciones)</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          background: "#0b1c26",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>¿Buscas escalares de calidad real?</h2>
        <p>Escríbenos y recibe asesoría directa del criadero.</p>

        <a
          href="https://wa.me/573208880555"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 30px",
            backgroundColor: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📲 Hablar por WhatsApp
        </a>
      </section>
    </main>
  );
}
