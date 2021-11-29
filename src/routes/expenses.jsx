import { Link } from "react-router-dom";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem
        ut consectetur aspernatur officia dolor ea quidem cumque dolorum,
        ducimus earum porro voluptatibus inventore aliquam illo explicabo
        nostrum id fuga?
      </p>
      <Link to="/">Home</Link>
      {/* <Route path="/" element={<App />}> */}
    </main>
  );
}
