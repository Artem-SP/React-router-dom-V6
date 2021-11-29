import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <h2>Home page</h2>
    </div>
  );
}

export default App;
