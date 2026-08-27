import "./App.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="cv-container">
      <nav className="nav-bar">
        <Link to={"/home"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contact</Link>
      </nav>

      <hr style={{ borderColor: "var(--border-color", margin: "20px 0" }} />

      {/* dynamic content based on current route */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
