"use client";
function NotFound() {
  return (
    <main style={{ textAlign: "center" }}>
      <section
        className="p404"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <a href="/">
          <h1 style={{ border: "1px solid", padding: "2rem" }}>
            La pagina che stai cercando non esiste!
          </h1>
        </a>
      </section>
    </main>
  );
}

export default NotFound;
