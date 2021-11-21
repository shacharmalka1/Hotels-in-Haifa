import Hotels from "./routes/Hotels";

export default function App() {
  return (
    <div>
      <h1>מלונות בחיפה</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Hotels />
      </nav>
    </div>
  );
}
