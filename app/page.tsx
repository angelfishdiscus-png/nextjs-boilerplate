function ProductTabs() {
  const [activeTab, setActiveTab] = useState("especificaciones");

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        marginTop: "30px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* BOTONES */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {["descripcion", "especificaciones", "resenas"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                activeTab === tab ? "#1e6091" : "#f4f8fb",
              color:
                activeTab === tab ? "#ffffff" : "#1e293b",
              fontWeight: "bold",
            }}
          >
            {tab === "descripcion"
              ? "Descripción"
              : tab === "especificaciones"
              ? "Especificaciones"
              : "Reseñas"}
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      {activeTab === "descripcion" && (
        <p>
          Escalar negro premium, elegante y exclusivo. Criado con genética
          seleccionada y cuidado profesional.
        </p>
      )}

      {activeTab === "especificaciones" && (
        <div>
          <p>Tamaño: 10–12 cm</p>
          <p>Peso: 50–60 g</p>
          <p>Alimentación: escamas y alimentos vivos</p>
          <p>Origen: Colombia</p>
        </div>
      )}

      {activeTab === "resenas" && (
        <div>
          <p>⭐ Excelente calidad y muy bien empacado</p>
          <p>⭐ Llegó sano y hermoso</p>
        </div>
      )}
    </div>
  );
}
<section style={{ padding: "90px 20px" }}>
  <h2 style={{ textAlign: "center", color: "#0a3d62" }}>
    Bulgáro Black
  </h2>
  <p style={{ textAlign: "center" }}>
    Escalar negro premium, elegante y exclusivo.
  </p>

  <ProductTabs />
</section>

